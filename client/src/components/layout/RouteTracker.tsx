import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { trackPageView } from "@/lib/tracking/events";
import { isGALoaded } from "@/lib/tracking/ga";

/**
 * Route tracker component for SPA page view tracking.
 * Fires page_view events on route changes and initial load (if consent exists).
 * Never fires before analytics consent or if GA is not loaded.
 */
export function RouteTracker() {
  const [location] = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // On initial mount, wait a bit for GA to load (if consent exists)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      // Track initial page view if GA is already loaded (user has existing consent)
      // Use setTimeout to ensure GA script has time to initialize
      const timeoutId = setTimeout(() => {
        if (isGALoaded()) {
          trackPageView(location);
        }
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }

    // Track page view on route change
    // trackPageView is a no-op if consent is missing or GA is not loaded
    trackPageView(location);
  }, [location]);

  return null;
}

