/**
 * Optimized cookie deletion for Google Analytics cookies.
 * Implements O(n) deletion algorithm instead of O(n*m).
 */

import { KNOWN_COOKIE_NAMES } from "../config";
import { getTrackingLogger } from "../logger";
import { createCookieDeletionError, createBrowserIncompatibleError } from "../errors";
import { getGACookies, getCookieDomain, getCookiePaths } from "./detection";
import { recordMetric } from "../utils/metrics";

/**
 * Check if the browser supports cookies.
 * Tests cookie write/read capability.
 *
 * @returns true if cookies are supported
 */
export function supportsCookies(): boolean {
  if (typeof document === "undefined") {
    return false;
  }

  try {
    const testKey = "__ga_cookie_test__";
    const testValue = "1";
    document.cookie = `${testKey}=${testValue}`;
    const supported = document.cookie.indexOf(`${testKey}=${testValue}`) !== -1;
    // Clean up test cookie
    document.cookie = `${testKey}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    return supported;
  } catch {
    return false;
  }
}

/**
 * Check if the browser supports localStorage.
 *
 * @returns true if localStorage is supported
 */
export function supportsLocalStorage(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const testKey = "__ga_storage_test__";
    localStorage.setItem(testKey, "1");
    const supported = localStorage.getItem(testKey) === "1";
    localStorage.removeItem(testKey);
    return supported;
  } catch {
    return false;
  }
}

/**
 * Delete a single cookie optimally.
 * Tries root path first (most common), then other paths if needed.
 *
 * @param name - Cookie name to delete
 * @param paths - Array of paths to try
 * @param domains - Array of domains to try
 */
function deleteCookieOptimally(
  name: string,
  paths: string[],
  domains: (string | undefined)[]
): void {
  const expiration = "Thu, 01 Jan 1970 00:00:00 UTC";
  const attempted = new Set<string>();

  // Try root path first (most common case)
  const rootPath = "/";
  for (const domain of domains) {
    const key = `${name}:${rootPath}:${domain ?? "none"}`;
    if (attempted.has(key)) continue;
    attempted.add(key);

    try {
      if (domain) {
        document.cookie = `${name}=; expires=${expiration}; path=${rootPath}; domain=${domain};`;
      } else {
        document.cookie = `${name}=; expires=${expiration}; path=${rootPath};`;
      }
    } catch {
      // Silently continue - some browsers may reject certain domain/path combinations
    }
  }

  // Check if cookie still exists
  const cookieStillExists = document.cookie.includes(`${name}=`);

  // Only try other paths if cookie still exists
  if (cookieStillExists) {
    for (const path of paths) {
      if (path === rootPath) continue; // Already tried

      for (const domain of domains) {
        const key = `${name}:${path}:${domain ?? "none"}`;
        if (attempted.has(key)) continue;
        attempted.add(key);

        try {
          if (domain) {
            document.cookie = `${name}=; expires=${expiration}; path=${path}; domain=${domain};`;
          } else {
            document.cookie = `${name}=; expires=${expiration}; path=${path};`;
          }
        } catch {
          // Silently continue
        }
      }
    }
  }
}

/**
 * Delete all Google Analytics cookies.
 * Optimized O(n) algorithm that collects cookies first, then deletes each optimally.
 *
 * @param measurementId - Optional measurement ID for measurement-specific cookies
 */
export function deleteAllGACookies(measurementId?: string): void {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return;
  }

  // Check browser compatibility
  if (!supportsCookies()) {
    const logger = getTrackingLogger();
    logger.warn?.("Cookies not supported, skipping cookie deletion");
    return;
  }

  const logger = getTrackingLogger();
  const startTime =
    typeof performance !== "undefined" && performance.now
      ? performance.now()
      : Date.now();

  try {
    // Get all GA cookies first
    const gaCookieNames = new Set<string>(getGACookies());

    // Add known cookie names
    KNOWN_COOKIE_NAMES.forEach((name) => {
      gaCookieNames.add(name);
    });

    // Add measurement-specific cookie if provided
    if (measurementId) {
      const sanitizedId = measurementId.replace(/[^A-Z0-9]/gi, "");
      gaCookieNames.add(`_ga_${sanitizedId}`);
    }

    // Get paths and domains
    const paths = getCookiePaths(window.location.pathname);
    const parentDomain = getCookieDomain(window.location.hostname);
    const domains: (string | undefined)[] = [undefined, parentDomain];

    // Delete each cookie optimally
    let deletedCount = 0;
    gaCookieNames.forEach((cookieName) => {
      deleteCookieOptimally(cookieName, paths, domains);
      deletedCount++;
    });

    const endTime =
      typeof performance !== "undefined" && performance.now
        ? performance.now()
        : Date.now();
    const duration = endTime - startTime;
    logger.debug?.("Deleted GA cookies", {
      count: deletedCount,
      duration: `${duration.toFixed(2)}ms`,
    });
    recordMetric("cookie_deletion_time", duration, {
      cookieCount: deletedCount,
    });
  } catch (error) {
    const trackingError = createCookieDeletionError(error as Error);
    logger.error?.(trackingError.message, trackingError, {
      measurementId,
    });
  }
}

