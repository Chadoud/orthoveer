import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Upload, Loader2, CheckCircle2, FileText, X } from "lucide-react";
import { useState, useRef } from "react";
import { api } from "@/lib/api/client";
import { ApiError } from "@/lib/api/types";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { FormLoadingState } from "@/components/loading/FormLoadingState";

interface CareerApplicationFormProps {
  jobTitle?: string;
  jobId?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
}

// This should match the jobs from Careers.tsx
const availableJobs: Job[] = [
  {
    id: "1",
    title: "Senior Manufacturing Engineer",
    department: "Engineering",
    location: "Paris, France",
  },
  {
    id: "2",
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Paris, France",
  },
  {
    id: "3",
    title: "Clinical Support Coordinator",
    department: "Clinical Services",
    location: "Remote / Paris, France",
  },
  {
    id: "4",
    title: "Production Technician",
    department: "Manufacturing",
    location: "Paris, France",
  },
  {
    id: "5",
    title: "Software Developer",
    department: "Technology",
    location: "Remote / Paris, France",
  },
  {
    id: "6",
    title: "Sales Representative",
    department: "Sales",
    location: "Europe (Multiple locations)",
  },
  {
    id: "general",
    title: "General Application",
    department: "Various",
    location: "Various",
  },
];

export function CareerApplicationForm({
  jobTitle,
  jobId,
  isOpen = false,
  onClose,
  onSuccess,
}: CareerApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: jobId || "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.position) {
      newErrors.position = "Please select a position";
    }

    if (!cvFile) {
      newErrors.cvFile = "CV/Resume is required";
    } else if (cvFile.type !== "application/pdf") {
      newErrors.cvFile = "Please upload a PDF file";
    } else if (cvFile.size > 5 * 1024 * 1024) {
      // 5MB limit
      newErrors.cvFile = "File size must be less than 5MB";
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    } else if (formData.coverLetter.trim().length < 50) {
      newErrors.coverLetter = "Cover letter must be at least 50 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setErrors({
          ...errors,
          cvFile: "Please upload a PDF file",
        });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          cvFile: "File size must be less than 5MB",
        });
        return;
      }
      setCvFile(file);
      setErrors({ ...errors, cvFile: "" });
    }
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setErrors({ ...errors, cvFile: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append("firstName", formData.firstName);
      submitData.append("lastName", formData.lastName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("position", formData.position);
      submitData.append("linkedin", formData.linkedin);
      submitData.append("portfolio", formData.portfolio);
      submitData.append("coverLetter", formData.coverLetter);
      if (cvFile) {
        submitData.append("cv", cvFile);
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Implement actual form submission to API
      // await fetch('/api/careers/apply', {
      //   method: 'POST',
      //   body: submitData,
      // });

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        linkedin: "",
        portfolio: "",
        coverLetter: "",
      });
      setCvFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Call success callback if provided
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 3000);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.code === "VALIDATION_ERROR") {
          // Handle validation errors
          setErrors({ submit: error.message });
        } else {
          setErrors({ submit: "Failed to submit application. Please try again." });
        }
      } else {
        setErrors({ submit: "Failed to submit application. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: jobId || "",
        linkedin: "",
        portfolio: "",
        coverLetter: "",
      });
      setCvFile(null);
      setErrors({});
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      if (onClose) {
        onClose();
      }
    }
  };

  const selectedJob = availableJobs.find((job) => job.id === formData.position);

  if (isSubmitting) {
    return <FormLoadingState fieldCount={8} showButton />;
  }

  const formContent = isSubmitted ? (
    <ErrorBoundary errorBoundaryName="CareerApplicationForm-Success">
    <div className="text-center py-6 sm:py-8">
      <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading">
        Application Submitted Successfully!
      </h3>
      <p className="text-sm sm:text-base text-gray-400 mb-4 px-2">
        Thank you for your interest in joining our team. We'll review your
        application and get back to you soon.
      </p>
      <Button
        onClick={handleClose}
        className="bg-primary hover:bg-primary/90 text-white"
      >
        Close
      </Button>
    </div>
    </ErrorBoundary>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
      {/* Personal Information */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 font-heading">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
                if (errors.firstName) setErrors({ ...errors, firstName: "" });
              }}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors text-sm sm:text-base ${
                errors.firstName
                  ? "border-red-500"
                  : "border-white/20 focus:border-primary"
              }`}
              placeholder="John"
              required
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
                if (errors.lastName) setErrors({ ...errors, lastName: "" });
              }}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors text-sm sm:text-base ${
                errors.lastName
                  ? "border-red-500"
                  : "border-white/20 focus:border-primary"
              }`}
              placeholder="Doe"
              required
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-red-500 text-sm mt-1">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 font-heading">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
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
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors text-sm sm:text-base ${
                errors.email
                  ? "border-red-500"
                  : "border-white/20 focus:border-primary"
              }`}
              placeholder="john.doe@example.com"
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
              className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: "" });
              }}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors text-sm sm:text-base ${
                errors.phone
                  ? "border-red-500"
                  : "border-white/20 focus:border-primary"
              }`}
              placeholder="+33 1 23 45 67 89"
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Position Selection */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 font-heading">
          Position
        </h3>
        <div>
          <label
            htmlFor="position"
            className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
          >
            Position You're Applying For <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.position}
            onValueChange={(value) => {
              setFormData({ ...formData, position: value });
              if (errors.position) setErrors({ ...errors, position: "" });
            }}
          >
            <SelectTrigger
              className={`w-full h-11 sm:h-12 bg-white/10 border text-white text-sm sm:text-base ${
                errors.position
                  ? "border-red-500"
                  : "border-white/20 focus:border-primary"
              }`}
            >
              <SelectValue placeholder="Select a position" />
            </SelectTrigger>
            <SelectContent className="bg-background border-white/20 max-h-[60vh]">
              {availableJobs.map((job) => (
                <SelectItem
                  key={job.id}
                  value={job.id}
                  className="text-white focus:bg-primary/20 text-sm sm:text-base"
                >
                  <span className="block truncate">
                    <span className="font-medium">{job.title}</span>
                    <span className="hidden sm:inline">
                      {" "}
                      - {job.department} ({job.location})
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.position && (
            <p className="text-red-500 text-sm mt-1">{errors.position}</p>
          )}
          {selectedJob && selectedJob.id !== "general" && (
            <p className="text-gray-400 text-sm mt-2">
              {selectedJob.department} • {selectedJob.location}
            </p>
          )}
        </div>
      </div>

      {/* CV Upload */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 font-heading">
          CV / Resume
        </h3>
        <div>
          <label
            htmlFor="cvFile"
            className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
          >
            Upload Your CV/Resume (PDF) <span className="text-red-500">*</span>
          </label>
          {!cvFile ? (
            <div
              className={`border-2 border-dashed rounded-lg p-4 sm:p-6 text-center transition-colors ${
                errors.cvFile
                  ? "border-red-500 bg-red-500/10"
                  : "border-white/20 bg-white/5 hover:border-primary/50"
              }`}
            >
              <input
                ref={fileInputRef}
                id="cvFile"
                type="file"
                accept=".pdf,application/pdf"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <label
                htmlFor="cvFile"
                className="cursor-pointer flex flex-col items-center gap-2 sm:gap-3"
              >
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                <div className="px-2">
                  <span className="text-white font-medium text-sm sm:text-base block">
                    <span className="hidden sm:inline">
                      Click to upload or drag and drop
                    </span>
                    <span className="sm:hidden">Tap to upload</span>
                  </span>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    PDF only (max. 5MB)
                  </p>
                </div>
              </label>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-white/10 border border-white/20">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate text-sm sm:text-base">
                  {cvFile.name}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleRemoveFile}
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10 shrink-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
          {errors.cvFile && (
            <p className="text-red-500 text-sm mt-1">{errors.cvFile}</p>
          )}
        </div>
      </div>

      {/* Optional Links */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 font-heading">
          Additional Information (Optional)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label
              htmlFor="linkedin"
              className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
            >
              LinkedIn Profile
            </label>
            <input
              id="linkedin"
              type="url"
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
          <div>
            <label
              htmlFor="portfolio"
              className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
            >
              Portfolio / Website
            </label>
            <input
              id="portfolio"
              type="url"
              value={formData.portfolio}
              onChange={(e) =>
                setFormData({ ...formData, portfolio: e.target.value })
              }
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
              placeholder="https://yourportfolio.com"
            />
          </div>
        </div>
      </div>

      {/* Cover Letter */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 font-heading">
          Cover Letter
        </h3>
        <div>
          <label
            htmlFor="coverLetter"
            className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base"
          >
            Cover Letter <span className="text-red-500">*</span>
          </label>
          <textarea
            id="coverLetter"
            value={formData.coverLetter}
            onChange={(e) => {
              setFormData({ ...formData, coverLetter: e.target.value });
              if (errors.coverLetter) setErrors({ ...errors, coverLetter: "" });
            }}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/10 border text-white placeholder-gray-500 focus:outline-none transition-colors resize-none text-sm sm:text-base ${
              errors.coverLetter
                ? "border-red-500"
                : "border-white/20 focus:border-primary"
            }`}
            rows={5}
            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            required
            aria-invalid={!!errors.coverLetter}
            aria-describedby={
              errors.coverLetter ? "coverLetter-error" : undefined
            }
          />
          {errors.coverLetter && (
            <p id="coverLetter-error" className="text-red-500 text-sm mt-1">
              {errors.coverLetter}
            </p>
          )}
          <p className="text-gray-400 text-sm mt-2">
            {formData.coverLetter.length} characters (minimum 50)
          </p>
        </div>
      </div>

      {errors.submit && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50">
          <p className="text-red-500 text-sm">{errors.submit}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-lg py-2.5 sm:py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
        {onClose && (
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            disabled={isSubmitting}
            className="border-white/20 text-white hover:bg-white/10 text-sm sm:text-base py-2.5 sm:py-3"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );

  // If used in a dialog
  if (isOpen !== undefined) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="w-[95vw] sm:w-full max-w-3xl max-h-[100vh] overflow-y-auto bg-background border-white/20 p-4 sm:p-6 m-4 sm:m-0 origin-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:duration-200 data-[state=closed]:duration-200 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-out-to-bottom-0">
          <DialogHeader className="mb-4 sm:mb-6">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white font-heading pr-6 sm:pr-0">
              {jobTitle ? `Apply for ${jobTitle}` : "Apply for a Position"}
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-400">
              Fill out the form below to submit your application. We'll review
              it and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          {formContent}
        </DialogContent>
      </Dialog>
    );
  }

  // If used as standalone form
  return (
    <ErrorBoundary errorBoundaryName="CareerApplicationForm">
      <Card className="bg-white/5 border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-heading">
          {jobTitle ? `Apply for ${jobTitle}` : "Apply for a Position"}
        </h2>
        <p className="text-sm sm:text-base text-gray-400">
          Fill out the form below to submit your application. We'll review it
          and get back to you soon.
        </p>
      </div>
      {formContent}
    </Card>
    </ErrorBoundary>
  );
}
