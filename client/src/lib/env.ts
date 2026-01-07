/**
 * Type-safe environment variables.
 * Validates and provides type-safe access to environment variables.
 */

import { z } from "zod";

/**
 * Environment variable schema.
 */
const envSchema = z.object({
  MODE: z.enum(["development", "production", "test"]).default("development"),
  VITE_GA_ID: z.string().optional(),
  VITE_API_BASE_URL: z.string().url().optional().or(z.literal("")),
  VITE_BASE_URL: z.string().optional(),
});

/**
 * Validated environment variables.
 */
type Env = z.infer<typeof envSchema>;

/**
 * Get and validate environment variables.
 *
 * @returns Validated environment variables
 * @throws Error if required environment variables are missing or invalid
 */
function getEnv(): Env {
  const rawEnv = {
    MODE: import.meta.env.MODE,
    VITE_GA_ID: import.meta.env.VITE_GA_ID,
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
  };

  const result = envSchema.safeParse(rawEnv);

  if (!result.success) {
    // eslint-disable-next-line no-console
    console.error("Invalid environment variables:", result.error.errors);
    // Return defaults in development, throw in production
    if (import.meta.env.MODE === "production") {
      throw new Error(
        `Invalid environment variables: ${result.error.errors
          .map((e) => `${e.path.join(".")}: ${e.message}`)
          .join(", ")}`
      );
    }
    // Return defaults for development
    return {
      MODE: "development",
      VITE_GA_ID: undefined,
      VITE_API_BASE_URL: undefined,
      VITE_BASE_URL: undefined,
    };
  }

  return result.data;
}

/**
 * Validated environment variables.
 */
export const env = getEnv();

/**
 * Check if running in development mode.
 */
export const isDev = env.MODE === "development";

/**
 * Check if running in production mode.
 */
export const isProd = env.MODE === "production";

/**
 * Check if running in test mode.
 */
export const isTest = env.MODE === "test";

/**
 * Get Google Analytics ID.
 */
export const gaId = env.VITE_GA_ID;

/**
 * Get API base URL.
 */
export const apiBaseUrl = env.VITE_API_BASE_URL;

/**
 * Get base URL.
 */
export const baseUrl = env.VITE_BASE_URL || "/";

