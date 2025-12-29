import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Factory, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

// Import images
import techImage from "@assets/generated_images/abstract_digital_dental_wireframe.png";
import labImage from "@assets/generated_images/high_tech_dental_manufacturing_lab.png";

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
                  <div className="text-4xl font-bold text-white mb-2 font-heading tracking-tight">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Complete Orthodontic Ecosystem</h2>
              <p className="text-gray-400 text-lg">
                We provide end-to-end solutions for dental professionals, from digital scanning integration to final product delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Layers,
                  title: "Clear Aligners",
                  desc: "Premium multi-layer material offering superior retention and clarity for complex movements."
                },
                {
                  icon: Globe,
                  title: "Digital Planning",
                  desc: "AI-assisted treatment plans reviewed by expert orthodontists for predictable outcomes."
                },
                {
                  icon: Factory,
                  title: "White Label",
                  desc: "Full branding capabilities allowing you to market the product as your own premier solution."
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <a href="#" className="inline-flex items-center text-primary text-sm font-semibold hover:text-white transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-24 bg-secondary/20 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                  <img src={techImage} alt="Digital Treatment Planning" className="w-full h-auto" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
                  Proprietary Technology
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">
                  Precision driven by <br/> digital innovation
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our manufacturing process integrates direct API connections with intraoral scanners, ensuring 
                  micron-level accuracy from scan to shipment.
                </p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Direct integration with 3Shape, iTero, and Medit",
                    "Automated trimline generation for comfort",
                    "Real-time production tracking portal",
                    "Laser-marked identification on every aligner"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8">
                  Explore Tech Specs
                </Button>
              </div>
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
                  Scalable manufacturing <br/> at your fingertips
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Whether you are a single clinic or a large DSO, our automated production lines 
                  scale to meet your demand without compromising quality.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <Card className="bg-white/5 border-white/10 p-6">
                     <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                     <h4 className="text-white font-bold mb-2">ISO 13485 Certified</h4>
                     <p className="text-sm text-gray-400">Meeting global medical device standards.</p>
                   </Card>
                   <Card className="bg-white/5 border-white/10 p-6">
                     <Zap className="w-8 h-8 text-primary mb-4" />
                     <h4 className="text-white font-bold mb-2">Rapid Dispatch</h4>
                     <p className="text-sm text-gray-400">Production to shipping in under 48 hours.</p>
                   </Card>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={labImage} alt="Manufacturing Lab" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Ready to elevate your practice?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of dental professionals who trust OrthoVeer for their aligner manufacturing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-bold shadow-2xl shadow-black/20">
                Partner With Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg font-bold">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
