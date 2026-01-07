/**
 * Core API client with retry logic, error handling, and interceptors.
 */

import {
  ApiError,
  ApiErrorCode,
  type ApiResponse,
  type ContactFormRequest,
  type ContactFormResponse,
  type CareerApplicationRequest,
  type CareerApplicationResponse,
} from "./types";
import {
  parseApiError,
  createNetworkError,
  createTimeoutError,
} from "./errors";
import { contactEndpoint } from "./endpoints/contact";
import { careersEndpoint } from "./endpoints/careers";
import { requestCache } from "./cache";
import { requestDeduplicator } from "./deduplication";
import { circuitBreakerManager } from "./circuit-breaker";
import { healthMonitor } from "../monitoring/health";

/**
 * Request configuration.
 */
export interface RequestConfig extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

/**
 * Default request configuration.
 */
const DEFAULT_CONFIG: RequestConfig = {
  timeout: 10000, // 10 seconds
  retries: 2,
  retryDelay: 1000, // 1 second
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Request interceptor type.
 */
export type RequestInterceptor = (
  url: string,
  config: RequestConfig
) => Promise<[string, RequestConfig]> | [string, RequestConfig];

/**
 * Response interceptor type.
 */
export type ResponseInterceptor = <T>(
  response: Response,
  data: ApiResponse<T>
) => Promise<ApiResponse<T>> | ApiResponse<T>;

/**
 * Error interceptor type.
 */
export type ErrorInterceptor = (error: ApiError) => Promise<ApiError> | ApiError;

/**
 * API client class.
 */
class ApiClient {
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private errorInterceptors: ErrorInterceptor[] = [];

  /**
   * Add request interceptor.
   */
  addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor);
  }

  /**
   * Add response interceptor.
   */
  addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor);
  }

  /**
   * Add error interceptor.
   */
  addErrorInterceptor(interceptor: ErrorInterceptor): void {
    this.errorInterceptors.push(interceptor);
  }

  /**
   * Execute request interceptors.
   */
  private async executeRequestInterceptors(
    url: string,
    config: RequestConfig
  ): Promise<[string, RequestConfig]> {
    let currentUrl = url;
    let currentConfig = config;

    for (const interceptor of this.requestInterceptors) {
      [currentUrl, currentConfig] = await interceptor(currentUrl, currentConfig);
    }

    return [currentUrl, currentConfig];
  }

  /**
   * Execute response interceptors.
   */
  private async executeResponseInterceptors<T>(
    response: Response,
    data: ApiResponse<T>
  ): Promise<ApiResponse<T>> {
    let currentData = data;

    for (const interceptor of this.responseInterceptors) {
      currentData = await interceptor(response, currentData);
    }

    return currentData;
  }

  /**
   * Execute error interceptors.
   */
  private async executeErrorInterceptors(error: ApiError): Promise<ApiError> {
    let currentError = error;

    for (const interceptor of this.errorInterceptors) {
      currentError = await interceptor(currentError);
    }

    return currentError;
  }

  /**
   * Make HTTP request with retry logic, caching, and deduplication.
   *
   * @param url - Request URL
   * @param config - Request configuration
   * @returns API response
   */
  private async request<T>(
    url: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const finalConfig = { ...DEFAULT_CONFIG, ...config };
    const [finalUrl, finalRequestConfig] = await this.executeRequestInterceptors(
      url,
      finalConfig
    );

    // Generate cache and deduplication keys
    const method = finalRequestConfig.method || "GET";
    const cacheKey = requestCache.generateKey(finalUrl, method, finalRequestConfig.body);
    const dedupeKey = requestDeduplicator.generateKey(finalUrl, method, finalRequestConfig.body);

    // Check for cached response (GET requests only)
    if (method === "GET" || !method) {
      const cached = requestCache.get<ApiResponse<T>>(cacheKey);
      if (cached && "success" in cached) {
        return cached;
      }
    }

    // Check for pending duplicate request
    const pending = requestDeduplicator.getPending<ApiResponse<T>>(dedupeKey);
    if (pending) {
      return pending;
    }

    // Get circuit breaker for this endpoint
    const breaker = circuitBreakerManager.getBreaker(finalUrl);

    // Create request promise wrapped with circuit breaker
    const requestPromise = breaker.execute(() =>
      this.makeRequest<T>(finalUrl, finalRequestConfig)
    );

    // Register as pending for deduplication
    requestDeduplicator.setPending(dedupeKey, requestPromise);

    try {
      const response = await requestPromise;

      // Cache successful GET responses
      if ((method === "GET" || !method) && response.success) {
        requestCache.set(cacheKey, response);
      }

      return response;
    } finally {
      // Cleanup is handled by deduplicator automatically
    }
  }

  /**
   * Internal method to make HTTP request with retry logic.
   *
   * @param url - Request URL
   * @param config - Request configuration
   * @returns API response
   */
  private async makeRequest<T>(
    url: string,
    config: RequestConfig
  ): Promise<ApiResponse<T>> {
    // Apply health-based throttling
    const throttlingFactor = healthMonitor.getThrottlingFactor();
    if (throttlingFactor < 1.0 && Math.random() > throttlingFactor) {
      // Skip request due to throttling
      throw new ApiError(
        "Request throttled due to system health",
        ApiErrorCode.ServerError
      );
    }

    const startTime = performance.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      config.timeout
    );

    let lastError: ApiError | null = null;
    const maxAttempts = (config.retries || 0) + 1;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await fetch(url, {
          ...config,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        const data = (await response.json()) as ApiResponse<T>;

        // Execute response interceptors
        const processedData = await this.executeResponseInterceptors(
          response,
          data
        );

        const latency = performance.now() - startTime;

        if (!response.ok) {
          const error = parseApiError(processedData, response.status);
          const processedError = await this.executeErrorInterceptors(error);
          
          // Record failed request
          healthMonitor.recordRequest(latency, false);
          
          throw processedError;
        }

        // Record successful request
        healthMonitor.recordRequest(latency, true);

        return processedData;
      } catch (error) {
        clearTimeout(timeoutId);
        const latency = performance.now() - startTime;

        // Handle abort (timeout)
        if (error instanceof Error && error.name === "AbortError") {
          lastError = createTimeoutError();
          healthMonitor.recordRequest(latency, false);
        } else if (error instanceof ApiError) {
          lastError = error;
          // Only record if not a throttling error (to avoid skewing metrics)
          if (error.code !== ApiErrorCode.ServerError || !error.message.includes("throttled")) {
            healthMonitor.recordRequest(latency, false);
          }
        } else if (error instanceof Error) {
          lastError = createNetworkError(error.message);
          healthMonitor.recordRequest(latency, false);
        } else {
          lastError = createNetworkError("Unknown error occurred");
          healthMonitor.recordRequest(latency, false);
        }

        // Don't retry if error is not recoverable
        if (lastError && !lastError.isRecoverable()) {
          break;
        }

        // Don't retry on last attempt
        if (attempt < maxAttempts - 1) {
          // Wait before retry with exponential backoff
          const delay =
            (config.retryDelay || 1000) * Math.pow(2, attempt);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    // All retries failed
    if (lastError) {
      const processedError = await this.executeErrorInterceptors(lastError);
      
      // Log to monitoring for critical errors
      if (!processedError.isRecoverable()) {
        const { logError, ErrorSeverity } = await import("@/lib/errors/ErrorLogger");
        logError(processedError, null, { url }, ErrorSeverity.High);
      }
      
      throw processedError;
    }

    const finalError = createNetworkError("Request failed after retries");
    const { logError, ErrorSeverity } = await import("@/lib/errors/ErrorLogger");
    logError(finalError, null, { url }, ErrorSeverity.Medium);
    throw finalError;
  }

  /**
   * Submit contact form.
   *
   * @param data - Contact form data
   * @returns Contact form response
   */
  async submitContactForm(
    data: ContactFormRequest
  ): Promise<ContactFormResponse> {
    const response = await this.request<ContactFormResponse>(
      contactEndpoint.submit(),
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.data) {
      throw new ApiError(
        "Invalid response from server",
        ApiErrorCode.Unknown
      );
    }

    return response.data;
  }

  /**
   * Submit career application.
   *
   * @param data - Career application data
   * @returns Career application response
   */
  async submitCareerApplication(
    data: CareerApplicationRequest
  ): Promise<CareerApplicationResponse> {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    if (data.phone) formData.append("phone", data.phone);
    formData.append("position", data.position);
    if (data.linkedin) formData.append("linkedin", data.linkedin);
    if (data.portfolio) formData.append("portfolio", data.portfolio);
    if (data.coverLetter) formData.append("coverLetter", data.coverLetter);
    if (data.cv) formData.append("cv", data.cv);

    const response = await this.request<CareerApplicationResponse>(
      careersEndpoint.apply(),
      {
        method: "POST",
        body: formData,
        // Don't set Content-Type for FormData - browser will set it with boundary
        headers: {},
      }
    );

    if (!response.data) {
      throw new ApiError(
        "Invalid response from server",
        ApiErrorCode.Unknown
      );
    }

    return response.data;
  }
}

/**
 * Default API client instance.
 */
export const apiClient = new ApiClient();

/**
 * Export convenience methods.
 */
export const api = {
  contact: {
    submit: (data: ContactFormRequest) =>
      apiClient.submitContactForm(data),
  },
  careers: {
    apply: (data: CareerApplicationRequest) =>
      apiClient.submitCareerApplication(data),
  },
};

