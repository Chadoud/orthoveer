import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import techImage from "@assets/hero/tech-hero.png";

export default function Contact() {
  return (
    <PageLayout>
      <PageHero
        badge="Get in Touch"
        title="Contact"
        titleHighlight="Us"
        description="Have questions about our solutions? Want to schedule a demonstration? We're here to help you find the right orthodontic manufacturing solutions for your practice."
        image={techImage}
        imageAlt="Contact Us"
      />

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-lg mb-12 text-center">
              Fill out the form below and our team will get back to you as soon as possible.
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

