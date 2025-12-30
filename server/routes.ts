import type { Express } from "express";
import { type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // API routes can be added here
  // Prefix all routes with /api

  return httpServer;
}
