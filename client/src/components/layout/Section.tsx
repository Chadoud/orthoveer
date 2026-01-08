import { cn } from "@/lib/utils";
import { section, type SectionSize } from "@/lib/styles";
import type { SectionBackground } from "@/lib/styles/types";
import { Container } from "./Container";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  size?: SectionSize;
  background?: SectionBackground;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: "section" | "article" | "div";
}

const backgroundClasses: Record<SectionBackground, string> = {
  default: "",
  subtle: "bg-secondary/20",
  primary: "bg-primary",
};

/**
 * Section component for consistent page sections
 * 
 * Replaces section spacing patterns with a reusable component.
 * Automatically wraps content in a Container component.
 * 
 * @example
 * ```tsx
 * <Section>
 *   <h2>Section Title</h2>
 * </Section>
 * 
 * <Section size="large" background="subtle">
 *   <h2>Large section with background</h2>
 * </Section>
 * ```
 */
export function Section({
  children,
  size = "base",
  background = "default",
  className,
  containerClassName,
  id,
  as = "section",
}: SectionProps) {
  const Tag = as;
  return (
    <Tag
      id={id}
      className={cn(
        section[size],
        backgroundClasses[background],
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </Tag>
  );
}

