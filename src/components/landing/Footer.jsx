import React from "react";

const quickLinks = [
  { label: "For Producers", href: "#producers" },
  { label: "Collections", href: "#collections" },
  { label: "Service Packages", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#0F1117] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-heading text-2xl font-bold tracking-wider text-white">
              U<span className="text-gold">.</span>S<span className="text-gold">.</span>C
            </span>
            <p className="mt-4 font-heading text-sm italic text-white/40">
              From the world, for the world.
            </p>
            <p className="mt-3 font-body text-xs text-white/30 leading-relaxed max-w-xs">
              Spirits United Supply Chain Co. — Your operational bridge between
              world-class producers and Asia's fastest-growing markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-white/40 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-6">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/40">
              <li>+852 6934 6630</li>
              <li>info@unitedspiritshk.com</li>
              <li>Wanchai, Hong Kong</li>
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-6">
              Markets
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/40">
              <li>China · Japan · Korea</li>
              <li>ASEAN · Hong Kong</li>
              <li>Ghana</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/25">
            © 2025 Spirits United Supply Chain Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-white/25 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-white/25 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
