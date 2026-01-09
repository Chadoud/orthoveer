import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms";
import {
  Factory,
  Package,
  Layers,
  Settings,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Users,
  Target,
} from "lucide-react";
import { Link } from "wouter";
import { track } from "@/lib/tracking/events";
import { videos } from "@/lib/assets";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { VideoHero } from "@/components/sections/VideoHero";
import { text, patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Solutions() {
  return (
    <PageLayout>
      <VideoHero
        videoSrc={videos.orthoHero}
        badge="Complete Solutions"
        title="Orthodontic Manufacturing"
        titleHighlight="Solutions"
        description="End-to-end solutions for orthodontic practices: production equipment, certified materials, white-label manufacturing, and digital workflow integration."
        button={
          <Link href="#solutions">
            <Button
              size="lg"
              variant="primary"
              onClick={() => {
                track("cta_explore_solutions", {
                  location: "hero",
                });
              }}
            >
              Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        }
        scrollText="Scroll to learn more"
      />

      {/* Solutions Overview Section */}
      <Section id="solutions">
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            Complete Manufacturing Solutions
          </Heading>
          <p
            className={cn(text.cardText, "text-xl", patterns.centeredContentLg)}
          >
            From equipment and materials to white-label production, we provide
            everything you need to offer clear aligner treatments.
          </p>
        </div>

        <div className="grid-4col">
          <Link href="/machines">
            <Card
              className={cn(
                patterns.cardFull,
                "h-full cursor-pointer group flex flex-col"
              )}
            >
              <div className="flex-icon-title">
                <Factory className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Production Equipment
                </h3>
              </div>
              <p className={cn(text.cardText, "mb-6 grow")}>
                Specialized production equipment for every stage of aligner
                manufacturing: thermoforming, trimming, scanning, 3D printing,
                and more.
              </p>
              <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                Discover Our Equipment <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Card>
          </Link>

          <Card className={cn(patterns.cardFull, "h-full group flex flex-col")}>
            <div className="flex-icon-title">
              <Package className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                Materials & Consumables
              </h3>
            </div>
            <p className={cn(text.cardText, "mb-6 grow")}>
              Certified aligner sheet materials and bulk rolls for consistent,
              high-quality production.
            </p>
            <div className="flex flex-col gap-3 mt-auto">
              <Link href="/plastics-materials">
                <div className="link-primary-hover-sm">
                  Plastic Sheets <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
              <Link href="/rolls">
                <div className="link-primary-hover-sm">
                  Thermoforming Rolls <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            </div>
          </Card>

          <Link href="/white-labeling">
            <Card
              className={cn(
                patterns.cardFull,
                "h-full cursor-pointer group flex flex-col"
              )}
            >
              <div className="flex-icon-title">
                <Layers className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  White-Label Manufacturing
                </h3>
              </div>
              <p className={cn(text.cardText, "mb-6 grow")}>
                Outsource aligner production while maintaining your brand
                identity and clinical standards.
              </p>
              <div className="link-primary-hover mt-auto">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Card>
          </Link>

          <Card className={cn(patterns.cardFull, "h-full flex flex-col group")}>
            <div className="flex-icon-title">
              <Settings className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                Digital Integration
              </h3>
            </div>
            <p className={cn(text.cardText, "mb-6 grow")}>
              Seamless integration with 3Shape, iTero, Medit scanners and
              treatment planning software.
            </p>
            <div className="link-primary-hover mt-auto">
              Contact us <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </Card>
        </div>
      </Section>

      {/* Production Models Section */}
      <Section background="subtle">
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            Production Models for Every Practice
          </Heading>
          <p
            className={cn(text.cardText, "text-xl", patterns.centeredContentLg)}
          >
            Choose the production model that fits your practice size and
            operational needs.
          </p>
        </div>

        <div className="grid-3col-lg">
          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Target className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-2xl font-bold text-white font-heading">
                In-House Production
              </h3>
            </div>
            <p className={cn(text.cardText, "mb-6")}>
              Produce aligners in your own facility with complete control over
              quality, timing, and costs. Perfect for practices ready to invest
              in production infrastructure.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Full production control</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Customizable workflows</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Scalable capacity</span>
              </li>
            </ul>
            <Link href="/machines">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/5"
              >
                View Equipment
              </Button>
            </Link>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Users className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-2xl font-bold text-white font-heading">
                Centralized & Lab Production
              </h3>
            </div>
            <p className={cn(text.cardText, "mb-6")}>
              Centralized production for multi-location practices or dedicated
              lab facilities serving multiple clinics. Optimize resources across
              locations.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Multi-location support</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Shared resources</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Cost efficiency</span>
              </li>
            </ul>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/5"
              >
                Get Started
              </Button>
            </Link>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <ShieldCheck className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-2xl font-bold text-white font-heading">
                White-Label Manufacturing
              </h3>
            </div>
            <p className={cn(text.cardText, "mb-6")}>
              Outsource aligner production while maintaining your brand identity
              and clinical standards. No infrastructure investment required.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>No capital investment</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>Brand consistency</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>48h turnaround</span>
              </li>
            </ul>
            <Link href="/white-labeling">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/5"
              >
                Learn More
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Key Benefits Section */}
      <Section>
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            Why Choose Our Solutions
          </Heading>
          <p
            className={cn(text.cardText, "text-xl", patterns.centeredContentLg)}
          >
            Comprehensive support for every stage of your aligner production
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Zap className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                Fast Turnaround
              </h3>
            </div>
            <p className={text.cardText}>
              Production to shipping in under 48 hours with scalable capacity to
              meet your demand.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <ShieldCheck className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                ISO 13485 Certified
              </h3>
            </div>
            <p className={text.cardText}>
              All solutions meet global medical device standards for orthodontic
              manufacturing.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Settings className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                Seamless Integration
              </h3>
            </div>
            <p className={text.cardText}>
              Works with your existing workflow and integrates with major
              scanner and software platforms.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Target className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                Scalable Solutions
              </h3>
            </div>
            <p className={text.cardText}>
              From single practices to large DSOs, our solutions scale to meet
              your growing needs.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <Users className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                Expert Support
              </h3>
            </div>
            <p className={text.cardText}>
              Comprehensive training, technical support, and ongoing guidance
              from our team of experts.
            </p>
          </Card>

          <Card className={patterns.cardFull}>
            <div className="flex-icon-title">
              <CheckCircle2 className="w-12 h-12 text-primary shrink-0" />
              <h3 className="text-xl font-bold text-white font-heading">
                Quality Guaranteed
              </h3>
            </div>
            <p className={text.cardText}>
              Consistent quality across all production stages with rigorous
              quality control processes.
            </p>
          </Card>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section background="subtle">
        <div>
          <Heading level="h2" className="mb-4 text-center">
            Ready to Get Started?
          </Heading>
          <p className="text-gray-400 text-lg mb-12 text-center">
            Contact us to discuss which solution is right for your practice.
          </p>
          <ContactForm
            submitLabel="Request Information"
            messagePlaceholder="Tell us about your practice needs and which solutions interest you..."
          />
        </div>
      </Section>
    </PageLayout>
  );
}
