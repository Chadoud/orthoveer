import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "@/lib/constants";

interface ContactFormProps {
  title?: string;
  description?: string;
  submitLabel?: string;
  messagePlaceholder?: string;
}

export function ContactForm({
  title = "Get in Touch",
  description = "Schedule a demonstration or request detailed information.",
  submitLabel = "Request Information",
  messagePlaceholder = "Tell us about your needs...",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Implement actual form submission to API
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-white/5 border-white/10 p-8 md:p-12">
        <div className="text-center py-8">
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2 font-heading">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-400">
            Thank you for contacting us. We'll get back to you as soon as
            possible.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 border-white/10 p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-white font-semibold mb-3"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                errors.name
                  ? "border-red-500"
                  : "border-white/20 focus:border-primary"
              }`}
              placeholder="John Doe"
              data-testid="input-name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-white font-semibold mb-3"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="Your Company"
              data-testid="input-company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-3"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors ${
                errors.email
                  ? "border-red-500"
                  : "border-white/20 focus:border-primary"
              }`}
              placeholder="contact@company.com"
              data-testid="input-email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-white font-semibold mb-3"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="+1 (555) 123-4567"
              data-testid="input-phone"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-white font-semibold mb-3"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: "" });
            }}
            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
              errors.message
                ? "border-red-500"
                : "border-white/20 focus:border-primary"
            }`}
            rows={5}
            placeholder={messagePlaceholder}
            data-testid="textarea-message"
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {errors.submit && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50">
            <p className="text-red-500 text-sm">{errors.submit}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          data-testid="button-submit-form"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </form>

      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-gray-400 text-sm mb-6">Or contact us directly:</p>
        <div className="flex flex-col md:flex-row gap-6">
          <a
            href={CONTACT_INFO.phone.href}
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span>{CONTACT_INFO.phone.display}</span>
          </a>
          <a
            href={CONTACT_INFO.email.href}
            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>{CONTACT_INFO.email.display}</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
