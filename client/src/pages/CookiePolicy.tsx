import { PageLayout } from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/card";
import { CONTACT_INFO } from "@/lib/constants";

export default function CookiePolicy() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
          Cookie Policy
        </h1>
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
                What Are Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and provide information to
                the website owners.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                OrthoVeer ("we," "our," or "us") uses cookies on our website
                (orthoveer.com) to enhance your browsing experience, analyze
                site traffic, and provide personalized content. This Cookie
                Policy explains what cookies are, how we use them, and your
                choices regarding their use.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By continuing to use our website, you consent to our use of
                cookies in accordance with this Cookie Policy. If you do not
                agree to our use of cookies, you should disable cookies in your
                browser settings or refrain from using our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Types of Cookies We Use
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Necessary Cookies
                </h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  These cookies are essential for the website to function
                  properly. They enable core functionality such as security,
                  network management, and accessibility. These cookies cannot be
                  disabled.
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Examples:</strong> Session management, security
                  tokens, consent preferences
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Analytics Cookies
                </h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously. This helps us improve the website's performance
                  and user experience.
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Examples:</strong> Google Analytics cookies (_ga,
                  _gid, _gat)
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  <strong>Purpose:</strong> To analyze website traffic, user
                  behavior, and improve our services.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Marketing Cookies
                </h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  These cookies are used to deliver personalized advertisements
                  and track campaign performance. They may be set by our
                  advertising partners to build a profile of your interests.
                </p>
                <p className="text-gray-400 text-sm">
                  <strong>Examples:</strong> Advertising network cookies,
                  tracking pixels
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  <strong>Purpose:</strong> To show you relevant advertisements
                  and measure campaign effectiveness.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Google Analytics
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use Google Analytics to analyze website usage. Google
                Analytics uses cookies to collect information about how visitors
                use our site. This information is used to compile reports and
                help us improve the site.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The cookies collect information in an anonymous form, including
                the number of visitors to the site, where visitors have come to
                the site from, and the pages they visited.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For more information about Google Analytics cookies, please
                visit{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  Google's Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Managing Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Please keep
                in mind that removing or blocking cookies can impact your user
                experience and parts of our website may no longer be fully
                accessible.
              </p>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Browser Settings
                </h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Most browsers allow you to refuse or accept cookies. You can
                  also delete cookies that have already been set. The methods
                  for doing so vary from browser to browser:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 underline"
                    >
                      Edge
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Cookie Banner
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  When you first visit our website, you will see a cookie banner
                  that allows you to accept or customize your cookie
                  preferences. You can change your preferences at any time by
                  clearing your browser cookies or contacting us.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Third-Party Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various
                third-party cookies to report usage statistics of the website
                and deliver advertisements on and through the website.
              </p>
              <p className="text-gray-300 leading-relaxed">
                These third-party service providers have their own privacy
                policies addressing how they use such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Cookie Duration
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies can be either "session" cookies or "persistent" cookies:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>
                  <strong>Session cookies:</strong> These are temporary cookies
                  that expire when you close your browser. They help us remember
                  your actions during a single browsing session.
                </li>
                <li>
                  <strong>Persistent cookies:</strong> These remain on your
                  device for a set period or until you delete them. They help us
                  remember your preferences and actions across multiple visits.
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The specific duration of each cookie depends on its purpose.
                Analytics cookies typically persist for up to 2 years, while
                necessary cookies may only last for the duration of your
                session.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Updates to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legislation, or our business operations.
                We will notify you of any material changes by posting the new
                Cookie Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Your continued use of our website after any changes to this
                Cookie Policy will constitute your acceptance of such changes.
                We encourage you to review this Cookie Policy periodically to
                stay informed about our use of cookies.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
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
      </div>
    </PageLayout>
  );
}
