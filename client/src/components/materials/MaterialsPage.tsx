import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "@/components/forms";
import { containerClass, sectionClass } from "@/lib/cn-utils";
import type { MaterialType } from "@/config/materials";

interface MaterialsPageProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  materials: MaterialType[];
  features: string[];
  formTitle: string;
  formDescription: string;
  submitLabel?: string;
  sectionImage?: string;
  sectionImageAlt?: string;
}

export function MaterialsPage({
  badge,
  title,
  titleHighlight,
  description,
  heroImage,
  heroImageAlt,
  materials,
  features,
  formTitle,
  formDescription,
  submitLabel = "Send Inquiry",
  sectionImage,
  sectionImageAlt,
}: MaterialsPageProps) {
  const [selectedMaterial, setSelectedMaterial] = useState(
    materials[0]?.id || ""
  );

  const currentMaterial = materials.find((m) => m.id === selectedMaterial);

  return (
    <PageLayout>
      <PageHero
        badge={badge}
        title={title}
        titleHighlight={titleHighlight}
        description={description}
        image={heroImage}
        imageAlt={heroImageAlt}
        buttonText="Request Information"
        buttonHref="/contact"
      />

      {/* Products Section */}
      <section className={sectionClass("base", "bg-secondary/20")}>
        <div className={containerClass()}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
            Select {badge.includes("Plastic") ? "Plastic" : "Roll"} Type
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start mb-16">
            {/* Section Image */}
            {sectionImage && (
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full sm:w-fit shrink-0 mx-auto sm:mx-0">
                <img
                  src={sectionImage}
                  alt={
                    sectionImageAlt ||
                    `${
                      badge.includes("Plastic") ? "Plastic" : "Roll"
                    } materials`
                  }
                  className="w-full sm:w-auto sm:max-w-[50vw] md:max-w-[40vw] lg:max-w-[35vw] xl:max-w-[30vw] 2xl:max-w-[20vw] object-cover h-auto block"
                />
              </div>
            )}

            {/* Right Column: Toggle Buttons and Material Details */}
            <div className="flex-1 w-full min-w-0">
              {/* Toggle Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-6 md:mb-8">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material.id)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                      selectedMaterial === material.id
                        ? "bg-primary text-white shadow-lg shadow-primary/50"
                        : "bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 hover:text-white"
                    }`}
                    data-testid={`button-${material.id}`}
                  >
                    {material.name}
                  </button>
                ))}
              </div>

              {/* Selected Material Details */}
              {currentMaterial && (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 lg:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 font-heading">
                    {currentMaterial.name}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8">
                    {currentMaterial.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {currentMaterial.products.map((product, idx) => (
                      <Card
                        key={idx}
                        className="bg-white/5 border-white/10 p-4 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-white font-bold text-lg">
                              {product.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              Thickness: {product.thickness}
                            </p>
                            {product.width && (
                              <p className="text-gray-400 text-sm">
                                Width: {product.width}
                              </p>
                            )}
                          </div>
                          {product.price && (
                            <div className="text-2xl font-bold text-primary">
                              {product.price}
                            </div>
                          )}
                          {!product.price && (
                            <div className="text-primary font-semibold">
                              Contact for pricing
                            </div>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features Section */}
          {currentMaterial && (
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6 py-4 bg-white/5 rounded-lg p-6">
                <h4 className="text-white font-bold mb-2 text-lg">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className={sectionClass("base")}>
        <div className={containerClass()}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading text-center">
              {formTitle}
            </h2>
            <p className="text-gray-400 text-lg mb-12 text-center">
              {formDescription}
            </p>

            <ContactForm submitLabel={submitLabel} />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
