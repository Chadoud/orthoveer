/**
 * API request and response types.
 */

/**
 * Base API response structure.
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
  meta?: {
    timestamp?: string;
    requestId?: string;
  };
}

/**
 * Contact form submission request.
 */
export interface ContactFormRequest {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  productService?: string;
  machine?: string;
  quantity?: string;
  message?: string;
}

/**
 * Contact form submission response.
 */
export interface ContactFormResponse {
  id: string;
  submittedAt: string;
  message: string;
}

/**
 * Career application form submission request.
 */
export interface CareerApplicationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter?: string;
  cv?: File;
}

/**
 * Career application form submission response.
 */
export interface CareerApplicationResponse {
  id: string;
  submittedAt: string;
  message: string;
}

/**
 * API error codes.
 */
export enum ApiErrorCode {
  NetworkError = "NETWORK_ERROR",
  Timeout = "TIMEOUT",
  ValidationError = "VALIDATION_ERROR",
  ServerError = "SERVER_ERROR",
  Unauthorized = "UNAUTHORIZED",
  Forbidden = "FORBIDDEN",
  NotFound = "NOT_FOUND",
  RateLimited = "RATE_LIMITED",
  CircuitBreakerOpen = "CIRCUIT_BREAKER_OPEN",
  Unknown = "UNKNOWN",
}

/**
 * API error class.
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public code: ApiErrorCode,
    public statusCode?: number,
    public details?: unknown
  ) {
    super(message);
    this.name = "ApiError";
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  /**
   * Check if error is recoverable (can be retried).
   */
  isRecoverable(): boolean {
    return (
      this.code === ApiErrorCode.NetworkError ||
      this.code === ApiErrorCode.Timeout ||
      this.code === ApiErrorCode.ServerError ||
      (this.statusCode !== undefined &&
        this.statusCode >= 500 &&
        this.statusCode < 600)
    );
  }
}

