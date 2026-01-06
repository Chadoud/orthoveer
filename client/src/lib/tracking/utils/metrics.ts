/**
 * Performance metrics collection for tracking system.
 * Tracks performance data for monitoring and optimization.
 */

import { getTrackingLogger } from "../logger";

/**
 * Performance metric entry.
 */
interface MetricEntry {
  name: string;
  value: number;
  timestamp: number;
  metadata?: Record<string, unknown>;
}

/**
 * Collected metrics.
 */
const metrics: MetricEntry[] = [];

/**
 * Maximum number of metrics to keep in memory.
 */
const MAX_METRICS = 100;

/**
 * Record a performance metric.
 *
 * @param name - Metric name
 * @param value - Metric value (usually duration in ms)
 * @param metadata - Optional metadata
 */
export function recordMetric(
  name: string,
  value: number,
  metadata?: Record<string, unknown>
): void {
  const entry: MetricEntry = {
    name,
    value,
    timestamp: Date.now(),
    metadata,
  };

  metrics.push(entry);

  // Keep only recent metrics
  if (metrics.length > MAX_METRICS) {
    metrics.shift();
  }

  const logger = getTrackingLogger();
  logger.debug?.("Metric recorded", {
    name,
    value,
    metadata,
  });
}

/**
 * Get all metrics.
 *
 * @returns Array of metric entries
 */
export function getMetrics(): readonly MetricEntry[] {
  return [...metrics];
}

/**
 * Get metrics by name.
 *
 * @param name - Metric name to filter by
 * @returns Array of matching metric entries
 */
export function getMetricsByName(name: string): readonly MetricEntry[] {
  return metrics.filter((m) => m.name === name);
}

/**
 * Get average value for a metric.
 *
 * @param name - Metric name
 * @returns Average value or null if no metrics found
 */
export function getAverageMetric(name: string): number | null {
  const matching = getMetricsByName(name);
  if (matching.length === 0) {
    return null;
  }

  const sum = matching.reduce((acc, m) => acc + m.value, 0);
  return sum / matching.length;
}

/**
 * Clear all metrics (for testing).
 */
export function clearMetrics(): void {
  metrics.length = 0;
}

/**
 * Get metrics summary.
 *
 * @returns Summary object with counts and averages
 */
export function getMetricsSummary(): Record<
  string,
  { count: number; average: number; min: number; max: number }
> {
  const summary: Record<
    string,
    { count: number; average: number; min: number; max: number }
  > = {};

  const byName: Record<string, number[]> = {};

  // Group metrics by name
  metrics.forEach((metric) => {
    if (!byName[metric.name]) {
      byName[metric.name] = [];
    }
    byName[metric.name].push(metric.value);
  });

  // Calculate statistics for each metric
  Object.entries(byName).forEach(([name, values]) => {
    const count = values.length;
    const sum = values.reduce((acc, v) => acc + v, 0);
    const average = sum / count;
    const min = Math.min(...values);
    const max = Math.max(...values);

    summary[name] = { count, average, min, max };
  });

  return summary;
}

