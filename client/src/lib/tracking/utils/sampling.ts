/**
 * Event sampling utilities.
 * Samples high-volume events to reduce data volume while maintaining statistical significance.
 */

import { EVENT_SAMPLING } from "../config";
import { getTrackingLogger } from "../logger";

/**
 * Check if an event should be sampled.
 * Returns false if event should be skipped (not sampled).
 *
 * @param eventName - Event name to check
 * @returns true if event should be processed, false if should be skipped
 */
export function shouldSampleEvent(eventName: string): boolean {
  const sampleRate = EVENT_SAMPLING[eventName];

  // No sampling configured for this event - process all
  if (sampleRate === undefined) {
    return true;
  }

  // Invalid sample rate - process all
  if (sampleRate <= 0 || sampleRate > 1) {
    const logger = getTrackingLogger();
    logger.warn?.("Invalid sample rate, processing event", {
      eventName,
      sampleRate,
    });
    return true;
  }

  // Sample based on rate
  const shouldSample = Math.random() < sampleRate;

  if (!shouldSample) {
    const logger = getTrackingLogger();
    logger.debug?.("Event skipped due to sampling", {
      eventName,
      sampleRate,
    });
  }

  return shouldSample;
}

/**
 * Get sampling rate for an event.
 *
 * @param eventName - Event name
 * @returns Sampling rate (0-1) or undefined if not configured
 */
export function getSamplingRate(eventName: string): number | undefined {
  return EVENT_SAMPLING[eventName];
}

