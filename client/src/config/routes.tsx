import { ComponentType } from "react";
import Home from "@/pages/Home";
import PlasticsMaterials from "@/pages/PlasticsMaterials";
import Rolls from "@/pages/Rolls";
import Machines from "@/pages/Machines";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CaseStudies from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import Team from "@/pages/Team";
import WhiteLabeling from "@/pages/WhiteLabeling";
import Solutions from "@/pages/Solutions";
import MaxTrimT2 from "@/pages/machines/MaxTrimT2";
import MaxTrimT1 from "@/pages/machines/MaxTrimT1";
import MaxFormL2 from "@/pages/machines/MaxFormL2";
import MaxScanS1 from "@/pages/machines/MaxScanS1";
import MaxPrinterP2 from "@/pages/machines/MaxPrinterP2";
import MaxPrinterP1 from "@/pages/machines/MaxPrinterP1";
import MaxMarkM2 from "@/pages/machines/MaxMarkM2";
import MaxPolishI from "@/pages/machines/MaxPolishI";
import MaxPolishII from "@/pages/machines/MaxPolishII";
import NotFound from "@/pages/not-found";

export interface Route {
  path: string;
  component: ComponentType;
}

export const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/plastics-materials", component: PlasticsMaterials },
  { path: "/rolls", component: Rolls },
  { path: "/machines", component: Machines },
  { path: "/about", component: AboutUs },
  { path: "/blog", component: Blog },
  { path: "/blog/:slug", component: BlogPost },
  { path: "/case-studies", component: CaseStudies },
  { path: "/contact", component: Contact },
  { path: "/careers", component: Careers },
  { path: "/team", component: Team },
  { path: "/white-labeling", component: WhiteLabeling },
  { path: "/solutions", component: Solutions },
  { path: "/machines/maxtrim-t2", component: MaxTrimT2 },
  { path: "/machines/maxtrim-t1", component: MaxTrimT1 },
  { path: "/machines/maxform-l2", component: MaxFormL2 },
  { path: "/machines/maxscan-s1", component: MaxScanS1 },
  { path: "/machines/maxprinter-p2", component: MaxPrinterP2 },
  { path: "/machines/maxprinter-p1", component: MaxPrinterP1 },
  { path: "/machines/maxmark-m2", component: MaxMarkM2 },
  { path: "/machines/maxpolish-i", component: MaxPolishI },
  { path: "/machines/maxpolish-ii", component: MaxPolishII },
];

export const notFoundRoute: ComponentType = NotFound;
