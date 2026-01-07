/**
 * Contact form API endpoint.
 */

import type { Request, Response } from "express";
import { z } from "zod";

/**
 * Contact form validation schema.
 */
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  company: z.string().max(100).optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20).optional(),
  productService: z.string().max(100).optional(),
  machine: z.string().max(100).optional(),
  quantity: z.string().max(50).optional(),
  message: z.string().max(5000).optional(),
});

/**
 * Handle contact form submission.
 */
export async function handleContactForm(
  req: Request,
  res: Response
): Promise<void> {
  try {
    // Validate request body
    const validationResult = contactFormSchema.safeParse(req.body);

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

    // TODO: Save to database or send email
    // For now, simulate processing
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Generate mock ID
    const id = `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    res.status(200).json({
      success: true,
      data: {
        id,
        submittedAt: new Date().toISOString(),
        message: "Thank you for contacting us. We'll get back to you soon.",
      },
      meta: {
        timestamp: new Date().toISOString(),
        requestId: req.headers["x-request-id"] as string | undefined,
      },
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({
      success: false,
      error: {
        message: "Internal server error",
        code: "SERVER_ERROR",
      },
    });
  }
}

