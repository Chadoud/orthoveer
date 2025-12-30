import { MaterialsPage } from "@/components/materials/MaterialsPage";
import { plastics } from "@/config/materials";
import plasticsImage from "@assets/materials/plastics.jpg";

const features = [
  "Exceptional tear resistance and durability",
  "Superior optical clarity and aesthetics",
  "Superior stress retention and force delivery",
  "Stain resistant and biocompatible",
];

export default function PlasticsMaterials() {
  return (
    <MaterialsPage
      badge="Premium Manufacturing Materials"
      title="High-Performance"
      titleHighlight="Plastics"
      description="Premium-grade thermoplastic materials engineered for precision aligner production. Choose from our range of FLEX and MAX formulations."
      heroImage={plasticsImage}
      heroImageAlt="Plastic Materials"
      materials={plastics}
      features={features}
      formTitle="Request Plastics"
      formDescription="Contact our materials team to request samples, place orders, or inquire about bulk pricing and custom formulations."
      submitLabel="Send Inquiry"
    />
  );
}
