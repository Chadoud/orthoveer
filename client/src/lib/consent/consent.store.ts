import type { CookieConsent } from "./consent.types";

const STORAGE_KEY = "orthoveer_cookie_consent";

/**
 * Get consent from localStorage.
 * Returns null if no consent exists or if storage is corrupted.
 * Never throws at runtime.
 */
export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored) as unknown;

    // Validate structure
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "necessary" in parsed &&
      "analytics" in parsed &&
      "marketing" in parsed &&
      parsed.necessary === true &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.marketing === "boolean"
    ) {
      return parsed as CookieConsent;
    }

    // Invalid structure, treat as no consent
    return null;
  } catch {
    // JSON parse error or other storage error
    // Treat as no consent, don't throw
    return null;
  }
}

/**
 * Persist consent to localStorage.
 * Never throws at runtime - silently fails if storage is unavailable.
 */
export function setConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    // Dispatch custom event to notify components of consent change
    window.dispatchEvent(new Event("consent-changed"));
  } catch {
    // Storage quota exceeded or other error
    // Silently fail, don't throw
  }
}

/**
 * Check if consent exists for a specific category.
 * Returns false if consent doesn't exist or category is invalid.
 */
export function hasConsent(category: keyof CookieConsent): boolean {
  const consent = getConsent();
  if (!consent) {
    return false;
  }

  return consent[category] === true;
}

/**
 * Clear consent from localStorage.
 * Used for testing and cookie settings reset.
 */
export function resetConsent(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
    // Dispatch custom event to notify components of consent reset
    window.dispatchEvent(new Event("consent-changed"));
  } catch {
    // Silently fail if storage is unavailable
  }
}



