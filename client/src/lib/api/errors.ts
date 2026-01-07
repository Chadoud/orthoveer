/**
 * API-specific error handling utilities.
 */

import { ApiError, ApiErrorCode, type ApiResponse } from "./types";

/**
 * Parse error from API response.
 *
 * @param response - API response
 * @param statusCode - HTTP status code
 * @returns Parsed API error
 */
export function parseApiError(
  response: ApiResponse,
  statusCode: number
): ApiError {
  const errorMessage =
    response.error?.message || "An unexpected error occurred";
  const errorCode = response.error?.code || getErrorCodeFromStatus(statusCode);

  return new ApiError(
    errorMessage,
    errorCode as ApiErrorCode,
    statusCode,
    response.error?.details
  );
}

/**
 * Get error code from HTTP status code.
 *
 * @param statusCode - HTTP status code
 * @returns Error code
 */
function getErrorCodeFromStatus(statusCode: number): ApiErrorCode {
  if (statusCode >= 400 && statusCode < 500) {
    if (statusCode === 401) return ApiErrorCode.Unauthorized;
    if (statusCode === 403) return ApiErrorCode.Forbidden;
    if (statusCode === 404) return ApiErrorCode.NotFound;
    if (statusCode === 422) return ApiErrorCode.ValidationError;
    if (statusCode === 429) return ApiErrorCode.RateLimited;
  }

  if (statusCode >= 500) {
    return ApiErrorCode.ServerError;
  }

  return ApiErrorCode.Unknown;
}

/**
 * Create network error.
 *
 * @param message - Error message
 * @returns Network error
 */
export function createNetworkError(message: string = "Network request failed"): ApiError {
  return new ApiError(message, ApiErrorCode.NetworkError);
}

/**
 * Create timeout error.
 *
 * @param message - Error message
 * @returns Timeout error
 */
export function createTimeoutError(message: string = "Request timeout"): ApiError {
  return new ApiError(message, ApiErrorCode.Timeout);
}

