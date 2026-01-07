import { PageLayout } from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/forms";
import { useRef } from "react";
import { ScrollArrow } from "@/components/sections/ScrollArrow";
import heroVideo from "@assets/homePage/homeHero.mp4";

export default function Contact() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <PageLayout>
      {/* Custom Hero Section with Video Background */}
      <section
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center pt-12 overflow-hidden"
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Get in Touch
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              Have questions about our solutions? Want to schedule a
              demonstration? We're here to help you find the right orthodontic
              manufacturing solutions for your practice.
            </p>
          </div>
        </div>

        {/* Scroll Arrow Indicator */}
        <ScrollArrow heroRef={heroRef} text="Scroll to learn more" />
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg mb-12 text-center">
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>
            <ContactForm
              submitLabel="Send Message"
              messagePlaceholder="Tell us about your needs, questions, or how we can help..."
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
