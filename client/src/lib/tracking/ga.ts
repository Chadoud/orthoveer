/**
 * Google Analytics 4 main coordination module.
 * Re-exports and coordinates all tracking functionality.
 *
 * This module maintains backward compatibility while using the new
 * modular architecture internally.
 */

// Re-export cookie functions
export {
  getGACookies,
  hasGACookies,
  getCookieDomain,
  getCookiePaths,
  deleteAllGACookies,
  supportsCookies,
  supportsLocalStorage,
} from "./cookies";

// Re-export consent mode functions
export { initConsentMode, updateConsentMode, createConsentConfig } from "./consent";

// Re-export loader functions
export {
  loadGA,
  unloadGA,
  isGALoaded,
  getMeasurementId,
  setDependencies,
  getDependencies,
} from "./loader";

// Re-export validation functions
export {
  validateMeasurementId,
  sanitizeEventName,
  validateAndSanitizeEventName,
  validateMeasurementIdOrThrow,
  sanitizePayload,
  validatePayload,
  sanitizePath,
  validatePathOrThrow,
} from "./validation";

// Re-export utility functions
export {
  checkRateLimit,
  resetRateLimit,
  getRateLimitStats,
  initRateLimitCleanup,
  removeRateLimitCleanup,
  isDuplicateEvent,
  resetDeduplication,
  initDeduplicationCleanup,
  removeDeduplicationCleanup,
  isGAConsentState,
  isMeasurementId,
  isEventName,
  isPayload,
  hasGtag,
  isValidPath,
  recordMetric,
  getMetrics,
  getMetricsByName,
  getAverageMetric,
  clearMetrics,
  getMetricsSummary,
  retryWithBackoff,
  getGtagWindow,
  isGtagAvailable,
  getDataLayer,
  getGtag,
  queueEvent,
  flushEventQueue,
  clearEventQueue,
  getQueueSize,
  getQueueStats,
  setQueuePersistence,
  stopQueueFlushInterval,
  addToBatch,
  flushBatch,
  clearBatch,
  getBatchSize,
  setBatchConfig,
  setBatchingEnabled,
  shouldSampleEvent,
  getSamplingRate,
} from "./utils";

// Re-export types for external use
export type {
  GAConsentState,
  GAConsentConfig,
  TrackingLogger,
  GADependencies,
  TrackingErrorCode,
} from "./types";

// Re-export error classes
export {
  TrackingError,
  createGALoadError,
  createGAUnloadError,
  createInvalidMeasurementIdError,
  createInvalidEventNameError,
  createCookieDeletionError,
  createConsentModeError,
  createBrowserIncompatibleError,
  createScriptTimeoutError,
} from "./errors";

// Re-export logger functions
export {
  setTrackingLogger,
  getTrackingLogger,
  isLoggingEnabled,
} from "./logger";

// Re-export config
export { GA_CONFIG } from "./config";
