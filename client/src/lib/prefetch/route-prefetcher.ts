/**
 * Intelligent route prefetching system.
 * Prefetches likely next routes to improve perceived performance.
 */

/**
 * Prefetch configuration.
 */
interface PrefetchConfig {
  /**
   * Delay before prefetching on hover (milliseconds).
   */
  hoverDelay: number;
  /**
   * Whether to prefetch priority routes on mount.
   */
  prefetchPriority: boolean;
  /**
   * Priority routes to prefetch on mount.
   */
  priorityRoutes?: string[];
  /**
   * Whether to respect user's connection speed.
   */
  respectConnectionSpeed: boolean;
}

/**
 * Default prefetch configuration.
 */
const DEFAULT_CONFIG: PrefetchConfig = {
  hoverDelay: 200,
  prefetchPriority: true,
  priorityRoutes: ["/", "/contact", "/machines"],
  respectConnectionSpeed: true,
};

/**
 * Route prefetcher implementation.
 */
class RoutePrefetcher {
  private prefetchedRoutes = new Set<string>();
  private hoverTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
  private config: PrefetchConfig;

  constructor(config: Partial<PrefetchConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  /**
   * Check if connection speed allows prefetching.
   */
  private canPrefetch(): boolean {
    if (!this.config.respectConnectionSpeed) {
      return true;
    }

    if (typeof navigator === "undefined" || !("connection" in navigator)) {
      return true; // Assume good connection if API not available
    }

    const connection = (navigator as any).connection;
    if (!connection) {
      return true;
    }

    // Don't prefetch on slow connections
    if (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g") {
      return false;
    }

    // Don't prefetch if save-data mode is enabled
    if (connection.saveData) {
      return false;
    }

    return true;
  }

  /**
   * Prefetch a route.
   *
   * @param route - Route path to prefetch
   */
  prefetchRoute(route: string): void {
    if (!this.canPrefetch()) {
      return;
    }

    if (this.prefetchedRoutes.has(route)) {
      return; // Already prefetched
    }

    // Mark as prefetched
    this.prefetchedRoutes.add(route);

    // In a real implementation, this would:
    // 1. Prefetch the route's JavaScript bundle
    // 2. Prefetch any critical data
    // 3. Preload images on that route

    // For now, we'll use link prefetching
    if (typeof document !== "undefined") {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = route;
      document.head.appendChild(link);
    }
  }

  /**
   * Schedule prefetch on link hover.
   *
   * @param route - Route path
   */
  scheduleHoverPrefetch(route: string): void {
    // Clear existing timeout
    const existing = this.hoverTimeouts.get(route);
    if (existing) {
      clearTimeout(existing);
    }

    // Schedule prefetch
    const timeout = setTimeout(() => {
      this.prefetchRoute(route);
      this.hoverTimeouts.delete(route);
    }, this.config.hoverDelay);

    this.hoverTimeouts.set(route, timeout);
  }

  /**
   * Cancel hover prefetch.
   *
   * @param route - Route path
   */
  cancelHoverPrefetch(route: string): void {
    const timeout = this.hoverTimeouts.get(route);
    if (timeout) {
      clearTimeout(timeout);
      this.hoverTimeouts.delete(route);
    }
  }

  /**
   * Prefetch priority routes.
   */
  prefetchPriorityRoutes(): void {
    if (!this.config.prefetchPriority) {
      return;
    }

    const priorityRoutes = this.config.priorityRoutes || [];
    priorityRoutes.forEach((route) => {
      this.prefetchRoute(route);
    });
  }

  /**
   * Get likely next routes based on current route.
   *
   * @param currentRoute - Current route path
   * @returns Array of likely next routes
   */
  getLikelyNextRoutes(currentRoute: string): string[] {
    // Simple heuristic: likely next routes based on current page
    const routeMap: Record<string, string[]> = {
      "/": ["/machines", "/contact", "/about"],
      "/machines": ["/contact"], // Machine detail routes are dynamic, prefetch on demand
      "/contact": ["/", "/machines"],
      "/about": ["/contact", "/team"],
    };

    // For machine detail pages, suggest going back to machines listing or contact
    if (currentRoute.startsWith("/machines/") && currentRoute !== "/machines") {
      return ["/machines", "/contact"];
    }

    return routeMap[currentRoute] || [];
  }

  /**
   * Prefetch likely next routes.
   *
   * @param currentRoute - Current route path
   */
  prefetchLikelyNextRoutes(currentRoute: string): void {
    const likelyRoutes = this.getLikelyNextRoutes(currentRoute);
    likelyRoutes.forEach((route) => {
      this.prefetchRoute(route);
    });
  }

  /**
   * Check if route has been prefetched.
   *
   * @param route - Route path
   * @returns true if route is prefetched
   */
  isPrefetched(route: string): boolean {
    return this.prefetchedRoutes.has(route);
  }

  /**
   * Clear all prefetched routes.
   */
  clear(): void {
    this.prefetchedRoutes.clear();
    this.hoverTimeouts.forEach((timeout) => clearTimeout(timeout));
    this.hoverTimeouts.clear();
  }
}

/**
 * Default prefetcher instance.
 */
export const routePrefetcher = new RoutePrefetcher();

/**
 * Export types and class.
 */
export type { PrefetchConfig };
export { RoutePrefetcher };

