/**
 * Reusable skeleton loader component.
 * Used for loading states while content is being fetched.
 */

import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the skeleton.
   * Can be a Tailwind class or specific value.
   */
  width?: string;
  /**
   * Height of the skeleton.
   * Can be a Tailwind class or specific value.
   */
  height?: string;
  /**
   * Whether the skeleton is circular (for avatars, etc.).
   */
  circle?: boolean;
  /**
   * Number of lines for text skeleton.
   */
  lines?: number;
}

/**
 * Skeleton loader component.
 * Displays an animated placeholder while content loads.
 *
 * @example
 * <SkeletonLoader width="w-64" height="h-8" />
 * <SkeletonLoader circle width="w-16" height="h-16" />
 * <SkeletonLoader lines={3} />
 */
export function SkeletonLoader({
  className,
  width,
  height,
  circle = false,
  lines,
  ...props
}: SkeletonProps) {
  if (lines && lines > 0) {
    return (
      <div className={cn("space-y-2", className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 bg-white/10 rounded animate-pulse",
              i === lines - 1 ? "w-3/4" : "w-full"
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white/10 rounded animate-pulse",
        circle && "rounded-full",
        width || "w-full",
        height || "h-4",
        className
      )}
      {...props}
    />
  );
}

