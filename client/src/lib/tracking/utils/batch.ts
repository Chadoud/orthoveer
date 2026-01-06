/**
 * Batch event sending utilities.
 * Collects events into batches to reduce network requests.
 * Uses core tracking functions to avoid circular dependencies.
 */

import { getTrackingLogger } from "../logger";
import { performPreflightChecks, sendEventToGA } from "../events/core";

/**
 * Batch configuration.
 */
interface BatchConfig {
  /** Maximum batch size */
  batchSize: number;
  /** Maximum time to wait before flushing (ms) */
  timeoutMs: number;
}

/**
 * Default batch configuration.
 */
const DEFAULT_BATCH_CONFIG: BatchConfig = {
  batchSize: 10,
  timeoutMs: 1000,
};

/**
 * Current batch configuration.
 */
let batchConfig = DEFAULT_BATCH_CONFIG;

/**
 * Event batch.
 */
interface BatchedEvent {
  eventName: string;
  payload?: Record<string, unknown>;
}

/**
 * Current batch of events.
 */
let eventBatch: BatchedEvent[] = [];

/**
 * Batch timeout ID.
 */
let batchTimeout: ReturnType<typeof setTimeout> | null = null;

/**
 * Whether batching is enabled.
 */
let batchingEnabled = false;

/**
 * Set batch configuration.
 *
 * @param config - Batch configuration
 */
export function setBatchConfig(config: Partial<BatchConfig>): void {
  batchConfig = { ...DEFAULT_BATCH_CONFIG, ...config };
}

/**
 * Enable or disable batching.
 *
 * @param enabled - Whether batching is enabled
 */
export function setBatchingEnabled(enabled: boolean): void {
  batchingEnabled = enabled;
  if (!enabled) {
    // Flush any pending batch
    flushBatch();
  }
}

/**
 * Flush the current batch.
 * Sends all events in the batch immediately.
 */
export function flushBatch(): void {
  if (batchTimeout) {
    clearTimeout(batchTimeout);
    batchTimeout = null;
  }

  if (eventBatch.length === 0) {
    return;
  }

  const logger = getTrackingLogger();
  const batchSize = eventBatch.length;

  logger.debug?.("Flushing event batch", {
    batchSize,
  });

  // Send all events in batch using core functions
  eventBatch.forEach(({ eventName, payload }) => {
    const preflight = performPreflightChecks({
      eventName,
      payload,
    });

    if (preflight.shouldTrack) {
      sendEventToGA(
        preflight.sanitizedEventName!,
        preflight.sanitizedPayload
      );
    }
  });

  // Clear batch
  eventBatch = [];
}

/**
 * Add event to batch.
 * Automatically flushes when batch size is reached or after timeout.
 *
 * @param eventName - Event name
 * @param payload - Event payload
 */
export function addToBatch(
  eventName: string,
  payload?: Record<string, unknown>
): void {
  if (!batchingEnabled) {
    // Batching disabled - send immediately using core functions
    const preflight = performPreflightChecks({
      eventName,
      payload,
    });

    if (preflight.shouldTrack) {
      sendEventToGA(
        preflight.sanitizedEventName!,
        preflight.sanitizedPayload
      );
    }
    return;
  }

  const logger = getTrackingLogger();

  // Add to batch
  eventBatch.push({ eventName, payload });

  logger.debug?.("Event added to batch", {
    eventName,
    batchSize: eventBatch.length,
  });

  // Flush if batch size reached
  if (eventBatch.length >= batchConfig.batchSize) {
    flushBatch();
    return;
  }

  // Set timeout if not already set
  if (!batchTimeout) {
    batchTimeout = setTimeout(() => {
      flushBatch();
    }, batchConfig.timeoutMs);
  }
}

/**
 * Get current batch size.
 *
 * @returns Current batch size
 */
export function getBatchSize(): number {
  return eventBatch.length;
}

/**
 * Clear current batch without sending.
 */
export function clearBatch(): void {
  if (batchTimeout) {
    clearTimeout(batchTimeout);
    batchTimeout = null;
  }
  eventBatch = [];
}

