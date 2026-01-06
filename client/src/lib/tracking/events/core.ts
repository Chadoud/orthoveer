/**
 * Core event tracking logic.
 * Shared implementation for both track() and trackPageView().
 */

import { hasConsent } from "@/lib/consent/consent.store";
import {
  isGALoaded,
  getTrackingLogger,
  sanitizeEventName,
  sanitizePayload,
} from "../ga";
import { checkRateLimit } from "../utils/rate-limit";
import { isDuplicateEvent } from "../utils/deduplication";
import { getGtagWindow, isGtagAvailable } from "../utils/window";
import { shouldSampleEvent } from "../utils/sampling";
import { retryWithBackoff } from "../utils/retry";
import { queueEvent } from "../utils/event-queue";

/**
 * Tracking context for a single event.
 */
interface TrackingContext {
  eventName: string;
  payload?: Record<string, unknown>;
  skipSampling?: boolean;
  skipDeduplication?: boolean;
  skipRateLimit?: boolean;
}

/**
 * Result of pre-flight checks.
 */
interface PreflightResult {
  shouldTrack: boolean;
  reason?: string;
  sanitizedEventName?: string;
  sanitizedPayload?: Record<string, unknown> | null;
}

/**
 * Perform pre-flight checks for event tracking.
 * Returns whether event should be tracked and sanitized data.
 *
 * @param context - Tracking context
 * @returns Preflight result
 */
export function performPreflightChecks(
  context: TrackingContext
): PreflightResult {
  const { eventName, payload, skipSampling, skipDeduplication, skipRateLimit } =
    context;

  // Fast window check (no function calls)
  const win = getGtagWindow();
  if (!win || !isGtagAvailable(win)) {
    // Don't queue here - only queue when GA is loaded but send fails
    // This prevents queueing events that would never be valid (e.g., SSR)
    return {
      shouldTrack: false,
      reason: "window_or_gtag_unavailable",
    };
  }

  const logger = getTrackingLogger();

  // Check sampling (before any processing)
  if (!skipSampling && !shouldSampleEvent(eventName)) {
    return {
      shouldTrack: false,
      reason: "sampled_out",
    };
  }

  // Consent check (localStorage access - relatively fast)
  if (!hasConsent("analytics")) {
    logger.debug?.("Event tracking skipped - no analytics consent", {
      eventName,
    });
    return {
      shouldTrack: false,
      reason: "no_consent",
    };
  }

  // GA loaded check (function call)
  if (!isGALoaded()) {
    logger.debug?.("Event tracking skipped - GA not loaded", {
      eventName,
    });
    return {
      shouldTrack: false,
      reason: "ga_not_loaded",
    };
  }

  // Validation (most expensive - function calls, string operations)
  const sanitized = sanitizeEventName(eventName);
  if (!sanitized) {
    logger.warn?.("Invalid event name, skipping", {
      original: eventName,
    });
    return {
      shouldTrack: false,
      reason: "invalid_event_name",
    };
  }

  // Log if name was changed
  if (sanitized !== eventName) {
    logger.debug?.("Event name sanitized", {
      original: eventName,
      sanitized,
    });
  }

  // Check rate limit (array operations)
  if (!skipRateLimit && !checkRateLimit()) {
    logger.debug?.("Event rate limited, skipping", {
      eventName: sanitized,
    });
    return {
      shouldTrack: false,
      reason: "rate_limited",
    };
  }

  // Check for duplicates (hash + array operations)
  if (!skipDeduplication && isDuplicateEvent(sanitized, payload)) {
    return {
      shouldTrack: false,
      reason: "duplicate",
    };
  }

  // Sanitize payload (object iteration - expensive)
  const sanitizedPayload = sanitizePayload(payload);

  return {
    shouldTrack: true,
    sanitizedEventName: sanitized,
    sanitizedPayload,
  };
}

/**
 * Send event to GA with retry logic and error handling.
 * Note: This function is synchronous but retry logic is async.
 * Errors are caught and events are queued for later retry.
 *
 * @param eventName - Sanitized event name
 * @param payload - Sanitized payload
 * @param retryConfig - Optional retry configuration
 * @returns true if queued for sending, false if window/gtag unavailable
 */
export function sendEventToGA(
  eventName: string,
  payload?: Record<string, unknown> | null,
  retryConfig?: {
    maxAttempts?: number;
    initialDelayMs?: number;
    maxDelayMs?: number;
    backoffMultiplier?: number;
  }
): boolean {
  const win = getGtagWindow();
  if (!win || !isGtagAvailable(win)) {
    return false;
  }

  const logger = getTrackingLogger();

  const defaultRetryConfig = {
    maxAttempts: 2,
    initialDelayMs: 100,
    maxDelayMs: 500,
    backoffMultiplier: 2,
  };

  const config = { ...defaultRetryConfig, ...retryConfig };

  // Fire and forget - retry logic handles errors asynchronously
  // This prevents blocking the main thread
  retryWithBackoff(
    () => {
      win.gtag("event", eventName, payload || undefined);
    },
    config
  )
    .then(() => {
      logger.debug?.("Event tracked successfully", {
        eventName,
        hasPayload: !!payload,
        payloadKeys: payload ? Object.keys(payload).length : 0,
      });
    })
    .catch((error) => {
      // After retries failed, queue for later
      queueEvent(eventName, payload || undefined);
      logger.error?.(
        "Failed to track event after retries, queued for later",
        error as Error,
        {
          eventName,
          hasPayload: !!payload,
        }
      );
    });

  return true; // Return true to indicate event was queued for sending
}

