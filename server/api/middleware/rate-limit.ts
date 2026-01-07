/**
 * Rate limiting middleware for API endpoints.
 * Prevents abuse and ensures fair usage.
 * Supports adaptive rate limiting based on server load.
 */

import type { Request, Response, NextFunction } from "express";
import { loadMonitor } from "../../lib/system/load-monitor";

/**
 * Rate limit store (in-memory, simple implementation).
 * In production, use Redis or similar for distributed systems.
 */
const rateLimitStore = new Map<
  string,
  { count: number; resetTime: number }
>();

/**
 * Rate limit configuration.
 */
interface RateLimitConfig {
  /**
   * Maximum number of requests per window.
   */
  max: number;
  /**
   * Time window in milliseconds.
   */
  windowMs: number;
  /**
   * Message to return when rate limited.
   */
  message?: string;
  /**
   * Whether to use adaptive rate limiting based on server load.
   */
  adaptive?: boolean;
  /**
   * Per-endpoint configuration override.
   */
  endpointLimits?: Record<string, { max: number; windowMs: number }>;
}

/**
 * Default rate limit: 10 requests per minute.
 */
const DEFAULT_CONFIG: RateLimitConfig = {
  max: 10,
  windowMs: 60 * 1000, // 1 minute
  message: "Too many requests, please try again later.",
};

/**
 * Get client identifier from request.
 */
function getClientId(req: Request): string {
  // Use IP address as identifier
  return (
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown"
  );
}

/**
 * Rate limiting middleware.
 *
 * @param config - Rate limit configuration
 * @returns Express middleware
 */
export function rateLimitMiddleware(
  config: RateLimitConfig = DEFAULT_CONFIG
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const clientId = getClientId(req);
    const endpoint = req.path;
    const now = Date.now();

    // Get endpoint-specific config or use default
    const endpointConfig = config.endpointLimits?.[endpoint];
    let effectiveMax = config.max;
    let effectiveWindowMs = config.windowMs;

    if (endpointConfig) {
      effectiveMax = endpointConfig.max;
      effectiveWindowMs = endpointConfig.windowMs;
    }

    // Apply adaptive rate limiting if enabled
    if (config.adaptive) {
      const adjustmentFactor = loadMonitor.getLoadAdjustmentFactor();
      effectiveMax = Math.floor(effectiveMax * adjustmentFactor);
    }

    // Use endpoint-specific key for rate limiting
    const rateLimitKey = `${clientId}:${endpoint}`;
    const record = rateLimitStore.get(rateLimitKey);

    // Clean up old records periodically
    if (rateLimitStore.size > 1000) {
      const entries = Array.from(rateLimitStore.entries());
      for (const [key, value] of entries) {
        if (value.resetTime < now) {
          rateLimitStore.delete(key);
        }
      }
    }

    if (!record || record.resetTime < now) {
      // Create new record
      rateLimitStore.set(rateLimitKey, {
        count: 1,
        resetTime: now + effectiveWindowMs,
      });

      // Add rate limit headers
      res.setHeader("X-RateLimit-Limit", effectiveMax.toString());
      res.setHeader("X-RateLimit-Remaining", (effectiveMax - 1).toString());
      res.setHeader("X-RateLimit-Reset", new Date(now + effectiveWindowMs).toISOString());
      if (config.adaptive) {
        res.setHeader("X-RateLimit-Adaptive", "true");
      }

      next();
      return;
    }

    if (record.count >= effectiveMax) {
      // Rate limit exceeded
      const retryAfter = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader("X-RateLimit-Limit", effectiveMax.toString());
      res.setHeader("X-RateLimit-Remaining", "0");
      res.setHeader("X-RateLimit-Reset", new Date(record.resetTime).toISOString());
      res.setHeader("Retry-After", retryAfter.toString());
      if (config.adaptive) {
        res.setHeader("X-RateLimit-Adaptive", "true");
      }

      res.status(429).json({
        success: false,
        error: {
          message: config.message || "Too many requests",
          code: "RATE_LIMITED",
        },
        meta: {
          retryAfter,
        },
      });
      return;
    }

    // Increment count
    record.count++;
    rateLimitStore.set(rateLimitKey, record);

    // Add rate limit headers
    res.setHeader("X-RateLimit-Limit", effectiveMax.toString());
    res.setHeader("X-RateLimit-Remaining", (effectiveMax - record.count).toString());
    res.setHeader("X-RateLimit-Reset", new Date(record.resetTime).toISOString());
    if (config.adaptive) {
      res.setHeader("X-RateLimit-Adaptive", "true");
    }

    next();
  };
}

