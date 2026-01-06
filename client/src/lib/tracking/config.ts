/**
 * Google Analytics tracking configuration constants.
 * All magic numbers and strings are centralized here for maintainability.
 */

/**
 * Cookie expiration time in seconds.
 * 2 years = 63072000 seconds (365 * 2 * 24 * 60 * 60)
 */
export const COOKIE_EXPIRES = 63072000;

/**
 * Wait time in milliseconds for consent mode updates.
 * Google recommends 500ms to allow for consent updates before GA processes data.
 */
export const CONSENT_UPDATE_WAIT = 500;

/**
 * Script load timeout in milliseconds.
 * If GA script doesn't load within this time, consider it failed.
 */
export const SCRIPT_LOAD_TIMEOUT = 10000;

/**
 * Maximum length for event names in characters.
 * Google Analytics has a 40 character limit for event names.
 */
export const MAX_EVENT_NAME_LENGTH = 40;

/**
 * Regex pattern for GA4 measurement IDs.
 * Format: G-XXXXXXXXXX (G- followed by alphanumeric characters)
 */
export const MEASUREMENT_ID_PATTERN_GA4 = /^G-[A-Z0-9]+$/i;

/**
 * Regex pattern for Universal Analytics measurement IDs.
 * Format: UA-XXXXX-X (UA- followed by numbers, dash, number)
 */
export const MEASUREMENT_ID_PATTERN_UA = /^UA-\d+-\d+$/;

/**
 * Combined pattern that matches either GA4 or UA measurement IDs.
 */
export const MEASUREMENT_ID_PATTERN = new RegExp(
  `${MEASUREMENT_ID_PATTERN_GA4.source}|${MEASUREMENT_ID_PATTERN_UA.source}`
);

/**
 * Cookie patterns for detecting Google Analytics cookies.
 */
export const COOKIE_PATTERNS = {
  /**
   * Pattern for analytics cookies (starts with _ga).
   * Matches: _ga, _ga_XXXXXXXXXX, etc.
   */
  ANALYTICS: /^_ga/,

  /**
   * Pattern for client ID cookie.
   * Matches: _gid
   */
  CLIENT_ID: /^_gid$/,

  /**
   * Pattern for throttle cookies.
   * Matches: _gat, _gat_gtag_UA_*, _gat_gtag_G_*
   */
  THROTTLE: /^_gat/,
} as const;

/**
 * Known GA cookie names for explicit deletion.
 */
export const KNOWN_COOKIE_NAMES = [
  "_ga",
  "_gid",
  "_gat",
  "_gat_gtag_UA_",
  "_gat_gtag_G_",
] as const;

/**
 * Event sampling rates.
 * Configures sampling percentage for high-volume events.
 * Value between 0 and 1 (e.g., 0.1 = 10% of events).
 * Events not in this map are sampled at 100% (no sampling).
 */
export const EVENT_SAMPLING: Record<string, number> = {
  // Example: Sample 10% of scroll events
  // scroll: 0.1,
  // Example: Sample 50% of mouse_move events
  // mouse_move: 0.5,
} as const;

/**
 * Google Analytics configuration object.
 * Contains all configuration constants in a single export.
 */
export const GA_CONFIG = {
  COOKIE_EXPIRES,
  CONSENT_UPDATE_WAIT,
  SCRIPT_LOAD_TIMEOUT,
  MAX_EVENT_NAME_LENGTH,
  MEASUREMENT_ID_PATTERN,
  MEASUREMENT_ID_PATTERN_GA4,
  MEASUREMENT_ID_PATTERN_UA,
  COOKIE_PATTERNS,
  KNOWN_COOKIE_NAMES,
  EVENT_SAMPLING,
} as const;

