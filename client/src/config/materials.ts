/**
 * Materials data configuration
 */

export interface Product {
  name: string;
  thickness: string;
  price?: string;
  width?: string;
}

export interface MaterialType {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export const plastics: MaterialType[] = [
  {
    id: "flex-premium-e",
    name: "FLEX Premium - E",
    description: "Premium elastomer for aligner and retainer applications",
    products: [
      { name: "Retainer Pack", thickness: "1.00mm", price: "€38,00" },
      { name: "Aligner Pack", thickness: "0.76mm", price: "€50,00" },
      { name: "Aligner Pack", thickness: "0.63mm", price: "€36,00" },
    ],
  },
  {
    id: "flex-dual-premium",
    name: "FLEX Dual Premium",
    description: "Dual-layer material for night guards and intensive applications",
    products: [
      { name: "Night Guard Pack", thickness: "2.00mm", price: "€76,00" },
      { name: "Night Guard Pack", thickness: "1.30mm", price: "€46,00" },
      { name: "Night Guard Pack", thickness: "1.00mm", price: "€38,00" },
    ],
  },
  {
    id: "max-white-premium",
    name: "MAX White Premium",
    description: "Clear white material for cosmetic Hollywood smile applications",
    products: [
      { name: "Hollywood Smile Pack", thickness: "1.00mm", price: "€48,00" },
      { name: "Hollywood Smile Pack", thickness: "0.76mm", price: "€46,00" },
      { name: "Hollywood Smile Pack", thickness: "0.50mm", price: "€44,00" },
    ],
  },
  {
    id: "max-premium-e",
    name: "MAX Premium - E",
    description: "Premium standard material for general applications",
    products: [{ name: "Retainer Pack", thickness: "1.00mm/125mm", price: "€34,00" }],
  },
  {
    id: "max-comfort",
    name: "MAX Comfort - E",
    description: "Comfortable formulation for sensitive patients",
    products: [
      { name: "Aligner Pack", thickness: "0.76mm", price: "€35,00 - €40,00" },
    ],
  },
  {
    id: "max-standard",
    name: "MAX Standard - E",
    description: "Standard material for cost-effective production",
    products: [
      { name: "Retainer Pack", thickness: "1.00mm/125mm", price: "€35,00" },
      { name: "Attachment Template Pack", thickness: "0.4mm", price: "€34,00" },
    ],
  },
];

export const rolls: MaterialType[] = [
  {
    id: "flex-economical-k",
    name: "FLEX Economical - K",
    description: "Cost-effective aligner roll material with excellent value",
    products: [{ name: "Aligner Roll", thickness: "0.76mm", width: "Standard" }],
  },
  {
    id: "flex-premium-plus",
    name: "FLEX Premium Plus",
    description: "Premium plus formulation for high-quality production",
    products: [{ name: "Aligner Roll", thickness: "0.76mm", width: "Standard" }],
  },
  {
    id: "flex-premium",
    name: "FLEX Premium",
    description: "Premium material for professional aligner manufacturing",
    products: [{ name: "Aligner Roll", thickness: "0.76mm", width: "Standard" }],
  },
  {
    id: "max-standard-retainer",
    name: "MAX Standard - E (Retainer)",
    description: "Standard material for retainer roll applications",
    products: [{ name: "Retainer Roll", thickness: "1.00mm", width: "137mm" }],
  },
  {
    id: "max-standard-aligner",
    name: "MAX Standard - E (Aligner)",
    description: "Standard material for aligner roll applications",
    products: [{ name: "Aligner Roll", thickness: "0.76mm", width: "102mm" }],
  },
  {
    id: "max-comfort",
    name: "MAX Comfort - E",
    description: "Comfortable formulation for sensitive patient applications",
    products: [{ name: "Aligner Roll", thickness: "0.76mm", width: "137mm" }],
  },
];
