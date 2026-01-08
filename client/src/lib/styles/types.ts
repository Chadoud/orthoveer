/**
 * Type definitions for the design system
 * Provides type safety for style variants and utilities
 */

/**
 * Size variants for components
 */
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Spacing variants
 */
export type SpacingSize = "small" | "medium" | "large" | "xl";

/**
 * Section size variants
 */
export type SectionSize = "base" | "large" | "small";

/**
 * Card variant types
 */
export type CardVariant = "base" | "hover" | "glass";

/**
 * Badge variant types
 */
export type BadgeVariant = "primary" | "secondary" | "dot";

/**
 * Button variant types
 */
export type ButtonVariant = "primary" | "primarySmall" | "ghost";

/**
 * Heading level types
 */
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Text variant types
 */
export type TextVariant = "description" | "body" | "muted" | "small" | "cardText";

/**
 * Link variant types
 */
export type LinkVariant = "nav" | "navMobile";

/**
 * Utility type for extracting keys from style objects
 */
export type StyleKey<T> = keyof T;

/**
 * Utility type for style class combinations
 */
export type StyleClass = string | undefined | false | null;

/**
 * Container max-width variants
 */
export type ContainerMaxWidth = "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl";

/**
 * Section background variants
 */
export type SectionBackground = "default" | "subtle" | "primary";

