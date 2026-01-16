import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { CONTACT_INFO } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/layout/Heading";

export default function TermsOfService() {
  return (
    <PageLayout>
      <Section size="large" containerClassName="max-w-4xl">
        <Heading level="h1" className="text-4xl md:text-5xl mb-8">
          Terms of Service
        </Heading>
        <p className="text-gray-400 mb-8 text-lg">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <Card className="bg-white/5 border-white/10 p-8 md:p-12">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your access to and use
                of the website operated by Orthoveer ("we," "our," or "us")
                located at Orthoveer.com (the "Website"). By accessing and using
                this Website, you accept and agree to be bound by the terms and
                provisions of this agreement.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Orthoveer is a B2B orthodontic manufacturing company
                specializing in clear aligner production equipment,
                thermoplastic materials, and white-label aligner manufacturing
                services. Our registered address is 190 Avenue du General de
                Gaulle, 94500 Champigny sur Marne, France.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you do not agree to abide by these Terms, please do not use
                this Website or our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                2. Use License
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials on Orthoveer's website for personal, non-commercial
                transitory viewing only.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on the
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                3. Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The materials on Orthoveer's website are provided on an 'as is'
                basis. Orthoveer makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                4. Limitations
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In no event shall Orthoveer or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Orthoveer's website,
                even if Orthoveer or an authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                5. Accuracy of Materials
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The materials appearing on Orthoveer's website could include
                technical, typographical, or photographic errors. Orthoveer does
                not warrant that any of the materials on its website are
                accurate, complete, or current. Orthoveer may make changes to
                the materials contained on its website at any time without
                notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                6. Links
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Orthoveer has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Orthoveer of the site. Use of any such linked
                website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                7. Modifications
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Orthoveer may revise these terms of service for its website at
                any time without notice. By using this website you are agreeing
                to be bound by the then current version of these terms of
                service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                8. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of France, without regard to its conflict of law
                provisions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Any disputes arising out of or relating to these Terms or the
                use of the Website shall be subject to the exclusive
                jurisdiction of the courts of France, and you irrevocably submit
                to the jurisdiction of such courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                9. Intellectual Property Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Website and its original content, features, and
                functionality are owned by Orthoveer and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property or proprietary rights laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The Orthoveer name, logo, and all related names, logos, product
                and service names, designs, and slogans are trademarks of
                Orthoveer or its affiliates or licensors. You must not use such
                marks without the prior written permission of Orthoveer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                10. User Accounts and Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you create an account on our Website, you are responsible for
                maintaining the security of your account and password. Orthoveer
                cannot and will not be liable for any loss or damage from your
                failure to comply with this security obligation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                You are responsible for all activities that occur under your
                account, whether or not you authorized such activities. You must
                immediately notify Orthoveer of any unauthorized use of your
                account.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You agree not to use the Website to transmit any computer
                viruses, worms, Trojan horses, or other harmful code, or to
                engage in any activity that interferes with or disrupts the
                Website or servers and networks connected to the Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                11. Prohibited Uses
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may use the Website only for lawful purposes and in
                accordance with these Terms. You agree not to use the Website:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  In any way that violates any applicable national or
                  international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material without our prior written consent
                </li>
                <li>
                  To impersonate or attempt to impersonate Orthoveer, an
                  employee, another user, or any other person or entity
                </li>
                <li>
                  In any way that infringes upon the rights of others, or in any
                  way is illegal, threatening, fraudulent, or harmful
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone's use or enjoyment of the Website
                </li>
              </ul>
            </section>

            <section className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="text-gray-300 space-y-4 bg-white/5 p-6 rounded-lg border border-white/10">
                <div>
                  <strong className="text-white block mb-1">Orthoveer</strong>
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
                    <a
                      href="/contact"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      contact form
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </Card>
      </Section>
    </PageLayout>
  );
}
