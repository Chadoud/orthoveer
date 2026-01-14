import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@assets/logo/logo.webp";
import { routePrefetcher } from "@/lib/prefetch/route-prefetcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Container } from "./Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 100; // Hide navbar only after scrolling down 100px
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide navbar when menu is open
      if (isOpen) return;

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
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border/50 py-6"
            : "bg-transparent py-8",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <Container>
          <div className="flex items-center justify-between relative">
            {/* Logo - Left */}
            <Link
              href="/"
              className="flex items-center gap-3 group cursor-pointer z-[120] shrink-0 relative"
            >
              <img
                src={logoImage}
                alt="OrthoVeer Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors leading-tight">
                Orthoveer
              </span>
            </Link>

            {/* Desktop Nav - Centered */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="text-sm font-medium text-gray-300 hover:text-white bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white hover:bg-transparent focus:bg-transparent cursor-pointer"
                      onClick={(e) => {
                        // Navigate to solutions page on click
                        navigate("/solutions");
                      }}
                    >
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[350px] p-2 bg-background/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg">
                        <div className="px-6 py-3">
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            Products
                          </span>
                        </div>
                        <Link
                          href="/machines"
                          className="block px-6 py-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                          onMouseEnter={() =>
                            routePrefetcher.scheduleHoverPrefetch("/machines")
                          }
                          onMouseLeave={() =>
                            routePrefetcher.cancelHoverPrefetch("/machines")
                          }
                        >
                          Production Equipment
                        </Link>
                        <Link
                          href="/plastics-materials"
                          className="block px-6 py-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                          onMouseEnter={() =>
                            routePrefetcher.scheduleHoverPrefetch(
                              "/plastics-materials"
                            )
                          }
                          onMouseLeave={() =>
                            routePrefetcher.cancelHoverPrefetch(
                              "/plastics-materials"
                            )
                          }
                        >
                          Plastics
                        </Link>
                        <Link
                          href="/rolls"
                          className="block px-6 py-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                          onMouseEnter={() =>
                            routePrefetcher.scheduleHoverPrefetch("/rolls")
                          }
                          onMouseLeave={() =>
                            routePrefetcher.cancelHoverPrefetch("/rolls")
                          }
                        >
                          Rolls
                        </Link>
                        <div className="h-px bg-white/10 my-2 mx-6" />
                        <div className="px-6 py-3">
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            Services
                          </span>
                        </div>
                        <Link
                          href="/white-labeling"
                          className="block px-6 py-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                          onMouseEnter={() =>
                            routePrefetcher.scheduleHoverPrefetch(
                              "/white-labeling"
                            )
                          }
                          onMouseLeave={() =>
                            routePrefetcher.cancelHoverPrefetch(
                              "/white-labeling"
                            )
                          }
                        >
                          White Labeling
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/case-studies"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onMouseEnter={() =>
                  routePrefetcher.scheduleHoverPrefetch("/case-studies")
                }
                onMouseLeave={() =>
                  routePrefetcher.cancelHoverPrefetch("/case-studies")
                }
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onMouseEnter={() =>
                  routePrefetcher.scheduleHoverPrefetch("/about")
                }
                onMouseLeave={() =>
                  routePrefetcher.cancelHoverPrefetch("/about")
                }
              >
                About
              </Link>
              <Link
                href="/team"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onMouseEnter={() =>
                  routePrefetcher.scheduleHoverPrefetch("/team")
                }
                onMouseLeave={() =>
                  routePrefetcher.cancelHoverPrefetch("/team")
                }
              >
                Team
              </Link>
              <Link
                href="/careers"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onMouseEnter={() =>
                  routePrefetcher.scheduleHoverPrefetch("/careers")
                }
                onMouseLeave={() =>
                  routePrefetcher.cancelHoverPrefetch("/careers")
                }
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
                onMouseEnter={() =>
                  routePrefetcher.scheduleHoverPrefetch("/blog")
                }
                onMouseLeave={() =>
                  routePrefetcher.cancelHoverPrefetch("/blog")
                }
              >
                Blog
              </Link>
            </div>

            {/* Contact Button - Right */}
            <div className="hidden lg:flex items-center gap-4 z-10 shrink-0">
              <Link
                href="/contact"
                onMouseEnter={() =>
                  routePrefetcher.scheduleHoverPrefetch("/contact")
                }
                onMouseLeave={() =>
                  routePrefetcher.cancelHoverPrefetch("/contact")
                }
              >
                <Button
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                  data-testid="button-contact"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile/Tablet Toggle */}
            <button
              className="lg:hidden text-white p-2 z-[120] relative shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-menu-toggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </nav>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

// Mobile/Tablet Full-Screen Menu Component (rendered as portal)
function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const menuContent = (
    <div
      className={cn(
        "lg:hidden fixed top-0 left-0 right-0 bottom-0 z-[110]",
        !isOpen && "pointer-events-none"
      )}
    >
      {/* Backdrop Overlay */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Menu */}
      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full w-full flex flex-col">
          {/* Header with Logo and Close Button */}
          <div className="border-b border-white/10 sticky top-0 bg-background z-10">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Link
                  href="/"
                  className="flex items-center gap-3 group cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={logoImage}
                    alt="OrthoVeer Logo"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors leading-tight">
                    OrthoVeer
                  </span>
                </Link>
                <button
                  className="text-white p-2 hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </Container>
          </div>

          {/* Menu Content */}
          <div className="flex-1 py-8">
            <Container className="w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Products
                  </span>
                  <Link
                    href="/machines"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Machines
                  </Link>
                  <Link
                    href="/plastics-materials"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Plastics
                  </Link>
                  <Link
                    href="/rolls"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Rolls
                  </Link>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex flex-col gap-4">
                  <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Services
                  </span>
                  <Link
                    href="/white-labeling"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    White Labeling
                  </Link>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex flex-col gap-4">
                  <Link
                    href="/case-studies"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/about"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/team"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Team
                  </Link>
                  <Link
                    href="/careers"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/blog"
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </div>

                <div className="h-px bg-white/10" />

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-auto"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg font-medium">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    return createPortal(menuContent, document.body);
  }
  return null;
}
