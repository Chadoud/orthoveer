/**
 * Feature flags configuration.
 * Enables gradual rollouts, A/B testing, and user targeting.
 */

import { hashUserId, isUserInPercentage, selectVariant } from "@/lib/utils/hashing";
import { env } from "@/lib/env";

/**
 * Feature flag variant.
 */
export interface FeatureVariant {
  /**
   * Variant name.
   */
  name: string;
  /**
   * Percentage of users for this variant (0-100).
   */
  percentage: number;
}

/**
 * Enhanced feature flag configuration.
 */
export interface SmartFeatureFlag {
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * Rollout percentage (0-100).
   */
  rollout: number;
  /**
   * Specific user IDs to enable for (bypasses percentage).
   */
  userIds?: string[];
  /**
   * User percentage for targeting (0-100).
   */
  userPercentage?: number;
  /**
   * A/B testing variants.
   */
  variants?: FeatureVariant[];
  /**
   * Start date for time-based rollout.
   */
  startDate?: Date | string;
  /**
   * End date for time-based rollout.
   */
  endDate?: Date | string;
  /**
   * Environments where feature is available.
   */
  environments?: string[];
}

/**
 * Feature flags.
 */
export const features: Record<string, SmartFeatureFlag> = {
  /**
   * New API client.
   */
  newApiClient: {
    enabled: true,
    rollout: 100,
  },
  /**
   * New error boundary.
   */
  newErrorBoundary: {
    enabled: true,
    rollout: 100,
  },
  /**
   * React Query integration.
   */
  reactQuery: {
    enabled: false,
    rollout: 0,
  },
  /**
   * Advanced code splitting.
   */
  advancedCodeSplitting: {
    enabled: false,
    rollout: 0,
  },
  /**
   * Image optimization.
   */
  imageOptimization: {
    enabled: false,
    rollout: 0,
  },
} as const;

/**
 * Check if a feature is enabled for the current user.
 *
 * @param featureName - Feature name
 * @param userId - Optional user ID for consistent assignment
 * @returns true if feature is enabled for this user
 */
export function isFeatureEnabled(featureName: string, userId?: string): boolean {
  const feature = features[featureName];
  if (!feature) {
    return false;
  }

  if (!feature.enabled) {
    return false;
  }

  // Check environment
  if (feature.environments && !feature.environments.includes(env.MODE)) {
    return false;
  }

  // Check time-based rollout
  const now = new Date();
  if (feature.startDate) {
    const start = typeof feature.startDate === "string" 
      ? new Date(feature.startDate) 
      : feature.startDate;
    if (now < start) {
      return false;
    }
  }
  if (feature.endDate) {
    const end = typeof feature.endDate === "string" 
      ? new Date(feature.endDate) 
      : feature.endDate;
    if (now > end) {
      return false;
    }
  }

  // Check user ID list (bypasses percentage)
  if (userId && feature.userIds?.includes(userId)) {
    return true;
  }

  // Check user percentage (consistent hashing)
  if (userId && feature.userPercentage !== undefined) {
    return isUserInPercentage(userId, feature.userPercentage);
  }

  // Check rollout percentage
  if (feature.rollout < 100) {
    if (userId) {
      // Use consistent hashing for user-based rollout
      return isUserInPercentage(userId, feature.rollout);
    } else {
      // Fallback to random for anonymous users
      const random = Math.random() * 100;
      return random < feature.rollout;
    }
  }

  return true;
}

/**
 * Get feature variant for A/B testing.
 *
 * @param featureName - Feature name
 * @param userId - User ID for consistent variant assignment
 * @returns Variant name or null
 */
export function getFeatureVariant(
  featureName: string,
  userId?: string
): string | null {
  const feature = features[featureName];
  if (!feature || !feature.variants || feature.variants.length === 0) {
    return null;
  }

  if (!isFeatureEnabled(featureName, userId)) {
    return null;
  }

  // Use consistent hashing for variant selection
  if (userId) {
    return selectVariant(userId, feature.variants);
  }

  // Fallback to random for anonymous users
  const random = Math.random() * 100;
  let cumulative = 0;
  for (const variant of feature.variants) {
    cumulative += variant.percentage;
    if (random < cumulative) {
      return variant.name;
    }
  }

  return null;
}

/**
 * Get feature rollout percentage.
 *
 * @param featureName - Feature name
 * @returns Rollout percentage (0-100)
 */
export function getFeatureRollout(featureName: string): number {
  return features[featureName]?.rollout ?? 0;
}

