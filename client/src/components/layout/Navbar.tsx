import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@assets/logo/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 100; // Hide navbar only after scrolling down 100px

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for styling
      setScrolled(currentScrollY > 20);

      // Show navbar at the top
      if (currentScrollY < scrollThreshold) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-6"
          : "bg-transparent py-8",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between relative">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer z-10 shrink-0"
          >
            <img
              src={logoImage}
              alt="OrthoVeer Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors leading-tight">
              OrthoVeer
              <br className="leading-none" />
              <span className="text-sm text-gray-400 -mt-1 block">Dental</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-gray-300 hover:text-white bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white hover:bg-transparent focus:bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 bg-background/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg">
                      <Link
                        href="/machines"
                        className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                      >
                        Production Machines
                      </Link>
                      <Link
                        href="/plastics-materials"
                        className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                      >
                        Plastics
                      </Link>
                      <Link
                        href="/rolls"
                        className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                      >
                        Rolls
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/white-labeling"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              White Labeling
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Careers
            </Link>
          </div>

          {/* Contact Button - Right */}
          <div className="hidden md:flex items-center gap-4 z-10 shrink-0">
            <Link href="/contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                data-testid="button-contact"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 z-10"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
              Products
            </span>
            <Link
              href="/machines"
              className="text-lg font-medium text-gray-300 pl-4"
              onClick={() => setIsOpen(false)}
            >
              Production Machines
            </Link>
            <Link
              href="/plastics-materials"
              className="text-lg font-medium text-gray-300 pl-4"
              onClick={() => setIsOpen(false)}
            >
              Plastics
            </Link>
            <Link
              href="/rolls"
              className="text-lg font-medium text-gray-300 pl-4"
              onClick={() => setIsOpen(false)}
            >
              Rolls
            </Link>
          </div>
          <Link
            href="/white-labeling"
            className="text-lg font-medium text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            White Labeling
          </Link>
          <Link
            href="/case-studies"
            className="text-lg font-medium text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="text-lg font-medium text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/careers"
            className="text-lg font-medium text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
          <div className="h-px bg-border my-2" />
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-primary">Contact Us</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
