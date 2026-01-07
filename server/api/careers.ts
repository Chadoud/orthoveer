/**
 * Career application API endpoint.
 */

import type { Request, Response } from "express";
import { z } from "zod";

// TODO: Install multer for proper file upload handling
// npm install multer @types/multer
// For now, file uploads are handled via FormData in the client
// Server-side file handling will be added when multer is installed

/**
 * Career application validation schema.
 */
const careerApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20).optional(),
  position: z.string().min(1, "Position is required").max(100),
  linkedin: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  portfolio: z.string().url("Invalid portfolio URL").optional().or(z.literal("")),
  coverLetter: z.string().max(5000).optional(),
});

/**
 * Middleware for CV upload.
 * TODO: Replace with multer when installed.
 */
export const uploadCv = (req: Request, res: Response, next: () => void): void => {
  // For now, just pass through - file handling will be added with multer
  // Client sends FormData, which express.urlencoded can handle for text fields
  // File handling requires multer
  next();
};

/**
 * Handle career application submission.
 */
export async function handleCareerApplication(
  req: Request,
  res: Response
): Promise<void> {
  try {
    // Validate request body (excluding file)
    const bodyData = { ...req.body };
    const validationResult = careerApplicationSchema.safeParse(bodyData);

    if (!validationResult.success) {
      res.status(422).json({
        success: false,
        error: {
          message: "Validation failed",
          code: "VALIDATION_ERROR",
          details: validationResult.error.errors,
        },
      });
      return;
    }

    const data = validationResult.data;

    // Validate file if provided
    // Note: req.file will be available when multer is installed
    // For now, file handling is done client-side via FormData
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const file = (req as any).file;
    if (file) {
      // File validation is handled by multer
      // Additional validation can be added here
    }

    // TODO: Save to database or send email
    // For now, simulate processing
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Generate mock ID
    const id = `career-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    res.status(200).json({
      success: true,
      data: {
        id,
        submittedAt: new Date().toISOString(),
        message: "Thank you for your application. We'll review it and get back to you soon.",
      },
      meta: {
        timestamp: new Date().toISOString(),
        requestId: req.headers["x-request-id"] as string | undefined,
      },
    });
  } catch (error) {
    console.error("Career application submission error:", error);
    res.status(500).json({
      success: false,
      error: {
        message: "Internal server error",
        code: "SERVER_ERROR",
      },
    });
  }
}

