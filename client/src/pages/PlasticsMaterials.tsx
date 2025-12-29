import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Layers, Zap, Shield } from "lucide-react";
import wireframeImage from "@assets/generated_images/abstract_digital_dental_wireframe.png";

export default function PlasticsMaterials() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center pt-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Premium Manufacturing Materials
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                High-Performance <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Plastics & Materials
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Premium-grade thermoplastic materials engineered specifically for high-precision aligner production. Maxflex and our proprietary material lines deliver superior clarity, durability, and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium" data-testid="button-order-materials">
                  Request Samples <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium backdrop-blur-sm" data-testid="button-specs">
                  View Specifications
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-heading">Product Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Plastics Card */}
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <Layers className="w-24 h-24 text-primary opacity-30 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Maxflex Plastics</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Rigid hard thermoplastic elastomer material engineered for superior performance in aligner production. Available in single, double, and triple configurations.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Exceptional tear resistance
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      High impact strength
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Superior optical clarity
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" data-testid="button-order-plastics">
                    Order Plastics
                  </Button>
                </div>
              </div>

              {/* Rolls Card */}
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <Zap className="w-24 h-24 text-primary opacity-30 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Material Rolls</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Bulk rolls of premium thermoplastic material for large-scale production. Optimized for automated thermoforming and seamless integration with your production line.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Consistent material quality
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Minimal waste
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Volume discounts available
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" data-testid="button-order-rolls">
                    Order Rolls
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Specifications */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                  <img src={wireframeImage} alt="Material Composition" className="w-full h-auto" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
                  Advanced Material Science
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-white font-bold mb-2">Tear Resistance</h4>
                    <p className="text-gray-400">Enhanced material formulation prevents cracking during fabrication and use, ensuring durability through the entire treatment cycle.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-white font-bold mb-2">Stress Retention</h4>
                    <p className="text-gray-400">Optimized molecular structure maintains consistent force delivery over extended wear periods, ensuring predictable clinical outcomes.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-white font-bold mb-2">Optical Clarity</h4>
                    <p className="text-gray-400">Crystal-clear transparency ensures aesthetic appeal while maintaining material strength and resistance to yellowing.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-white font-bold mb-2">Stain Resistance</h4>
                    <p className="text-gray-400">Special treatment prevents discoloration from food, beverages, and common staining agents, maintaining appearance throughout treatment.</p>
                  </div>
                </div>

                <Button className="mt-10 bg-primary hover:bg-primary/90 text-white rounded-full px-8" data-testid="button-technical-specs">
                  Download Technical Sheet
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Bulk Options */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">Flexible Pricing & Volume Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Starter Pack", desc: "Perfect for small labs", price: "€2,500", items: ["100 sheets", "5 material options", "Basic support", "Quarterly reorders"] },
                { name: "Professional", desc: "For growing practices", price: "€7,500", items: ["500 sheets/month", "Priority access", "Technical support", "Bulk discounts"], featured: true },
                { name: "Enterprise", desc: "For large operations", price: "Custom", items: ["Unlimited supply", "Dedicated account manager", "Custom formulations", "Flexible payment terms"] }
              ].map((plan, i) => (
                <Card key={i} className={`p-8 border-white/10 flex flex-col ${plan.featured ? 'bg-primary/20 border-primary/50' : 'bg-white/5'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                  <div className="text-3xl font-bold text-white mb-8">{plan.price}</div>
                  <ul className="space-y-3 mb-auto flex-1">
                    {plan.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-white rounded-full" data-testid={`button-select-${i}`}>
                    Select Plan
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Need custom material specifications?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Our team can work with you to develop custom formulations tailored to your specific production needs.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-bold" data-testid="button-contact-team">
              Contact Our Materials Team
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
