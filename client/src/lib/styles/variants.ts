/**
 * Component style variants using a consistent pattern
 * Each variant object follows the same structure for maintainability
 */

import type {
  SectionSize,
  CardVariant,
  BadgeVariant,
  ButtonVariant,
  HeadingLevel,
  TextVariant,
  LinkVariant,
} from "./types";

/**
 * Section spacing variants
 */
export const sectionVariants: Record<SectionSize, string> = {
  base: "py-20",
  large: "py-24",
  small: "py-12",
} as const;

/**
 * Card style variants
 */
export const cardVariants: Record<CardVariant, string> = {
  base: "card-base",
  hover: "card-hover",
  glass: "card-glass",
} as const;

/**
 * Badge style variants
 */
export const badgeVariants: Record<BadgeVariant, string> = {
  primary: "badge-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
  secondary: "badge-secondary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
  dot: "w-2 h-2 rounded-full bg-primary animate-pulse",
} as const;

/**
 * Button style variants
 */
export const buttonVariants: Record<ButtonVariant, string> = {
  primary: "btn-primary rounded-full px-8 h-12 text-base font-medium",
  primarySmall: "btn-primary rounded-full px-6",
  ghost: "text-primary hover:text-white hover:bg-primary/10",
} as const;

/**
 * Heading style variants
 */
export const headingVariants: Record<HeadingLevel, string> = {
  h1: "font-heading text-5xl md:text-6xl font-bold text-white leading-tight",
  h2: "text-3xl md:text-4xl font-bold text-white font-heading",
  h3: "text-2xl font-bold text-white font-heading",
  h4: "text-xl font-bold text-white font-heading",
  h5: "text-lg font-bold text-white font-heading",
  h6: "text-base font-bold text-white font-heading",
} as const;

/**
 * Text style variants
 */
export const textVariants: Record<TextVariant, string> = {
  description: "sm:text-xl text-sm text-gray-400 leading-relaxed",
  body: "text-gray-300 leading-relaxed",
  muted: "text-gray-400 text-sm",
  small: "text-sm text-gray-500",
  cardText: "text-gray-400 leading-relaxed",
} as const;

/**
 * Link style variants
 */
export const linkVariants: Record<LinkVariant, string> = {
  nav: "text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2",
  navMobile: "text-lg font-medium text-gray-300",
} as const;

