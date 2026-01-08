import { Card } from "@/components/ui/card";
import { Heading } from "@/components/layout/Heading";

export interface EquipmentParameter {
  parameter: string;
  specification: string;
  unit?: string;
}

interface EquipmentParametersProps {
  parameters: EquipmentParameter[];
  title?: string;
  description?: string;
  className?: string;
}

export function EquipmentParameters({
  parameters,
  title = "Equipment Parameters",
  description,
  className,
}: EquipmentParametersProps) {
  // Filter out parameters with empty or placeholder specifications
  const validParameters = parameters.filter(
    (param) =>
      param.specification &&
      param.specification.trim() !== "" &&
      !param.specification.toLowerCase().includes("to be updated") &&
      !param.specification.toLowerCase().includes("not available")
  );

  // Don't render the section if there are no valid parameters
  if (validParameters.length === 0) {
    return null;
  }

  return (
    <div className={className || "py-20"}>
      <Heading level="h2" className="mb-6">
        {title}
      </Heading>
      
      {description && (
        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
          {description}
        </p>
      )}

      <Card className="bg-white/5 border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 sm:px-6 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Parameter
                </th>
                <th className="text-left py-4 px-4 sm:px-6 text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Specification
                </th>
              </tr>
            </thead>
            <tbody>
              {validParameters.map((param, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 sm:px-6 text-white font-medium text-sm sm:text-base">
                    {param.parameter}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-gray-300 text-sm sm:text-base">
                    {param.specification}
                    {param.unit && (
                      <span className="text-gray-500 ml-1">{param.unit}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
