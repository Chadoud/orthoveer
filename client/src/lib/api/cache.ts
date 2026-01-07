/**
 * Request cache with TTL and LRU eviction.
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

const cache = new Map<string, CacheEntry<unknown>>();
const MAX_SIZE = 100;

/**
 * Generate cache key.
 */
export function generateKey(url: string, method: string, body?: unknown): string {
  const bodyStr = body ? JSON.stringify(body) : "";
  return `${method}:${url}:${bodyStr}`;
}

/**
 * Get cached response.
 */
export function get<T>(key: string): T | undefined {
  const entry = cache.get(key);
  if (!entry) return undefined;

  if (Date.now() - entry.timestamp > entry.ttl) {
    cache.delete(key);
    return undefined;
  }

  // Return cached data with proper type
  return entry.data as T;
}

/**
 * Set cached response.
 */
export function set<T>(key: string, data: T, ttl: number = 60000): void {
  // Evict oldest if at max size
  if (cache.size >= MAX_SIZE) {
    const firstKey = cache.keys().next().value;
    if (firstKey) cache.delete(firstKey);
  }

  cache.set(key, {
    data,
    timestamp: Date.now(),
    ttl,
  });
}

/**
 * Delete cached entry.
 */
export function deleteKey(key: string): void {
  cache.delete(key);
}

export const requestCache = {
  get,
  set,
  delete: deleteKey,
  generateKey,
};
