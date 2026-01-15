import { PageLayout } from "@/components/layout/PageLayout";
import { VideoHero } from "@/components/sections/VideoHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Mail,
  Users,
  Award,
  Lightbulb,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";
import { videos } from "@/lib/assets";
import bernardImage from "@assets/team/bernard.jpg";
import abelImage from "@assets/team/abel.jpg";
import darrellImage from "@assets/team/darrellSalumay.jpg";
import alexImage from "@assets/team/alexMuleng.jpg";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";
import { patterns } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  linkedin?: string;
  email?: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Bernard Najm",
    role: "CEO",
    department: "Management",
    bio: "CEO of OrthoVeer, leading the company's vision and strategic direction in orthodontic manufacturing solutions.",
    image: bernardImage,
    linkedin:
      "https://www.linkedin.com/in/bernard-najm-4273b4a0?originalSubdomain=fr",
  },
  {
    id: "2",
    name: "Abel Salumai",
    role: "Managing Partner",
    department: "Management",
    bio: "Managing Partner overseeing operations and strategic partnerships, ensuring successful delivery of orthodontic manufacturing solutions.",
    image: abelImage,
    linkedin: "https://www.linkedin.com/in/abel-salumai-866984109/",
  },
  {
    id: "3",
    name: "Darrell Salumayi",
    role: "Sales Manager - Commercial",
    department: "Sales",
    bio: "Builds relationships with orthodontic practices and labs, helping them find the right solutions for their specific needs.",
    image: darrellImage,
    linkedin: "https://www.linkedin.com/in/darrell-salumayi-024431248/",
  },
  {
    id: "4",
    name: "Alex Mulenga",
    role: "Sales Manager - Enterprise",
    department: "Sales",
    bio: "Works with orthodontic professionals to understand their needs and provide tailored manufacturing solutions.",
    image: alexImage,
    linkedin: "https://www.linkedin.com/in/alex-mulenga-553a95384/",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every product and service we deliver.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously innovate to improve orthodontic care and manufacturing processes.",
  },
  {
    icon: Heart,
    title: "Patient Care",
    description:
      "Our work is driven by a commitment to improving patient outcomes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and collaborative problem-solving.",
  },
];

export default function Team() {
  return (
    <PageLayout>
      <VideoHero
        videoSrc={videos.expoHero}
        badge="Our Team"
        title="Meet the"
        titleHighlight="OrthoVeer Team"
        description="A dedicated group of professionals committed to advancing orthodontic manufacturing and improving patient care through innovation and precision."
        button={
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        }
      />

      {/* Our Values Section */}
      <Section background="subtle">
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            Our Values
          </Heading>
          <p
            className={cn("text-lg text-gray-400", patterns.centeredContentMd)}
          >
            The principles that guide our team and shape our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 border-white/10 p-6 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="flex flex-col items-center">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Team Members Section */}
      <Section>
        <div className={patterns.sectionHeader}>
          <Heading level="h2" className="mb-4">
            Our Team
          </Heading>
          <p
            className={cn("text-lg text-gray-400", patterns.centeredContentMd)}
          >
            Meet the talented individuals who make OrthoVeer a leader in
            orthodontic manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="bg-white/5 border-white/10 p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 font-heading">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">
                  {member.department}
                </p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                {member.bio}
              </p>
              <div className="flex justify-center gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Join Our Team Section */}
      <Section background="subtle">
        <div className="text-center">
          <Heading level="h2" className="mb-4">
            Join Our Team
          </Heading>
          <p
            className={cn(
              "text-lg text-gray-400 mb-8",
              patterns.centeredContentMd
            )}
          >
            We're always looking for talented individuals who share our passion
            for innovation and excellence in orthodontic manufacturing.
          </p>
          <Link href="/careers">
            <Button size="lg" variant="primary">
              View Open Positions{" "}
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <Heading level="h2" className="mb-6">
            Want to Learn More?
          </Heading>
          <p
            className={cn(
              "text-gray-400 text-lg mb-10 leading-relaxed",
              patterns.centeredContentMd
            )}
          >
            Get in touch with our team to discover how OrthoVeer can support
            your orthodontic practice.
          </p>
          <div className="flex-responsive-center">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Contact Us{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base font-medium"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
