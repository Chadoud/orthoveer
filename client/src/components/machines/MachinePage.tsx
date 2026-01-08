import { PageLayout } from "@/components/layout/PageLayout";
import { MachineHero, MachineSpecs, MachineFeatures, EquipmentParameters } from "@/components/machines";
import { ContactForm } from "@/components/forms";
import { machines, type MachineData } from "@/config/machines";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";

interface MachinePageProps {
  machineId: string;
  image: string;
}

export function MachinePage({ machineId, image }: MachinePageProps) {
  const machineData = machines[machineId];

  if (!machineData) {
    return null;
  }

  return (
    <PageLayout>
      <MachineHero
        category={machineData.category}
        name={machineData.name}
        nameHighlight={machineData.nameHighlight}
        description={machineData.description}
        image={image}
        imageAlt={machineData.imageAlt}
      />

      {(machineData.equipmentParameters ||
        (machineData.hasSpecs && machineData.specs)) && (
        <Section>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {machineData.equipmentParameters && (
              <div className="flex-1 min-w-0">
                <EquipmentParameters
                  parameters={machineData.equipmentParameters}
                  description={machineData.equipmentDescription}
                  className="py-0"
                />
              </div>
            )}

            {machineData.hasSpecs && machineData.specs && (
              <div className="flex-1 min-w-0">
                <MachineSpecs specs={machineData.specs} className="py-0" />
              </div>
            )}
          </div>
        </Section>
      )}

      <MachineFeatures
        features={machineData.features}
        title={machineData.hasSpecs ? "Features & Benefits" : "Key Features"}
      />

      <Section>
        <div>
          <Heading level="h2" className="mb-4 text-center">
            Interested in {machineData.name} {machineData.nameHighlight}?
          </Heading>
          <p className="text-gray-400 text-lg mb-12 text-center">
            Schedule a demonstration or request detailed information.
          </p>

          <ContactForm />
        </div>
      </Section>
    </PageLayout>
  );
}
