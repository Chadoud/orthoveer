/**
 * Error fallback UI component.
 * Displayed when an error boundary catches an error.
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "wouter";

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
  errorInfo?: {
    componentStack?: string;
  };
}

/**
 * Error fallback component.
 * Provides user-friendly error display with recovery options.
 *
 * @param error - The error that occurred
 * @param resetError - Function to reset the error boundary
 * @param errorInfo - Additional error information
 */
export function ErrorFallback({
  error,
  resetError,
  errorInfo,
}: ErrorFallbackProps) {
  const isDevelopment = import.meta.env.DEV;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-2xl w-full p-8 bg-white/5 border-white/10">
        <div className="text-center mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2 font-heading">
            Something went wrong
          </h1>
          <p className="text-gray-400">
            We're sorry, but something unexpected happened. Please try again.
          </p>
        </div>

        {isDevelopment && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm font-semibold text-red-400 mb-2">
              Development Error Details:
            </p>
            <p className="text-sm text-gray-300 font-mono mb-2">
              {error.name}: {error.message}
            </p>
            {error.stack && (
              <details className="mt-2">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                  Stack Trace
                </summary>
                <pre className="mt-2 text-xs text-gray-400 overflow-auto max-h-48 p-2 bg-black/20 rounded">
                  {error.stack}
                </pre>
              </details>
            )}
            {errorInfo?.componentStack && (
              <details className="mt-2">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                  Component Stack
                </summary>
                <pre className="mt-2 text-xs text-gray-400 overflow-auto max-h-48 p-2 bg-black/20 rounded">
                  {errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={resetError}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            If this problem persists, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact support
            </Link>
            .
          </p>
        </div>
      </Card>
    </div>
  );
}

