/**
 * Utility functions for combining class names with style constants
 * 
 * Provides type-safe, composable functions for applying design system styles.
 * All functions accept additional classes that will be merged with the base styles.
 * 
 * @module cn-utils
 * 
 * @example
 * ```tsx
 * import { containerClass, sectionClass, cardClass } from "@/lib/cn-utils";
 * 
 * <div className={containerClass("relative", "z-10")}>
 *   <section className={sectionClass("base", "bg-secondary/20")}>
 *     <Card className={cardClass("base", "p-6")} />
 *   </section>
 * </div>
 * ```
 */

import { cn } from "./utils";
import type { StyleClass } from "./styles/types";
import {
  container,
  section,
  card,
  badge,
  link,
  button,
  heading,
  text,
  type SectionSize,
  type CardVariant,
  type BadgeVariant,
  type ButtonVariant,
  type HeadingLevel,
  type TextVariant,
  type LinkVariant,
} from "./styles/index";

/**
 * Combines container classes with additional classes
 * 
 * @param classes - Additional classes to merge with container styles
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <div className={containerClass("relative", "z-10")} />
 * ```
 */
export function containerClass(...classes: StyleClass[]): string {
  return cn(container, ...classes);
}

/**
 * Combines section classes with additional classes
 * 
 * @param size - Section size variant (default: "base")
 * @param classes - Additional classes to merge
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <section className={sectionClass("large", "bg-secondary/20")} />
 * ```
 */
export function sectionClass(
  size: SectionSize = "base",
  ...classes: StyleClass[]
): string {
  return cn(section[size], ...classes);
}

/**
 * Combines card classes with additional classes
 * 
 * @param variant - Card variant (default: "base")
 * @param classes - Additional classes to merge
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <Card className={cardClass("hover", "p-6")} />
 * ```
 */
export function cardClass(
  variant: CardVariant = "base",
  ...classes: StyleClass[]
): string {
  return cn(card[variant], ...classes);
}

/**
 * Combines badge classes with additional classes
 * 
 * @param variant - Badge variant (default: "primary")
 * @param classes - Additional classes to merge
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <Badge className={badgeClass("primary", "ml-2")} />
 * ```
 */
export function badgeClass(
  variant: BadgeVariant = "primary",
  ...classes: StyleClass[]
): string {
  return cn(badge[variant], ...classes);
}

/**
 * Combines link classes with additional classes
 * 
 * @param variant - Link variant (default: "nav")
 * @param classes - Additional classes to merge
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <a className={linkClass("nav", "font-bold")} />
 * ```
 */
export function linkClass(
  variant: LinkVariant = "nav",
  ...classes: StyleClass[]
): string {
  return cn(link[variant], ...classes);
}

/**
 * Combines button classes with additional classes
 * 
 * Note: For UI Button component, use the component's variant prop instead.
 * This is for custom button styling.
 * 
 * @param variant - Button variant (default: "primary")
 * @param classes - Additional classes to merge
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <button className={buttonClass("primary", "w-full")} />
 * ```
 */
export function buttonClass(
  variant: ButtonVariant = "primary",
  ...classes: StyleClass[]
): string {
  return cn(button[variant], ...classes);
}

/**
 * Combines heading classes with additional classes
 * 
 * @param variant - Heading level (default: "h1")
 * @param classes - Additional classes to merge
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <h1 className={headingClass("h1", "mb-4")} />
 * ```
 */
export function headingClass(
  variant: HeadingLevel = "h1",
  ...classes: StyleClass[]
): string {
  return cn(heading[variant], ...classes);
}

/**
 * Combines text classes with additional classes
 * 
 * @param variant - Text variant (default: "body")
 * @param classes - Additional classes to merge
 * @returns Combined class string
 * 
 * @example
 * ```tsx
 * <p className={textClass("description", "mb-6")} />
 * ```
 */
export function textClass(
  variant: TextVariant = "body",
  ...classes: StyleClass[]
): string {
  return cn(text[variant], ...classes);
}

