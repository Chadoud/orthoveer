import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { ScrollArrow } from "@/components/sections/ScrollArrow";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { text, patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";

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
      className="min-h-screen flex items-center pt-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background" />

      <Container className={patterns.heroContent}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
          <div>
            <div className={cn(patterns.badgeWithDot, "mb-5")}>
              <span className={patterns.badgeDot} />
              {category}
            </div>

            <Heading level="h1" className="mb-6" highlight={nameHighlight}>
              {name}
            </Heading>

            <p className={cn(text.description, "mb-5 lg:mb-10 max-w-xl")}>
              {description}
            </p>

            {/* Image on mobile - appears between description and button */}
            <div className="flex items-center mb-5 lg:hidden">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-1">
                <img
                  src={image}
                  alt={imageAlt}
                  className="block max-w-full h-auto max-h-[40vh]"
                />
              </div>
            </div>

            <div className="flex-responsive">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="primary"
                  data-testid="button-contact-us"
                >
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image on desktop - appears on the right side */}
          <div className="hidden lg:flex items-center justify-end">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-8 max-w-md">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Arrow Indicator */}
      <ScrollArrow heroRef={heroRef} text={scrollText} />
    </section>
  );
}
