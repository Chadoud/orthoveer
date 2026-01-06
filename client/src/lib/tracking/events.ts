/**
 * Event tracking functions.
 * All functions are no-ops if analytics consent is missing or GA is not loaded.
 * Never throws errors - all errors are logged and handled gracefully.
 *
 * CONSENT REVOCATION BEHAVIOR:
 * If analytics consent changes from true → false:
 * - All track() and trackPageView() calls become no-ops immediately
 * - initTracking() detects revocation and calls unloadGA()
 * - unloadGA() removes GA script from DOM and deletes all GA cookies
 * - Google Consent Mode is updated to deny analytics storage
 * - No events are sent after revocation
 * - GDPR compliant - complete cleanup on consent revocation
 */

import { sanitizePath, getTrackingLogger } from "./ga";
import { performPreflightChecks, sendEventToGA } from "./events/core";

/**
 * Track a custom event.
 * No-op if analytics consent is missing or GA is not loaded.
 * Event names are validated and sanitized automatically.
 *
 * @param eventName - Event name in snake_case (e.g., "contact_form_submit")
 * @param payload - Optional event parameters
 */
export function track(
  eventName: string,
  payload?: Record<string, unknown>
): void {
  // Perform all pre-flight checks
  const preflight = performPreflightChecks({
    eventName,
    payload,
  });

  if (!preflight.shouldTrack) {
    return; // Already logged in preflight checks
  }

  // Send event with retry logic and error handling
  sendEventToGA(
    preflight.sanitizedEventName!,
    preflight.sanitizedPayload,
    {
      maxAttempts: 2,
      initialDelayMs: 100,
      maxDelayMs: 500,
      backoffMultiplier: 2,
    }
  );
}

/**
 * Track a page view.
 * No-op if analytics consent is missing or GA is not loaded.
 * Uses same retry logic and queue fallback as track().
 *
 * @param path - Page path (e.g., "/about", "/machines/maxtrim-t2")
 */
export function trackPageView(path: string): void {
  // Validate and sanitize path first
  const sanitizedPath = sanitizePath(path);
  if (!sanitizedPath) {
    const logger = getTrackingLogger();
    logger.warn?.("Invalid path provided, skipping page view", {
      original: path,
    });
    return;
  }

  // Log if path was changed
  if (sanitizedPath !== path) {
    const logger = getTrackingLogger();
    logger.debug?.("Path sanitized", {
      original: path,
      sanitized: sanitizedPath,
    });
  }

  // Build page view payload
  const pageTitle =
    typeof document !== "undefined" ? document.title : "";

  const payload: Record<string, unknown> = {
    page_path: sanitizedPath,
    page_title: pageTitle,
  };

  // Perform pre-flight checks (skip sampling, deduplication, rate limit for page views)
  const preflight = performPreflightChecks({
    eventName: "page_view",
    payload,
    skipSampling: true, // Don't sample page views
    skipDeduplication: false, // Still deduplicate page views
    skipRateLimit: false, // Still rate limit page views
  });

  if (!preflight.shouldTrack) {
    return; // Already logged in preflight checks
  }

  // Send page_view event with retry logic and error handling
  sendEventToGA(
    "page_view",
    payload,
    {
      maxAttempts: 2,
      initialDelayMs: 100,
      maxDelayMs: 500,
      backoffMultiplier: 2,
    }
  );
}
