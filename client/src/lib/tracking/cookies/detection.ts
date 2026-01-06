/**
 * Cookie detection utilities for Google Analytics cookies.
 * Functions to identify and list GA cookies.
 */

import { COOKIE_PATTERNS } from "../config";
import { getTrackingLogger } from "../logger";

/**
 * Get all Google Analytics cookie names from the current document.
 * Searches through all cookies and returns those matching GA patterns.
 *
 * @returns Array of GA cookie names found
 */
export function getGACookies(): string[] {
  if (typeof document === "undefined") {
    return [];
  }

  try {
    const cookies: string[] = [];
    const allCookies = document.cookie.split(";");

    allCookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();
      if (
        COOKIE_PATTERNS.ANALYTICS.test(cookieName) ||
        COOKIE_PATTERNS.CLIENT_ID.test(cookieName) ||
        COOKIE_PATTERNS.THROTTLE.test(cookieName)
      ) {
        cookies.push(cookieName);
      }
    });

    return cookies;
  } catch (error) {
    getTrackingLogger().error?.(
      "Failed to get GA cookies",
      error as Error
    );
    return [];
  }
}

/**
 * Check if any Google Analytics cookies exist.
 * Quick boolean check for cookie presence.
 *
 * @returns true if any GA cookies are found
 */
export function hasGACookies(): boolean {
  return getGACookies().length > 0;
}

/**
 * Get the parent domain for cookie deletion.
 * Extracts the parent domain from the current hostname.
 *
 * @param hostname - Current hostname
 * @returns Parent domain (e.g., ".example.com") or undefined
 */
export function getCookieDomain(hostname: string): string | undefined {
  const domainParts = hostname.split(".");
  if (domainParts.length > 1) {
    return `.${domainParts.slice(-2).join(".")}`;
  }
  return undefined;
}

/**
 * Get all possible cookie paths for deletion.
 * Includes root path, current path, and all parent paths.
 *
 * @param currentPath - Current page path
 * @returns Array of paths to try for cookie deletion
 */
export function getCookiePaths(currentPath: string): string[] {
  const paths = new Set<string>(["/"]); // Always include root

  // Add current path
  if (currentPath) {
    paths.add(currentPath);
  }

  // Add parent paths (e.g., /path/to/page -> /path/to, /path, /)
  const pathParts = currentPath.split("/").filter(Boolean);
  for (let i = pathParts.length; i > 0; i--) {
    const path = "/" + pathParts.slice(0, i).join("/");
    paths.add(path);
  }

  return Array.from(paths);
}

