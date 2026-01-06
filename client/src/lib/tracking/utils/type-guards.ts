/**
 * Type guard utilities for runtime type checking.
 * Provides safe type narrowing for tracking system.
 */

import type { GAConsentState } from "../types";

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
 * Type guard for valid measurement ID string.
 *
 * @param value - Value to check
 * @returns true if value is a valid measurement ID format
 */
export function isMeasurementId(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  // Basic format check (G-XXXXXXXXXX or UA-XXXXX-X)
  return /^(G-[A-Z0-9]+|UA-\d+-\d+)$/i.test(value.trim());
}

/**
 * Type guard for valid event name.
 *
 * @param value - Value to check
 * @returns true if value is a valid event name format
 */
export function isEventName(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }

  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > 40) {
    return false;
  }

  // Only alphanumeric, underscore, hyphen allowed
  return /^[a-zA-Z0-9_-]+$/.test(trimmed);
}

/**
 * Type guard for valid payload object.
 *
 * @param value - Value to check
 * @returns true if value is a valid payload
 */
export function isPayload(
  value: unknown
): value is Record<string, unknown> {
  if (!value || typeof value !== "object") {
    return false;
  }

  if (Array.isArray(value)) {
    return false;
  }

  return true;
}

/**
 * Type guard for window with gtag.
 *
 * @param win - Window object to check
 * @returns true if window has gtag function
 */
export function hasGtag(
  win: Window | undefined
): win is Window & { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void } {
  if (!win) {
    return false;
  }

  return typeof win.gtag === "function";
}

/**
 * Type guard for valid page path.
 *
 * @param path - Path to validate
 * @returns true if path is valid
 */
export function isValidPath(path: unknown): path is string {
  if (typeof path !== "string") {
    return false;
  }

  const trimmed = path.trim();
  if (trimmed.length === 0) {
    return false;
  }

  // Path should start with /
  return trimmed.startsWith("/");
}

