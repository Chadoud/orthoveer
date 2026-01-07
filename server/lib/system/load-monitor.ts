/**
 * System load monitoring for adaptive rate limiting.
 */

import os from "os";

/**
 * Get current system load.
 */
export function getSystemLoad(): number {
  const loadAvg = os.loadavg()[0];
  const cpuCount = os.cpus().length;
  return loadAvg / cpuCount;
}

/**
 * Get memory usage percentage.
 */
export function getMemoryUsage(): number {
  const total = os.totalmem();
  const free = os.freemem();
  return ((total - free) / total) * 100;
}

/**
 * Load monitor with adjustment factor calculation.
 */
class LoadMonitor {
  /**
   * Get load adjustment factor (0-1).
   * Lower values reduce rate limits when system is under load.
   */
  getLoadAdjustmentFactor(): number {
    const load = getSystemLoad();
    const memory = getMemoryUsage();

    // If load > 1.0 or memory > 80%, reduce rate limits
    if (load > 1.0 || memory > 80) {
      return 0.5; // Reduce to 50%
    }

    // If load > 0.7 or memory > 60%, reduce slightly
    if (load > 0.7 || memory > 60) {
      return 0.75; // Reduce to 75%
    }

    return 1.0; // No reduction
  }
}

export const loadMonitor = new LoadMonitor();

