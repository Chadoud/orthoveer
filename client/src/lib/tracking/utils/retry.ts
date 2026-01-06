/**
 * Retry logic for recoverable errors.
 * Implements exponential backoff for retrying failed operations.
 */

import { getTrackingLogger } from "../logger";
import type { TrackingError } from "../errors";

/**
 * Retry configuration.
 */
interface RetryConfig {
  /** Maximum number of retry attempts */
  maxAttempts: number;
  /** Initial delay in milliseconds */
  initialDelayMs: number;
  /** Maximum delay in milliseconds */
  maxDelayMs: number;
  /** Backoff multiplier */
  backoffMultiplier: number;
}

/**
 * Default retry configuration.
 */
const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxAttempts: 3,
  initialDelayMs: 100,
  maxDelayMs: 1000,
  backoffMultiplier: 2,
};

/**
 * Calculate delay for retry attempt.
 *
 * @param attempt - Current attempt number (0-indexed)
 * @param config - Retry configuration
 * @returns Delay in milliseconds
 */
function calculateDelay(attempt: number, config: RetryConfig): number {
  const delay = config.initialDelayMs * Math.pow(config.backoffMultiplier, attempt);
  return Math.min(delay, config.maxDelayMs);
}

/**
 * Retry a function with exponential backoff.
 *
 * @param fn - Function to retry
 * @param config - Retry configuration
 * @returns Promise that resolves with function result
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T> | T,
  config: RetryConfig = DEFAULT_RETRY_CONFIG
): Promise<T> {
  const logger = getTrackingLogger();
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < config.maxAttempts; attempt++) {
    try {
      const result = await Promise.resolve(fn());
      if (attempt > 0) {
        logger.debug?.("Retry succeeded", {
          attempt: attempt + 1,
          maxAttempts: config.maxAttempts,
        });
      }
      return result;
    } catch (error) {
      lastError = error as Error;

      // Check if error is recoverable
      const trackingError = error as TrackingError;
      if (trackingError && !trackingError.recoverable) {
        logger.warn?.("Non-recoverable error, not retrying", {
          error: trackingError.message,
          code: trackingError.code,
        });
        throw error;
      }

      // Don't retry on last attempt
      if (attempt === config.maxAttempts - 1) {
        break;
      }

      // Calculate delay and wait
      const delay = calculateDelay(attempt, config);
      logger.debug?.("Retry attempt failed, waiting before retry", {
        attempt: attempt + 1,
        maxAttempts: config.maxAttempts,
        delayMs: delay,
        error: lastError.message,
      });

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // All retries failed
  logger.error?.("All retry attempts failed", lastError, {
    maxAttempts: config.maxAttempts,
  });
  throw lastError;
}

