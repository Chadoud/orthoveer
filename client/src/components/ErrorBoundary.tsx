/**
 * Error Boundary component.
 * Catches React errors in child components and displays fallback UI.
 */

import { Component, type ReactNode, type ErrorInfo } from "react";
import { ErrorFallback } from "./ErrorFallback";
import { logError, ErrorSeverity } from "@/lib/errors/ErrorLogger";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, resetError: () => void) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  level?: ErrorSeverity;
  errorBoundaryName?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component.
 * Catches errors in child components and displays fallback UI.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const context = {
      componentStack: errorInfo.componentStack || undefined,
      errorBoundary: this.props.errorBoundaryName || "ErrorBoundary",
      timestamp: new Date().toISOString(),
    };

    const severity = this.props.level || ErrorSeverity.High;
    logError(error, errorInfo, context, severity);

    // Call optional error callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetError = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.resetError);
      }

      return (
        <ErrorFallback error={this.state.error} resetError={this.resetError} />
      );
    }

    return this.props.children;
  }
}
