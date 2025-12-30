import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "wouter";
import heroVideo from "@assets/hero/Smartee Clear Aligner Automatic Production Line.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video with Gradient Overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Orthodontic Production Tools, Materials & Aligners
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Orthodontic Equipment, Materials & White-Label Clear Aligners
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Orthodontic Production Tools, Materials & Aligners
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
              >
                Become a Partner <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium backdrop-blur-sm"
            >
              <Play className="mr-2 w-4 h-4 fill-current" /> Our Process
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
