import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
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
import darkHeroImage from "@assets/dark-hero.png";

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
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    department: "Management",
    bio: "With over 15 years of experience in medical device manufacturing, Dr. Chen leads OrthoVeer's strategic vision and innovation initiatives.",
    linkedin: "#",
    email: "s.chen@orthoveer.com",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Head of Engineering",
    department: "Engineering",
    bio: "Michael specializes in manufacturing automation and process optimization, ensuring precision in every aligner we produce.",
    linkedin: "#",
    email: "m.rodriguez@orthoveer.com",
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "Quality Assurance Manager",
    department: "Quality",
    bio: "Emma ensures every product meets ISO 13485 certification requirements, maintaining the highest standards in quality control.",
    linkedin: "#",
    email: "e.thompson@orthoveer.com",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    role: "Clinical Director",
    department: "Clinical",
    bio: "Dr. Wilson works directly with orthodontic professionals, providing clinical guidance and expertise throughout the treatment process.",
    linkedin: "#",
    email: "j.wilson@orthoveer.com",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Production Manager",
    department: "Manufacturing",
    bio: "Lisa oversees our manufacturing operations, ensuring our skilled team produces high-quality aligners with precision and care.",
    linkedin: "#",
    email: "l.anderson@orthoveer.com",
  },
  {
    id: "6",
    name: "David Park",
    role: "Business Development Director",
    department: "Sales",
    bio: "David builds relationships with orthodontic practices and labs, helping them find the right solutions for their specific needs.",
    linkedin: "#",
    email: "d.park@orthoveer.com",
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
      <PageHero
        badge="Our Team"
        title="Meet the"
        titleHighlight="OrthoVeer Team"
        description="A dedicated group of professionals committed to advancing orthodontic manufacturing and improving patient care through innovation and precision."
        image={darkHeroImage}
        imageAlt="OrthoVeer Team"
        showContactButton={true}
      />

      {/* Our Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Our Values
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Our Team
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-primary" />
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
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our
              passion for innovation and excellence in orthodontic
              manufacturing.
            </p>
            <Link href="/careers">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
              >
                View Open Positions{" "}
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Want to Learn More?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Get in touch with our team to discover how OrthoVeer can support
              your orthodontic practice.
            </p>
            <div className="flex-responsive-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-medium"
                >
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
        </div>
      </section>
    </PageLayout>
  );
}
