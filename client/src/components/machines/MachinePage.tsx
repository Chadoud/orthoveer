import { PageLayout } from "@/components/layout/PageLayout";
import { MachineHero } from "@/components/machines/MachineHero";
import { MachineSpecs } from "@/components/machines/MachineSpecs";
import { MachineFeatures } from "@/components/machines/MachineFeatures";
import { EquipmentParameters } from "@/components/machines/EquipmentParameters";
import { ContactForm } from "@/components/forms/ContactForm";
import { machines, type MachineData } from "@/config/machines";

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

      {machineData.equipmentParameters && (
        <EquipmentParameters parameters={machineData.equipmentParameters} />
      )}

      {machineData.hasSpecs && machineData.specs && (
        <MachineSpecs specs={machineData.specs} />
      )}

      <MachineFeatures
        features={machineData.features}
        title={machineData.hasSpecs ? "Features & Benefits" : "Key Features"}
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
              Interested in {machineData.name} {machineData.nameHighlight}?
            </h2>
            <p className="text-gray-400 text-lg mb-12 text-center">
              Schedule a demonstration or request detailed information.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
