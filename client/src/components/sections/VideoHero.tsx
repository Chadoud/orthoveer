import { useRef, ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { ScrollArrow } from "./ScrollArrow";
import { patterns, text } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface VideoHeroProps {
  videoSrc: string;
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  button?: ReactNode;
  scrollText?: string;
}

export function VideoHero({
  videoSrc,
  badge,
  title,
  titleHighlight,
  description,
  button,
  scrollText = "Scroll to learn more",
}: VideoHeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  // Determine video MIME type based on file extension
  const getVideoType = (src: string): string => {
    if (src.endsWith(".mov")) return "video/quicktime";
    if (src.endsWith(".webm")) return "video/webm";
    return "video/mp4";
  };

  return (
    <section ref={heroRef} className={patterns.heroSection}>
      {/* Background Video with Overlay */}
      <div className={patterns.heroVideoContainer}>
        <video autoPlay loop muted playsInline className={patterns.heroVideo}>
          <source src={videoSrc} type={getVideoType(videoSrc)} />
        </video>
        <div className={patterns.heroOverlay} />
      </div>

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

          {button && <div className="flex-responsive">{button}</div>}
        </div>
      </Container>

      {/* Scroll Arrow Indicator */}
      <ScrollArrow heroRef={heroRef} text={scrollText} />
    </section>
  );
}
