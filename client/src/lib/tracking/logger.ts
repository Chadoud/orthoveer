/**
 * Logging system for Google Analytics tracking.
 * Provides structured logging with optional implementations.
 */

import type { TrackingLogger } from "./types";

/**
 * Null logger implementation (no-op).
 * Used in production to ensure silent operation.
 */
class NullLogger implements TrackingLogger {
  debug(): void {
    // No-op
  }

  warn(): void {
    // No-op
  }

  error(): void {
    // No-op
  }
}

/**
 * Console logger implementation.
 * Logs to browser console with appropriate log levels.
 * Used in development for debugging.
 */
class ConsoleLogger implements TrackingLogger {
  debug(message: string, meta?: Record<string, unknown>): void {
    if (import.meta.env.DEV) {
      const logData = meta ? { message, ...meta } : message;
      console.debug("[GA Debug]", logData);
    }
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    const logData = meta ? { message, ...meta } : message;
    console.warn("[GA Warning]", logData);
  }

  error(
    message: string,
    error?: Error,
    meta?: Record<string, unknown>
  ): void {
    const logData = {
      message,
      ...(error && { error: error.message, stack: error.stack }),
      ...meta,
    };
    console.error("[GA Error]", logData);
  }
}

/**
 * Current logger instance.
 * Defaults to NullLogger for production silence.
 */
let logger: TrackingLogger =
  import.meta.env.DEV ? new ConsoleLogger() : new NullLogger();

/**
 * Set the tracking logger instance.
 * Allows injection of custom logger implementations.
 *
 * @param newLogger - Logger instance to use, or null to use default
 */
export function setTrackingLogger(newLogger: TrackingLogger | null): void {
  if (newLogger === null) {
    logger = import.meta.env.DEV ? new ConsoleLogger() : new NullLogger();
  } else {
    logger = newLogger;
  }
}

/**
 * Get the current tracking logger instance.
 *
 * @returns Current logger instance
 */
export function getTrackingLogger(): TrackingLogger {
  return logger;
}

/**
 * Check if logging is enabled (not null logger).
 *
 * @returns true if logging is enabled
 */
export function isLoggingEnabled(): boolean {
  return !(logger instanceof NullLogger);
}

