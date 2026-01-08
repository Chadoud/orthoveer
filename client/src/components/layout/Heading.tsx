import { cn } from "@/lib/utils";
import { heading, type HeadingLevel } from "@/lib/styles";
import { ReactNode } from "react";

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  className?: string;
  highlight?: string;
}

const HeadingTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

/**
 * Heading component for standardized headings
 * 
 * Uses heading variants from the style system for consistency.
 * Supports highlight text that will be rendered in primary color.
 * 
 * @example
 * ```tsx
 * <Heading level="h1">Main Title</Heading>
 * 
 * <Heading level="h2" highlight="Equipment">
 *   Production Equipment
 * </Heading>
 * ```
 */
export function Heading({ level, children, className, highlight }: HeadingProps) {
  const Tag = HeadingTag[level] as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={cn(heading[level], className)}>
      {children}
      {highlight && <span className="text-primary"> {highlight}</span>}
    </Tag>
  );
}

