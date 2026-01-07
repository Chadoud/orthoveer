/**
 * Content Security Policy middleware.
 */

import type { Request, Response, NextFunction } from "express";

/**
 * CSP middleware for security headers.
 */
export function cspMiddleware(
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;"
  );
  next();
}
