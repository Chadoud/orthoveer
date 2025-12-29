import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PlasticsMaterials from "@/pages/PlasticsMaterials";
import Rolls from "@/pages/Rolls";
import MaxTrimT2 from "@/pages/machines/MaxTrimT2";
import MaxTrimT1 from "@/pages/machines/MaxTrimT1";
import MaxFormL2 from "@/pages/machines/MaxFormL2";
import MaxScanS1 from "@/pages/machines/MaxScanS1";
import MaxPrinterP2 from "@/pages/machines/MaxPrinterP2";
import MaxPrinterP1 from "@/pages/machines/MaxPrinterP1";
import MaxMarkM2 from "@/pages/machines/MaxMarkM2";
import MaxPolishI from "@/pages/machines/MaxPolishI";
import MaxPolishII from "@/pages/machines/MaxPolishII";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plastics-materials" component={PlasticsMaterials} />
      <Route path="/rolls" component={Rolls} />
      <Route path="/machines/maxtrim-t2" component={MaxTrimT2} />
      <Route path="/machines/maxtrim-t1" component={MaxTrimT1} />
      <Route path="/machines/maxform-l2" component={MaxFormL2} />
      <Route path="/machines/maxscan-s1" component={MaxScanS1} />
      <Route path="/machines/maxprinter-p2" component={MaxPrinterP2} />
      <Route path="/machines/maxprinter-p1" component={MaxPrinterP1} />
      <Route path="/machines/maxmark-m2" component={MaxMarkM2} />
      <Route path="/machines/maxpolish-i" component={MaxPolishI} />
      <Route path="/machines/maxpolish-ii" component={MaxPolishII} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
