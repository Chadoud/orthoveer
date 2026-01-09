import { PageLayout } from "@/components/layout/PageLayout";
import { VideoHero } from "@/components/sections/VideoHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CareerApplicationForm } from "@/components/forms";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Users,
  Zap,
  Award,
  Building2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { videos } from "@/lib/assets";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Manufacturing Engineer",
    department: "Engineering",
    location: "Paris, France",
    type: "Full-time",
    description:
      "Lead the development and optimization of our aligner manufacturing processes. Work with cutting-edge equipment and drive innovation in orthodontic production.",
    requirements: [
      "5+ years in manufacturing engineering",
      "Experience with thermoforming processes",
      "Strong problem-solving skills",
      "ISO 13485 knowledge preferred",
    ],
  },
  {
    id: "2",
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Paris, France",
    type: "Full-time",
    description:
      "Ensure the highest quality standards across all production stages. Conduct inspections, maintain quality documentation, and drive continuous improvement initiatives.",
    requirements: [
      "3+ years in QA/QC role",
      "Medical device experience preferred",
      "Attention to detail",
      "Documentation skills",
    ],
  },
  {
    id: "3",
    title: "Clinical Support Coordinator",
    department: "Clinical Services",
    location: "Remote / Paris, France",
    type: "Full-time",
    description:
      "Support orthodontic professionals with treatment planning, case management, and clinical guidance. Be the bridge between our technology and clinical excellence.",
    requirements: [
      "Orthodontic or dental background",
      "Strong communication skills",
      "Customer service experience",
      "Technical aptitude",
    ],
  },
  {
    id: "4",
    title: "Production Technician",
    department: "Manufacturing",
    location: "Paris, France",
    type: "Full-time",
    description:
      "Operate and maintain manufacturing equipment for aligner production. Ensure smooth production workflows and maintain quality standards.",
    requirements: [
      "Manufacturing experience",
      "Mechanical aptitude",
      "Team player",
      "Willingness to learn",
    ],
  },
  {
    id: "5",
    title: "Software Developer",
    department: "Technology",
    location: "Remote / Paris, France",
    type: "Full-time",
    description:
      "Develop and maintain software solutions for treatment planning, case management, and production tracking. Work on cutting-edge dental technology platforms.",
    requirements: [
      "3+ years software development",
      "Full-stack experience",
      "Modern frameworks (React, Node.js)",
      "API development",
    ],
  },
  {
    id: "6",
    title: "Sales Representative",
    department: "Sales",
    location: "Europe (Multiple locations)",
    type: "Full-time",
    description:
      "Build relationships with orthodontic practices and labs. Present our solutions, understand client needs, and drive business growth across Europe.",
    requirements: [
      "B2B sales experience",
      "Dental/medical industry knowledge",
      "Strong presentation skills",
      "Willingness to travel",
    ],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: Award,
    title: "Professional Development",
    description: "Training opportunities and career growth support",
  },
  {
    icon: Building2,
    title: "Modern Workspace",
    description: "State-of-the-art facilities and equipment",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths in a fast-growing industry",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with passionate professionals",
  },
  {
    icon: Zap,
    title: "Innovation Focus",
    description: "Work with cutting-edge technology and processes",
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<{
    id: string;
    title: string;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleApplyClick = (job: Job) => {
    setSelectedJob({ id: job.id, title: job.title });
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedJob(null);
  };

  const handleGeneralApplication = () => {
    setSelectedJob({ id: "general", title: "General Application" });
    setIsDialogOpen(true);
  };

  return (
    <PageLayout>
      <VideoHero
        videoSrc={videos.expoHero}
        badge="Join Our Team"
        title="OrthoVeer"
        titleHighlight="Careers"
        description="Be part of the future of orthodontic manufacturing. Join a team dedicated to precision, innovation, and transforming patient care."
        button={
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        }
      />

      {/* Why Join Us Section */}
      <Section background="subtle">
          <div className={patterns.sectionHeader}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Why Join OrthoVeer?
            </h2>
            <p className={cn("text-lg text-gray-400", patterns.centeredContentMd)}>
              We're building the future of orthodontic manufacturing. Join us in
              creating solutions that make a real difference in patient care.
            </p>
          </div>

          <div className="grid-3col">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-icon-title-sm">
                    <Icon className="w-10 h-10 text-primary shrink-0" />
                    <h3 className="text-xl font-bold text-white font-heading">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
      </Section>

      {/* Open Positions Section */}
      <Section>
          <div className={patterns.sectionHeader}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Open Positions
            </h2>
            <p className={cn("text-lg text-gray-400", patterns.centeredContentMd)}>
              Explore opportunities to join our growing team and make an impact
              in orthodontic manufacturing.
            </p>
          </div>

          <div className="space-y-6 grid-2col">
            {jobs.map((job) => (
              <Card
                key={job.id}
                className="bg-white/5 border-white/10 p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-between-responsive">
                  <div className="flex-1">
                    <div className="flex-icon-title-sm-md">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold text-white font-heading">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex-inline">
                        <Building2 className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex-inline">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex-inline">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-2 list-none">
                        {job.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-400 flex items-start gap-3"
                          >
                            <span className="text-primary shrink-0 mt-0.5">
                              •
                            </span>
                            <span className="flex-1">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:ml-6 shrink-0">
                    <Button
                      onClick={() => handleApplyClick(job)}
                      variant="default"
                      className="w-full md:w-auto rounded-lg px-6"
                    >
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
      </Section>

      {/* CTA Section */}
      <Section background="subtle">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Don't See a Role That Fits?
            </h2>
            <p className={cn("text-lg text-gray-400 mb-8", patterns.centeredContentMd)}>
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <Button
              onClick={handleGeneralApplication}
              size="lg"
              variant="primary"
            >
              Send Your Resume <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
      </Section>

      {/* Application Form Dialog */}
      <CareerApplicationForm
        jobTitle={selectedJob?.title}
        jobId={selectedJob?.id}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSuccess={handleCloseDialog}
      />
    </PageLayout>
  );
}
