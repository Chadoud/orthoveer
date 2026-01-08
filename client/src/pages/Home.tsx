import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Globe,
  Layers,
  ShieldCheck,
  Zap,
  TrendingDown,
  Settings,
  Target,
  Activity,
} from "lucide-react";
import { Link } from "wouter";
import { track } from "@/lib/tracking/events";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { patterns, text } from "@/lib/styles";
import { cn } from "@/lib/utils";

// Import images
import trimmingImage from "@assets/aboutPage/thrimming.jpg";
import labHeroImage from "@assets/lab-hero.png";

export default function Home() {
  return (
    <PageLayout>
      <Hero />

      {/* Stats / Trust Section */}
      <StatsSection
        stats={[
          { label: "Partner Clinics", value: "500+" },
          { label: "Aligners Produced", value: "2M+" },
          { label: "Turnaround Time", value: "48h" },
          { label: "Success Rate", value: "99.8%" },
        ]}
        border
      />

      {/* Product Categories */}
      <Section id="solutions" size="large" className="relative overflow-hidden">
        <div className="mb-20 relative z-10">
          <Heading level="h2" className="mb-12">
            In-House Clear Aligner Production
          </Heading>

          <div className="mb-16">
            <Heading level="h3" className="mb-8">
              Orthodontic Production Equipment
            </Heading>
            <div className="grid-3col-lg mb-8">
              <Link href="/machines" className="group">
                <div className={patterns.featureCard}>
                  <div className={patterns.featureIcon}>
                    <Factory className="w-6 h-6" />
                  </div>
                  <div className={patterns.featureTitle}>
                    Aligner Production Equipment
                  </div>
                  <p className={patterns.featureDescription}>
                    Professional-grade production equipment dedicated to clear
                    aligner production, from thermoforming to finishing. Each
                    system is selected for reliability, precision, and
                    scalability, enabling clinics and labs to produce aligners
                    in-house with full control over quality and costs.
                  </p>
                  <div className={patterns.featureLink}>
                    Explore equipment{" "}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </div>
                </div>
              </Link>

              <Link href="/plastics-materials" className="group">
                <div className={patterns.featureCard}>
                  <div className={patterns.featureIcon}>
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className={patterns.featureTitle}>
                    Thermoplastic Sheets
                  </div>
                  <p className={patterns.featureDescription}>
                    High-quality plastic materials for aligner manufacturing.
                    All materials are tested for transparency, durability, and
                    biocompatibility, ensuring predictable results and
                    compatibility with professional production workflows.
                  </p>
                  <div className={patterns.featureLink}>
                    View plastics{" "}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </div>
                </div>
              </Link>

              <Link href="/rolls" className="group">
                <div className={patterns.featureCard}>
                  <div className={patterns.featureIcon}>
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className={patterns.featureTitle}>
                    Thermoplastic Rolls
                  </div>
                  <p className={patterns.featureDescription}>
                    High-volume bulk material rolls for thermoforming
                    production. Consistent quality with minimal waste, tested
                    for transparency, durability, and biocompatibility.
                  </p>
                  <div className={patterns.featureLink}>
                    View rolls{" "}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Aligner White-Label Manufacturing Section */}
      <Section className="border-t border-white/5">
        <Heading level="h2" className="mb-12">
          Aligner White-Label Manufacturing
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-center">
          <div>
            <div className="grid-2col">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Outsourced Aligner Production
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  White-label clear aligners manufactured to clinical standards
                  and branded under your name, without infrastructure
                  investment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  Clinical Workflow Integration
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Seamless integration with your existing clinical workflows,
                  scanner platforms, and treatment planning software.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/white-labeling">
                <Button size="lg" variant="primary">
                  Learn more{" "}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              src={labHeroImage}
              alt="White-Label Aligner Manufacturing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Production Models Section */}
      <Section className="pt-12 pb-24">
        <div className="text-center mb-12">
          <Heading level="h2" className="mb-4">
            Production Models for Orthodontic Practices
          </Heading>
          <p
            className={cn("text-lg text-gray-400", patterns.centeredContentLg)}
          >
            Choose the production model that fits your practice size and
            operational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className={cn(patterns.cardFull)}>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              In-House Production Model
            </h3>
            <p className={text.cardText}>
              Produce aligners in your own facility with complete control over
              quality, timing, and costs.
            </p>
          </Card>

          <Card className={cn(patterns.cardFull)}>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Centralized & Lab Production Models
            </h3>
            <p className={text.cardText}>
              Centralized production for multi-location practices or dedicated
              lab facilities serving multiple clinics.
            </p>
          </Card>

          <Card className={cn(patterns.cardFull)}>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              White-Label Manufacturing Model
            </h3>
            <p className={text.cardText}>
              Outsource aligner production while maintaining your brand identity
              and clinical standards.
            </p>
          </Card>
        </div>
      </Section>

      {/* Manufacturing Section */}
      <Section
        id="manufacturing"
        size="large"
        className="relative overflow-hidden"
      >
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-background" />

        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Heading level="h2" className="mb-6 md:text-5xl">
                Quality Standards & Compliance
              </Heading>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Whether you are a single clinic or a large DSO, our solutions
                scale to meet your demand without compromising quality.
              </p>

              <div className="space-y-6">
                <div>
                  <Heading level="h3" className="mb-3">
                    ISO 13485 Medical Device Certification
                  </Heading>
                  <p className={text.cardText}>
                    Meeting global medical device standards for orthodontic
                    manufacturing.
                  </p>
                </div>
                <div>
                  <Heading level="h3" className="mb-3">
                    Production Capacity & Turnaround
                  </Heading>
                  <p className={text.cardText}>
                    Production to shipping in under 48 hours with scalable
                    capacity.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className={patterns.imageContainer}>
                <img
                  src={trimmingImage}
                  alt="Manufacturing Lab"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        size="large"
        background="primary"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute inset-0 bg-primary" />

        <div className="relative z-10 text-center">
          <Heading level="h2" className="mb-6 md:text-5xl text-white">
            Ready to elevate your practice?
          </Heading>
          <p className="text-white/80 text-lg mb-10">
            Explore our complete range of materials and equipment, or contact
            our team for personalized support.
          </p>
          <div className="flex-responsive-center">
            <Link href="/plastics-materials">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-bold shadow-2xl shadow-black/20"
              >
                Discover Our Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg font-bold"
                onClick={() => {
                  track("cta_get_in_touch", {
                    location: "cta_section",
                  });
                }}
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
