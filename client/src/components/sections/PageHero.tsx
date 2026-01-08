import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";
import { ScrollArrow } from "./ScrollArrow";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { badge, text, patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";

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
  showContactButton?: boolean;
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
  showContactButton = false,
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const button = buttonText ? (
    buttonHref ? (
      <Link href={buttonHref}>
        <Button size="lg" variant="primary">
          {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    ) : (
      <Button size="lg" variant="primary" onClick={onButtonClick}>
        {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    )
  ) : null;

  const contactButton = showContactButton ? (
    <Link href="/contact">
      <Button size="lg" variant="primary">
        Contact Us <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </Link>
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
      <div className={patterns.heroOverlay} />

      <Container className={patterns.heroContent}>
        <div>
          <div className={cn(patterns.badgeWithDot, "mb-6")}>
            <span className={patterns.badgeDot} />
            {badge}
          </div>

          <Heading level="h1" className="mb-6" highlight={titleHighlight}>
            {title}
          </Heading>

          <p className={cn(text.description, "mb-10 max-w-xl")}>
            {description}
          </p>

          {(button || contactButton) && (
            <div className="flex-responsive">
              {button}
              {contactButton}
            </div>
          )}
        </div>
      </Container>

      {/* Scroll Arrow Indicator */}
      <ScrollArrow heroRef={heroRef} text={scrollText} />
    </section>
  );
}
