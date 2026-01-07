/**
 * Error logging utility.
 * Centralized error logging with preparation for Sentry integration.
 */

import type { ErrorInfo } from "react";

/**
 * Error context information.
 */
export interface ErrorContext {
  componentStack?: string;
  errorBoundary?: string;
  userAgent?: string;
  url?: string;
  timestamp?: string;
  userId?: string;
  [key: string]: unknown;
}

/**
 * Error severity levels.
 */
export enum ErrorSeverity {
  Low = "low",
  Medium = "medium",
  High = "high",
  Critical = "critical",
}

/**
 * Log an error with context.
 *
 * @param error - The error object
 * @param errorInfo - React error info (if from error boundary)
 * @param context - Additional context
 * @param severity - Error severity level
 */
export function logError(
  error: Error,
  errorInfo?: ErrorInfo | null,
  context?: ErrorContext,
  severity: ErrorSeverity = ErrorSeverity.Medium
): void {
  const errorContext: ErrorContext = {
    message: error.message,
    stack: error.stack,
    name: error.name,
    severity,
    timestamp: new Date().toISOString(),
    url: typeof window !== "undefined" ? window.location.href : undefined,
    userAgent:
      typeof navigator !== "undefined" ? navigator.userAgent : undefined,
    ...(errorInfo && {
      componentStack: errorInfo.componentStack || undefined,
    }),
    ...context,
  };

  // Log to console in development (structured logging)
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.error("[Error Logger]", error, errorContext);
  }

  // TODO: Integrate with Sentry when available
  // Sentry.captureException(error, {
  //   contexts: { react: { componentStack: errorInfo?.componentStack } },
  //   level: severity,
  //   extra: errorContext,
  // });

  // In production, could also send to logging service
  if (import.meta.env.PROD) {
    // Future: Send to logging endpoint
    // fetch('/api/logs/error', { method: 'POST', body: JSON.stringify(errorContext) })
  }
}

/**
 * Log a warning.
 *
 * @param message - Warning message
 * @param context - Additional context
 */
export function logWarning(message: string, context?: ErrorContext): void {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn("[Error Logger]", message, context);
  }

  // TODO: Integrate with Sentry
  // Sentry.captureMessage(message, { level: 'warning', extra: context });
}

