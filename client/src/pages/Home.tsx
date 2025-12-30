import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
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

// Import images
import techImage from "@assets/hero/tech-hero.png";
import labImage from "@assets/hero/lab-hero.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      <main>
        <Hero />

        {/* Stats / Trust Section */}
        <section className="py-20 border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Partner Clinics", value: "500+" },
                { label: "Aligners Produced", value: "2M+" },
                { label: "Turnaround Time", value: "48h" },
                { label: "Success Rate", value: "99.8%" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-4xl font-bold text-white mb-2 font-heading tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="solutions" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">
                In-House Clear Aligner Production
              </h2>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 font-heading">
                  Orthodontic Production Equipment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  <Link href="/machines" className="group">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col cursor-pointer">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Factory className="w-6 h-6" />
                      </div>
                      <div className="text-xl font-bold text-white mb-3 font-heading">
                        Aligner Production Machines
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                        Professional-grade machines dedicated to clear aligner
                        production, from thermoforming to finishing. Each system
                        is selected for reliability, precision, and scalability,
                        enabling clinics and labs to produce aligners in-house
                        with full control over quality and costs.
                      </p>
                      <div className="flex items-center text-primary text-sm font-semibold hover:text-white transition-colors">
                        Explore machines{" "}
                        <ArrowRight
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>

                  <Link href="/plastics-materials" className="group">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col cursor-pointer">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Layers className="w-6 h-6" />
                      </div>
                      <div className="text-xl font-bold text-white mb-3 font-heading">
                        Aligner Sheet Materials
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                        High-quality plastic materials for aligner
                        manufacturing. All materials are tested for
                        transparency, durability, and biocompatibility, ensuring
                        predictable results and compatibility with professional
                        production workflows.
                      </p>
                      <div className="flex items-center text-primary text-sm font-semibold hover:text-white transition-colors">
                        Explore plastics{" "}
                        <ArrowRight
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>

                  <Link href="/rolls" className="group">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col cursor-pointer">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div className="text-xl font-bold text-white mb-3 font-heading">
                        Bulk Roll Materials
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                        High-volume bulk material rolls for thermoforming
                        production. Consistent quality with minimal waste,
                        tested for transparency, durability, and
                        biocompatibility.
                      </p>
                      <div className="flex items-center text-primary text-sm font-semibold hover:text-white transition-colors">
                        View rolls{" "}
                        <ArrowRight
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                    Digital Workflow Integration
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Direct integration with 3Shape, iTero, and Medit scanners,
                    treatment planning software connectivity, and real-time
                    production tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">
                Aligner White-Label Manufacturing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                    Outsourced Aligner Production
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    White-label clear aligners manufactured to clinical
                    standards and branded under your name, without
                    infrastructure investment.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">
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
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Production Models Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Production Models for Orthodontic Practices
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Choose the production model that fits your practice size and
                operational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  In-House Production Model
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Produce aligners in your own facility with complete control
                  over quality, timing, and costs.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Centralized & Lab Production Models
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Centralized production for multi-location practices or
                  dedicated lab facilities serving multiple clinics.
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  White-Label Manufacturing Model
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Outsource aligner production while maintaining your brand
                  identity and clinical standards.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Manufacturing Section */}
        <section id="manufacturing" className="py-24 relative overflow-hidden">
          {/* Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">
                  Quality Standards & Compliance
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Whether you are a single clinic or a large DSO, our solutions
                  scale to meet your demand without compromising quality.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                      ISO 13485 Medical Device Certification
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Meeting global medical device standards for orthodontic
                      manufacturing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                      Production Capacity & Turnaround
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Production to shipping in under 48 hours with scalable
                      capacity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={labImage}
                    alt="Manufacturing Lab"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-black/30" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
              Ready to elevate your practice?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Explore our complete range of materials and equipment, or contact
              our team for personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plastics-materials">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-bold shadow-2xl shadow-black/20"
                >
                  Discover Our Products
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg font-bold"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
