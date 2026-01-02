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
import factoryImage from "@assets/aboutPage/factory.jpg";
import trimmingImage from "@assets/aboutPage/thrimming.jpg";
import smilingWomanImage from "@assets/aboutPage/woman-smiling-at-the-dentist-while-holding-a-mirror.jpg";
import darkHeroImage from "@assets/dark-hero.png";

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

        <div className="container mx-auto px-6 relative z-10 flex items-center py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full">
            {/* Left Column: Text Content */}
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight mb-4 md:mb-6">
                Precision Manufacturing, Proven Excellence.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-xl leading-relaxed">
                We provide orthodontic practices and dental laboratories with
                cutting-edge production equipment, certified materials, and
                white-label manufacturing services to ensure consistent quality
                and clinical success.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
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
                  src={smilingWomanImage}
                  alt="Orthodontic Treatment"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Arrow Indicator */}
        <ScrollArrow heroRef={heroRef} text="Scroll to learn more" />
      </section>

      {/* Feature Bar */}
      <section className="bg-secondary min-h-[15vh] py-8 md:py-0 md:h-[15vh] flex items-center">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading">
                About OrthoVeer
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Our facility specializes in clear aligner production equipment,
                thermoplastic materials, and white-label aligner manufacturing
                services for orthodontic practices, dental laboratories, and
                DSOs.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                We supply production equipment for in-house aligner
                manufacturing, certified thermoplastic materials for
                thermoforming, and provide white-label clear aligner
                manufacturing services with integrated clinical workflow
                support.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
                  Contact Us{" "}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src={factoryImage}
                  alt="OrthoVeer Manufacturing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px]">
              <img
                src={trimmingImage}
                alt="OrthoVeer Manufacturing Facility"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
                Manufacturing Solutions
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">
                Clear Aligner Production Equipment & Services
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                OrthoVeer provides orthodontic production equipment including
                thermoforming equipment, trimming systems, 3D printers, and
                scanning equipment for in-house clear aligner manufacturing. We
                supply ISO 13485 certified thermoplastic materials and offer
                white-label aligner manufacturing services with integrated
                clinical workflow support.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                Our manufacturing solutions support both in-house production
                models and outsourced white-label manufacturing. Equipment and
                materials are compatible with 3Shape, iTero, and Medit scanner
                workflows, with order management portals and treatment planning
                software integration.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
                  Contact Us{" "}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Orthodontic Manufacturing Infrastructure & Production Capacity
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              ISO 13485 certified manufacturing facility with production
              capacity for clear aligner manufacturing. Our manufacturing
              infrastructure supports both equipment supply and white-label
              aligner production services for orthodontic practices, dental
              laboratories, and DSOs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
              >
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
                alt="OrthoVeer Technology & Innovation"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
                Production Equipment
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-heading">
                Clear Aligner Manufacturing Equipment & Materials
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                Complete range of orthodontic production equipment for clear
                aligner manufacturing: thermoforming equipment, trimming and
                cutting systems, 3D printing equipment, scanning systems, and
                finishing equipment. All equipment is compatible with standard
                orthodontic workflows and treatment planning software.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                We supply ISO 13485 certified thermoplastic materials in sheet
                and roll formats for thermoforming production. Materials are
                tested for biocompatibility, transparency, and durability.
                White-label manufacturing services include integrated clinical
                workflow support with scanner integration and order management
                portals.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
                  Contact Us{" "}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Standards Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Manufacturing Standards & Compliance
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-bold text-white font-heading">
                  ISO 13485 Medical Device Certification
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
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
                <h3 className="text-2xl font-bold text-white font-heading">
                  Quality Control Systems
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
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
                <h3 className="text-2xl font-bold text-white font-heading">
                  Material Biocompatibility Testing
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                All materials undergo rigorous biocompatibility testing to
                ensure patient safety and compliance.
              </p>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
              >
                Contact Us{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-heading">
              Orthodontic Manufacturing Services & Support
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              ISO 13485 certified manufacturing services for orthodontic
              practices, dental laboratories, and DSOs. We provide production
              equipment, certified thermoplastic materials, and white-label
              clear aligner manufacturing with integrated clinical workflow
              support.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Our manufacturing solutions include orthodontic production
              equipment for in-house aligner manufacturing, ISO 13485 certified
              thermoplastic materials in sheet and roll formats, and white-label
              aligner manufacturing services. All services include technical
              support, workflow integration with 3Shape, iTero, and Medit
              scanners, and order management portals.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Manufacturing services are available for single practices, dental
              laboratories, and large DSOs. Production equipment and materials
              meet ISO 13485 medical device standards with comprehensive quality
              control systems and material biocompatibility testing.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
              >
                Contact Us{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Discover how OrthoVeer can transform your orthodontic practice
              with our comprehensive manufacturing solutions.
            </p>
            <div className="flex-responsive-center">
              <Link href="/machines">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
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
        </div>
      </section>
    </PageLayout>
  );
}
