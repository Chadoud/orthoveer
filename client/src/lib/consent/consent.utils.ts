import { getConsent } from "./consent.store";

/**
 * Check if consent banner should be shown.
 * Returns true if no consent exists (user hasn't made a choice yet).
 */
export function isConsentRequired(): boolean {
  return getConsent() === null;
}


