import { MaterialsPage } from "@/components/materials/MaterialsPage";
import { rolls } from "@/config/materials";
import rollsImage from "@assets/materials/rolls.jpg";

const features = [
  "Consistent material quality across entire roll",
  "Minimized material waste in production",
  "Seamless integration with thermoforming equipment",
  "Flexible supply and delivery options",
];

export default function Rolls() {
  return (
    <MaterialsPage
      badge="Bulk Manufacturing Materials"
      title="Thermoforming"
      titleHighlight="Rolls"
      description="Premium thermoplastic rolls for high-volume aligner production. Designed for thermoforming production with seamless integration."
      materials={rolls}
      features={features}
      formTitle="Request Material Rolls"
      formDescription="Contact our materials team to request samples, quotes, or discuss bulk orders and customization options."
      submitLabel="Send Request"
      sectionImage={rollsImage}
      sectionImageAlt="Thermoforming Material Rolls"
    />
  );
}
