/**
 * Google Analytics script loader and unloader.
 * Handles dynamic script injection and cleanup with dependency injection.
 */

import type { GADependencies, GtagFunction } from "../types";
import { GA_CONFIG } from "../config";
import { getTrackingLogger } from "../logger";
import {
  createGALoadError,
  createGAUnloadError,
  createScriptTimeoutError,
} from "../errors";
import { validateMeasurementIdOrThrow } from "../validation";
import { deleteAllGACookies } from "../cookies";
import { recordMetric } from "../utils/metrics";

/**
 * Internal state for script loading.
 */
let gaLoaded = false;
let measurementId: string | null = null;
let scriptElement: HTMLScriptElement | null = null;
const scriptElements = new Set<HTMLScriptElement>();
let loadStartTime: number | null = null;
let loadTimeoutId: ReturnType<typeof setTimeout> | null = null;

/**
 * Default dependencies (browser globals).
 */
let dependencies: GADependencies = {
  window:
    typeof window !== "undefined"
      ? (window as typeof window)
      : ({} as Window),
  document:
    typeof document !== "undefined"
      ? (document as typeof document)
      : ({} as Document),
};

/**
 * Set dependencies for dependency injection (testing).
 *
 * @param deps - Partial dependencies to override
 */
export function setDependencies(deps: Partial<GADependencies>): void {
  dependencies = { ...dependencies, ...deps };
}

/**
 * Get current dependencies.
 *
 * @returns Current dependencies
 */
export function getDependencies(): GADependencies {
  return dependencies;
}

/**
 * Check if GA is already loaded.
 *
 * @returns true if GA is loaded
 */
export function isGALoaded(): boolean {
  const { window: win } = dependencies;
  return (
    gaLoaded &&
    typeof win !== "undefined" &&
    typeof win.gtag === "function"
  );
}

/**
 * Get the stored measurement ID.
 *
 * @returns Measurement ID or null
 */
export function getMeasurementId(): string | null {
  return measurementId;
}

/**
 * Load and initialize Google Analytics 4.
 * Prevents double-loading and includes comprehensive error handling.
 *
 * @param measurementIdParam - GA4 measurement ID (e.g., "G-XXXXXXXXXX")
 */
