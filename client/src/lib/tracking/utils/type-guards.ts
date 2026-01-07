/**
 * Type guard utilities for runtime type checking.
 * Provides safe type narrowing for tracking system.
 */

import type { GAConsentState, GAWindow, GtagFunction } from "../types";

/**
 * Type guard for GAConsentState.
 *
 * @param value - Value to check
 * @returns true if value is a valid GAConsentState
 */
export function isGAConsentState(value: unknown): value is GAConsentState {
  return value === "granted" || value === "denied";
}

/**
 * Type guard for measurement ID format.
 * GA4 measurement IDs start with "G-" followed by 10 alphanumeric characters.
 *
 * @param value - Value to check
 * @returns true if value is a valid measurement ID format
 */
export function isMeasurementId(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  return /^G-[A-Z0-9]{10}$/i.test(value);
}

/**
 * Type guard for event name.
 * Event names must be non-empty strings and follow GA naming conventions.
 *
 * @param value - Value to check
 * @returns true if value is a valid event name
 */
export function isEventName(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  // Event names must be non-empty and not too long
  return value.length > 0 && value.length <= 40;
}

/**
 * Type guard for payload object.
 * Payloads must be plain objects (not arrays, null, etc.).
 *
 * @param value - Value to check
 * @returns true if value is a valid payload
 */
export function isPayload(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.getPrototypeOf(value) === Object.prototype
  );
}

/**
 * Type guard for window with gtag function.
 *
 * @param win - Window object to check
 * @returns true if window has gtag function
 */
export function hasGtag(
  win: Window | undefined
): win is GAWindow & { gtag: GtagFunction } {
  if (!win) {
    return false;
  }

  const gaWin = win as GAWindow;
  return typeof gaWin.gtag === "function";
}

/**
 * Type guard for valid path.
 * Paths must be strings starting with "/".
 *
 * @param value - Value to check
 * @returns true if value is a valid path
 */
export function isValidPath(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  return value.startsWith("/");
}
