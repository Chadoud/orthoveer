import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

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
}: PageHeroProps) {
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
      className="min-h-[100vh] flex items-center pt-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-background/80 to-background/90" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  {titleHighlight}
                </span>
              </>
            )}
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            {description}
          </p>

          {button && (
            <div className="flex flex-col sm:flex-row gap-4">{button}</div>
          )}
        </div>
      </div>
    </section>
  );
}
