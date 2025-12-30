# Orthoveer Heading Hierarchy (H1-H4)

## SEO-Optimized for Crawl-First Indexing

## H1 Headings (Page-Specific)

Each page has its own unique H1 optimized for commercial search intent:

- **Home Page (`/`):** Orthodontic Equipment, Materials & White-Label Clear Aligners
- **Machines Page (`/machines`):** Orthodontic Production Equipment
- **White-Labeling Page (`/white-labeling`):** White-Label Clear Aligner Manufacturing
- **Plastics Materials Page (`/plastics-materials`):** Aligner Sheet Materials & Consumables
- **Rolls Page (`/rolls`):** Bulk Material Rolls for Aligner Production
- **About Us Page (`/about`):** ISO 13485 Certified Orthodontic Manufacturing
- **Individual Machine Pages (`/machines/:id`):** [Machine Name] [Model] - [Category]
  - Example: "MaxTrim T2 - Precision Trimming System"

---

## Page-by-Page Implementation

### Home Page (`/` - `Home.tsx`)

#### Hero Section

- **H1:** Orthodontic Equipment, Materials & White-Label Clear Aligners

#### Products & Services Section (line 57-156)

- **H2:** In-House Clear Aligner Production

  - **H3:** Orthodontic Production Equipment
  - **H3:** Aligner Materials & Consumables
  - **H3:** Digital Workflow Integration

- **H2:** White-Label Clear Aligner Manufacturing
  - **H3:** Outsourced Aligner Production
  - **H3:** Clinical Workflow Integration

#### Manufacturing Section (line 297-344)

- **H2:** Quality Standards & Compliance
  - **H3:** ISO 13485 Medical Device Certification
  - **H3:** Production Capacity & Turnaround

#### Solutions Section (line 204-294)

- **H2:** Production Models for Orthodontic Practices
  - **H3:** In-House Production Model
  - **H3:** Centralized & Lab Production Models
  - **H3:** White-Label Manufacturing Model

---

### Machines Page (`/machines` - `Machines.tsx`)

#### Hero Section (PageHero component)

- **H1:** Orthodontic Production Equipment

#### Equipment Grid Section (line 53-95)

- **H2:** Clear Aligner Manufacturing Equipment
  - **H3:** Thermoforming Equipment
  - **H3:** Trimming & Cutting Systems
  - **H3:** 3D Printing Equipment
  - **H3:** Scanning & Digital Integration
  - **H3:** Marking & Identification Systems
  - **H3:** Polishing & Finishing Equipment

---

### Individual Machine Pages (`/machines/:id` - `MachinePage.tsx`)

#### Hero Section (MachineHero component)

- **H1:** [Machine Name] [Model] - [Category]
  - Example: "MaxTrim T2 - Precision Trimming System"

#### Equipment Parameters Section

- **H2:** Equipment Specifications
  - **H3:** Physical Specifications
  - **H3:** Power Requirements

#### Machine Specs Section

- **H2:** Production Specifications
  - **H3:** Production Capacity
  - **H3:** Cycle Time & Precision

#### Features Section

- **H2:** Features & Capabilities
  - **H3:** Key Features
  - **H3:** Production Capabilities

---

### White-Labeling Page (`/white-labeling` - `WhiteLabeling.tsx`)

#### Hero Section (PageHero component)

- **H1:** White-Label Clear Aligner Manufacturing

#### Benefits Section (line 33-119)

- **H2:** Outsourced Aligner Manufacturing
  - **H3:** Branding & Customization
  - **H3:** No Infrastructure Investment
  - **H3:** Clinical Standards Compliance
  - **H3:** Scalable Production Capacity

#### How It Works Section (line 122-177)

- **H2:** White-Label Production Process
  - **H3:** Treatment Plan Submission
  - **H3:** Manufacturing & Quality Control
  - **H3:** Delivery & Shipping

#### Integration Section (can be added)

- **H2:** White-Label Clinical Workflow Integration
  - **H3:** Scanner Integration (3Shape, iTero, Medit)
  - **H3:** Treatment Planning Software Connectivity
  - **H3:** Order Management Portal

---

### Plastics Materials Page (`/plastics-materials` - `PlasticsMaterials.tsx`)

#### Hero Section (PageHero component)

- **H1:** Aligner Sheet Materials & Consumables

#### Materials Selection Section (MaterialsPage component)

- **H2:** Aligner Sheet Materials
  - **H3:** FLEX Premium - E Formulations
  - **H3:** FLEX Dual Premium Materials
  - **H3:** MAX White Premium Materials
  - **H3:** MAX Premium - E Materials
  - **H3:** MAX Comfort - E Materials
  - **H3:** MAX Standard - E Materials

#### Material Details Section

- **H2:** Material Properties & Specifications
  - **H3:** Thickness Options (0.50mm - 2.00mm)
  - **H3:** Material Applications
  - **H3:** Tear Resistance & Optical Clarity
  - **H3:** Biocompatibility Certifications

