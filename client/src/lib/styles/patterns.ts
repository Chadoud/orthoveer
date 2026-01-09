/**
 * Common layout patterns used across pages
 * 
 * These patterns provide reusable class combinations for common UI patterns
 * to ensure consistency and reduce duplication.
 * 
 * @module patterns
 */

/**
 * Common layout patterns
 */
export const patterns = {
  // Stats/Trust section pattern
  statsGrid: "grid grid-cols-2 md:grid-cols-4 gap-8",
  statItem: "text-center md:text-left",
  statValue: "text-4xl font-bold text-white mb-2 font-heading tracking-tight",
  statLabel: "text-sm text-gray-500 uppercase tracking-wider font-semibold",
  
  // Feature card pattern
  featureCard: "p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col cursor-pointer",
  featureIcon: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors",
  featureTitle: "text-xl font-bold text-white mb-3 font-heading",
  featureDescription: "text-gray-400 leading-relaxed mb-6 flex-1",
  featureLink: "flex items-center text-primary text-sm font-semibold hover:text-white transition-colors",
  
  // Hero pattern
  heroOverlay: "absolute inset-0 z-0 bg-background/60",
  heroContent: "relative z-10",
  heroSection: "relative min-h-[100vh] flex items-center pt-12 overflow-hidden",
  heroVideo: "w-full h-full object-cover",
  heroVideoContainer: "absolute inset-0 z-0",
  
  // Image container pattern
  imageContainer: "relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl",
  
  // Badge pattern (with dot)
  badgeWithDot: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase",
  badgeDot: "w-2 h-2 rounded-full bg-primary animate-pulse",
  
  // Card base styling (most common card pattern)
  cardBase: "bg-white/5 border-white/10",
  cardHover: "hover:border-primary/50 transition-all duration-300",
  cardFull: "bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300",
  
  // Section header pattern (centered with margin)
  sectionHeader: "text-center mb-16",
  
  // Centered content with max-width
  centeredContent: "max-w-xl mx-auto",
  centeredContentMd: "max-w-2xl mx-auto",
  centeredContentLg: "max-w-3xl mx-auto",
  centeredContentXl: "max-w-4xl mx-auto",
  
  // Primary text link pattern
  linkPrimary: "text-primary text-sm font-semibold",
  
  // Badge without dot (simple badge)
  badgeSimple: "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide",
} as const;

