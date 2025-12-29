import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                ORTHOVEER
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premier B2B orthodontic manufacturing partner. Delivering precision aligners and digital treatment planning for dental professionals worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Clear Aligners</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retainers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Treatment Planning</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">White Labeling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>contact@orthoveer.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>123 Avenue des Champs-Élysées<br/>75008 Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} OrthoVeer. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
