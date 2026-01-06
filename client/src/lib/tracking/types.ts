/**
 * TypeScript type definitions for Google Analytics tracking system.
 * Strict types for type safety and better developer experience.
 */

/**
 * Google Consent Mode v2 consent state.
 * Can be either "granted" or "denied".
 */
export type GAConsentState = "granted" | "denied";

/**
 * Google Consent Mode v2 configuration object.
 * Defines consent states for different storage types.
 */
export interface GAConsentConfig {
  /** Whether analytics storage is granted or denied */
  analytics_storage: GAConsentState;
  /** Whether ad storage is granted or denied */
  ad_storage: GAConsentState;
  /** Whether ad user data collection is granted or denied */
  ad_user_data: GAConsentState;
  /** Whether ad personalization is granted or denied */
  ad_personalization: GAConsentState;
  /** Optional wait time in milliseconds for consent updates */
  wait_for_update?: number;
}

/**
 * Cookie pattern type for matching GA cookies.
 */
export type GACookiePattern = RegExp;

/**
 * Logging interface for tracking system.
 * All methods are optional to allow for no-op implementations.
 */
export interface TrackingLogger {
  /**
   * Log debug-level messages.
   * Used for development and troubleshooting.
   *
   * @param message - Log message
   * @param meta - Optional metadata object
   */
  debug?(message: string, meta?: Record<string, unknown>): void;

  /**
   * Log warning-level messages.
   * Used for recoverable issues or deprecation warnings.
   *
   * @param message - Log message
   * @param meta - Optional metadata object
   */
  warn?(message: string, meta?: Record<string, unknown>): void;

  /**
   * Log error-level messages.
   * Used for errors that should be investigated.
   *
   * @param message - Log message
   * @param error - Optional error object
   * @param meta - Optional metadata object
   */
  error?(
    message: string,
    error?: Error,
    meta?: Record<string, unknown>
  ): void;
}

/**
 * Browser dependencies for dependency injection.
 * Allows mocking in tests and better testability.
 */
export interface GADependencies {
  /** Browser window object */
  window: Window;
  /** Browser document object */
  document: Document;
  /** Optional logger instance */
  logger?: TrackingLogger;
}

/**
 * Tracking error codes for categorizing errors.
 */
export type TrackingErrorCode =
  | "GA_LOAD_FAILED"
  | "GA_UNLOAD_FAILED"
  | "INVALID_MEASUREMENT_ID"
  | "INVALID_EVENT_NAME"
  | "COOKIE_DELETION_FAILED"
  | "CONSENT_MODE_FAILED"
  | "BROWSER_INCOMPATIBLE"
  | "SCRIPT_TIMEOUT";

/**
 * Gtag command types.
 */
export type GtagCommand = "config" | "event" | "js" | "set" | "consent";

/**
 * Gtag target ID types.
 */
export type GtagTargetId = string | Date | "default" | "update";

/**
 * Gtag function signature.
 */
export type GtagFunction = (
  command: GtagCommand,
  targetId: GtagTargetId,
  config?: Record<string, unknown>
) => void;

/**
 * Extended Window interface with GA globals.
 */
export interface GAWindow extends Window {
  /** Google Analytics gtag function */
  gtag?: GtagFunction;
  /** Google Analytics data layer */
  dataLayer?: unknown[];
}

