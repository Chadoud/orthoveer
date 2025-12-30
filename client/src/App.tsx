import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
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
  return (
    <TooltipProvider>
      <ScrollToTop />
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
