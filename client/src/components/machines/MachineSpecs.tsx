import { Card } from "@/components/ui/card";
import { Heading } from "@/components/layout/Heading";

interface Spec {
  label: string;
  value: string;
}

interface MachineSpecsProps {
  specs: Spec[];
  title?: string;
  className?: string;
}

export function MachineSpecs({
  specs,
  title = "Key Specifications",
  className,
}: MachineSpecsProps) {
  return (
    <div className={className || "py-20 bg-secondary/20"}>
      <Heading level="h2" className="mb-12">
        {title}
      </Heading>

      <div className="grid-2col-lg mb-12">
        {specs.map((spec, i) => (
          <Card key={i} className="bg-white/5 border-white/10 p-6">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">
              {spec.label}
            </p>
            <p className="text-3xl font-bold text-primary">{spec.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
