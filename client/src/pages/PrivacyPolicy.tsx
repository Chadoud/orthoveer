import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { CONTACT_INFO } from "@/lib/constants";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <Card className="bg-white/5 border-white/10 p-8 md:p-12">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                OrthoVeer ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website located at orthoveer.com (the "Website") or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                OrthoVeer is a B2B orthodontic manufacturing company specializing in clear aligner production equipment, thermoplastic materials, and white-label aligner manufacturing services. We are located at 190 Avenue du General de Gaulle, 94500 Champigny sur Marne, France.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                2. Information We Collect
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Information You Provide
                </h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  We may collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Fill out contact forms</li>
                  <li>Submit career applications</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Communicate with us via email or other means</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages you visit and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Date and time of your visit</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. For more details, please see our{" "}
                  <a href="/cookie-policy" className="text-primary hover:text-primary/80 underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To provide, maintain, and improve our website and services</li>
                <li>To respond to your inquiries, comments, and requests</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To process career applications</li>
                <li>To analyze website usage and trends</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Service Providers
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We may share your information with third-party service providers who perform services on our behalf, such as website hosting, data analysis, email delivery, and customer service.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Legal Requirements
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Business Transfers
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                5. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                6. Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate or incomplete information</li>
                <li>The right to erase your personal information</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                7. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                8. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                9. International Data Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are located outside France and choose to provide information to us, please note that we transfer the data, including Personal Data, to France and process it there.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By submitting your personal information, you agree to this transfer, storing, or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                11. GDPR Compliance (European Users)
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). OrthoVeer aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us using the information provided in the "Contact Us" section below.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                In certain circumstances, you have the following data protection rights:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of the Website after any changes to this Privacy Policy will constitute your acceptance of such changes.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, our data practices, or wish to exercise your rights regarding your personal information, please contact us:
              </p>
              <div className="text-gray-300 space-y-4 bg-white/5 p-6 rounded-lg border border-white/10">
                <div>
                  <strong className="text-white block mb-1">OrthoVeer</strong>
                  <p>190 Avenue du General de Gaulle</p>
                  <p>94500 Champigny sur Marne, France</p>
                </div>
                <div>
                  <strong className="text-white block mb-1">Email:</strong>
                  <a 
                    href={CONTACT_INFO.email.href}
                    className="text-primary hover:text-primary/80 underline"
                  >
                    {CONTACT_INFO.email.display}
                  </a>
                </div>
                <div>
                  <strong className="text-white block mb-1">Phone:</strong>
                  <a 
                    href={CONTACT_INFO.phone.href}
                    className="text-primary hover:text-primary/80 underline"
                  >
                    {CONTACT_INFO.phone.display}
                  </a>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    You can also reach us through our{" "}
                    <a href="/contact" className="text-primary hover:text-primary/80 underline">
                      contact form
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}

