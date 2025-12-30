import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import type { CaseStudy } from "@/types";
import labImage from "@assets/hero/lab-hero.png";

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Scaling Production for Multi-Location DSO",
    client: "Coast Dental Group",
    industry: "Dental Service Organization",
    challenge:
      "A rapidly growing DSO with 50+ locations needed to scale aligner production while maintaining quality and reducing turnaround times.",
    solution:
      "Implemented our complete manufacturing solution including MAXForm L2 thermoformers, automated trimming systems, and bulk material roll integration. Established dedicated production lines with real-time tracking.",
    results: [
      { metric: "Production Volume", value: "300% increase" },
      { metric: "Turnaround Time", value: "48 hours" },
      { metric: "Quality Rate", value: "99.8%" },
      { metric: "Cost Reduction", value: "35% per unit" },
    ],
    testimonial: {
      quote:
        "OrthoVeer's solutions transformed our production capabilities. We can now serve all our locations efficiently while maintaining the highest quality standards.",
      author: "Dr. Robert Martinez",
      role: "Chief Clinical Officer",
    },
  },
  {
    id: "2",
    title: "Modernizing Traditional Orthodontic Lab",
    client: "Precision Orthodontics Lab",
    industry: "Orthodontic Laboratory",
    challenge:
      "A family-owned lab with 30 years of experience needed to modernize their equipment and processes to compete with larger manufacturers.",
    solution:
      "Upgraded to our MAXTrim T2 and MAXPolish II systems, integrated digital workflow, and trained staff on new production protocols. Maintained their personalized service approach while gaining efficiency.",
    results: [
      { metric: "Efficiency", value: "250% improvement" },
      { metric: "Capacity", value: "5x increase" },
      { metric: "Client Satisfaction", value: "98%" },
      { metric: "ROI", value: "18 months" },
    ],
    testimonial: {
      quote:
        "The new equipment allowed us to maintain our quality while dramatically increasing our capacity. Our clients noticed the improvement immediately.",
      author: "Patricia Chen",
      role: "Lab Director",
    },
  },
  {
    id: "3",
    title: "Startup Clinic Launch",
    client: "Smile Forward Orthodontics",
    industry: "Orthodontic Practice",
    challenge:
      "A new orthodontic practice needed to establish in-house aligner production capabilities from day one to differentiate their services.",
    solution:
      "Complete starter package including MAXForm L2, MAXTrim T1, material inventory, and comprehensive training. Integrated with their 3Shape scanner from day one.",
    results: [
      { metric: "Time to Production", value: "2 weeks" },
      { metric: "Patient Acquisition", value: "40% increase" },
      { metric: "Revenue Growth", value: "60% in first year" },
      { metric: "Patient Satisfaction", value: "4.9/5" },
    ],
    testimonial: {
      quote:
        "Starting with OrthoVeer's equipment gave us a competitive edge from day one. Our patients love the quick turnaround and quality.",
      author: "Dr. Amanda Foster",
      role: "Founder & Lead Orthodontist",
    },
  },
  {
    id: "4",
    title: "International Expansion Support",
    client: "European Ortho Solutions",
    industry: "Orthodontic Manufacturer",
    challenge:
      "Expanding operations to serve European markets required ISO 13485 certified equipment and processes that met EU medical device regulations.",
    solution:
      "Provided ISO-certified equipment suite, regulatory compliance documentation, and ongoing support for EU MDR requirements. Established quality management system integration.",
    results: [
      { metric: "Regulatory Compliance", value: "100%" },
      { metric: "Market Entry", value: "6 months" },
      { metric: "Quality Certifications", value: "ISO 13485" },
      { metric: "Market Share", value: "15% in Year 1" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <PageLayout>
      <PageHero
        badge="Success Stories"
        title="Case"
        titleHighlight="Studies"
        description="Discover how orthodontic practices and labs worldwide are achieving remarkable results with OrthoVeer solutions."
        image={labImage}
        imageAlt="Case Studies"
      />

      {/* Case Studies List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="bg-white/5 border-white/10 p-8 md:p-12"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase">
                      {study.industry}
                    </div>
                    <span className="text-gray-500 text-sm">{study.client}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                    {study.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Challenge
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Solution
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {study.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-white/5 border border-white/10 text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                  <div className="border-l-4 border-primary pl-6 py-4 bg-white/5 rounded-lg">
                    <p className="text-gray-300 italic mb-4">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="text-sm">
                      <span className="font-semibold text-white">
                        {study.testimonial.author}
                      </span>
                      <span className="text-gray-500">
                        {" "}
                        - {study.testimonial.role}
                      </span>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Join hundreds of practices and labs that have transformed their
              operations with OrthoVeer solutions.
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
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

