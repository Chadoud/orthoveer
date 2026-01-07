/**
 * Page transition loading state component.
 * Displays loading indicator during route changes.
 */

import { Loader2 } from "lucide-react";

interface PageLoadingStateProps {
  /**
   * Loading message to display.
   */
  message?: string;
}

/**
 * Page loading state component.
 * Shows a loading spinner during page transitions.
 *
 * @example
 * <PageLoadingState message="Loading page..." />
 */
export function PageLoadingState({
  message = "Loading...",
}: PageLoadingStateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
        <p className="text-gray-400">{message}</p>
      </div>
    </div>
  );
}

