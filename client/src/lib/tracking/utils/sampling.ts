/**
 * Event sampling utilities.
 * Samples high-volume events to reduce data volume while maintaining statistical significance.
 * Supports adaptive sampling based on traffic levels.
 */

import { EVENT_SAMPLING } from "../config";
import { getTrackingLogger } from "../logger";

/**
 * Traffic level.
 */
export enum TrafficLevel {
  Low = "low",
  Normal = "normal",
  High = "high",
}

/**
 * Traffic monitoring.
 */
class TrafficMonitor {
  private eventCounts: number[] = [];
  private readonly windowSize = 60; // Track last 60 seconds
  private readonly highTrafficThreshold = 100; // events per minute
  private readonly lowTrafficThreshold = 10; // events per minute

  /**
   * Record an event.
   */
  recordEvent(): void {
    const now = Date.now();
    this.eventCounts.push(now);
    
    // Clean up old events
    const cutoff = now - this.windowSize * 1000;
    this.eventCounts = this.eventCounts.filter((time) => time > cutoff);
  }

  /**
   * Get current traffic level.
   */
  getTrafficLevel(): TrafficLevel {
    const eventsPerMinute = this.eventCounts.length;
    
    if (eventsPerMinute >= this.highTrafficThreshold) {
      return TrafficLevel.High;
    } else if (eventsPerMinute <= this.lowTrafficThreshold) {
      return TrafficLevel.Low;
    }
    
    return TrafficLevel.Normal;
  }

  /**
   * Get event count in current window.
   */
  getEventCount(): number {
    return this.eventCounts.length;
  }
}

/**
 * Traffic monitor instance.
 */
const trafficMonitor = new TrafficMonitor();

/**
 * Adaptive sampling configuration.
 */
interface AdaptiveSamplingConfig {
  /**
   * Whether adaptive sampling is enabled.
   */
  enabled: boolean;
  /**
   * Sampling rates by traffic level.
   */
  rates: Record<TrafficLevel, number>;
}

/**
 * Default adaptive sampling configuration.
 */
const ADAPTIVE_CONFIG: AdaptiveSamplingConfig = {
  enabled: false, // Disabled by default
  rates: {
    [TrafficLevel.Low]: 1.0, // 100% for low traffic
    [TrafficLevel.Normal]: 1.0, // 100% for normal traffic
    [TrafficLevel.High]: 0.1, // 10% for high traffic
  },
};

let adaptiveConfig: AdaptiveSamplingConfig = { ...ADAPTIVE_CONFIG };

/**
 * Check if an event should be sampled.
 * Returns false if event should be skipped (not sampled).
 *
 * @param eventName - Event name to check
 * @returns true if event should be processed, false if should be skipped
 */
export function shouldSampleEvent(eventName: string): boolean {
  // Record event for traffic monitoring
  trafficMonitor.recordEvent();

  // Check per-event sampling first
  const eventSampleRate = EVENT_SAMPLING[eventName];
  if (eventSampleRate !== undefined) {
    // Invalid sample rate - process all
    if (eventSampleRate <= 0 || eventSampleRate > 1) {
      const logger = getTrackingLogger();
      logger.warn?.("Invalid sample rate, processing event", {
        eventName,
        sampleRate: eventSampleRate,
      });
      return true;
    }

    // Sample based on event-specific rate
    const shouldSample = Math.random() < eventSampleRate;

    if (!shouldSample) {
      const logger = getTrackingLogger();
      logger.debug?.("Event skipped due to sampling", {
        eventName,
        sampleRate: eventSampleRate,
      });
    }

    return shouldSample;
  }

  // Use adaptive sampling if enabled
  if (adaptiveConfig.enabled) {
    const trafficLevel = trafficMonitor.getTrafficLevel();
    const adaptiveRate = adaptiveConfig.rates[trafficLevel];
    const shouldSample = Math.random() < adaptiveRate;

    if (!shouldSample) {
      const logger = getTrackingLogger();
      logger.debug?.("Event skipped due to adaptive sampling", {
        eventName,
        trafficLevel,
        sampleRate: adaptiveRate,
      });
    }

    return shouldSample;
  }

  // No sampling configured - process all
  return true;
}

/**
 * Get sampling rate for an event.
 *
 * @param eventName - Event name
 * @returns Sampling rate (0-1) or undefined if not configured
 */
export function getSamplingRate(eventName: string): number | undefined {
  // Check per-event rate first
  const eventRate = EVENT_SAMPLING[eventName];
  if (eventRate !== undefined) {
    return eventRate;
  }

  // Use adaptive rate if enabled
  if (adaptiveConfig.enabled) {
    const trafficLevel = trafficMonitor.getTrafficLevel();
    return adaptiveConfig.rates[trafficLevel];
  }

  return undefined;
}

/**
 * Set adaptive sampling enabled.
 *
 * @param enabled - Whether adaptive sampling is enabled
 */
export function setAdaptiveSampling(enabled: boolean): void {
  adaptiveConfig.enabled = enabled;
}

/**
 * Get current traffic level.
 *
 * @returns Traffic level
 */
export function getTrafficLevel(): TrafficLevel {
  return trafficMonitor.getTrafficLevel();
}

/**
 * Get traffic statistics.
 *
 * @returns Traffic statistics
 */
export function getTrafficStats(): {
  level: TrafficLevel;
  eventsPerMinute: number;
} {
  return {
    level: trafficMonitor.getTrafficLevel(),
    eventsPerMinute: trafficMonitor.getEventCount(),
  };
}

