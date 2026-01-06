/**
 * Input validation and sanitization for tracking system.
 * Validates and sanitizes user inputs before processing.
 */

import {
  MEASUREMENT_ID_PATTERN,
  MAX_EVENT_NAME_LENGTH,
} from "../config";
import { getTrackingLogger } from "../logger";
import {
  createInvalidMeasurementIdError,
  createInvalidEventNameError,
} from "../errors";

/**
 * Validate a Google Analytics measurement ID.
 * Checks format against GA4 and UA patterns.
 *
 * @param id - Measurement ID to validate
 * @returns true if valid, false otherwise
 */
export function validateMeasurementId(id: string): boolean {
  if (!id || typeof id !== "string") {
    return false;
  }

  return MEASUREMENT_ID_PATTERN.test(id.trim());
}

/**
 * Sanitize an event name for Google Analytics.
 * Removes invalid characters and enforces length limits.
 *
 * @param name - Event name to sanitize
 * @returns Sanitized event name or null if invalid
 */
export function sanitizeEventName(name: string): string | null {
  if (!name || typeof name !== "string") {
    return null;
  }

  // Trim whitespace
  const trimmed = name.trim();

  if (trimmed.length === 0) {
    return null;
  }

  // Replace invalid characters with underscore
  // GA allows: alphanumeric, underscore, hyphen
  const sanitized = trimmed.replace(/[^a-zA-Z0-9_-]/g, "_");

  // Check length
  if (sanitized.length > MAX_EVENT_NAME_LENGTH) {
    const logger = getTrackingLogger();
    logger.warn?.("Event name truncated", {
      original: trimmed,
      truncated: sanitized.substring(0, MAX_EVENT_NAME_LENGTH),
    });
    return sanitized.substring(0, MAX_EVENT_NAME_LENGTH);
  }

  return sanitized;
}

/**
 * Validate and sanitize an event name.
 * Returns sanitized name or throws error if invalid.
 *
 * @param name - Event name to validate and sanitize
 * @returns Sanitized event name
 * @throws TrackingError if name cannot be sanitized
 */
export function validateAndSanitizeEventName(name: string): string {
  const sanitized = sanitizeEventName(name);

  if (!sanitized) {
    throw createInvalidEventNameError(name);
  }

  return sanitized;
}

/**
 * Validate a measurement ID and throw if invalid.
 *
 * @param id - Measurement ID to validate
 * @throws TrackingError if ID is invalid
 */
export function validateMeasurementIdOrThrow(id: string): void {
  if (!validateMeasurementId(id)) {
    throw createInvalidMeasurementIdError(id);
  }
}

/**
 * Validate and sanitize a page path.
 * Removes query parameters and fragments, validates format.
 *
 * @param path - Page path to validate and sanitize
 * @returns Sanitized path or null if invalid
 */
export function sanitizePath(path: string): string | null {
  if (!path || typeof path !== "string") {
    return null;
  }

  // Trim whitespace
  const trimmed = path.trim();

  if (trimmed.length === 0) {
    return null;
  }

  // Remove query parameters and fragments
  const cleanPath = trimmed.split("?")[0].split("#")[0];

  // Validate path format (should start with /)
  if (!cleanPath.startsWith("/")) {
    const logger = getTrackingLogger();
    logger.warn?.("Invalid path format, adding leading slash", {
      original: path,
      corrected: `/${cleanPath}`,
    });
    return `/${cleanPath}`;
  }

  return cleanPath;
}

/**
 * Validate a path and throw if invalid.
 *
 * @param path - Path to validate
 * @throws TrackingError if path is invalid
 */
export function validatePathOrThrow(path: string): void {
  const sanitized = sanitizePath(path);
  if (!sanitized) {
    throw createInvalidEventNameError(path); // Reuse error type
  }
}

