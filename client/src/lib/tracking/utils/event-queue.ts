/**
 * Event queue for failed and offline events.
 * Queues events when GA is unavailable and retries when available.
 */

import { getTrackingLogger } from "../logger";
import { retryWithBackoff } from "./retry";
import { getGtagWindow, isGtagAvailable } from "./window";

/**
 * Maximum queue size before dropping oldest events.
 */
const MAX_QUEUE_SIZE = 100;

/**
 * Maximum retry attempts per event.
 */
const MAX_RETRIES = 3;

/**
 * Queue storage key for localStorage persistence.
 */
const QUEUE_STORAGE_KEY = "ga_event_queue";

/**
 * Queued event interface.
 */
interface QueuedEvent {
  eventName: string;
  payload?: Record<string, unknown>;
  timestamp: number;
  retries: number;
}

/**
 * In-memory event queue.
 */
let eventQueue: QueuedEvent[] = [];

/**
 * Whether queue persistence is enabled.
 */
let persistenceEnabled = false;

/**
 * Load queue from localStorage.
 * Called on initialization.
 */
function loadQueueFromStorage(): void {
  if (!persistenceEnabled || typeof window === "undefined") {
    return;
  }

  try {
    const stored = localStorage.getItem(QUEUE_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as unknown;
      if (Array.isArray(parsed)) {
        eventQueue = parsed.filter(
          (item): item is QueuedEvent =>
            typeof item === "object" &&
            item !== null &&
            "eventName" in item &&
            "timestamp" in item &&
            "retries" in item
        );
        const logger = getTrackingLogger();
        logger.debug?.("Loaded event queue from storage", {
          count: eventQueue.length,
        });
      }
    }
  } catch (error) {
    const logger = getTrackingLogger();
    logger.error?.("Failed to load event queue from storage", error as Error);
  }
}

/**
 * Save queue to localStorage.
 */
function saveQueueToStorage(): void {
  if (!persistenceEnabled || typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(eventQueue));
  } catch (error) {
    const logger = getTrackingLogger();
    logger.error?.("Failed to save event queue to storage", error as Error);
  }
}

/**
 * Enable or disable queue persistence.
 *
 * @param enabled - Whether to enable persistence
 */
export function setQueuePersistence(enabled: boolean): void {
  persistenceEnabled = enabled;
  if (enabled) {
    loadQueueFromStorage();
  } else {
    // Clear storage when disabling
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(QUEUE_STORAGE_KEY);
      } catch {
        // Silently fail
      }
    }
  }
}

/**
 * Queue an event for later sending.
 * Events are queued when GA is unavailable or tracking fails.
 *
 * @param eventName - Event name
 * @param payload - Event payload
 */
export function queueEvent(
  eventName: string,
  payload?: Record<string, unknown>
): void {
  const logger = getTrackingLogger();

  // Remove oldest if queue is full
  if (eventQueue.length >= MAX_QUEUE_SIZE) {
    const removed = eventQueue.shift();
    logger.warn?.("Event queue full, removing oldest event", {
      removed: removed?.eventName,
      queueSize: eventQueue.length,
    });
  }

  const queuedEvent: QueuedEvent = {
    eventName,
    payload,
    timestamp: Date.now(),
    retries: 0,
  };

  eventQueue.push(queuedEvent);
  saveQueueToStorage();

  logger.debug?.("Event queued", {
    eventName,
    queueSize: eventQueue.length,
  });
}

/**
 * Flush the event queue.
 * Attempts to send all queued events.
 * Events that fail are retried up to MAX_RETRIES times.
 */
export function flushEventQueue(): void {
  const logger = getTrackingLogger();

  if (eventQueue.length === 0) {
    return;
  }


  logger.debug?.("Flushing event queue", {
    queueSize: eventQueue.length,
  });

  const remainingEvents: QueuedEvent[] = [];

  const win = getGtagWindow();
  if (!win || !isGtagAvailable(win)) {
    logger.debug?.("Cannot flush queue - gtag not available", {
      queueSize: eventQueue.length,
    });
    return;
  }

  for (const event of eventQueue) {
    try {
      // Try to send event with retry logic (call gtag directly to avoid circular dependency)
      retryWithBackoff(
        () => {
          win.gtag("event", event.eventName, event.payload);
        },
        {
          maxAttempts: MAX_RETRIES - event.retries,
          initialDelayMs: 100,
          maxDelayMs: 1000,
          backoffMultiplier: 2,
        }
      );

      // Success - event sent, don't re-queue
      logger.debug?.("Queued event sent successfully", {
        eventName: event.eventName,
      });
    } catch (error) {
      // Failed after retries
      event.retries++;

      if (event.retries >= MAX_RETRIES) {
        // Max retries reached - give up
        logger.warn?.("Event failed after max retries, dropping", {
          eventName: event.eventName,
          retries: event.retries,
        });
      } else {
        // Keep for retry later
        remainingEvents.push(event);
        logger.debug?.("Event failed, will retry later", {
          eventName: event.eventName,
          retries: event.retries,
        });
      }
    }
  }

  eventQueue = remainingEvents;
  saveQueueToStorage();

  if (eventQueue.length > 0) {
    logger.debug?.("Some events remain in queue", {
      remaining: eventQueue.length,
    });
  }
}

/**
 * Clear all queued events.
 *
 * @param clearStorage - Whether to also clear localStorage
 */
export function clearEventQueue(clearStorage: boolean = true): void {
  eventQueue = [];
  if (clearStorage && typeof window !== "undefined") {
    try {
      localStorage.removeItem(QUEUE_STORAGE_KEY);
    } catch {
      // Silently fail
    }
  }
  const logger = getTrackingLogger();
  logger.debug?.("Event queue cleared");
}

/**
 * Get current queue size.
 *
 * @returns Number of queued events
 */
export function getQueueSize(): number {
  return eventQueue.length;
}

/**
 * Get queue statistics.
 *
 * @returns Queue statistics
 */
export function getQueueStats(): {
  size: number;
  oldestTimestamp: number | null;
  newestTimestamp: number | null;
} {
  if (eventQueue.length === 0) {
    return {
      size: 0,
      oldestTimestamp: null,
      newestTimestamp: null,
    };
  }

  const timestamps = eventQueue.map((e) => e.timestamp);
  return {
    size: eventQueue.length,
    oldestTimestamp: Math.min(...timestamps),
    newestTimestamp: Math.max(...timestamps),
  };
}

/**
 * Interval ID for periodic queue flushing.
 * Stored for cleanup purposes.
 */
let flushIntervalId: ReturnType<typeof setInterval> | null = null;

/**
 * Start periodic queue flushing.
 * Checks every 5 seconds if GA is available and flushes queue.
 */
function startQueueFlushInterval(): void {
  if (typeof window === "undefined" || flushIntervalId !== null) {
    return; // Already started or SSR
  }

  flushIntervalId = setInterval(() => {
    // Check if gtag is available (simple check without importing isGALoaded)
    const win = getGtagWindow();
    if (win && isGtagAvailable(win) && eventQueue.length > 0) {
      flushEventQueue();
    }
  }, 5000);
}

/**
 * Stop periodic queue flushing.
 * Cleans up the interval.
 */
export function stopQueueFlushInterval(): void {
  if (flushIntervalId) {
    clearInterval(flushIntervalId);
    flushIntervalId = null;
  }
}

// Load queue from storage on initialization
if (typeof window !== "undefined") {
  loadQueueFromStorage();
  startQueueFlushInterval();

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    stopQueueFlushInterval();
  });
}

