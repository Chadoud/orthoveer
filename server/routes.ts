import type { Express } from "express";
import { type Server } from "http";
import { handleContactForm } from "./api/contact";
import { handleCareerApplication, uploadCv } from "./api/careers";
import { rateLimitMiddleware } from "./api/middleware/rate-limit";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // API routes - all prefixed with /api

  // Rate limiting: 10 requests per minute for forms (with adaptive limiting)
  const formRateLimit = rateLimitMiddleware({
    max: 10,
    windowMs: 60 * 1000, // 1 minute
    adaptive: true, // Enable adaptive rate limiting based on server load
  });

  // Contact form endpoint
  app.post("/api/contact", formRateLimit, handleContactForm);

  // Career application endpoint
  app.post("/api/careers/apply", formRateLimit, uploadCv, handleCareerApplication);

  return httpServer;
}
