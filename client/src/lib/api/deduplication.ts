/**
 * Request deduplication to prevent concurrent identical requests.
 */

import { requestCache } from "./cache";

const pendingRequests = new Map<string, Promise<unknown>>();

/**
 * Generate deduplication key (reuses cache key generation).
 */
export function generateKey(url: string, method: string, body?: unknown): string {
  return requestCache.generateKey(url, method, body);
}

/**
 * Get pending request.
 */
export function getPending<T>(key: string): Promise<T> | undefined {
  return pendingRequests.get(key) as Promise<T> | undefined;
}

/**
 * Set pending request.
 */
export function setPending<T>(key: string, promise: Promise<T>): void {
  pendingRequests.set(key, promise);
  promise.finally(() => {
    pendingRequests.delete(key);
  });
}

/**
 * Clear pending request.
 */
export function clearPending(key: string): void {
  pendingRequests.delete(key);
}

export const requestDeduplicator = {
  getPending,
  setPending,
  clearPending,
  generateKey,
};

