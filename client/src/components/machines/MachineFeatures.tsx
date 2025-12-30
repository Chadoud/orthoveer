import { CheckCircle2 } from "lucide-react";

interface MachineFeaturesProps {
  features: string[];
  title?: string;
}

export function MachineFeatures({
  features,
  title = "Key Features",
}: MachineFeaturesProps) {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white font-heading">{title}</h3>
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

