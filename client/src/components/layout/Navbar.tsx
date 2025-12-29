import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
            ORTHOVEER
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Solutions</a>
          <a href="#technology" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Technology</a>
          <a href="#manufacturing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Manufacturing</a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
            Login
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Partner With Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#solutions" className="text-lg font-medium text-gray-300" onClick={() => setIsOpen(false)}>Solutions</a>
          <a href="#technology" className="text-lg font-medium text-gray-300" onClick={() => setIsOpen(false)}>Technology</a>
          <a href="#manufacturing" className="text-lg font-medium text-gray-300" onClick={() => setIsOpen(false)}>Manufacturing</a>
          <a href="#about" className="text-lg font-medium text-gray-300" onClick={() => setIsOpen(false)}>About Us</a>
          <div className="h-px bg-border my-2" />
          <Button className="w-full bg-primary" onClick={() => setIsOpen(false)}>Partner With Us</Button>
        </div>
      )}
    </nav>
  );
}
