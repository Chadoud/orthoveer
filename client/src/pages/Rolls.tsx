import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import rollsImage from "@assets/rolls-new-02-1080_1767052875880.jpg";

const rollTypes = [
  {
    id: "flex-economical-k",
    name: "FLEX Economical - K",
    description: "Cost-effective aligner roll material with excellent value",
    products: [
      { name: "Aligner Roll", thickness: "0.76mm", width: "Standard" }
    ]
  },
  {
    id: "flex-premium-plus",
    name: "FLEX Premium Plus",
    description: "Premium plus formulation for high-quality production",
    products: [
      { name: "Aligner Roll", thickness: "0.76mm", width: "Standard" }
    ]
  },
  {
    id: "flex-premium",
    name: "FLEX Premium",
    description: "Premium material for professional aligner manufacturing",
    products: [
      { name: "Aligner Roll", thickness: "0.76mm", width: "Standard" }
    ]
  },
  {
    id: "max-standard-retainer",
    name: "MAX Standard - E (Retainer)",
    description: "Standard material for retainer roll applications",
    products: [
      { name: "Retainer Roll", thickness: "1.00mm", width: "137mm" }
    ]
  },
  {
    id: "max-standard-aligner",
    name: "MAX Standard - E (Aligner)",
    description: "Standard material for aligner roll applications",
    products: [
      { name: "Aligner Roll", thickness: "0.76mm", width: "102mm" }
    ]
  },
  {
    id: "max-comfort",
    name: "MAX Comfort - E",
    description: "Comfortable formulation for sensitive patient applications",
    products: [
      { name: "Aligner Roll", thickness: "0.76mm", width: "137mm" }
    ]
  }
];

export default function Rolls() {
  const [selectedRoll, setSelectedRoll] = useState("flex-economical-k");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const currentRoll = rollTypes.find(r => r.id === selectedRoll);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center pt-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Bulk Manufacturing Materials
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                High-Volume <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Material Rolls
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Premium thermoplastic rolls for high-volume aligner production. Optimized for automated thermoforming and seamless integration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium" data-testid="button-request-quote">
                  Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">Select Roll Type</h2>
            
            {/* Toggle Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
              {rollTypes.map((roll) => (
                <button
                  key={roll.id}
                  onClick={() => setSelectedRoll(roll.id)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    selectedRoll === roll.id
                      ? "bg-primary text-white shadow-lg shadow-primary/50"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 hover:text-white"
                  }`}
                  data-testid={`button-roll-${roll.id}`}
                >
                  {roll.name}
                </button>
              ))}
            </div>

            {/* Selected Roll Details */}
            {currentRoll && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 mb-8">
                  <img src={rollsImage} alt="Material Rolls" className="w-full h-auto object-cover" />
                </div>
                
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-white mb-4 font-heading">{currentRoll.name}</h3>
                  <p className="text-gray-400 text-lg mb-8">{currentRoll.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {currentRoll.products.map((product, idx) => (
                      <Card key={idx} className="bg-white/5 border-white/10 p-6 hover:border-primary/50 transition-colors">
                        <div className="mb-4">
                          <h4 className="text-white font-bold text-lg">{product.name}</h4>
                          <div className="space-y-2 mt-3">
                            <p className="text-gray-400 text-sm"><span className="font-semibold">Thickness:</span> {product.thickness}</p>
                            <p className="text-gray-400 text-sm"><span className="font-semibold">Width:</span> {product.width}</p>
                          </div>
                        </div>
                        <p className="text-primary font-semibold mb-4">Contact for pricing</p>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg" data-testid={`button-inquiry-${idx}`}>
                          Request Quote
                        </Button>
                      </Card>
                    ))}
                  </div>

                  <div className="border-l-4 border-primary pl-6 py-4 bg-white/5 rounded-lg p-6">
                    <h4 className="text-white font-bold mb-2 text-lg">Roll Advantages</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Consistent material quality across entire roll
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Minimized material waste in production
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Seamless integration with thermoforming equipment
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Flexible supply and delivery options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">Request Material Rolls</h2>
              <p className="text-gray-400 text-lg mb-12 text-center">
                Contact our materials team to request samples, quotes, or discuss bulk orders and customization options.
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
                      placeholder="Estimated monthly volume, delivery preferences, any custom requirements..."
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold" data-testid="button-submit-form">
                    Send Request
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
