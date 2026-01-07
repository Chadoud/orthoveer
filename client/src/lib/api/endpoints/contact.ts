/**
 * Contact API endpoints and methods.
 */

import { apiClient } from "../client";
import type { ContactFormRequest, ContactFormResponse } from "../types";

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
 * Contact form endpoint.
 */
export const contactEndpoint = {
  submit: () => `${getBaseUrl()}/contact`,
} as const;

/**
 * Contact API methods.
 */
export const contactApi = {
  /**
   * Submit contact form.
   */
  submit: async (data: ContactFormRequest): Promise<ContactFormResponse> => {
    return apiClient.submitContactForm(data);
  },
};

