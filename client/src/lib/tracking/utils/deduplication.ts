/**
 * Event deduplication utilities.
 * Prevents duplicate events from being sent within a short time window.
 * Optimized with O(1) cleanup and efficient hash function.
 */

import { getTrackingLogger } from "../logger";

/**
 * Deduplication window in milliseconds.
 * Events with the same name and payload within this window are considered duplicates.
 */
const DEDUPE_WINDOW_MS = 1000; // 1 second

/**
 * Maximum entries before emergency cleanup.
 * Prevents unbounded memory growth.
 */
const MAX_DEDUPE_ENTRIES = 200;

/**
 * Compaction threshold.
 * Compact array when startIndex exceeds this percentage of array length.
 */
const COMPACTION_THRESHOLD = 0.5;

/**
 * Event signature for deduplication.
 */
interface EventSignature {
  name: string;
  payloadHash: string;
  timestamp: number;
}

/**
 * Recent event signatures for deduplication with circular buffer pattern.
 */
const recentEvents: EventSignature[] = [];
let startIndex = 0; // O(1) cleanup pointer

/**
 * Generate a numeric hash for a payload object.
 * Uses djb2 hash algorithm for efficiency.
 *
 * @param payload - Payload object
 * @returns Hash string (base36 encoded)
 */
function hashPayload(payload: Record<string, unknown> | undefined): string {
  if (!payload) {
    return "0";
  }

  try {
    // Sort keys for consistent hashing
    const keys = Object.keys(payload).sort();
    let hash = 5381; // djb2 initial value

    for (const key of keys) {
      // Hash the key
      for (let i = 0; i < key.length; i++) {
        hash = ((hash << 5) + hash) + key.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
      }

      // Hash the value
      const value = String(payload[key] ?? "");
      for (let i = 0; i < value.length; i++) {
        hash = ((hash << 5) + hash) + value.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
      }
    }

    // Convert to base36 string (shorter than decimal)
    return Math.abs(hash).toString(36);
  } catch {
    return "error";
  }
}

/**
 * Cleanup old events outside the window.
 * O(1) operation using startIndex pointer.
 *
 * @param windowStart - Start of time window
 */
function cleanupOldEvents(windowStart: number): void {
  // O(1) - just move pointer forward
  while (
    startIndex < recentEvents.length &&
    recentEvents[startIndex].timestamp < windowStart
  ) {
    startIndex++;
  }

  // Periodic compaction to prevent memory growth
  if (
    startIndex > 0 &&
    startIndex > recentEvents.length * COMPACTION_THRESHOLD
  ) {
    recentEvents.splice(0, startIndex);
    startIndex = 0;
  }

  // Emergency cleanup if array exceeds hard limit
  if (recentEvents.length > MAX_DEDUPE_ENTRIES) {
    const removeCount = Math.floor(recentEvents.length / 2);
    recentEvents.splice(0, removeCount);
    startIndex = Math.max(0, startIndex - removeCount);
    const logger = getTrackingLogger();
    logger.warn?.("Deduplication array exceeded max size, emergency cleanup", {
      removed: removeCount,
      remaining: recentEvents.length,
    });
  }
}

/**
 * Check if an event is a duplicate.
 *
 * @param eventName - Event name
 * @param payload - Event payload
 * @returns true if duplicate, false otherwise
 */
export function isDuplicateEvent(
  eventName: string,
  payload?: Record<string, unknown>
): boolean {
  const now = Date.now();
  const windowStart = now - DEDUPE_WINDOW_MS;

  // Cleanup old events (O(1))
  cleanupOldEvents(windowStart);

  // Generate signature for current event
  const payloadHash = hashPayload(payload);
  const signature: EventSignature = {
    name: eventName,
    payloadHash,
    timestamp: now,
  };

  // Check for duplicates (only check active events)
  const activeEvents = recentEvents.slice(startIndex);
  const isDuplicate = activeEvents.some(
    (event) =>
      event.name === signature.name &&
      event.payloadHash === signature.payloadHash
  );

  if (isDuplicate) {
    const logger = getTrackingLogger();
    logger.debug?.("Duplicate event detected, skipping", {
      eventName,
      payloadHash,
    });
    return true;
  }

  // Add to recent events
  recentEvents.push(signature);

  return false;
}

/**
 * Reset deduplication state (for testing).
 */
export function resetDeduplication(): void {
  recentEvents.length = 0;
  startIndex = 0;
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
export function initDeduplicationCleanup(): void {
  if (typeof window === "undefined") {
    return;
  }

  // Cleanup on page unload
  beforeUnloadHandler = () => {
    resetDeduplication();
  };
  window.addEventListener("beforeunload", beforeUnloadHandler);

  // Cleanup old entries when page is hidden
  if (typeof document !== "undefined") {
    visibilityChangeHandler = () => {
      if (document.hidden) {
        const now = Date.now();
        const windowStart = now - DEDUPE_WINDOW_MS;
        cleanupOldEvents(windowStart);
      }
    };
    document.addEventListener("visibilitychange", visibilityChangeHandler);
  }
}

/**
 * Remove cleanup listeners.
 * Useful for testing or cleanup.
 */
export function removeDeduplicationCleanup(): void {
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
initDeduplicationCleanup();
