/**
 * Design System Style Constants
 * 
 * Centralized style system for consistent, maintainable styling across the application.
 * 
 * @module styles
 * 
 * @example
 * ```tsx
 * import { container, section, card } from "@/lib/styles";
 * import { cn } from "@/lib/utils";
 * 
 * <div className={cn(container)}>
 *   <section className={cn(section.base, "bg-secondary/20")}>
 *     <Card className={cn(card.base, "p-6")} />
 *   </section>
 * </div>
 * ```
 */

import { sectionVariants, cardVariants, badgeVariants, buttonVariants, headingVariants, textVariants, linkVariants } from "./variants";

/**
 * Standard container class
 * Provides consistent horizontal padding and max-width centering
 */
export const container = "container mx-auto px-6";

/**
 * Section spacing variants
 * Use for consistent vertical spacing in sections
 */
export const section = sectionVariants;

/**
 * Card style variants
 * Use for card components with different visual styles
 */
export const card = cardVariants;

/**
 * Badge style variants
 * Use for badge components and labels
 */
export const badge = badgeVariants;

/**
 * Button style variants
 * Use for button components (note: UI Button component has its own variants)
 */
export const button = buttonVariants;

/**
 * Heading style variants
 * Use for consistent heading typography
 */
export const heading = headingVariants;

/**
 * Text style variants
 * Use for consistent body text styling
 */
export const text = textVariants;

/**
 * Link style variants
 * Use for navigation and text links
 */
export const link = linkVariants;

/**
 * Spacing utilities
 * Use for consistent gap and margin spacing
 */
export const spacing = {
  gap: {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8",
    xl: "gap-12",
  },
  margin: {
    xs: "mb-2",
    small: "mb-4",
    medium: "mb-6",
    large: "mb-8",
    xl: "mb-10",
    "2xl": "mb-12",
    "3xl": "mb-16",
  },
  padding: {
    xs: "p-2",
    small: "p-4",
    medium: "p-6",
    large: "p-8",
    xl: "p-10",
    "2xl": "p-12",
  },
} as const;

// Re-export types for convenience
export type {
  SectionSize,
  CardVariant,
  BadgeVariant,
  ButtonVariant,
  HeadingLevel,
  TextVariant,
  LinkVariant,
  Size,
  SpacingSize,
  ContainerMaxWidth,
  SectionBackground,
} from "./types";

// Export patterns
export { patterns } from "./patterns";

