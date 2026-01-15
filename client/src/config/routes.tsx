import { ComponentType, lazy } from "react";
import Home from "@/pages/Home";
import PlasticsMaterials from "@/pages/PlasticsMaterials";
import Rolls from "@/pages/Rolls";
import Machines from "@/pages/Machines";
import AboutUs from "@/pages/AboutUs";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import Team from "@/pages/Team";
import WhiteLabeling from "@/pages/WhiteLabeling";
import Solutions from "@/pages/Solutions";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/not-found";
import { generateMachineRoutes } from "./machines";

/**
 * Base route interface for Wouter.
 */
export interface Route {
  path: string;
  component: ComponentType | React.LazyExoticComponent<ComponentType>;
}

/**
 * Unified route configuration with metadata and lazy loading support.
 */
export interface RouteConfig {
  /**
   * Route path pattern.
   */
  path: string;
  /**
   * Component to render. Can be a direct import or a lazy import function.
   */
  component: ComponentType | (() => Promise<{ default: ComponentType }>);
  /**
   * Whether this route should be lazy loaded.
   */
  lazy?: boolean;
  /**
   * Page title for SEO and browser tab.
   */
  title: string;
  /**
   * Page description for SEO.
   */
  description?: string;
  /**
   * Whether authentication is required.
   */
  requiresAuth?: boolean;
  /**
   * Additional metadata.
   */
  meta?: {
    /**
     * OpenGraph image URL.
     */
    ogImage?: string;
    /**
     * SEO keywords.
     */
    keywords?: string[];
    /**
     * Whether to preload this route.
     */
    preload?: boolean;
  };
}

/**
 * Type guard to check if a route config uses lazy loading.
 */
export function isLazyRoute(config: RouteConfig): config is RouteConfig & {
  lazy: true;
  component: () => Promise<{ default: ComponentType }>;
} {
  return config.lazy === true;
}

/**
 * Unified route configurations with metadata.
 * This is the single source of truth for all routes.
 */
export const routeConfigs: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    lazy: false,
    title: "Orthodontic Equipment, Materials & White-Label Clear Aligners",
    description:
      "Professional orthodontic manufacturing equipment, materials, and white-label clear aligner production services.",
    meta: {
      keywords: [
        "orthodontic equipment",
        "clear aligners",
        "dental manufacturing",
      ],
      preload: true,
    },
  },
  {
    path: "/machines",
    component: Machines,
    lazy: false,
    title: "Orthodontic Production Equipment",
    description:
      "Professional-grade production equipment for clear aligner manufacturing.",
    meta: {
      keywords: [
        "orthodontic equipment",
        "production machines",
        "aligner manufacturing",
      ],
    },
  },
  {
    path: "/plastics-materials",
    component: PlasticsMaterials,
    lazy: false,
    title: "Aligner Sheet Materials & Consumables",
    description: "High-quality thermoplastic materials for aligner production.",
  },
  {
    path: "/rolls",
    component: Rolls,
    lazy: false,
    title: "Bulk Material Rolls for Aligner Production",
    description:
      "High-volume bulk material rolls for thermoforming production.",
  },
  {
    path: "/about",
    component: AboutUs,
    lazy: false,
    title: "About OrthoVeer",
    description: "Learn about OrthoVeer and our mission.",
  },
  {
    path: "/blog",
    component: Blog,
    lazy: false,
    title: "Blog",
    description: "Latest news and insights from OrthoVeer.",
  },
  {
    path: "/blog/:slug",
    component: () => import("@/pages/BlogPost"),
    lazy: true,
    title: "Blog Post",
    description: "Read our latest blog post.",
  },
  {
    path: "/contact",
    component: Contact,
    lazy: false,
    title: "Contact Us",
    description: "Get in touch with OrthoVeer.",
  },
  {
    path: "/careers",
    component: Careers,
    lazy: false,
    title: "Careers",
    description: "Join the OrthoVeer team.",
  },
  {
    path: "/team",
    component: Team,
    lazy: false,
    title: "Our Team",
    description: "Team member profiles (persons).",
  },
  {
    path: "/white-labeling",
    component: WhiteLabeling,
    lazy: false,
    title: "White-Label Clear Aligner Manufacturing",
    description:
      "Outsource aligner production while maintaining your brand identity.",
  },
  {
    path: "/solutions",
    component: Solutions,
    lazy: false,
    title: "Solutions",
    description: "Complete manufacturing solutions for orthodontic practices.",
  },
  {
    path: "/terms-of-service",
    component: TermsOfService,
    lazy: false,
    title: "Terms of Service",
    description: "Terms and conditions for using OrthoVeer's services.",
  },
  {
    path: "/cookie-policy",
    component: CookiePolicy,
    lazy: false,
    title: "Cookie Policy",
    description: "Learn about how we use cookies on our website.",
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
    lazy: false,
    title: "Privacy Policy",
    description: "Our privacy policy and data protection practices.",
  },
  // Machine pages - generated automatically from machine config
  ...generateMachineRoutes(),
];

/**
 * Generate routes array automatically from routeConfigs.
 * This ensures routes and routeConfigs stay in sync.
 */
export const routes: Route[] = routeConfigs.map((config) => {
  if (isLazyRoute(config)) {
    return {
      path: config.path,
      component: lazy(config.component),
    };
  }
  return {
    path: config.path,
    component: config.component as ComponentType,
  };
});

/**
 * Helper function to get route configuration by path.
 * Handles dynamic routes like /blog/:slug.
 */
export function getRouteConfig(path: string): RouteConfig | undefined {
  return routeConfigs.find((route) => {
    // Handle dynamic routes like /blog/:slug
    if (route.path.includes(":")) {
      const pattern = route.path.replace(/:[^/]+/g, "[^/]+");
      return new RegExp(`^${pattern}$`).test(path);
    }
    return route.path === path;
  });
}

export const notFoundRoute: ComponentType = NotFound;
