/**
 * Design tokens for consistent spacing, colors, and styling
 * These can be used in both CSS and TypeScript
 */

export const tokens = {
  spacing: {
    xs: "0.5rem",    // 8px
    sm: "0.75rem",   // 12px
    md: "1rem",      // 16px
    lg: "1.5rem",    // 24px
    xl: "2rem",      // 32px
    "2xl": "3rem",   // 48px
    "3xl": "4rem",   // 64px
    "4xl": "5rem",   // 80px
  },
  
  borderRadius: {
    sm: "0.25rem",   // 4px
    md: "0.5rem",    // 8px
    lg: "0.75rem",   // 12px
    xl: "1rem",      // 16px
    full: "9999px",
  },
  
  opacity: {
    subtle: "0.05",
    light: "0.10",
    medium: "0.20",
    strong: "0.50",
    heavy: "0.80",
  },
  
  transition: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
  },
  
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

/**
 * Common component dimensions
 */
export const dimensions = {
  navbar: {
    height: {
      default: "5rem",  // 80px
      scrolled: "4rem", // 64px
    },
  },
  button: {
    height: {
      sm: "2rem",   // 32px
      md: "2.5rem", // 40px
      lg: "3rem",   // 48px
    },
  },
  logo: {
    size: "2.5rem", // 40px
  },
} as const;

