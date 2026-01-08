import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import { track } from "@/lib/tracking/events";
import type { CaseStudy } from "@/types";
import factoryImage from "@assets/aboutPage/factory.jpg";
import trimmingImage from "@assets/aboutPage/thrimming.jpg";
import labHeroImage from "@assets/lab-hero.png";
import techHeroImage from "@assets/tech-hero.png";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { text } from "@/lib/styles";
import { cn } from "@/lib/utils";

const caseStudies: (CaseStudy & { image: string })[] = [
  {
    id: "1",
    title: "Scaling Production for Multi-Location DSO",
    client: "Coast Dental Group",
    industry: "Dental Service Organization",
    image: factoryImage,
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
      authorImage: "https://i.pravatar.cc/150?img=12",
    },
  },
  {
    id: "2",
    title: "Modernizing Traditional Orthodontic Lab",
    client: "Precision Orthodontics Lab",
    industry: "Orthodontic Laboratory",
    image: trimmingImage,
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
      authorImage: "https://i.pravatar.cc/150?img=47",
    },
  },
  {
    id: "3",
    title: "Startup Clinic Launch",
    client: "Smile Forward Orthodontics",
    industry: "Orthodontic Practice",
    image: labHeroImage,
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
      authorImage: "https://i.pravatar.cc/150?img=45",
    },
  },
  {
    id: "4",
    title: "International Expansion Support",
    client: "European Ortho Solutions",
    industry: "Orthodontic Manufacturer",
    image: techHeroImage,
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
        image={labHeroImage}
        imageAlt="Case Studies"
        showContactButton={true}
      />

      {/* Case Studies List */}
      <Section>
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
                    <span className="text-gray-500 text-sm">
                      {study.client}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                    {study.title}
                  </h2>

                  {/* Challenge and Solution in 2 columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex-inline">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Challenge
                      </h3>
                      <p className={text.cardText}>
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex-inline">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Solution
                      </h3>
                      <p className={text.cardText}>
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Image and Results on same row */}
                  <div className="grid-2col-lg mb-8">
                    <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-white/5 border border-white/10 text-left flex flex-col justify-center h-full"
                        >
                          <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
                            {result.metric}
                          </div>
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1">
                            {result.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                  <div className="border-l-4 border-primary pl-6 py-4 bg-white/5 rounded-lg flex gap-4">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 bg-white/5 flex items-center justify-center">
                        <img
                          src={study.testimonial.authorImage || study.image}
                          alt={study.testimonial.author}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
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
                  </div>
                )}
              </Card>
            ))}
          </div>
      </Section>

      {/* CTA Section */}
      <Section background="subtle">
        <div className="text-center">
          <Heading level="h2" className="mb-6">
            Ready to Write Your Success Story?
          </Heading>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Join hundreds of practices and labs that have transformed their
              operations with OrthoVeer solutions.
            </p>
            <div className="flex-responsive-center">
              <Link href="/machines">
                <Button
                  size="lg"
                  variant="primary"
                >
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium"
                  onClick={() => {
                    track("cta_schedule_consultation", {
                      location: "cta_section",
                    });
                  }}
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
      </Section>
    </PageLayout>
  );
}