export function loadGA(measurementIdParam: string): void {
  const { window: win, document: doc, logger } = dependencies;

  // Prevent double loading
  if (isGALoaded()) {
    logger?.debug?.("GA already loaded, skipping", {
      measurementId: measurementIdParam,
    });
    return;
  }

  if (typeof win === "undefined" || typeof doc === "undefined") {
    return;
  }

  try {
    // Validate measurement ID
    validateMeasurementIdOrThrow(measurementIdParam);

    // Store measurement ID for cookie cleanup
    measurementId = measurementIdParam;
    loadStartTime =
      typeof performance !== "undefined" && performance.now
        ? performance.now()
        : Date.now();

    // Initialize dataLayer
    win.dataLayer = win.dataLayer || [];

    // Define gtag function
    win.gtag = function (
      command: "config" | "event" | "js" | "set" | "consent",
      targetId: string | Date | "default" | "update",
      config?: Record<string, unknown>
    ) {
      // eslint-disable-next-line prefer-rest-params
      win.dataLayer?.push(arguments);
    } as GtagFunction;

    // Set initial timestamp
    win.gtag("js", new Date());

    // Configure with enhanced privacy settings
    win.gtag("config", measurementIdParam, {
      anonymize_ip: true,
      cookie_expires: GA_CONFIG.COOKIE_EXPIRES,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_path: win.location.pathname,
      page_title: doc.title,
    });

    // Create and inject script
    scriptElement = doc.createElement("script");
    scriptElement.async = true;
    scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${measurementIdParam}`;

    // Track script element
    scriptElements.add(scriptElement);

    // Set up load handler
    scriptElement.onload = () => {
      if (loadStartTime) {
        const endTime =
          typeof performance !== "undefined" && performance.now
            ? performance.now()
            : Date.now();
        const duration = endTime - loadStartTime;
        logger?.debug?.("GA script loaded successfully", {
          measurementId: measurementIdParam,
          duration: `${duration.toFixed(2)}ms`,
        });
        recordMetric("ga_script_load_time", duration, {
          measurementId: measurementIdParam,
        });
      }
      if (loadTimeoutId) {
        clearTimeout(loadTimeoutId);
        loadTimeoutId = null;
      }
      gaLoaded = true;
    };

    // Set up error handler
    scriptElement.onerror = () => {
      const error = createGALoadError(undefined, measurementIdParam);
      logger?.error?.(error.message, error, {
        measurementId: measurementIdParam,
      });
      scriptElements.delete(scriptElement!);
      scriptElement = null;
      gaLoaded = false;
      measurementId = null;
      if (loadTimeoutId) {
        clearTimeout(loadTimeoutId);
        loadTimeoutId = null;
      }
    };

    // Set up timeout
    loadTimeoutId = setTimeout(() => {
      const error = createScriptTimeoutError(GA_CONFIG.SCRIPT_LOAD_TIMEOUT);
      logger?.warn?.(error.message, {
        measurementId: measurementIdParam,
      });
      // Don't reset state on timeout - script might still load
    }, GA_CONFIG.SCRIPT_LOAD_TIMEOUT);

    // Inject script
    doc.head.appendChild(scriptElement);
  } catch (error) {
    const trackingError =
      error instanceof Error
        ? createGALoadError(error, measurementIdParam)
        : createGALoadError(undefined, measurementIdParam);
    logger?.error?.(trackingError.message, trackingError, {
      measurementId: measurementIdParam,
    });

    // Reset state on unrecoverable errors
    if (!trackingError.recoverable) {
      gaLoaded = false;
      measurementId = null;
    }
  }
}

/**
 * Unload Google Analytics and delete all GA cookies.
 * Comprehensive cleanup with memory management.
 */
export function unloadGA(): void {
  const { window: win, document: doc, logger } = dependencies;

  if (typeof win === "undefined" || typeof doc === "undefined") {
    return;
  }

  const startTime =
    typeof performance !== "undefined" && performance.now
      ? performance.now()
      : Date.now();

  try {
    // Clear dataLayer
    if (win.dataLayer) {
      win.dataLayer = [];
    }

    // Remove gtag function
    delete win.gtag;

    // Clean up all script elements
    const scriptsToRemove: HTMLScriptElement[] = [];

    // Remove tracked script elements
    scriptElements.forEach((script) => {
      scriptsToRemove.push(script);
    });
    scriptElements.clear();

    // Remove script elements from DOM
    try {
      const allScripts = doc.querySelectorAll(
        'script[src*="googletagmanager.com/gtag/js"]'
      );
      allScripts.forEach((script) => {
        scriptsToRemove.push(script as HTMLScriptElement);
      });
    } catch {
      // Silently continue
    }

    // Remove each script element
    scriptsToRemove.forEach((script) => {
      try {
        // Clean up event listeners
        script.onload = null;
        script.onerror = null;

        // Remove from DOM
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      } catch {
        // Silently continue
      }
    });

    // Clear timeout if exists
    if (loadTimeoutId) {
      clearTimeout(loadTimeoutId);
      loadTimeoutId = null;
    }

    // Delete all GA cookies
    deleteAllGACookies(measurementId ?? undefined);

    const endTime =
      typeof performance !== "undefined" && performance.now
        ? performance.now()
        : Date.now();
    const duration = endTime - startTime;
    logger?.debug?.("GA unloaded successfully", {
      scriptsRemoved: scriptsToRemove.length,
      duration: `${duration.toFixed(2)}ms`,
    });
    recordMetric("ga_unload_time", duration, {
      scriptsRemoved: scriptsToRemove.length,
    });

    // Reset state
    gaLoaded = false;
    measurementId = null;
    scriptElement = null;
    loadStartTime = null;

    // Verify cleanup
    const remainingScripts = doc.querySelectorAll(
      'script[src*="googletagmanager.com/gtag/js"]'
    ).length;
    if (remainingScripts > 0) {
      logger?.warn?.("Some GA scripts may not have been removed", {
        remaining: remainingScripts,
      });
    }
  } catch (error) {
    const trackingError = createGAUnloadError(error as Error);
    logger?.error?.(trackingError.message, trackingError);
  }
}

