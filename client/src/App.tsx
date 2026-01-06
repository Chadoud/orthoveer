import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { RouteTracker } from "@/components/layout/RouteTracker";
import { initTracking, initConsentModeEarly } from "@/lib/tracking/init";
import { routes, notFoundRoute } from "@/config/routes";

function Router() {
  return (
    <Switch>
      {routes.map((route) => {
        const Component = route.component;
        return (
          <Route key={route.path} path={route.path}>
            <Component />
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

  return (
    <TooltipProvider>
      <ScrollToTop />
      <RouteTracker />
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
