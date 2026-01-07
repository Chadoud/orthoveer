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
 * import { containerClass, sectionClass } from "@/lib/cn-utils";
 * 
 * <div className={containerClass("relative", "z-10")}>
 *   <section className={sectionClass("base", "bg-secondary/20")}>
 *   </section>
 * </div>
 * ```
 */

import { cn } from "./utils";
import type { StyleClass, SectionSize } from "./styles/types";
import { container, section } from "./styles/index";

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
