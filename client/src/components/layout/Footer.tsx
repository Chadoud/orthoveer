import { Link } from "wouter";
import { CONTACT_INFO } from "@/lib/constants";
import { resetConsent } from "@/lib/consent/consent.store";
import logoImage from "@assets/logo/logo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img
                src={logoImage}
                alt="OrthoVeer Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                OrthoVeer
                <br className="leading-none" />
                <span className="text-sm text-gray-400 -mt-1 block">
                  Dental
                </span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premier B2B orthodontic manufacturing partner. Delivering
              precision aligners and digital treatment planning for dental
              professionals worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              Products & Services
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/machines"
                  className="hover:text-primary transition-colors"
                >
                  Aligner Production Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/white-labeling"
                  className="hover:text-primary transition-colors"
                >
                  Aligner White Labeling
                </Link>
              </li>
              <li>
                <Link
                  href="/plastics-materials"
                  className="hover:text-primary transition-colors"
                >
                  Plastics
                </Link>
              </li>
              <li>
                <Link
                  href="/rolls"
                  className="hover:text-primary transition-colors"
                >
                  Rolls
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Quality Assurance
                </a>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <div className="font-medium text-white mb-1">Email</div>
                <a
                  href={CONTACT_INFO.email.href}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email.display}
                </a>
              </li>
              <li>
                <div className="font-medium text-white mb-1">Phone</div>
                <a
                  href={CONTACT_INFO.phone.href}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone.display}
                </a>
              </li>
              <li>
                <div className="font-medium text-white mb-1">Address</div>
                <div>
                  190 Avenue du General de Gaulle 94500
                  <br />
                  Champigny sur Marne, France
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} OrthoVeer. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <button
              onClick={() => {
                resetConsent();
                // Banner will re-render automatically as visibility derives from consent
                window.location.reload();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
