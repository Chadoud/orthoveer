/**
 * Payload validation and sanitization for event tracking.
 * Ensures payloads are safe and conform to GA requirements.
 */

import { getTrackingLogger } from "../logger";

/**
 * Maximum depth for nested objects in payloads.
 * Prevents deeply nested structures that could cause issues.
 */
const MAX_PAYLOAD_DEPTH = 10;

/**
 * Maximum number of properties in a payload object.
 */
const MAX_PAYLOAD_PROPERTIES = 50;

/**
 * Maximum string length for payload values.
 */
const MAX_STRING_LENGTH = 500;

/**
 * Sanitize a value for GA payload.
 * Converts values to GA-compatible types.
 *
 * @param value - Value to sanitize
 * @param depth - Current nesting depth
 * @returns Sanitized value
 */
function sanitizeValue(
  value: unknown,
  depth: number = 0
): string | number | boolean | null | undefined {
  if (depth > MAX_PAYLOAD_DEPTH) {
    return null;
  }

  // Handle null/undefined
  if (value === null || value === undefined) {
    return value === null ? null : undefined;
  }

  // Handle primitives
  if (typeof value === "string") {
    // Truncate long strings
    return value.length > MAX_STRING_LENGTH
      ? value.substring(0, MAX_STRING_LENGTH)
      : value;
  }

  if (typeof value === "number") {
    // Check for valid numbers
    if (!Number.isFinite(value)) {
      return null;
    }
    return value;
  }

  if (typeof value === "boolean") {
    return value;
  }

  // Handle arrays (convert to comma-separated string if small)
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return null;
    }
    // For small arrays of primitives, convert to string
    if (value.length <= 10) {
      const primitives = value
        .slice(0, 10)
        .map((v) => sanitizeValue(v, depth + 1))
        .filter((v) => v !== null && v !== undefined);
      if (primitives.length > 0) {
        return primitives.join(",");
      }
    }
    return null;
  }

  // Handle objects (convert to string representation)
  if (typeof value === "object") {
    try {
      const str = JSON.stringify(value);
      return str.length > MAX_STRING_LENGTH
        ? str.substring(0, MAX_STRING_LENGTH)
        : str;
    } catch {
      return null;
    }
  }

  // Convert everything else to string
  try {
    const str = String(value);
    return str.length > MAX_STRING_LENGTH
      ? str.substring(0, MAX_STRING_LENGTH)
      : str;
  } catch {
    return null;
  }
}

/**
 * Sanitize a payload object for GA.
 * Removes invalid properties and sanitizes values.
 *
 * @param payload - Payload to sanitize
 * @returns Sanitized payload or null if invalid
 */
export function sanitizePayload(
  payload: Record<string, unknown> | undefined | null
): Record<string, unknown> | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const logger = getTrackingLogger();
  const sanitized: Record<string, unknown> = {};
  const keys = Object.keys(payload);
  
  // Calculate max properties upfront (single calculation)
  const maxProps = Math.min(keys.length, MAX_PAYLOAD_PROPERTIES);

  // Check property count (only log if truncating)
  if (keys.length > MAX_PAYLOAD_PROPERTIES) {
    logger.warn?.("Payload has too many properties, truncating", {
      originalCount: keys.length,
      maxCount: MAX_PAYLOAD_PROPERTIES,
    });
  }

  // Single-pass sanitization with early exit
  for (let i = 0; i < maxProps; i++) {
    const key = keys[i];

    // Sanitize key (GA allows alphanumeric, underscore, hyphen)
    const sanitizedKey = key.replace(/[^a-zA-Z0-9_-]/g, "_");

    // Skip empty keys (early exit)
    if (!sanitizedKey || sanitizedKey.length === 0) {
      continue;
    }

    // Log key sanitization only if changed
    if (sanitizedKey !== key) {
      logger.debug?.("Payload key sanitized", {
        original: key,
        sanitized: sanitizedKey,
      });
    }

    // Sanitize value
    const sanitizedValue = sanitizeValue(payload[key]);

    // Only include non-null values
    if (sanitizedValue !== null && sanitizedValue !== undefined) {
      sanitized[sanitizedKey] = sanitizedValue;
    }
  }

  // Return null if no valid properties (early exit)
  const sanitizedKeys = Object.keys(sanitized);
  if (sanitizedKeys.length === 0) {
    return null;
  }

  return sanitized;
}

/**
 * Validate payload structure.
 * Checks if payload is a valid object.
 *
 * @param payload - Payload to validate
 * @returns true if valid, false otherwise
 */
export function validatePayload(
  payload: unknown
): payload is Record<string, unknown> {
  if (!payload) {
    return false;
  }

  if (typeof payload !== "object") {
    return false;
  }

  if (Array.isArray(payload)) {
    return false;
  }

  return true;
}

