/**
 * Funnel tracking for conversion analysis.
 */

import { track } from "@/lib/tracking/events";

/**
 * Track contact form funnel events.
 */
export function trackContactFunnel(
  stage: "form_submit" | "form_success",
  data?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  track("funnel_contact", { stage, ...data });
}
