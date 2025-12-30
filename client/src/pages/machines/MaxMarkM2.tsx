import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import image from "@assets/maxmark-m2-600x600-removebg-preview_1767043189564.png";

export default function MaxMarkM2() {
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
        <section className="min-h-[70vh] flex items-center pt-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Laser Marking System
                </div>
                
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                  MaxMark <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                    M2
                  </span>
                </h1>
                
                <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                  Advanced laser marking system for permanent patient identification, batch numbering, and compliance labeling on aligners.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium" data-testid="button-schedule-demo">
                    Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-8">
                  <img src={image} alt="MaxMark M2" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading">Key Features</h3>
              {[
                "Precise laser engraving without material damage",
                "Permanent, fade-resistant marking",
                "Automatic batch numbering and sequencing",
                "Fast marking speed for high-volume production",
                "Compatible with all standard materials",
                "Safety-certified laser system",
                "Programmable marking patterns and text"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">Interested in MaxMark M2?</h2>
              <p className="text-gray-400 text-lg mb-12 text-center">
                Schedule a demonstration or request detailed information.
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
                    <label className="block text-white font-semibold mb-3">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
                      rows={5}
                      placeholder="Tell us about your needs..."
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold" data-testid="button-submit-form">
                    Request Information
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-6">Or contact us directly:</p>
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
