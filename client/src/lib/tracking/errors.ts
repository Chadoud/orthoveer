/**
 * Custom error classes for Google Analytics tracking system.
 * Provides structured error handling with error codes and recovery strategies.
 */

import type { TrackingErrorCode } from "./types";

/**
 * Custom error class for tracking-related errors.
 * Extends Error with additional context for better error handling.
 */
export class TrackingError extends Error {
  /**
   * Error code for categorizing the error.
   */
  public readonly code: TrackingErrorCode;

  /**
   * Whether the error is recoverable.
   * Recoverable errors can be retried, unrecoverable errors require state reset.
   */
  public readonly recoverable: boolean;

  /**
   * Original error that caused this error (if any).
   */
  public readonly cause?: Error;

  constructor(
    message: string,
    code: TrackingErrorCode,
    recoverable: boolean = false,
    cause?: Error
  ) {
    super(message);
    this.name = "TrackingError";
    this.code = code;
    this.recoverable = recoverable;
    this.cause = cause;

    // Maintain proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TrackingError);
    }
  }

  /**
   * Convert error to a plain object for logging.
   *
   * @returns Plain object representation
   */
  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      recoverable: this.recoverable,
      ...(this.cause && { cause: this.cause.message }),
      stack: this.stack,
    };
  }
}

/**
 * Create a tracking error for GA load failures.
 *
 * @param cause - Original error
 * @param measurementId - GA measurement ID
 * @returns TrackingError instance
 */
export function createGALoadError(
  cause?: Error,
  measurementId?: string
): TrackingError {
  return new TrackingError(
    `Failed to load Google Analytics${measurementId ? ` (${measurementId})` : ""}`,
    "GA_LOAD_FAILED",
    true, // Recoverable - can retry
    cause
  );
}

/**
 * Create a tracking error for GA unload failures.
 *
 * @param cause - Original error
 * @returns TrackingError instance
 */
export function createGAUnloadError(cause?: Error): TrackingError {
  return new TrackingError(
    "Failed to unload Google Analytics",
    "GA_UNLOAD_FAILED",
    true, // Recoverable - cleanup can be retried
    cause
  );
}

/**
 * Create a tracking error for invalid measurement IDs.
 *
 * @param measurementId - Invalid measurement ID
 * @returns TrackingError instance
 */
export function createInvalidMeasurementIdError(
  measurementId: string
): TrackingError {
  return new TrackingError(
    `Invalid GA measurement ID format: ${measurementId}`,
    "INVALID_MEASUREMENT_ID",
    false // Unrecoverable - invalid input
  );
}

/**
 * Create a tracking error for invalid event names.
 *
 * @param eventName - Invalid event name
 * @returns TrackingError instance
 */
export function createInvalidEventNameError(
  eventName: string
): TrackingError {
  return new TrackingError(
    `Invalid event name: ${eventName}`,
    "INVALID_EVENT_NAME",
    false // Unrecoverable - invalid input
  );
}

/**
 * Create a tracking error for cookie deletion failures.
 *
 * @param cause - Original error
 * @returns TrackingError instance
 */
export function createCookieDeletionError(cause?: Error): TrackingError {
  return new TrackingError(
    "Failed to delete GA cookies",
    "COOKIE_DELETION_FAILED",
    true, // Recoverable - can retry deletion
    cause
  );
}

/**
 * Create a tracking error for consent mode failures.
 *
 * @param cause - Original error
 * @returns TrackingError instance
 */
export function createConsentModeError(cause?: Error): TrackingError {
  return new TrackingError(
    "Failed to update consent mode",
    "CONSENT_MODE_FAILED",
    true, // Recoverable - can retry
    cause
  );
}

/**
 * Create a tracking error for browser incompatibility.
 *
 * @param feature - Unsupported feature
 * @returns TrackingError instance
 */
export function createBrowserIncompatibleError(
  feature: string
): TrackingError {
  return new TrackingError(
    `Browser does not support required feature: ${feature}`,
    "BROWSER_INCOMPATIBLE",
    false // Unrecoverable - browser limitation
  );
}

/**
 * Create a tracking error for script load timeouts.
 *
 * @param timeout - Timeout duration in ms
 * @returns TrackingError instance
 */
export function createScriptTimeoutError(timeout: number): TrackingError {
  return new TrackingError(
    `GA script load timeout after ${timeout}ms`,
    "SCRIPT_TIMEOUT",
    true // Recoverable - can retry
  );
}

