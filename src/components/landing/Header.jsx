import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Featured", href: "#featured" },
  { label: "News", href: "#footer" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1117]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — matches real site: flame/hex icon + U.S.C */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5"
          >
            {/* Hexagonal flame icon */}
            <div className="w-9 h-9 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <polygon
                  points="20,2 36,11 36,29 20,38 4,29 4,11"
                  fill="url(#hexGrad)"
                />
                <defs>
                  <linearGradient id="hexGrad" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                {/* Flame shape inside */}
                <path
                  d="M20 10 C20 10 25 16 24 21 C27 18 27 14 25 11 C28 14 29 19 27 23 C29 21 30 25 27 28 C25 31 22 32 20 32 C18 32 15 31 13 28 C10 25 11 21 13 23 C11 19 12 14 15 11 C13 14 13 18 16 21 C15 16 20 10 20 10Z"
                  fill="white"
                  opacity="0.9"
                />
              </svg>
            </div>
            <span className="font-heading text-xl font-bold tracking-wider text-white">
              U.S.C
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-body font-medium text-white/70 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F1117]/98 backdrop-blur-md border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-base font-body text-white/80 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
