import { PageLayout } from "@/components/layout/PageLayout";
import { VideoHero } from "@/components/sections/VideoHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms";
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Package,
  ArrowRight,
  Users,
  Award,
} from "lucide-react";
import { Link } from "wouter";
import { track } from "@/lib/tracking/events";
import { videos } from "@/lib/assets";
import customBoxImage from "@assets/pages/white-labeling/customBox.webp";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { text, patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function WhiteLabeling() {
  return (
    <PageLayout>
      <VideoHero
        videoSrc={videos.homeHero}
        badge="White Label Solutions"
        title="White-Label"
        titleHighlight=" Aligner"
        description="White-label clear aligners for orthodontic treatments, manufactured to clinical standards and branded under your name. This allows practices to offer aligner treatments without investing in production infrastructure, while maintaining consistency, quality, and margins."
        button={
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        }
      />

      {/* Benefits Section */}
      <Section>
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            Outsourced Aligner Manufacturing
          </Heading>
          <p className={cn(text.cardText, "text-xl")}>
            Offer professional aligner treatments under your brand without the
            capital investment in production equipment.
          </p>
        </div>

        <div className="grid-3col-lg">
          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Package
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white font-heading">
                Your Brand, Your Control
              </h3>
            </div>
            <p className={text.cardText}>
              All aligners are manufactured to clinical standards and branded
              under your practice name, maintaining your brand identity
              throughout the patient journey.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <TrendingUp
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white font-heading">
                Maintain Margins
              </h3>
            </div>
            <p className={text.cardText}>
              No need to invest in expensive production infrastructure. Focus on
              patient care while we handle manufacturing, ensuring consistent
              quality and predictable costs.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <ShieldCheck
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white font-heading">
                Clinical Standards
              </h3>
            </div>
            <p className={text.cardText}>
              Every aligner is manufactured to the highest clinical standards,
              ensuring predictable results and patient satisfaction with every
              treatment.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Users
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white font-heading">
                Consistency & Quality
              </h3>
            </div>
            <p className={text.cardText}>
              Our manufacturing processes ensure consistent quality across all
              orders, so you can confidently offer aligner treatments knowing
              every product meets your standards.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Award
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white font-heading">
                No Infrastructure Investment
              </h3>
            </div>
            <p className={text.cardText}>
              Start offering aligner treatments immediately without the need for
              production equipment, specialized staff, or facility
              modifications.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <CheckCircle2
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white font-heading">
                Scalable Solutions
              </h3>
            </div>
            <p className={text.cardText}>
              Scale your aligner practice as your patient base grows, with
              flexible ordering and production capacity that adapts to your
              needs.
            </p>
          </Card>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="subtle">
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            White-Label Production Process
          </Heading>
          <p className={cn(text.cardText, "text-xl")}>
            A simple, streamlined process from order to delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Submit Treatment Plan",
              description:
                "Send us your digital treatment plan and patient specifications through our secure portal.",
            },
            {
              step: "02",
              title: "Manufacturing",
              description:
                "We manufacture your aligners to clinical standards, applying your branding and quality checks.",
            },
            {
              step: "03",
              title: "Quality Assurance",
              description:
                "Every aligner undergoes rigorous quality control to ensure it meets clinical standards.",
            },
            {
              step: "04",
              title: "Delivery",
              description:
                "Your branded aligners are shipped directly to your practice, ready for patient delivery.",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-bold text-primary/20 mb-4 font-heading">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">
                {item.title}
              </h3>
              <p className={cn(text.cardText, "text-sm")}>{item.description}</p>
              {idx < 3 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Custom Branding Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
            <img
              src={customBoxImage}
              alt="Custom Branded Aligner Packaging"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <div className={cn(patterns.badgeSimple, "mb-6")}>
              Branding & Packaging
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Custom Branded Packaging & Presentation
            </h2>
            <p className={cn(text.cardText, "text-lg mb-6")}>
              Every white-label aligner order includes custom branded packaging
              that reflects your practice's identity. From the outer box to
              individual aligner cases, we ensure your brand is prominently
              displayed, creating a professional and cohesive patient experience
              that reinforces your practice's reputation.
            </p>
            <p className={cn(text.cardText, "text-lg mb-6")}>
              Our custom packaging solutions are designed to protect aligners
              during shipping while maintaining a premium, clinical appearance
              that patients expect. Choose from various packaging options to
              match your practice's aesthetic and branding requirements.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="primary"
                onClick={() => {
                  track("cta_request_custom_branding", {
                    location: "white_labeling",
                  });
                }}
              >
                Request Custom Branding <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <div>
          <div className="text-center mb-12">
            <Heading level="h2" className="mb-4">
              Get Started with White Label Aligners
            </Heading>
            <p className="text-gray-400 text-lg leading-relaxed">
              Contact us to learn more about our white-label aligner services
              and how we can help grow your practice.
            </p>
          </div>
          <ContactForm
            submitLabel="Request Information"
            messagePlaceholder="Tell us about your practice, patient volume, and white-label aligner needs..."
          />
        </div>
      </Section>

      {/* Integration Section */}
      <Section background="subtle">
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            White-Label Clinical Workflow Integration
          </Heading>
          <p className={cn(text.cardText, "text-xl")}>
            Seamless integration with your existing clinical workflows and
            systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/5 border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-4 font-heading">
              Scanner Integration (3Shape, iTero, Medit)
            </h3>
            <p className={text.cardText}>
              Direct integration with major intraoral scanner platforms for
              streamlined digital workflow.
            </p>
          </Card>
          <Card className="bg-white/5 border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-4 font-heading">
              Treatment Planning Software Connectivity
            </h3>
            <p className={text.cardText}>
              Connect with your treatment planning software for automated order
              processing.
            </p>
          </Card>
          <Card className="bg-white/5 border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-4 font-heading">
              Order Management Portal
            </h3>
            <p className={text.cardText}>
              Real-time order tracking and production status updates through our
              secure portal.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Explore Our Complete Solutions
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            In addition to white-label services, we offer production machines
            and materials for in-house manufacturing.
          </p>
          <div className="flex-responsive-center">
            <Link href="/machines">
              <Button size="lg" variant="primary">
                View Machines <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/plastics-materials">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium"
              >
                Explore Materials <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