---

### Rolls Page (`/rolls` - `Rolls.tsx`)

#### Hero Section (PageHero component)

- **H1:** Bulk Material Rolls for Aligner Production

#### Materials Selection Section (MaterialsPage component)

- **H2:** Bulk Roll Materials
  - **H3:** FLEX Economical - K Rolls
  - **H3:** FLEX Premium Plus Rolls
  - **H3:** FLEX Premium Rolls
  - **H3:** MAX Standard Retainer Rolls
  - **H3:** MAX Standard Aligner Rolls
  - **H3:** MAX Comfort Rolls

#### Material Details Section

- **H2:** Material Properties & Specifications
  - **H3:** Thickness & Width Specifications
  - **H3:** Roll Dimensions & Quantities
  - **H3:** Thermoforming Integration

---

### About Us Page (`/about` - `AboutUs.tsx`)

#### Hero Section (PageHero component)

- **H1:** ISO 13485 Certified Orthodontic Manufacturing

#### Manufacturing Standards Section (line 29-91)

- **H2:** Manufacturing Standards & Compliance
  - **H3:** ISO 13485 Medical Device Certification
  - **H3:** Quality Control Systems
  - **H3:** Material Biocompatibility Testing

#### Manufacturing Commitment Section (line 94-142)

- **H2:** Manufacturing Commitment & Quality Systems
  - **H3:** Quality Control Processes
  - **H3:** Production Process Standards
  - **H3:** Documentation & Traceability

---

## Implementation Guidelines

### SEO Best Practices

- **H1:** Use exactly once per page, in the hero section. Each page has its own unique H1.
- **H2:** Use for major page sections (2-4 per page typically)
- **H3:** Use for subsections within H2 areas (3-7 per H2 typically)
- **H4:** Use only on product/detail pages for specific specifications or sub-items

### Homepage Structure Rules

1. **Exactly 1 H1** - Site-wide primary heading
2. **Maximum 4 H2 sections** - Topical map of main offerings
3. **Only H3 under H2** - No H4 on homepage
4. **Commercial intent focus** - Headings reflect search queries, not internal documentation

### Category Page Structure Rules

1. **One clear commercial H1** - Focused on the category
2. **H2 for main sections** - Product categories or service areas
3. **H3 for products or subcategories** - Specific items or features
4. **Avoid redundancy** - Don't repeat workflow/compliance sections already on homepage

### Keyword Strategy

- **Primary keywords:** orthodontic equipment, clear aligner production, white-label clear aligners, aligner materials, orthodontic manufacturing
- **Secondary keywords:** thermoforming, trimming, 3D printing, scanner integration
- **Tertiary keywords:** specific machine models, material formulations, certifications
- **Long-tail keywords:** production capacity, workflow integration, quality standards

### B2B Focus Requirements

- ✅ Use professional, technical terminology
- ✅ Focus on specifications, capabilities, processes
- ✅ Avoid patient-facing language
- ✅ No superlatives ("best", "leading", "innovative")
- ✅ Factual, search-friendly phrasing only
- ✅ Commercial intent over documentation style

### Eliminating Keyword Cannibalization

- **Homepage:** High-level topical map (no deep product specs)
- **Machines Page:** Equipment categories only (no workflow/compliance duplication)
- **White-Label Page:** Service model focus (no equipment details)
- **Materials Pages:** Product-specific only (no production process duplication)

---

## Quick Reference: Current vs. Recommended Headings

### H1 Headings by Page

| Page                               | Current H1                                      | Recommended H1                                                  |
| ---------------------------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| Home (`/`)                         | "Precision engineering for modern orthodontics" | "Orthodontic Equipment, Materials & White-Label Clear Aligners" |
| Machines (`/machines`)             | "Complete Manufacturing Solutions"              | "Orthodontic Production Equipment"                              |
| White-Labeling (`/white-labeling`) | "Aligner White Labeling"                        | "White-Label Clear Aligner Manufacturing"                       |
| Plastics (`/plastics-materials`)   | "High-Performance Plastics"                     | "Aligner Sheet Materials & Consumables"                         |
| Rolls (`/rolls`)                   | "High-Volume Material Rolls"                    | "Bulk Material Rolls for Aligner Production"                    |
| About (`/about`)                   | "About OrthoVeer"                               | "ISO 13485 Certified Orthodontic Manufacturing"                 |
| Machine Detail (`/machines/:id`)   | Varies by machine                               | "[Machine Name] [Model] - [Category]"                           |

### Home Page Structure

- **H1:** Orthodontic Equipment, Materials & White-Label Clear Aligners
- **H2.1:** In-House Clear Aligner Production
- **H2.2:** White-Label Clear Aligner Manufacturing
- **H2.3:** Quality Standards & Compliance
- **H2.4:** Production Models for Orthodontic Practices

**Note:** All H3s under H2s, no H4 on homepage.
