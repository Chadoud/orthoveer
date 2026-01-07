/**
 * Careers API endpoints and methods.
 */

import { apiClient } from "../client";
import type { CareerApplicationRequest, CareerApplicationResponse } from "../types";

/**
 * Get base API URL from environment or use default.
 */
function getBaseUrl(): string {
  if (typeof window === "undefined") {
    return "/api";
  }

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  if (baseUrl && typeof baseUrl === "string") {
    return baseUrl;
  }

  // Default to relative path
  return "/api";
}

/**
 * Careers endpoint.
 */
export const careersEndpoint = {
  apply: () => `${getBaseUrl()}/careers/apply`,
} as const;

/**
 * Careers API methods.
 */
export const careersApi = {
  /**
   * Submit career application.
   */
  apply: async (data: CareerApplicationRequest): Promise<CareerApplicationResponse> => {
    return apiClient.submitCareerApplication(data);
  },
};

