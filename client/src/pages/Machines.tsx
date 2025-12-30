import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { machines as machinesConfig } from "@/config/machines";
import { PageHero } from "@/components/sections/PageHero";
import machinesImage from "@assets/hero/lab-hero.png";

// Import machine images for listing
import maxTrimT2 from "@assets/machines/maxtrim-t2.png";
import maxTrimT1 from "@assets/machines/maxtrim-t1.png";
import maxFormL2 from "@assets/machines/maxform-l2.png";
import maxScanS1 from "@assets/machines/maxscan-s1.png";
import maxPrinterP2 from "@assets/machines/maxprinter-p2.png";
import maxPrinterP1 from "@assets/machines/maxprinter-p1.png";
import maxMarkM2 from "@assets/machines/maxmark-m2.png";
import maxPolishI from "@assets/machines/maxpolish-i.png";
import maxPolishII from "@assets/machines/maxpolish-ii.png";

const machineImages: Record<string, string> = {
  "maxtrim-t2": maxTrimT2,
  "maxtrim-t1": maxTrimT1,
  "maxform-l2": maxFormL2,
  "maxscan-s1": maxScanS1,
  "maxprinter-p2": maxPrinterP2,
  "maxprinter-p1": maxPrinterP1,
  "maxmark-m2": maxMarkM2,
  "maxpolish-i": maxPolishI,
  "maxpolish-ii": maxPolishII,
};

const machines = Object.values(machinesConfig).map((machine) => ({
  ...machine,
  image: machineImages[machine.id],
  capacity:
    machine.specs?.find((s) => s.label === "Production Capacity")?.value ||
    "See details",
}));

export default function Machines() {
  return (
    <PageLayout>
      <PageHero
        badge="Manufacturing Equipment"
        title="Orthodontic Production Equipment"
        description="9 specialized machines for every stage of aligner manufacturing: thermoforming, trimming, scanning, 3D printing, marking, and polishing."
        image={machinesImage}
        imageAlt="Manufacturing Equipment"
        buttonText="Request a Quote"
        buttonHref="/contact"
      />

      {/* Machines Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-heading">
            Clear Aligner Manufacturing Equipment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine) => (
              <Link key={machine.id} href={`/machines/${machine.id}`}>
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer h-full group flex flex-col">
                  {/* Image Section */}
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={machine.image}
                      alt={`${machine.name} ${machine.nameHighlight} - ${machine.category}`}
                      className="h-full w-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide mb-2">
                      {machine.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                      {machine.name} {machine.nameHighlight}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {machine.description}
                    </p>
                    <p className="text-gray-500 text-xs mb-6 border-t border-white/10 pt-4">
                      Capacity: {machine.capacity}
                    </p>
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:text-white transition-colors">
                      View Details{" "}
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
