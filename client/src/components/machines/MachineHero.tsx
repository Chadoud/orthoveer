import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { ScrollArrow } from "@/components/sections/ScrollArrow";

interface MachineHeroProps {
  category: string;
  name: string;
  nameHighlight?: string;
  description: string;
  image: string;
  imageAlt: string;
  scrollText?: string;
}

export function MachineHero({
  category,
  name,
  nameHighlight,
  description,
  image,
  imageAlt,
  scrollText = "Scroll for details",
}: MachineHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="min-h-[100vh] flex items-center pt-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {category}
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              {name}
              {nameHighlight && (
                <>
                  {" "}
                  <span className="text-primary">{nameHighlight}</span>
                </>
              )}
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="flex-responsive">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                  data-testid="button-contact-us"
                >
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-8">
              <img src={image} alt={imageAlt} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow Indicator */}
      <ScrollArrow heroRef={heroRef} text={scrollText} />
    </section>
  );
}
