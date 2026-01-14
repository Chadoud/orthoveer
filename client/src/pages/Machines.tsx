import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { machines as machinesConfig } from "@/config/machines";
import { videos } from "@/lib/assets";
import { getAllMachineImages } from "@/lib/assets/machines";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { VideoHero } from "@/components/sections/VideoHero";

const machineImages = getAllMachineImages();

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
      <VideoHero
        videoSrc={videos.processHero}
        badge="Manufacturing Equipment"
        title="Orthodontic Production"
        titleHighlight="Equipment"
        description="9 specialized production equipment for every stage of aligner manufacturing: thermoforming, trimming, scanning, 3D printing, marking, and polishing."
        button={
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        }
        scrollText="Scroll to explore"
      />

      {/* Production Equipment Grid */}
      <Section background="subtle">
        <Heading level="h2" className="mb-16">
          Clear Aligner Manufacturing Equipment
        </Heading>

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
      </Section>
    </PageLayout>
  );
}
