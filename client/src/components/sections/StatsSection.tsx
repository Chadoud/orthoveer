import { Section } from "@/components/layout/Section";
import { patterns } from "@/lib/styles/patterns";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
  border?: boolean;
}

/**
 * StatsSection component for displaying statistics/trust indicators
 * 
 * Reusable component for stats sections used across pages.
 * Uses Section and patterns from the style system.
 * 
 * @example
 * ```tsx
 * <StatsSection
 *   stats={[
 *     { label: "Partner Clinics", value: "500+" },
 *     { label: "Aligners Produced", value: "2M+" },
 *   ]}
 * />
 * ```
 */
export function StatsSection({ stats, className, border = false }: StatsSectionProps) {
  return (
    <Section
      className={cn("border-b border-white/5", !border && "border-b-0", className)}
    >
      <div className={patterns.statsGrid}>
        {stats.map((stat, i) => (
          <div key={i} className={patterns.statItem}>
            <div className={patterns.statValue}>{stat.value}</div>
            <div className={patterns.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

