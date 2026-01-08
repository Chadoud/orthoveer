import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";

interface MachineFeaturesProps {
  features: string[];
  title?: string;
}

export function MachineFeatures({
  features,
  title = "Key Features",
}: MachineFeaturesProps) {
  return (
    <Section background="subtle">
      <div className="space-y-6">
        <Heading level="h3">
          {title}
        </Heading>
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
      </div>
    </Section>
  );
}

