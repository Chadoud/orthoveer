/**
 * Test utilities for Google Analytics tracking system.
 * Provides mock objects and helpers for testing.
 */

import type {
  GADependencies,
  TrackingLogger,
  GAConsentConfig,
} from "../types";

/**
 * Create a mock Window object for testing.
 *
 * @param overrides - Properties to override
 * @returns Mock Window object
 */
export function createMockWindow(
  overrides?: Partial<Window>
): Partial<Window> {
  const dataLayer: unknown[] = [];
  const gtag = ((...args: unknown[]) => {
    dataLayer.push(args);
  }) as unknown as typeof window.gtag;

  return {
    location: {
      hostname: "example.com",
      pathname: "/",
      ...overrides?.location,
    } as Location,
    dataLayer,
    gtag,
    ...overrides,
  };
}

/**
 * Create a mock Document object for testing.
 *
 * @param overrides - Properties to override
 * @returns Mock Document object
 */
export function createMockDocument(
  overrides?: Partial<Document>
): Partial<Document> {
  const cookies: string[] = [];
  const scripts: HTMLScriptElement[] = [];

  const appendChildCalls: Node[] = [];
  const querySelectorAllCalls: string[] = [];
  
  const mockHead = {
    appendChild: ((node: Node) => {
      appendChildCalls.push(node);
      if (node instanceof HTMLScriptElement) {
        scripts.push(node);
      }
      return node;
    }) as typeof document.head.appendChild,
    querySelectorAll: ((selector: string) => {
      querySelectorAllCalls.push(selector);
      if (selector.includes("googletagmanager.com")) {
        return scripts as unknown as NodeListOf<HTMLScriptElement>;
      }
      return [] as unknown as NodeListOf<Element>;
    }) as typeof document.head.querySelectorAll,
  };

  return {
    cookie: {
      get value() {
        return cookies.join("; ");
      },
      set value(val: string) {
        cookies.push(val);
      },
    } as unknown as string,
    title: "Test Page",
    head: mockHead as unknown as HTMLHeadElement,
    createElement: ((tagName: string) => {
      if (tagName === "script") {
        const script = {
          async: false,
          src: "",
          onload: null as (() => void) | null,
          onerror: null as (() => void) | null,
          parentNode: null as Node | null,
        } as unknown as HTMLScriptElement;
        return script;
      }
      return {} as HTMLElement;
    }) as typeof document.createElement,
    ...overrides,
  };
}

/**
 * Create a mock TrackingLogger for testing.
 *
 * @returns Mock logger with call tracking
 */
export function createMockLogger(): TrackingLogger & {
  debugCalls: Array<{ message: string; meta?: Record<string, unknown> }>;
  warnCalls: Array<{ message: string; meta?: Record<string, unknown> }>;
  errorCalls: Array<{ message: string; error?: Error; meta?: Record<string, unknown> }>;
} {
  const debugCalls: Array<{ message: string; meta?: Record<string, unknown> }> = [];
  const warnCalls: Array<{ message: string; meta?: Record<string, unknown> }> = [];
  const errorCalls: Array<{ message: string; error?: Error; meta?: Record<string, unknown> }> = [];

  return {
    debug: (message: string, meta?: Record<string, unknown>) => {
      debugCalls.push({ message, meta });
    },
    warn: (message: string, meta?: Record<string, unknown>) => {
      warnCalls.push({ message, meta });
    },
    error: (message: string, error?: Error, meta?: Record<string, unknown>) => {
      errorCalls.push({ message, error, meta });
    },
    debugCalls,
    warnCalls,
    errorCalls,
  };
}

/**
 * Create mock dependencies for testing.
 *
 * @param overrides - Dependencies to override
 * @returns Mock GADependencies object
 */
export function createMockDependencies(
  overrides?: Partial<GADependencies>
): GADependencies {
  const mockWindow = createMockWindow();
  const mockDocument = createMockDocument();
  const mockLogger = createMockLogger();

  return {
    window: mockWindow as Window,
    document: mockDocument as Document,
    logger: mockLogger,
    ...overrides,
  };
}

/**
 * Reset tracking state for testing.
 * Clears all internal state and mocks.
 */
