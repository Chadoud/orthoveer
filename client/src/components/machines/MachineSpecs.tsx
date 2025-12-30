import { Card } from "@/components/ui/card";

interface Spec {
  label: string;
  value: string;
}

interface MachineSpecsProps {
  specs: Spec[];
  title?: string;
}

export function MachineSpecs({
  specs,
  title = "Key Specifications",
}: MachineSpecsProps) {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-heading">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
    </section>
  );
}
