import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string, isPage: boolean = false) => {
    if (isPage) {
      setIsMobileMenuOpen(false);
      return;
    }

    if (location !== "/") {
      setLocation("/");
      // Small timeout to allow Home to mount before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Process", id: "process" },
    { label: "Automation", id: "automation" },
    { label: "Results", id: "results" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isMobileMenuOpen 
          ? "bg-[#05050a] py-3 border-white/10" 
          : isScrolled
            ? "bg-background/80 backdrop-blur-md border-white/5 py-3"
            : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#7c6cf0] to-[#22d3ee] flex items-center justify-center text-white font-bold text-xl">
              Z
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Zyfex Lab</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-[#9191a8] hover:text-[#eeeef2] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => handleNavClick('cta')}
              className="bg-[#7c6cf0] hover:bg-[#9d8fff] text-white font-medium rounded-full px-6 transition-all duration-300 shadow-[0_0_20px_rgba(124,108,240,0.3)] hover:shadow-[0_0_30px_rgba(124,108,240,0.5)] cursor-pointer"
            >
              Book Free Audit →
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#05050a] border-b border-white/10 shadow-2xl p-8 flex flex-col gap-6 md:hidden z-[60]"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-xl font-semibold text-[#9191a8] hover:text-white py-3 border-b border-white/5 last:border-0 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('cta')}
              className="bg-[#7c6cf0] hover:bg-[#9d8fff] text-white font-bold rounded-full w-full mt-6 py-6 text-lg shadow-[0_0_20px_rgba(124,108,240,0.3)] hover:shadow-[0_0_30px_rgba(124,108,240,0.5)] cursor-pointer"
            >
              Book Free Audit →
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}