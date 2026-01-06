/**
 * Window utilities for Google Analytics tracking.
 * Centralizes window/gtag access with proper typing.
 */

import type { GtagFunction, GAWindow } from "../types";

/**
 * Get window object with gtag function properly typed.
 * Returns undefined if window is not available (SSR).
 *
 * @returns Window with gtag or undefined
 */
export function getGtagWindow(): (Window & { gtag?: GtagFunction }) | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window as Window & { gtag?: GtagFunction };
}

/**
 * Check if gtag function is available.
 * Type-safe check for gtag availability.
 *
 * @param win - Window object (optional, defaults to global window)
 * @returns true if gtag is available
 */
export function isGtagAvailable(
  win?: Window
): win is Window & { gtag: GtagFunction } {
  const windowObj = win ?? (typeof window !== "undefined" ? window : undefined);
  if (!windowObj) {
    return false;
  }

  return typeof (windowObj as { gtag?: unknown }).gtag === "function";
}

/**
 * Get dataLayer safely.
 * Returns dataLayer array or undefined.
 *
 * @param win - Window object (optional, defaults to global window)
 * @returns dataLayer array or undefined
 */
export function getDataLayer(
  win?: Window
): unknown[] | undefined {
  const windowObj = win ?? (typeof window !== "undefined" ? window : undefined);
  if (!windowObj) {
    return undefined;
  }

  const gaWindow = windowObj as GAWindow;
  return gaWindow.dataLayer;
}

/**
 * Get gtag function safely.
 * Returns gtag function or undefined.
 *
 * @param win - Window object (optional, defaults to global window)
 * @returns gtag function or undefined
 */
export function getGtag(
  win?: Window
): GtagFunction | undefined {
  const windowObj = getGtagWindow() ?? win;
  if (!windowObj) {
    return undefined;
  }

  return windowObj.gtag;
}

