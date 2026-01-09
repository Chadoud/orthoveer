import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { track } from "@/lib/tracking/events";
import { videos } from "@/lib/assets";
import { ScrollArrow } from "./ScrollArrow";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { text, patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";

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
          <source src={videos.expoHero} type="video/mp4" />
        </video>
        <div className={patterns.heroOverlay} />
      </div>

      <Container className={patterns.heroContent}>
        <div>
          <div
            className={cn(
              patterns.badgeWithDot,
              "mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
            )}
          >
            <span className={patterns.badgeDot} />
            Orthodontic Manufacturing Solutions
          </div>

          <Heading
            level="h1"
            className="mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 md:text-7xl"
          >
            Orthodontic Equipment, Materials & White-Label Clear Aligners
          </Heading>

          <p
            className={cn(
              text.description,
              "mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
            )}
          >
            Complete solutions for orthodontic practices: production equipment,
            certified materials, and white-label aligner manufacturing services.
          </p>

          <div className="flex-responsive animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/contact">
              <Button
                size="lg"
                variant="primary"
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
      </Container>

      {/* Scroll Arrow Indicator */}
      <ScrollArrow heroRef={heroRef} text="Scroll to explore" />

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