export function resetTrackingState(): void {
  // This would need to be implemented based on actual state management
  // For now, it's a placeholder
}

/**
 * Mock cookies for testing.
 *
 * @param cookies - Array of cookie strings (e.g., ["_ga=GA1.1.123", "_gid=GA1.1.456"])
 * @param document - Document object to mock
 */
export function mockCookies(
  cookies: string[],
  document: Partial<Document>
): void {
  Object.defineProperty(document, "cookie", {
    get: () => cookies.join("; "),
    set: (value: string) => {
      const [name] = value.split("=");
      const index = cookies.findIndex((c) => c.startsWith(name));
      if (index >= 0) {
        cookies[index] = value;
      } else {
        cookies.push(value);
      }
    },
    configurable: true,
  });
}

/**
 * Mock script elements for testing.
 *
 * @param scripts - Array of script elements
 * @param document - Document object to mock
 */
export function mockScriptElements(
  scripts: HTMLScriptElement[],
  document: Partial<Document>
): void {
  if (document.head) {
    const appendChildCalls: Node[] = [];
    document.head.appendChild = ((node: Node) => {
      appendChildCalls.push(node);
      if (node instanceof HTMLScriptElement) {
        scripts.push(node);
      }
      return node;
    }) as typeof document.head.appendChild;

    document.head.querySelectorAll = ((selector: string) => {
      if (selector.includes("googletagmanager.com")) {
        return scripts as unknown as NodeListOf<HTMLScriptElement>;
      }
      return [] as unknown as NodeListOf<Element>;
    }) as typeof document.head.querySelectorAll;
  }
}

/**
 * Helper to wait for async operations in tests.
 *
 * @param ms - Milliseconds to wait
 * @returns Promise that resolves after delay
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Helper to create a consent config for testing.
 *
 * @param analytics - Analytics consent
 * @param marketing - Marketing consent
 * @returns Consent config object
 */
export function createTestConsentConfig(
  analytics: boolean,
  marketing: boolean
): GAConsentConfig {
  return {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  };
}

/**
 * Mock event queue for testing.
 *
 * @returns Mock queue state
 */
export function createMockEventQueue(): {
  queue: Array<{ eventName: string; payload?: Record<string, unknown> }>;
  clear: () => void;
} {
  const queue: Array<{ eventName: string; payload?: Record<string, unknown> }> = [];
  return {
    queue,
    clear: () => {
      queue.length = 0;
    },
  };
}

/**
 * Mock batch system for testing.
 *
 * @returns Mock batch state
 */
export function createMockBatch(): {
  batch: Array<{ eventName: string; payload?: Record<string, unknown> }>;
  clear: () => void;
} {
  const batch: Array<{ eventName: string; payload?: Record<string, unknown> }> = [];
  return {
    batch,
    clear: () => {
      batch.length = 0;
    },
  };
}

/**
 * Performance testing utilities.
 */
export const performanceUtils = {
  /**
   * Measure execution time of a function.
   *
   * @param fn - Function to measure
   * @returns Execution time in milliseconds
   */
  measureTime: (fn: () => void): number => {
    const start = performance.now();
    fn();
    return performance.now() - start;
  },

  /**
   * Measure execution time of an async function.
   *
   * @param fn - Async function to measure
   * @returns Execution time in milliseconds
   */
  measureTimeAsync: async (fn: () => Promise<void>): Promise<number> => {
    const start = performance.now();
    await fn();
    return performance.now() - start;
  },

  /**
   * Run function multiple times and get statistics.
   *
   * @param fn - Function to run
   * @param iterations - Number of iterations
   * @returns Performance statistics
   */
  benchmark: (
    fn: () => void,
    iterations: number = 100
  ): { min: number; max: number; avg: number; total: number } => {
    const times: number[] = [];
    for (let i = 0; i < iterations; i++) {
      const time = performanceUtils.measureTime(fn);
      times.push(time);
    }
    return {
      min: Math.min(...times),
      max: Math.max(...times),
      avg: times.reduce((a, b) => a + b, 0) / times.length,
      total: times.reduce((a, b) => a + b, 0),
    };
  },
};

