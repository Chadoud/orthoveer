import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Cpu, Zap, Shield, BarChart3, Mail, Phone } from "lucide-react";
import labImage from "@assets/generated_images/high_tech_dental_manufacturing_lab.png";
import { useState } from "react";

export default function Machines() {
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
                Manufacturing Automation
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Precision <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Manufacturing Machines
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                State-of-the-art thermoforming, cutting, and finishing equipment engineered for high-volume aligner production with micron-level precision and minimal waste.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium" data-testid="button-schedule-demo">
                  Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium backdrop-blur-sm" data-testid="button-specs">
                  Technical Specs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Overview */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-heading">Complete Production Line Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Thermoformer */}
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <Cpu className="w-20 h-20 text-primary opacity-30 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Precision Thermoformer</h3>
                  <p className="text-gray-400 text-sm mb-6">Model OV-3000X</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Advanced heating and cooling system with programmable temperature profiles for perfect material flow and aligner fit without deformation.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Production: 500 aligners/day
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Precision: ±0.05mm tolerance
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Auto-cooling system
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" data-testid="button-info-thermoformer">
                    More Info
                  </Button>
                </div>
              </div>

              {/* Cutter */}
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <Zap className="w-20 h-20 text-primary opacity-30 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">CNC Trimming System</h3>
                  <p className="text-gray-400 text-sm mb-6">Model OV-Trim Pro</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Automated trimming with laser-guided precision edge finishing. Produces perfect trimlines and smooth edges every time.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Cycle time: 90 seconds
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Laser edge polishing
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Minimal material waste
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" data-testid="button-info-cutter">
                    More Info
                  </Button>
                </div>
              </div>

              {/* Polishing */}
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <Shield className="w-20 h-20 text-primary opacity-30 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Polishing & Finishing Unit</h3>
                  <p className="text-gray-400 text-sm mb-6">Model OV-Polish 2000</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Multi-stage finishing system that delivers smooth, clear surfaces ready for packaging and delivery to clinics.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Chemical-free polishing
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Superior clarity enhancement
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Sterilizable output
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" data-testid="button-info-polisher">
                    More Info
                  </Button>
                </div>
              </div>

              {/* QA System */}
              <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <BarChart3 className="w-20 h-20 text-primary opacity-30 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Quality Assurance System</h3>
                  <p className="text-gray-400 text-sm mb-6">Model OV-QA Pro</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Automated dimensional scanning and thickness verification for 100% quality control before shipping.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Real-time measurements
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Defect detection
                    </li>
                    <li className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Production analytics
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full" data-testid="button-info-qa">
                    More Info
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Line Image */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                  <img src={labImage} alt="Manufacturing Facility" className="w-full h-auto" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
                  Integrated Production Lines
                </h2>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Our turnkey production systems combine all components into a seamless workflow, from material input to final quality verification and packaging.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">1</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Material Loading</h4>
                      <p className="text-gray-400">Automated roll loader with precise tension control ensures consistent material feed.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">2</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Thermoforming</h4>
                      <p className="text-gray-400">Precision heating and stamping creates perfect aligner shells with ideal thickness.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">3</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Trimming & Finishing</h4>
                      <p className="text-gray-400">CNC trimming produces perfect trimlines with laser polishing for comfort.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">4</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Quality Control</h4>
                      <p className="text-gray-400">Automated dimensional scanning verifies every aligner meets specifications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">Interested in Our Machines?</h2>
              <p className="text-gray-400 text-lg mb-12 text-center">
                Each machine is sold individually and customized to your production needs. Contact us to discuss your requirements and request a detailed quote.
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
                    <label className="block text-white font-semibold mb-3">Which machines are you interested in?</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                      rows={5}
                      placeholder="Tell us about your production needs, equipment interests, and production volume..."
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
