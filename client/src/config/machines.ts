/**
 * Machine data configuration
 */

export interface MachineSpec {
  label: string;
  value: string;
}

export interface EquipmentParameter {
  parameter: string;
  specification: string;
  unit?: string;
}

export interface MachineData {
  id: string;
  name: string;
  nameHighlight: string;
  category: string;
  description: string;
  imageAlt: string;
  specs?: MachineSpec[];
  equipmentParameters?: EquipmentParameter[];
  features: string[];
  hasSpecs?: boolean;
}

export const machines: Record<string, MachineData> = {
  "maxtrim-t1": {
    id: "maxtrim-t1",
    name: "MaxTrim",
    nameHighlight: "T1",
    category: "Entry-Level Trimmer",
    description:
      "Reliable precision trimming system ideal for small to medium production facilities. Perfect trimlines with minimal waste.",
    imageAlt: "MaxTrim T1",
    specs: [
      { label: "Cycle Time", value: "90 seconds" },
      { label: "Precision", value: "±0.03mm" },
      { label: "Manual Polishing", value: "Semi-automated" },
      { label: "Material Waste", value: "< 8%" },
      { label: "Production Capacity", value: "600 aligners/day" },
      { label: "Power Supply", value: "220V single phase" },
    ],
    features: [
      "Precision cutting for consistent trimlines",
      "Semi-automated edge finishing for comfortable results",
      "Ideal for small and medium-sized labs",
      "User-friendly controls requiring minimal training",
      "Compatible with standard aligner materials",
      "Cost-effective solution for growing practices",
      "Low maintenance requirements",
    ],
    equipmentParameters: [
      { parameter: "Dimensions (L x W x H)", specification: "70 × 70 × 100", unit: "cm" },
      { parameter: "Weight", specification: "100", unit: "kg" },
      { parameter: "Power Supply", specification: "220V", unit: "single phase" },
    ],
    hasSpecs: true,
  },
  "maxtrim-t2": {
    id: "maxtrim-t2",
    name: "MaxTrim",
    nameHighlight: "T2",
    category: "Precision Trimming",
    description:
      "Advanced CNC trimming system with precision laser edge polishing for perfect trimlines and smooth finishes.",
    imageAlt: "MaxTrim T2",
    specs: [
      { label: "Cycle Time", value: "75 seconds" },
      { label: "Precision", value: "±0.02mm" },
      { label: "Laser Polishing", value: "Standard" },
      { label: "Material Waste", value: "< 5%" },
      { label: "Production Capacity", value: "1,200 aligners/day" },
      { label: "Power Supply", value: "380V 3-phase" },
    ],
    features: [
      "Precision trimming with edge finishing for perfect trimlines",
      "Integrated laser polishing system for smooth, comfortable edges",
      "Low material waste with efficient cutting patterns",
      "Real-time process monitoring and quality feedback",
      "Compatible with all standard aligner materials",
      "User-friendly interface with programmable patterns",
    ],
    equipmentParameters: [
      { parameter: "Dimensions (L x W x H)", specification: "100 × 100 × 100", unit: "cm" },
      { parameter: "Weight", specification: "120", unit: "kg" },
      { parameter: "Power Supply", specification: "380V", unit: "3-phase" },
    ],
    hasSpecs: true,
  },
  "maxform-l2": {
    id: "maxform-l2",
    name: "MaxForm",
    nameHighlight: "L2",
    category: "High-Capacity Thermoformer",
    description:
      "High-capacity thermoforming system with advanced heating technology for consistent, perfect aligner shells at scale.",
    imageAlt: "MaxForm L2",
    specs: [
      { label: "Cycle Time", value: "45 seconds" },
      { label: "Precision", value: "±0.04mm" },
      { label: "Production Capacity", value: "2,000 aligners/day" },
      { label: "Heating Zones", value: "8 Independent" },
      { label: "Temperature Control", value: "±0.5°C" },
      { label: "Power Supply", value: "380V 3-phase" },
    ],
    features: [
      "Advanced multi-zone heating system for perfect material flow",
      "High-capacity production ideal for large labs and DSOs",
      "Precision temperature control for consistent results",
      "Automated cooling system prevents warping and distortion",
      "Minimal material waste with efficient stamping",
      "Real-time monitoring of heating profiles",
      "Touchscreen interface with programmable memories",
    ],
    equipmentParameters: [
      { parameter: "Dimensions (L x W x H)", specification: "45 × 44 × 62", unit: "cm" },
      { parameter: "Weight", specification: "50", unit: "kg" },
      { parameter: "Power Supply", specification: "380V", unit: "3-phase" },
      { parameter: "Heating Zones", specification: "8", unit: "Independent" },
      { parameter: "Temperature Control Accuracy", specification: "±0.5", unit: "°C" },
    ],
    hasSpecs: true,
  },
  "maxscan-s1": {
    id: "maxscan-s1",
    name: "MaxScan",
    nameHighlight: "S1",
    category: "3D Scanner Integration",
    description:
      "Advanced intraoral scanner integration system for seamless digital workflow and direct API connectivity with your treatment planning software.",
    imageAlt: "MaxScan S1",
    features: [
      "Direct integration with major scanner platforms",
      "Real-time digital model generation",
      "Cloud-based file management and backup",
      "Quality verification of scans",
      "Secure patient data handling",
      "API connectivity for streamlined workflows",
      "User-friendly interface requiring minimal training",
    ],
    hasSpecs: false,
  },
  "maxmark-m2": {
    id: "maxmark-m2",
    name: "MaxMark",
    nameHighlight: "M2",
    category: "Laser Marking System",
    description:
      "Advanced laser marking system for permanent patient identification, batch numbering, and compliance labeling on aligners.",
    imageAlt: "MaxMark M2",
    features: [
      "Precise laser engraving without material damage",
      "Permanent, fade-resistant marking",
      "Automatic batch numbering and sequencing",
      "Fast marking speed for high-volume production",
      "Compatible with all standard materials",
      "Safety-certified laser system",
      "Programmable marking patterns and text",
    ],
    hasSpecs: false,
  },
  "maxpolish-i": {
    id: "maxpolish-i",
    name: "MaxPolish",
    nameHighlight: "I",
    category: "Finishing & Polishing",
    description:
      "Entry-level polishing system for smooth surface finishing and edge polishing on completed aligners.",
    imageAlt: "MaxPolish I",
    features: [
      "Multi-stage polishing process",
      "Chemical-free finishing method",
      "Produces mirror-like clarity",
      "Compact design for space efficiency",
      "Easy operation with minimal training",
      "Consistent results for quality assurance",
      "Suitable for small to medium production",
    ],
    hasSpecs: false,
  },
  "maxpolish-ii": {
    id: "maxpolish-ii",
    name: "MaxPolish",
    nameHighlight: "II",
    category: "Advanced Polisher",
    description:
      "High-capacity automated polishing for large-scale production",
    imageAlt: "MaxPolish II",
    features: [
      "Automated multi-stage polishing",
      "High-volume batch processing",
      "Consistent quality across all units",
      "Reduced labor requirements",
      "Advanced control system",
      "Suitable for large labs and DSOs",
      "Maintains material integrity",
    ],
    hasSpecs: false,
  },
  "maxprinter-p1": {
    id: "maxprinter-p1",
    name: "MaxPrinter",
    nameHighlight: "P1",
    category: "Compact 3D Printer",
    description:
      "Compact, reliable 3D printer ideal for small labs and practices. Perfect for dental model and guide production.",
    imageAlt: "MaxPrinter P1",
    features: [
      "Compact footprint fits any workspace",
      "Easy-to-use interface for all skill levels",
      "High-resolution output for detailed models",
      "Low maintenance requirements",
      "Cost-effective solution for dental labs",
      "Reliable printing for consistent results",
      "Compatible with standard dental resins",
    ],
    hasSpecs: false,
  },
  "maxprinter-p2": {
    id: "maxprinter-p2",
    name: "MaxPrinter",
    nameHighlight: "P2",
    category: "Production 3D Printer",
    description:
      "High-capacity 3D printer for large-scale production of dental models and guides.",
    imageAlt: "MaxPrinter P2",
    features: [
      "Large build volume for batch printing",
      "High-speed printing capabilities",
      "Advanced material handling",
      "Automated post-processing",
      "Production-grade reliability",
      "Ideal for high-volume labs",
      "Precision accuracy for complex models",
    ],
    hasSpecs: false,
  },
};

