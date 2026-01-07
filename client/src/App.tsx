import { Switch, Route } from "wouter";
import { useEffect, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { RouteTracker } from "@/components/layout/RouteTracker";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageLoadingState } from "@/components/loading/PageLoadingState";
import { initTracking, initConsentModeEarly } from "@/lib/tracking/init";
import { routes, notFoundRoute, routeConfigs, isLazyRoute } from "@/config/routes";
import { routePrefetcher } from "@/lib/prefetch/route-prefetcher";

function Router() {
  return (
    <Switch>
      {routes.map((route) => {
        const config = routeConfigs.find((r) => r.path === route.path);
        const isLazy = config && isLazyRoute(config);
        const Component = route.component;

        return (
          <Route key={route.path} path={route.path}>
            {isLazy ? (
              <Suspense fallback={<PageLoadingState message="Loading page..." />}>
                <Component />
              </Suspense>
            ) : (
              <Component />
            )}
          </Route>
        );
      })}
      <Route>
        {(() => {
          const NotFound = notFoundRoute;
          return <NotFound />;
        })()}
      </Route>
    </Switch>
  );
}

function App() {
  // Initialize Consent Mode early (before GA loads)
  // This ensures GA respects consent even if it loads before user interaction
  useEffect(() => {
    initConsentModeEarly();
  }, []);

  // Initialize tracking on app mount
  // This checks existing consent and loads GA if conditions are met
  useEffect(() => {
    initTracking();
  }, []);

  // Prefetch priority routes on mount
  useEffect(() => {
    routePrefetcher.prefetchPriorityRoutes();
  }, []);

  return (
    <ErrorBoundary errorBoundaryName="App">
      <TooltipProvider>
        <ScrollToTop />
        <RouteTracker />
        <Toaster />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
