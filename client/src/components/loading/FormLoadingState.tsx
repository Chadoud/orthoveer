/**
 * Form-specific loading state component.
 * Displays skeleton loaders for form fields.
 */

import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { Card } from "@/components/ui/card";

interface FormLoadingStateProps {
  /**
   * Number of fields to show skeletons for.
   */
  fieldCount?: number;
  /**
   * Whether to show button skeleton.
   */
  showButton?: boolean;
}

/**
 * Form loading state component.
 * Shows skeleton placeholders for form fields.
 *
 * @example
 * <FormLoadingState fieldCount={5} showButton />
 */
export function FormLoadingState({
  fieldCount = 4,
  showButton = true,
}: FormLoadingStateProps) {
  return (
    <Card className="bg-white/5 border-white/10 p-8 md:p-12">
      <div className="space-y-6">
        {/* Title skeleton */}
        <div className="space-y-2">
          <SkeletonLoader width="w-48" height="h-8" />
          <SkeletonLoader width="w-64" height="h-4" />
        </div>

        {/* Form fields skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: fieldCount }).map((_, i) => (
            <div key={i} className="space-y-2">
              <SkeletonLoader width="w-24" height="h-4" />
              <SkeletonLoader width="w-full" height="h-10" />
            </div>
          ))}
        </div>

        {/* Message field skeleton */}
        <div className="space-y-2">
          <SkeletonLoader width="w-24" height="h-4" />
          <SkeletonLoader width="w-full" height="h-32" />
        </div>

        {/* Button skeleton */}
        {showButton && (
          <div className="flex justify-end">
            <SkeletonLoader width="w-32" height="h-10" />
          </div>
        )}
      </div>
    </Card>
  );
}
