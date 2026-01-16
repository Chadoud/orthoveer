import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { ScrollArrow } from "@/components/sections/ScrollArrow";
import { track } from "@/lib/tracking/events";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { text, patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";
import aboutExpoImage from "@assets/pages/about/aboutExpo.webp";
import machineImageTrim from "@assets/pages/home/machineImageTrim.webp";
import expositionImage from "@assets/pages/about/expositionOrthoveer.webp";
import darkHeroImage from "@assets/heroes/images/dark-hero.webp";

export default function AboutUs() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-[85vh] flex items-stretch pt-12 pb-12 md:pb-0 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-background" />

        <Container className="relative z-10 flex items-center py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full">
            {/* Left Column: Text Content */}
            <div>
              <Heading
                level="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary mb-4 md:mb-6"
              >
                Precision Manufacturing, Proven Excellence.
              </Heading>
              <p
                className={cn(
                  text.description,
                  "text-base sm:text-lg md:text-xl mb-6 md:mb-10 max-w-xl"
                )}
              >
                We provide orthodontic practices and dental laboratories with
                cutting-edge production equipment, certified materials, and
                white-label manufacturing services to ensure consistent quality
                and clinical success.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => {
                    track("cta_get_in_touch", {
                      location: "hero",
                    });
                  }}
                >
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Right Column: Image */}
            <div className="flex items-center justify-center lg:justify-end h-full">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={expositionImage}
                  alt="Orthodontic Treatment"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Scroll Arrow Indicator */}
        <ScrollArrow heroRef={heroRef} text="Scroll to learn more" />
      </section>

      {/* Feature Bar */}
      <section className="bg-secondary min-h-[15vh] py-8 md:py-0 md:h-[15vh] flex items-center">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white mb-3 md:mb-4" />
              <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                Ready-to-approve Treatment Plans
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white mb-3 md:mb-4" />
              <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                Continuous Clinical Support
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white mb-3 md:mb-4" />
              <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                Proven Results
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Story Section */}
      <Section size="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
          <div>
            <Heading
              level="h1"
              className="text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              About Orthoveer
            </Heading>
            <p className={cn(text.cardText, "text-xl mb-6")}>
              Our facility specializes in clear aligner production equipment,
              thermoplastic materials, and white-label aligner manufacturing
              services for orthodontic practices, dental laboratories, and DSOs.
            </p>
            <p className={cn(text.cardText, "text-lg mb-6")}>
              We supply production equipment for in-house aligner manufacturing,
              certified thermoplastic materials for thermoforming, and provide
              white-label clear aligner manufacturing services with integrated
              clinical workflow support.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Contact Us{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img
                src={aboutExpoImage}
                alt="Orthoveer Manufacturing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px]">
            <img
              src={machineImageTrim}
              alt="Orthoveer Manufacturing Facility"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <div className={cn(patterns.badgeSimple, "mb-6")}>
              Manufacturing Solutions
            </div>
            <Heading level="h3" className="text-2xl md:text-3xl mb-6">
              Clear Aligner Production Equipment & Services
            </Heading>
            <p className={cn(text.cardText, "text-base md:text-lg mb-6")}>
              Orthoveer provides orthodontic production equipment including
              thermoforming equipment, trimming systems, 3D printers, and
              scanning equipment for in-house clear aligner manufacturing. We
              supply ISO 13485 certified thermoplastic materials and offer
              white-label aligner manufacturing services with integrated
              clinical workflow support.
            </p>
            <p className={cn(text.cardText, "text-base md:text-lg mb-6")}>
              Our manufacturing solutions support both in-house production
              models and outsourced white-label manufacturing. Equipment and
              materials are compatible with 3Shape, iTero, and Medit scanner
              workflows, with order management portals and treatment planning
              software integration.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Contact Us{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Success Metrics Section */}
      <Section size="large" background="subtle">
        <div className={cn(patterns.centeredContentXl, patterns.sectionHeader)}>
          <Heading level="h2" className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Orthodontic Manufacturing Infrastructure & Production Capacity
          </Heading>
          <p className={cn(text.cardText, "text-xl mb-8")}>
            ISO 13485 certified manufacturing facility with production capacity
            for clear aligner manufacturing. Our manufacturing infrastructure
            supports both equipment supply and white-label aligner production
            services for orthodontic practices, dental laboratories, and DSOs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Contact Us{" "}
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3 font-heading">
              500+
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">
              Partner Clinics
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3 font-heading">
              2M+
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">
              Aligners Produced
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3 font-heading">
              48h
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">
              Turnaround Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-3 font-heading">
              99.8%
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">
              Success Rate
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px]">
            <img
              src={darkHeroImage}
              alt="Orthoveer Technology & Innovation"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <div className={cn(patterns.badgeSimple, "mb-6")}>
              Production Equipment
            </div>
            <Heading level="h3" className="text-2xl md:text-3xl mb-6">
              Clear Aligner Manufacturing Equipment & Materials
            </Heading>
            <p className={cn(text.cardText, "text-base md:text-lg mb-6")}>
              Complete range of orthodontic production equipment for clear
              aligner manufacturing: thermoforming equipment, trimming and
              cutting systems, 3D printing equipment, scanning systems, and
              finishing equipment. All equipment is compatible with standard
              orthodontic workflows and treatment planning software.
            </p>
            <p className={cn(text.cardText, "text-base md:text-lg mb-6")}>
              We supply ISO 13485 certified thermoplastic materials in sheet and
              roll formats for thermoforming production. Materials are tested
              for biocompatibility, transparency, and durability. White-label
              manufacturing services include integrated clinical workflow
              support with scanner integration and order management portals.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Contact Us{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Manufacturing Standards Section */}
      <Section size="large">
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            Manufacturing Standards & Compliance
          </Heading>
          <p
            className={cn(text.cardText, "text-xl", patterns.centeredContentLg)}
          >
            Certified manufacturing facility meeting global medical device
            standards with comprehensive quality control systems and material
            biocompatibility testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 p-8">
            <div className="flex-icon-title">
              <ShieldCheck
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <Heading level="h3">
                ISO 13485 Medical Device Certification
              </Heading>
            </div>
            <p className={text.cardText}>
              Certified manufacturing facility meeting global medical device
              standards for orthodontic production.
            </p>
          </Card>

          <Card className="bg-white/5 border-white/10 p-8">
            <div className="flex-icon-title">
              <Target
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <Heading level="h3">Quality Control Systems</Heading>
            </div>
            <p className={text.cardText}>
              Comprehensive quality control systems ensuring consistent
              standards across all production stages.
            </p>
          </Card>

          <Card className="bg-white/5 border-white/10 p-8">
            <div className="flex-icon-title">
              <Award
                className="w-12 h-12 text-primary shrink-0"
                aria-hidden="true"
              />
              <Heading level="h3">Material Biocompatibility Testing</Heading>
            </div>
            <p className={text.cardText}>
              All materials undergo rigorous biocompatibility testing to ensure
              patient safety and compliance.
            </p>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Contact Us{" "}
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Commitment Section */}
      <Section size="large">
        <div className={cn(patterns.centeredContentXl, "text-center")}>
          <Heading level="h2" className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Orthodontic Manufacturing Services & Support
          </Heading>
          <p className={cn(text.cardText, "text-xl mb-8")}>
            ISO 13485 certified manufacturing services for orthodontic
            practices, dental laboratories, and DSOs. We provide production
            equipment, certified thermoplastic materials, and white-label clear
            aligner manufacturing with integrated clinical workflow support.
          </p>
          <p className={cn(text.cardText, "text-lg mb-8")}>
            Our manufacturing solutions include orthodontic production equipment
            for in-house aligner manufacturing, ISO 13485 certified
            thermoplastic materials in sheet and roll formats, and white-label
            aligner manufacturing services. All services include technical
            support, workflow integration with 3Shape, iTero, and Medit
            scanners, and order management portals.
          </p>
          <p className={cn(text.cardText, "text-lg mb-8")}>
            Manufacturing services are available for single practices, dental
            laboratories, and large DSOs. Production equipment and materials
            meet ISO 13485 medical device standards with comprehensive quality
            control systems and material biocompatibility testing.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Contact Us{" "}
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section size="large">
        <div className="text-center">
          <Heading level="h2" className="mb-6">
            Ready to Partner With Us?
          </Heading>
          <p
            className={cn(
              "text-gray-400 text-lg mb-10 leading-relaxed",
              patterns.centeredContentMd
            )}
          >
            Discover how Orthoveer can transform your orthodontic practice with
            our comprehensive manufacturing solutions.
          </p>
          <div className="flex-responsive-center">
            <Link href="/machines">
              <Button size="lg" variant="primary">
                Explore Solutions{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
