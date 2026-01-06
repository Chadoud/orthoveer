/**
 * Google Consent Mode v2 implementation.
 * Manages consent state for Google Analytics and advertising features.
 */

import type { GAConsentConfig, GAConsentState } from "../types";
import { CONSENT_UPDATE_WAIT } from "../config";
import { getTrackingLogger } from "../logger";
import { createConsentModeError } from "../errors";

/**
 * Create a consent configuration object.
 * Single source of truth for consent config creation.
 *
 * @param analyticsGranted - Whether analytics consent is granted
 * @param marketingGranted - Whether marketing consent is granted
 * @param waitForUpdate - Optional wait time in milliseconds
 * @returns Consent configuration object
 */
export function createConsentConfig(
  analyticsGranted: boolean,
  marketingGranted: boolean,
  waitForUpdate?: number
): GAConsentConfig {
  const toState = (granted: boolean): GAConsentState =>
    granted ? "granted" : "denied";

  const config: GAConsentConfig = {
    analytics_storage: toState(analyticsGranted),
    ad_storage: toState(marketingGranted),
    ad_user_data: toState(marketingGranted),
    ad_personalization: toState(marketingGranted),
  };

  if (waitForUpdate !== undefined) {
    config.wait_for_update = waitForUpdate;
  }

  return config;
}

/**
 * Initialize Google Consent Mode v2.
 * Should be called before GA loads to set consent state.
 * This ensures GA respects consent even if it loads before user interaction.
 *
 * @param analyticsGranted - Whether analytics consent is granted
 * @param marketingGranted - Whether marketing consent is granted
 * @param window - Browser window object (for dependency injection)
 */
export function initConsentMode(
  analyticsGranted: boolean,
  marketingGranted: boolean,
  window?: Window
): void {
  const win =
    window ?? (typeof globalThis !== "undefined" && globalThis.window ? globalThis.window : undefined);

  if (!win) {
    return;
  }

  const logger = getTrackingLogger();

  try {
    // Initialize dataLayer if not already initialized
    win.dataLayer = win.dataLayer || [];

    // Define gtag function if not already defined
    if (typeof win.gtag !== "function") {
      win.gtag = function (
        command: "config" | "event" | "js" | "set" | "consent",
        targetId: string | Date | "default" | "update",
        config?: Record<string, unknown>
      ) {
        // eslint-disable-next-line prefer-rest-params
        win.dataLayer?.push(arguments);
      };
    }

    // Create consent config with default wait time
    const config = createConsentConfig(
      analyticsGranted,
      marketingGranted,
      CONSENT_UPDATE_WAIT
    );

    // Set initial consent state (before GA loads)
    win.gtag("consent", "default", config);

    logger.debug?.("Consent mode initialized", {
      analytics: config.analytics_storage,
      marketing: config.ad_storage,
    });
  } catch (error) {
    const trackingError = createConsentModeError(error as Error);
    logger.error?.(trackingError.message, trackingError, {
      analyticsGranted,
      marketingGranted,
    });
  }
}

/**
 * Update Google Consent Mode v2 consent state.
 * Call this when user changes their consent preferences.
 *
 * @param analyticsGranted - Whether analytics consent is granted
 * @param marketingGranted - Whether marketing consent is granted
 * @param window - Browser window object (for dependency injection)
 */
export function updateConsentMode(
  analyticsGranted: boolean,
  marketingGranted: boolean,
  window?: Window
): void {
  const win =
    window ?? (typeof globalThis !== "undefined" && globalThis.window ? globalThis.window : undefined);

  if (!win || typeof win.gtag !== "function") {
    return;
  }

  const logger = getTrackingLogger();

  try {
    // Create consent config (no wait time for updates)
    const config = createConsentConfig(analyticsGranted, marketingGranted);

    // Update consent state
    win.gtag("consent", "update", config);

    logger.debug?.("Consent mode updated", {
      analytics: config.analytics_storage,
      marketing: config.ad_storage,
    });
  } catch (error) {
    const trackingError = createConsentModeError(error as Error);
    logger.error?.(trackingError.message, trackingError, {
      analyticsGranted,
      marketingGranted,
    });
  }
}

