/**
 * Event tracking functions.
 * All functions are no-ops if analytics consent is missing or GA is not loaded.
 * Never throws errors.
 *
 * CONSENT REVOCATION BEHAVIOR:
 * If analytics consent changes from true → false:
 * - All track() and trackPageView() calls become no-ops immediately
 * - GA script is NOT unloaded (remains in DOM)
 * - GA cookies may persist (browser behavior)
 * - No events are sent after consent revocation
 */

import { hasConsent } from "@/lib/consent/consent.store";
import { isGALoaded } from "./ga";

/**
 * Track a custom event.
 * No-op if analytics consent is missing or GA is not loaded.
 *
 * @param eventName - Event name in snake_case (e.g., "contact_form_submit")
 * @param payload - Optional event parameters
 */
export function track(
  eventName: string,
  payload?: Record<string, unknown>
): void {
  // No-op if consent missing
  if (!hasConsent("analytics")) {
    return;
  }

  // No-op if GA not loaded
  if (!isGALoaded()) {
    return;
  }

  // No-op if gtag not available (defensive check)
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  // Send event
  window.gtag("event", eventName, payload);
}

/**
 * Track a page view.
 * No-op if analytics consent is missing or GA is not loaded.
 *
 * @param path - Page path (e.g., "/about", "/machines/maxtrim-t2")
 */
export function trackPageView(path: string): void {
  // No-op if consent missing
  if (!hasConsent("analytics")) {
    return;
  }

  // No-op if GA not loaded
  if (!isGALoaded()) {
    return;
  }

  // No-op if gtag not available (defensive check)
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  // Send page_view event
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: document.title,
  });
}

