import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { machines as machinesConfig } from "@/config/machines";
import { useRef } from "react";
import { ScrollArrow } from "@/components/sections/ScrollArrow";
import { videos } from "@/lib/assets";
import { getAllMachineImages } from "@/lib/assets/machines";

const machineImages = getAllMachineImages();

const machines = Object.values(machinesConfig).map((machine) => ({
  ...machine,
  image: machineImages[machine.id],
  capacity:
    machine.specs?.find((s) => s.label === "Production Capacity")?.value ||
    "See details",
}));

export default function Machines() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <PageLayout>
      {/* Custom Hero Section with Video Background */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center pt-12 overflow-hidden"
      >
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={videos.heroMachines} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Manufacturing Equipment
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Orthodontic Production{" "}
              <span className="text-primary">Equipment</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              9 specialized production equipment for every stage of aligner
              manufacturing: thermoforming, trimming, scanning, 3D printing,
              marking, and polishing.
            </p>

            <div className="flex-responsive">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
                  Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Arrow Indicator */}
        <ScrollArrow heroRef={heroRef} text="Scroll to explore" />
      </section>

      {/* Production Equipment Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-heading">
            Clear Aligner Manufacturing Equipment
          </h2>

          <div className="grid-3col-lg">
            {machines.map((machine) => (
              <Link key={machine.id} href={`/machines/${machine.id}`}>
                <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer h-full group flex flex-col">
                  {/* Image Section */}
                  <div className="h-64 bg-primary/10 flex items-center justify-center overflow-hidden relative">
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
