import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { ScrollArrow } from "./ScrollArrow";

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  scrollText?: string;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  image,
  imageAlt,
  buttonText,
  buttonHref,
  onButtonClick,
  scrollText = "Scroll to learn more",
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const button = buttonText ? (
    buttonHref ? (
      <Link href={buttonHref}>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
        >
          {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    ) : (
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
        onClick={onButtonClick}
      >
        {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    )
  ) : null;

  return (
    <section
      ref={heroRef}
      className="min-h-[100vh] flex items-center pt-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 z-0 bg-background/80" />

      <div className="container mx-auto px-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {badge}
          </div>

          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-primary">{titleHighlight}</span>
              </>
            )}
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            {description}
          </p>

          {button && <div className="flex-responsive">{button}</div>}
        </div>
      </div>

      {/* Scroll Arrow Indicator */}
      <ScrollArrow heroRef={heroRef} text={scrollText} />
    </section>
  );
}
