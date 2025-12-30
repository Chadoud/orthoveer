/**
 * Utility functions for combining class names with style constants
 */
import { cn } from "./utils";
import { container, section, card, badge, link, button, heading, text, gradient, spacing } from "./styles";

/**
 * Combines container classes with additional classes
 */
export function containerClass(...classes: (string | undefined | false)[]) {
  return cn(container, ...classes);
}

/**
 * Combines section classes with additional classes
 */
export function sectionClass(size: keyof typeof section = "base", ...classes: (string | undefined | false)[]) {
  return cn(section[size], ...classes);
}

/**
 * Combines card classes with additional classes
 */
export function cardClass(variant: keyof typeof card = "base", ...classes: (string | undefined | false)[]) {
  return cn(card[variant], ...classes);
}

/**
 * Combines badge classes with additional classes
 */
export function badgeClass(variant: keyof typeof badge = "primary", ...classes: (string | undefined | false)[]) {
  return cn(badge[variant], ...classes);
}

/**
 * Combines link classes with additional classes
 */
export function linkClass(variant: keyof typeof link = "nav", ...classes: (string | undefined | false)[]) {
  return cn(link[variant], ...classes);
}

/**
 * Combines button classes with additional classes
 */
export function buttonClass(variant: keyof typeof button = "primary", ...classes: (string | undefined | false)[]) {
  return cn(button[variant], ...classes);
}

/**
 * Combines heading classes with additional classes
 */
export function headingClass(variant: keyof typeof heading = "h1", ...classes: (string | undefined | false)[]) {
  return cn(heading[variant], ...classes);
}

/**
 * Combines text classes with additional classes
 */
export function textClass(variant: keyof typeof text = "body", ...classes: (string | undefined | false)[]) {
  return cn(text[variant], ...classes);
}

/**
 * Combines gradient classes with additional classes
 */
export function gradientClass(variant: keyof typeof gradient = "textPrimary", ...classes: (string | undefined | false)[]) {
  return cn(gradient[variant], ...classes);
}

