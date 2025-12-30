import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { useState } from "react";
import plasticsImage from "@assets/plastic-aligners_1767052856843.jpg";

const plasticTypes = [
  {
    id: "flex-premium-e",
    name: "FLEX Premium - E",
    description: "Premium elastomer for aligner and retainer applications",
    products: [
      { name: "Retainer Pack", thickness: "1.00mm", price: "€38,00" },
      { name: "Aligner Pack", thickness: "0.76mm", price: "€50,00" },
      { name: "Aligner Pack", thickness: "0.63mm", price: "€36,00" }
    ]
  },
  {
    id: "flex-dual-premium",
    name: "FLEX Dual Premium",
    description: "Dual-layer material for night guards and intensive applications",
    products: [
      { name: "Night Guard Pack", thickness: "2.00mm", price: "€76,00" },
      { name: "Night Guard Pack", thickness: "1.30mm", price: "€46,00" },
      { name: "Night Guard Pack", thickness: "1.00mm", price: "€38,00" }
    ]
  },
  {
    id: "max-white-premium",
    name: "MAX White Premium",
    description: "Clear white material for cosmetic Hollywood smile applications",
    products: [
      { name: "Hollywood Smile Pack", thickness: "1.00mm", price: "€48,00" },
      { name: "Hollywood Smile Pack", thickness: "0.76mm", price: "€46,00" },
      { name: "Hollywood Smile Pack", thickness: "0.50mm", price: "€44,00" }
    ]
  },
  {
    id: "max-premium-e",
    name: "MAX Premium - E",
    description: "Premium standard material for general applications",
    products: [
      { name: "Retainer Pack", thickness: "1.00mm/125mm", price: "€34,00" }
    ]
  },
  {
    id: "max-comfort",
    name: "MAX Comfort - E",
    description: "Comfortable formulation for sensitive patients",
    products: [
      { name: "Aligner Pack", thickness: "0.76mm", price: "€35,00 - €40,00" }
    ]
  },
  {
    id: "max-standard",
    name: "MAX Standard - E",
    description: "Standard material for cost-effective production",
    products: [
      { name: "Retainer Pack", thickness: "1.00mm/125mm", price: "€35,00" },
      { name: "Attachment Template Pack", thickness: "0.4mm", price: "€34,00" }
    ]
  }
];

export default function PlasticsMaterials() {
  const [selectedPlastic, setSelectedPlastic] = useState("flex-premium-e");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const currentPlastic = plasticTypes.find(p => p.id === selectedPlastic);

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
                Premium Manufacturing Materials
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                High-Performance <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Plastics
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Premium-grade thermoplastic materials engineered for precision aligner production. Choose from our range of FLEX and MAX formulations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium" data-testid="button-request-samples">
                  Request Samples <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">Select Plastic Type</h2>
            
            {/* Toggle Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
              {plasticTypes.map((plastic) => (
                <button
                  key={plastic.id}
                  onClick={() => setSelectedPlastic(plastic.id)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    selectedPlastic === plastic.id
                      ? "bg-primary text-white shadow-lg shadow-primary/50"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 hover:text-white"
                  }`}
                  data-testid={`button-plastic-${plastic.id}`}
                >
                  {plastic.name}
                </button>
              ))}
            </div>

            {/* Selected Plastic Details */}
            {currentPlastic && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 mb-8">
                  <img src={plasticsImage} alt="Plastic Materials" className="w-full h-auto object-cover" />
                </div>
                
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-white mb-4 font-heading">{currentPlastic.name}</h3>
                  <p className="text-gray-400 text-lg mb-8">{currentPlastic.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPlastic.products.map((product, idx) => (
                      <Card key={idx} className="bg-white/5 border-white/10 p-6 hover:border-primary/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-white font-bold text-lg">{product.name}</h4>
                            <p className="text-gray-400 text-sm">Thickness: {product.thickness}</p>
                          </div>
                          <div className="text-2xl font-bold text-primary">{product.price}</div>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg" data-testid={`button-add-${idx}`}>
                          Add to Inquiry
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6 py-4 bg-white/5 rounded-lg p-6">
                  <h4 className="text-white font-bold mb-2 text-lg">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Exceptional tear resistance and durability
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Superior optical clarity and aesthetics
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Optimized stress retention and force delivery
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Stain resistant and biocompatible
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">Request Plastics</h2>
              <p className="text-gray-400 text-lg mb-12 text-center">
                Contact our materials team to request samples, place orders, or inquire about bulk pricing and custom formulations.
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
                      placeholder="Tell us about your needs, quantities, and any custom requirements..."
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
