import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { track } from "@/lib/tracking/events";
import heroVideo from "@assets/homePage/homeHero.mp4";
import { ScrollArrow } from "./ScrollArrow";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
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
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Orthodontic Manufacturing Solutions
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Orthodontic Equipment, Materials & White-Label Clear Aligners
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Complete solutions for orthodontic practices: production equipment,
            certified materials, and white-label aligner manufacturing services.
          </p>

          <div className="flex-responsive animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                onClick={() => {
                  track("cta_become_partner", {
                    location: "hero",
                  });
                }}
              >
                Become a Partner <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Arrow Indicator */}
      <ScrollArrow heroRef={heroRef} text="Scroll to explore" />

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
