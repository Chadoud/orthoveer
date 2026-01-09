import { PageLayout } from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/forms";
import { videos } from "@/lib/assets";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { VideoHero } from "@/components/sections/VideoHero";

export default function Contact() {
  return (
    <PageLayout>
      <VideoHero
        videoSrc={videos.expoHero}
        badge="Get in Touch"
        title="Contact"
        titleHighlight="Us"
        description="Have questions about our solutions? Want to schedule a demonstration? We're here to help you find the right orthodontic manufacturing solutions for your practice."
        scrollText="Scroll to learn more"
      />

      {/* Contact Form Section */}
      <Section>
        <div>
          <Heading level="h2" className="mb-4 text-center">
            Get in Touch
          </Heading>
          <p className="text-gray-400 text-lg mb-12 text-center">
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>
          <ContactForm
            submitLabel="Send Message"
            messagePlaceholder="Tell us about your needs, questions, or how we can help..."
          />
        </div>
      </Section>
    </PageLayout>
  );
}
