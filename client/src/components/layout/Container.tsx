import { cn } from "@/lib/utils";
import { container } from "@/lib/styles";
import type { ContainerMaxWidth } from "@/lib/styles/types";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: ContainerMaxWidth;
}

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
  default: "",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
};

/**
 * Container component for consistent page layout
 * 
 * Replaces all instances of "container mx-auto px-6" with a reusable component.
 * Supports max-width variants for content width control.
 * 
 * @example
 * ```tsx
 * <Container>
 *   <h1>Content</h1>
 * </Container>
 * 
 * <Container maxWidth="4xl">
 *   <article>Narrow content</article>
 * </Container>
 * ```
 */
export function Container({
  children,
  className,
  maxWidth = "default",
}: ContainerProps) {
  return (
    <div className={cn(container, maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  );
}

