/**
 * Validation rules and constraints.
 */

export const VALIDATION_RULES = {
  NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 100,
  },
  EMAIL: {
    MAX_LENGTH: 255,
  },
  PHONE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 20,
  },
  MESSAGE: {
    MIN_LENGTH: 0,
    MAX_LENGTH: 5000,
  },
  FILE_SIZE: {
    MAX_BYTES: 5 * 1024 * 1024, // 5MB
  },
  FILE_TYPES: {
    CV: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },
} as const;

