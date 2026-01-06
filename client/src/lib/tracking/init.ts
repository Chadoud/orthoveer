/**
 * Tracking orchestration - SINGLE PLACE for consent checking and GA loading.
 * This is the ONLY file allowed to:
 * - Read consent
 * - Read environment
 * - Load analytics
 *
 * All other files must use the tracking functions from events.ts.
 *
 * Features:
 * - Race condition protection (prevents concurrent initialization)
 * - Debouncing for rapid consent changes
 * - State tracking to prevent unnecessary updates
 */

import { getConsent } from "@/lib/consent/consent.store";
import {
  loadGA,
  unloadGA,
  isGALoaded,
  initConsentMode,
  updateConsentMode,
  getTrackingLogger,
  getDependencies,
  flushEventQueue,
} from "./ga";
import { CONSENT_UPDATE_WAIT } from "./config";

/**
 * State tracking for initialization.
 */
let initPromise: Promise<void> | null = null;
let isInitializing = false;
let lastConsentState: {
  analytics: boolean;
  marketing: boolean;
} | null = null;
let debounceTimeoutId: ReturnType<typeof setTimeout> | null = null;

/**
 * Debounce delay for consent changes (ms).
 * Prevents rapid-fire initialization calls.
 */
const DEBOUNCE_DELAY = 100;

/**
 * Initialize Google Consent Mode.
 * Should be called as early as possible (before GA loads).
 * This ensures GA respects consent even if it loads before user interaction.
 *
 * Never throws errors - all failures are silent.
 */
export function initConsentModeEarly(): void {
  const { window: win } = getDependencies();

  if (!win || typeof win === "undefined") {
    return;
  }

  const logger = getTrackingLogger();

  try {
    // Get current consent (may be null on first load)
    const consent = getConsent();

    // Initialize consent mode with current state (or default to denied)
    initConsentMode(
      consent?.analytics === true,
      consent?.marketing === true,
      win
    );

    logger.debug?.("Consent mode initialized early", {
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
    });
  } catch (error) {
    const logger = getTrackingLogger();
    logger.error?.(
      "Failed to initialize consent mode early",
      error as Error
    );
  }
}

/**
 * Internal implementation of tracking initialization.
 * Separated for reuse in both immediate and debounced calls.
 */
async function initTrackingInternal(): Promise<void> {
  const logger = getTrackingLogger();

  try {
    // Check consent
    const consent = getConsent();
    const hasAnalyticsConsent = consent?.analytics === true;
    const hasMarketingConsent = consent?.marketing === true;

    // Check if consent state changed
    const consentChanged =
      !lastConsentState ||
      lastConsentState.analytics !== hasAnalyticsConsent ||
      lastConsentState.marketing !== hasMarketingConsent;

    // Update last consent state
    lastConsentState = {
      analytics: hasAnalyticsConsent,
      marketing: hasMarketingConsent,
    };

    // Update Consent Mode with current consent state
    const { window: win } = getDependencies();
    if (win) {
      updateConsentMode(hasAnalyticsConsent, hasMarketingConsent, win);
    }

    if (consentChanged) {
      logger.debug?.("Consent state changed", {
        analytics: hasAnalyticsConsent,
        marketing: hasMarketingConsent,
      });
    }

    // If GA is loaded but consent is revoked, unload it
    if (isGALoaded() && !hasAnalyticsConsent) {
      logger.debug?.("Unloading GA - consent revoked");
      unloadGA();
      return;
    }

    // If no consent, don't load
    if (!hasAnalyticsConsent) {
      logger.debug?.("Skipping GA load - no analytics consent");
      return;
    }

    // Check environment - only load in production
    if (import.meta.env.MODE !== "production") {
      logger.debug?.("Skipping GA load - not in production mode");
      return;
    }

    // Check for GA ID
    const gaId = import.meta.env.VITE_GA_ID;
    if (!gaId || typeof gaId !== "string") {
      logger.debug?.("Skipping GA load - no GA ID configured");
      return;
    }

    // All conditions met - load GA
    logger.debug?.("Loading GA", { measurementId: gaId });
    loadGA(gaId);

    // Flush any queued events after GA loads (with a small delay to ensure GA is ready)
    setTimeout(() => {
      flushEventQueue();
    }, 500);
  } catch (error) {
    const logger = getTrackingLogger();
    logger.error?.("Failed to initialize tracking", error as Error);
  } finally {
    isInitializing = false;
    initPromise = null;
  }
}

/**
 * Initialize tracking based on consent and environment.
 * Called:
 * - Once on app mount
 * - Once immediately after consent is set
 *
 * Features:
 * - Race condition protection (prevents concurrent initialization)
 * - Debouncing for rapid consent changes
 * - State tracking to prevent unnecessary updates
 *
 * Handles both loading and unloading GA based on consent state.
 * Also updates Consent Mode when consent changes.
 *
 * GA loads ONLY if:
 * - analytics consent === true
 * - environment === production
 * - VITE_GA_ID exists
 *
 * GA unloads if:
 * - GA is loaded but analytics consent === false
 *
 * Never throws errors - all failures are logged and handled gracefully.
 */
export function initTracking(): void {
  const logger = getTrackingLogger();

  // Clear any existing debounce timeout
  if (debounceTimeoutId) {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = null;
  }

  // If already initializing, return the existing promise
  if (isInitializing && initPromise) {
    logger.debug?.("Initialization already in progress, returning existing promise");
    return;
  }

  // Debounce rapid calls
  debounceTimeoutId = setTimeout(() => {
    debounceTimeoutId = null;

    // Start initialization
    isInitializing = true;
    initPromise = initTrackingInternal();

    // Return promise for callers that might want to await
    initPromise.catch((error) => {
      logger.error?.("Tracking initialization failed", error as Error);
    });
  }, DEBOUNCE_DELAY);
  }

/**
 * Reset initialization state (for testing).
 * Clears all state tracking and pending operations.
 */
export function resetInitState(): void {
  if (debounceTimeoutId) {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = null;
  }
  isInitializing = false;
  initPromise = null;
  lastConsentState = null;
}
