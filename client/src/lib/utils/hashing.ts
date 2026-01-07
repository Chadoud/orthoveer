/**
 * Hashing utilities for consistent user targeting.
 */

/**
 * djb2 hash function (internal).
 */
function djb2(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
  }
  return hash >>> 0;
}

/**
 * Consistent hash for percentage-based selection (internal).
 */
function consistentHash(userId: string, max: number = 100): number {
  return djb2(userId) % max;
}

/**
 * Hash user ID for consistent targeting.
 */
export function hashUserId(userId: string): number {
  return djb2(userId);
}

/**
 * Check if user is in percentage range.
 */
export function isUserInPercentage(
  userId: string,
  percentage: number
): boolean {
  return consistentHash(userId) < percentage;
}

/**
 * Select variant based on user ID.
 */
export function selectVariant<T extends { name: string }>(
  userId: string,
  variants: T[]
): string {
  const index = consistentHash(userId, variants.length);
  return variants[index].name;
}
