import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Import machine images
import maxTrimT2 from "@assets/maxtrim-t2-600x600-removebg-preview_1767043189566.png";
import maxTrimT1 from "@assets/maxtrim-t1-600x600-removebg-preview_1767043189567.png";
import maxFormL2 from "@assets/maxform-l2-removebg-preview_1767043189567.png";
import maxScanS1 from "@assets/maxscan-s1-600x600-removebg-preview_1767043189566.png";
import maxPrinterP2 from "@assets/maxprinter-p2-600x600-removebg-preview_1767043189565.png";
import maxPrinterP1 from "@assets/maxprinter-p1-600x600-removebg-preview_1767043189565.png";
import maxMarkM2 from "@assets/maxmark-m2-600x600-removebg-preview_1767043189564.png";
import maxPolishI from "@assets/maxpolish-1-600x600-removebg-preview_1767043189564.png";
import maxPolishII from "@assets/maxpolish-2-600x600-removebg-preview_1767043189563.png";

const machines = [
  {
    id: "maxtrim-t2",
    name: "MaxTrim T2",
    category: "Precision Trimming",
    description: "Advanced CNC trimming system with laser edge polishing for perfect trimlines",
    image: maxTrimT2,
    capacity: "1,200 aligners/day"
  },
  {
    id: "maxtrim-t1",
    name: "MaxTrim T1",
    category: "Entry-Level Trimmer",
    description: "Reliable automated trimming system ideal for small to medium production",
    image: maxTrimT1,
    capacity: "600 aligners/day"
  },
  {
    id: "maxform-l2",
    name: "MaxForm L2",
    category: "Thermoformer",
    description: "High-capacity thermoforming system with advanced heating technology",
    image: maxFormL2,
    capacity: "2,000 aligners/day"
  },
  {
    id: "maxscan-s1",
    name: "MaxScan S1",
    category: "3D Scanner",
    description: "Advanced intraoral scanner integration for seamless digital workflow",
    image: maxScanS1,
    capacity: "Real-time scanning"
  },
  {
    id: "maxprinter-p2",
    name: "MaxPrinter P2",
    category: "3D Printer",
    description: "Industrial 3D printer for dental models and surgical guides",
    image: maxPrinterP2,
    capacity: "High-capacity batch printing"
  },
  {
    id: "maxprinter-p1",
    name: "MaxPrinter P1",
    category: "Compact 3D Printer",
    description: "Compact 3D printer ideal for small labs and practices",
    image: maxPrinterP1,
    capacity: "Reliable printing"
  },
  {
    id: "maxmark-m2",
    name: "MaxMark M2",
    category: "Laser Marking",
    description: "Advanced laser marking for patient identification and batch numbering",
    image: maxMarkM2,
    capacity: "High-speed marking"
  },
  {
    id: "maxpolish-i",
    name: "MaxPolish I",
    category: "Polishing System",
    description: "Entry-level polishing system for smooth surface finishing",
    image: maxPolishI,
    capacity: "Precision finishing"
  },
  {
    id: "maxpolish-ii",
    name: "MaxPolish II",
    category: "Advanced Polisher",
    description: "High-capacity automated polishing for large-scale production",
    image: maxPolishII,
    capacity: "Large batch processing"
  }
];

export default function Machines() {
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
                Manufacturing Equipment
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Complete <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Manufacturing Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                9 specialized machines for every stage of aligner manufacturing: thermoforming, trimming, scanning, 3D printing, marking, and polishing.
              </p>
            </div>
          </div>
        </section>

        {/* Machines Grid */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-heading">Our Equipment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {machines.map((machine) => (
                <Link key={machine.id} href={`/machines/${machine.id}`}>
                  <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer h-full group flex flex-col">
                    {/* Image Section */}
                    <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={machine.image} 
                        alt={machine.name}
                        className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-2">{machine.category}</p>
                      <h3 className="text-2xl font-bold text-white mb-3 font-heading">{machine.name}</h3>
                      <p className="text-gray-400 text-sm mb-4 flex-1">{machine.description}</p>
                      <p className="text-gray-500 text-xs mb-6 border-t border-white/10 pt-4">Capacity: {machine.capacity}</p>
                      <div className="flex items-center text-primary text-sm font-semibold group-hover:text-white transition-colors">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
