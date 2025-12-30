import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Users,
  Target,
  Award,
  Heart,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "wouter";
import darkHeroImage from "@assets/hero/dark-hero.png";

export default function AboutUs() {
  return (
    <PageLayout>
      <PageHero
        badge="Our Story"
        title="ISO 13485 Certified Orthodontic Manufacturing"
        description="Leading the future of orthodontic manufacturing with precision, innovation, and unwavering commitment to quality."
        image={darkHeroImage}
        imageAlt="About OrthoVeer"
      />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Manufacturing Standards & Compliance
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Certified manufacturing facility meeting global medical device
                standards with comprehensive quality control systems and
                material biocompatibility testing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white/5 border-white/10 p-8">
                <ShieldCheck
                  className="w-12 h-12 text-primary mb-6"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  ISO 13485 Medical Device Certification
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Certified manufacturing facility meeting global medical device
                  standards for orthodontic production.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <Target
                  className="w-12 h-12 text-primary mb-6"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Quality Control Systems
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive quality control systems ensuring consistent
                  standards across all production stages.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <Award
                  className="w-12 h-12 text-primary mb-6"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Material Biocompatibility Testing
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  All materials undergo rigorous biocompatibility testing to
                  ensure patient safety and compliance.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading text-center">
              Manufacturing Commitment & Quality Systems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Quality Control Processes
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Dimensional accuracy verification, material testing, and
                  validation protocols ensuring consistent quality.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Production Process Standards
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Standardized production processes meeting ISO 13485
                  requirements for medical device manufacturing.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Documentation & Traceability
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete documentation and traceability systems for regulatory
                  compliance and quality assurance.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Discover how OrthoVeer can transform your orthodontic practice
              with our comprehensive manufacturing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/machines">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
