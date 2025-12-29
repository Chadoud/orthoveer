import { MachinePlaceholder } from "./MachinePlaceholder";

export default function MaxScanS1() {
  return (
    <MachinePlaceholder
      name="MaxScan S1"
      shortName="MaxScan S1"
      category="3D Scanning System"
      description="Advanced intraoral scanner integration system for seamless digital workflow and direct API connectivity with your treatment planning software."
      features={[
        "Direct integration with major scanner platforms",
        "Real-time digital model generation",
        "Cloud-based file management and backup",
        "Automated quality verification of scans",
        "Secure patient data handling",
        "API connectivity for workflow automation",
        "User-friendly interface requiring minimal training"
      ]}
    />
  );
}
