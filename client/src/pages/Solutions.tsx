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
import { useRef } from "react";
import { ScrollArrow } from "@/components/sections/ScrollArrow";
import { track } from "@/lib/tracking/events";
import solutionsHeroVideo from "@assets/solutionsPage/solutionsHero.mp4";

export default function Solutions() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <PageLayout>
      {/* Custom Hero Section with Video Background */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center pt-12 overflow-hidden"
      >
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={solutionsHeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Complete Solutions
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Orthodontic Manufacturing{" "}
              <span className="text-primary">Solutions</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              End-to-end solutions for orthodontic practices: production
              equipment, certified materials, white-label manufacturing, and
              digital workflow integration.
            </p>

            <div className="flex-responsive">
              <Link href="#solutions">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                  onClick={() => {
                    track("cta_explore_solutions", {
                      location: "hero",
                    });
                  }}
                >
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Arrow Indicator */}
        <ScrollArrow heroRef={heroRef} text="Scroll to learn more" />
      </section>

      {/* Solutions Overview Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Complete Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              From equipment and materials to white-label production, we provide
              everything you need to offer clear aligner treatments.
            </p>
          </div>

          <div className="grid-4col">
            <Link href="/machines">
              <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer group flex flex-col">
                <div className="flex-icon-title">
                  <Factory className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
                  <h3 className="text-xl font-bold text-white font-heading">
                    Production Equipment
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 grow">
                  Specialized production equipment for every stage of aligner
                  manufacturing: thermoforming, trimming, scanning, 3D printing,
                  and more.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                  Discover Our Equipment <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300 h-full group flex flex-col">
              <div className="flex-icon-title">
                <Package className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Materials & Consumables
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 grow">
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
              <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer group flex flex-col">
                <div className="flex-icon-title">
                  <Layers className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
                  <h3 className="text-xl font-bold text-white font-heading">
                    White-Label Manufacturing
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 grow">
                  Outsource aligner production while maintaining your brand
                  identity and clinical standards.
                </p>
                <div className="link-primary-hover mt-auto">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </Link>

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300 h-full flex flex-col group">
              <div className="flex-icon-title">
                <Settings className="w-12 h-12 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Digital Integration
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 grow">
                Seamless integration with 3Shape, iTero, Medit scanners and
                treatment planning software.
              </p>
              <div className="link-primary-hover mt-auto">
                Contact us <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Models Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Production Models for Every Practice
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Choose the production model that fits your practice size and
              operational needs.
            </p>
          </div>

          <div className="grid-3col-lg">
            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <Target className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-2xl font-bold text-white font-heading">
                  In-House Production
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Produce aligners in your own facility with complete control over
                quality, timing, and costs. Perfect for practices ready to
                invest in production infrastructure.
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

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <Users className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-2xl font-bold text-white font-heading">
                  Centralized & Lab Production
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Centralized production for multi-location practices or dedicated
                lab facilities serving multiple clinics. Optimize resources
                across locations.
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

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <ShieldCheck className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-2xl font-bold text-white font-heading">
                  White-Label Manufacturing
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Outsource aligner production while maintaining your brand
                identity and clinical standards. No infrastructure investment
                required.
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
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Why Choose Our Solutions
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Comprehensive support for every stage of your aligner production
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <Zap className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Fast Turnaround
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Production to shipping in under 48 hours with scalable capacity
                to meet your demand.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <ShieldCheck className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  ISO 13485 Certified
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                All solutions meet global medical device standards for
                orthodontic manufacturing.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <Settings className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Seamless Integration
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Works with your existing workflow and integrates with major
                scanner and software platforms.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <Target className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Scalable Solutions
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                From single practices to large DSOs, our solutions scale to meet
                your growing needs.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <Users className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Expert Support
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive training, technical support, and ongoing guidance
                from our team of experts.
              </p>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex-icon-title">
                <CheckCircle2 className="w-12 h-12 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-white font-heading">
                  Quality Guaranteed
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Consistent quality across all production stages with rigorous
                quality control processes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-lg mb-12 text-center">
              Contact us to discuss which solution is right for your practice.
            </p>
            <ContactForm
              submitLabel="Request Information"
              messagePlaceholder="Tell us about your practice needs and which solutions interest you..."
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
