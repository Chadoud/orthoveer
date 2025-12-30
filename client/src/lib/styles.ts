/**
 * Reusable style constants and class combinations
 * Centralizes common styling patterns for better maintainability
 */

export const container = "container mx-auto px-6";

export const section = {
  base: "py-20",
  large: "py-24",
  small: "py-12",
} as const;

export const card = {
  base: "bg-white/5 border-white/10",
  hover: "bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300",
  glass: "bg-white/5 backdrop-blur-md border border-white/10 shadow-xl",
} as const;

export const badge = {
  primary: "px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase",
  dot: "w-2 h-2 rounded-full bg-primary animate-pulse",
} as const;

export const link = {
  nav: "text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2",
  navMobile: "text-lg font-medium text-gray-300",
} as const;

export const button = {
  primary: "bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium",
  primarySmall: "bg-primary hover:bg-primary/90 text-white rounded-full px-6",
  ghost: "text-primary hover:text-white hover:bg-primary/10",
} as const;

export const heading = {
  h1: "font-heading text-5xl md:text-6xl font-bold text-white leading-tight",
  h2: "text-3xl md:text-4xl font-bold text-white font-heading",
  h3: "text-2xl font-bold text-white font-heading",
} as const;

export const text = {
  description: "text-xl text-gray-400 leading-relaxed",
  body: "text-gray-300 leading-relaxed",
  muted: "text-gray-400 text-sm",
  small: "text-sm text-gray-500",
} as const;

export const gradient = {
  textPrimary: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400",
  overlay: "bg-gradient-to-br from-primary/20 via-background/80 to-background/90",
  overlaySide: "bg-gradient-to-r from-background via-background/70 to-transparent",
} as const;

export const spacing = {
  gap: {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8",
    xl: "gap-12",
  },
  margin: {
    small: "mb-4",
    medium: "mb-6",
    large: "mb-8",
    xl: "mb-12",
  },
} as const;

