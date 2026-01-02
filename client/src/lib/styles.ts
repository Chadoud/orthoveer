/**
 * @deprecated This file is maintained for backward compatibility.
 * Please use the new modular structure from `@/lib/styles/index` instead.
 * 
 * The new structure provides:
 * - Better type safety with TypeScript types
 * - Improved organization with separate variant files
 * - Enhanced documentation and JSDoc comments
 * 
 * @example
 * ```tsx
 * // Old (still works)
 * import { container, section } from "@/lib/styles";
 * 
 * // New (recommended - same import path, better types)
 * import { container, section } from "@/lib/styles";
 * import type { SectionSize } from "@/lib/styles";
 * ```
 */

// Re-export everything from the new modular structure
export * from "./styles/index";

