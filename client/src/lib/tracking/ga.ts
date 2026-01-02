/**
 * Google Analytics 4 loader and utilities.
 * Loads GA4 script dynamically only when explicitly allowed.
 * Never throws errors - all failures are silent.
 */

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

let gaLoaded = false;

/**
 * Check if GA is already loaded.
 */
export function isGALoaded(): boolean {
  return (
    gaLoaded &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  );
}

/**
 * Load and initialize Google Analytics 4.
 * Prevents double-loading.
 * Never throws - silently fails if script injection fails.
 *
 * @param measurementId - GA4 measurement ID (e.g., "G-XXXXXXXXXX")
 */
export function loadGA(measurementId: string): void {
  // Prevent double loading
  if (isGALoaded()) {
    return;
  }

  if (typeof window === "undefined") {
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Define gtag function
  window.gtag = function (
    command: "config" | "event" | "js" | "set",
    targetId: string | Date,
    config?: Record<string, unknown>
  ) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };

  // Set initial timestamp
  window.gtag("js", new Date());

  // Configure with anonymize_ip
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    page_path: window.location.pathname,
    page_title: document.title,
  });

  // Inject script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  script.onerror = () => {
    // Silently handle script load failure
    // Don't throw, don't log
  };

  document.head.appendChild(script);
  gaLoaded = true;
}

