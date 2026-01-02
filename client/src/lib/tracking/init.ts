/**
 * Tracking orchestration - SINGLE PLACE for consent checking and GA loading.
 * This is the ONLY file allowed to:
 * - Read consent
 * - Read environment
 * - Load analytics
 *
 * All other files must use the tracking functions from events.ts.
 */

import { getConsent } from "@/lib/consent/consent.store";
import { loadGA } from "./ga";

/**
 * Initialize tracking based on consent and environment.
 * Called:
 * - Once on app mount
 * - Once immediately after consent is set
 *
 * GA loads ONLY if:
 * - analytics consent === true
 * - environment === production
 * - VITE_GA_ID exists
 *
 * Never throws errors - all failures are silent.
 */
export function initTracking(): void {
  // Check consent
  const consent = getConsent();
  if (!consent || !consent.analytics) {
    // No analytics consent - do nothing
    return;
  }

  // Check environment - only load in production
  if (import.meta.env.MODE !== "production") {
    // Development mode - do not load GA
    return;
  }

  // Check for GA ID
  const gaId = import.meta.env.VITE_GA_ID;
  if (!gaId || typeof gaId !== "string") {
    // No GA ID configured - do nothing
    return;
  }

  // All conditions met - load GA
  loadGA(gaId);
}


