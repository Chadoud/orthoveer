/**
 * Rate limiting utilities for event tracking.
 * Prevents excessive event firing that could impact performance.
 * Optimized with O(1) cleanup using circular buffer pattern.
 */

import { getTrackingLogger } from "../logger";

/**
 * Rate limit configuration.
 */
interface RateLimitConfig {
  /** Maximum events per window */
  maxEvents: number;
  /** Time window in milliseconds */
  windowMs: number;
}

/**
 * Default rate limit: 100 events per 10 seconds.
 */
const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  maxEvents: 100,
  windowMs: 10000,
};

/**
 * Maximum entries before emergency cleanup.
 * Prevents unbounded memory growth.
 */
const MAX_RATE_LIMIT_ENTRIES = 200;

/**
 * Compaction threshold.
 * Compact array when startIndex exceeds this percentage of array length.
 */
const COMPACTION_THRESHOLD = 0.5;

/**
 * Event timestamp tracker with circular buffer pattern.
 */
const eventTimestamps: number[] = [];
let startIndex = 0; // O(1) cleanup pointer

/**
 * Cleanup old timestamps outside the window.
 * O(1) operation using startIndex pointer.
 *
 * @param windowStart - Start of time window
 */
function cleanupOldTimestamps(windowStart: number): void {
  // O(1) - just move pointer forward
  while (
    startIndex < eventTimestamps.length &&
    eventTimestamps[startIndex] < windowStart
  ) {
    startIndex++;
  }

  // Periodic compaction to prevent memory growth
  // Compact when startIndex > 50% of array length
  if (
    startIndex > 0 &&
    startIndex > eventTimestamps.length * COMPACTION_THRESHOLD
  ) {
    eventTimestamps.splice(0, startIndex);
    startIndex = 0;
  }

  // Emergency cleanup if array exceeds hard limit
  if (eventTimestamps.length > MAX_RATE_LIMIT_ENTRIES) {
    const removeCount = Math.floor(eventTimestamps.length / 2);
    eventTimestamps.splice(0, removeCount);
    startIndex = Math.max(0, startIndex - removeCount);
    const logger = getTrackingLogger();
    logger.warn?.("Rate limit array exceeded max size, emergency cleanup", {
      removed: removeCount,
      remaining: eventTimestamps.length,
    });
  }
}

/**
 * Get current active count (events within window).
 * O(1) operation.
 *
 * @param windowStart - Start of time window
 * @returns Number of active events
 */
function getActiveCount(windowStart: number): number {
  cleanupOldTimestamps(windowStart);
  return eventTimestamps.length - startIndex;
}

/**
 * Check if an event should be rate limited.
 * Uses sliding window algorithm with O(1) cleanup.
 *
 * @param config - Rate limit configuration
 * @returns true if event should be allowed, false if rate limited
 */
export function checkRateLimit(
  config: RateLimitConfig = DEFAULT_RATE_LIMIT
): boolean {
  const now = Date.now();
  const windowStart = now - config.windowMs;

  // Get active count (O(1) cleanup happens here)
  const activeCount = getActiveCount(windowStart);

  // Check if we're at the limit
  if (activeCount >= config.maxEvents) {
    const logger = getTrackingLogger();
    logger.warn?.("Event rate limited", {
      currentCount: activeCount,
      maxEvents: config.maxEvents,
      windowMs: config.windowMs,
    });
    return false;
  }

  // Add current timestamp
  eventTimestamps.push(now);
  return true;
}

/**
 * Reset rate limit state (for testing).
 */
export function resetRateLimit(): void {
  eventTimestamps.length = 0;
  startIndex = 0;
}

/**
 * Get current rate limit statistics.
 *
 * @returns Current rate limit stats
 */
export function getRateLimitStats(): {
  currentCount: number;
  windowMs: number;
  totalEntries: number;
  startIndex: number;
} {
  const now = Date.now();
  const windowStart = now - DEFAULT_RATE_LIMIT.windowMs;

  cleanupOldTimestamps(windowStart);
  const activeCount = eventTimestamps.length - startIndex;

  return {
    currentCount: activeCount,
    windowMs: DEFAULT_RATE_LIMIT.windowMs,
    totalEntries: eventTimestamps.length,
    startIndex,
  };
}

/**
 * Event listener references for cleanup.
 */
let beforeUnloadHandler: (() => void) | null = null;
let visibilityChangeHandler: (() => void) | null = null;

/**
 * Initialize cleanup listeners for memory management.
 * Should be called once on module load.
 */
export function initRateLimitCleanup(): void {
  if (typeof window === "undefined") {
    return;
  }

  // Cleanup on page unload
  beforeUnloadHandler = () => {
    resetRateLimit();
  };
  window.addEventListener("beforeunload", beforeUnloadHandler);

  // Cleanup old entries when page is hidden
  if (typeof document !== "undefined") {
    visibilityChangeHandler = () => {
      if (document.hidden) {
        const now = Date.now();
        const windowStart = now - DEFAULT_RATE_LIMIT.windowMs;
        cleanupOldTimestamps(windowStart);
      }
    };
    document.addEventListener("visibilitychange", visibilityChangeHandler);
  }
}

/**
 * Remove cleanup listeners.
 * Useful for testing or cleanup.
 */
export function removeRateLimitCleanup(): void {
  if (typeof window !== "undefined" && beforeUnloadHandler) {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
    beforeUnloadHandler = null;
  }

  if (typeof document !== "undefined" && visibilityChangeHandler) {
    document.removeEventListener("visibilitychange", visibilityChangeHandler);
    visibilityChangeHandler = null;
  }
}

// Initialize cleanup listeners
initRateLimitCleanup();
