import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Layers, Zap, Mail, Phone } from "lucide-react";
import wireframeImage from "@assets/generated_images/abstract_digital_dental_wireframe.png";
import { useState } from "react";

export default function PlasticsMaterials() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
                  Plastics & Rolls
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Premium-grade thermoplastic materials engineered specifically for high-precision aligner production. Maxflex and our proprietary material lines deliver superior clarity, durability, and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium" data-testid="button-request-samples">
                  Request Samples <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium backdrop-blur-sm" data-testid="button-specs">
                  View Specifications
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Maxflex Plastics Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                  Premium Material
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading leading-tight">
                  Maxflex Plastics
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Rigid hard thermoplastic elastomer material engineered for superior performance in aligner production. Available in single, double, and triple configurations to meet different clinical requirements.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Exceptional Tear Resistance</h4>
                      <p className="text-gray-400 text-sm">Prevents cracking during fabrication and clinical use, ensuring durability through the entire treatment cycle.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">High Impact Strength</h4>
                      <p className="text-gray-400 text-sm">Withstands patient handling and insertion pressures without deformation or damage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Superior Optical Clarity</h4>
                      <p className="text-gray-400 text-sm">Crystal-clear transparency ensures aesthetic appeal while maintaining material strength.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Optimized Stress Retention</h4>
                      <p className="text-gray-400 text-sm">Maintains consistent force delivery over extended wear periods for predictable clinical outcomes.</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8" data-testid="button-order-plastics">
                  Order Maxflex Plastics
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="h-80 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <Layers className="w-32 h-32 text-primary opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Rolls Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="h-80 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <Zap className="w-32 h-32 text-primary opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                  Bulk Material
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading leading-tight">
                  Material Rolls
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Bulk rolls of premium thermoplastic material for large-scale production. Optimized for automated thermoforming and seamless integration with your existing production line equipment.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Consistent Material Quality</h4>
                      <p className="text-gray-400 text-sm">Strict batch testing ensures uniform properties across every roll for reliable production outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Minimal Material Waste</h4>
                      <p className="text-gray-400 text-sm">Optimized roll dimensions reduce trimming waste and maximize your material efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Flexible Supply Options</h4>
                      <p className="text-gray-400 text-sm">Available in various widths and thicknesses with customizable ordering schedules.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Reliable Logistics</h4>
                      <p className="text-gray-400 text-sm">Proper storage and transport standards ensure material integrity from factory to your facility.</p>
                    </div>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8" data-testid="button-order-rolls">
                  Order Material Rolls
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Material Science */}
        <section className="py-20 bg-secondary/20">
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
                    <h4 className="text-white font-bold mb-2">Stain Resistance</h4>
                    <p className="text-gray-400">Special treatment prevents discoloration from food, beverages, and common staining agents, maintaining aesthetic appeal throughout treatment.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-white font-bold mb-2">Biocompatibility</h4>
                    <p className="text-gray-400">Material meets all medical device standards for safe oral use, hypoallergenic and dermatologically tested.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-white font-bold mb-2">Temperature Stability</h4>
                    <p className="text-gray-400">Maintains properties across temperature ranges, suitable for thermoforming and clinical environments.</p>
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="text-white font-bold mb-2">Environmental Considerations</h4>
                    <p className="text-gray-400">Responsibly sourced materials with focus on sustainable manufacturing practices.</p>
                  </div>
                </div>

                <Button className="mt-10 bg-primary hover:bg-primary/90 text-white rounded-full px-8" data-testid="button-download-specs">
                  Download Technical Sheet
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">Request Materials or Samples</h2>
              <p className="text-gray-400 text-lg mb-12 text-center">
                Contact our materials team to discuss your production needs, request samples, or inquire about bulk orders and custom formulations.
              </p>
              
              <Card className="bg-white/5 border-white/10 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-3">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your Company"
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                        placeholder="contact@company.com"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-3">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">Which materials are you interested in?</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                      rows={5}
                      placeholder="Tell us about your production needs, material interests, and estimated monthly volume..."
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold" data-testid="button-submit-form">
                    Send Inquiry
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-6">Or reach out directly:</p>
                  <div className="flex flex-col md:flex-row gap-6">
                    <a href="tel:+33185331183" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>(+33) 1 85 33 11 83</span>
                    </a>
                    <a href="mailto:contact@orthoveer.fr" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>contact@orthoveer.fr</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
