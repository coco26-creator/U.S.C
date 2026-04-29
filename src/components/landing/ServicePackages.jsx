import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const packages = [
  {
    title: "Market Entry",
    subtitle: "For producers testing the Asian market",
    features: [
      "Pay-per-service customs handling",
      "Import documentation",
      "Bonded storage",
      "No long-term commitment",
    ],
    featured: false,
  },
  {
    title: "Growth Partner",
    subtitle: "Annual partnership with active distribution support",
    features: [
      "All Market Entry features",
      "E-commerce channel management",
      "Regional marketing support",
      "Quarterly performance reviews",
    ],
    featured: true,
  },
  {
    title: "Full-Service Expansion",
    subtitle: "End-to-end management across Asia",
    features: [
      "Multi-channel distribution",
      "Dedicated account management",
      "Brand development support",
      "Priority customs clearance",
    ],
    featured: false,
  },
  {
    title: "BYOB",
    subtitle: "Build Your Own Brand",
    features: [
      "Create your own wine/spirits brand",
      "Product sourcing & packaging",
      "Customs & compliance management",
      "Distribution across Asia",
    ],
    featured: false,
  },
];

export default function ServicePackages() {
  return (
    <section id="featured" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
              Service Packages
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Flexible partnership models for every stage.
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start with essential market entry support or scale into a full-service growth partnership.
            Each package can be tailored to your production volume, market priorities, and timeline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-6 lg:p-7 transition-all duration-300 ${
                pkg.featured
                  ? "bg-[#0F1117] border-[#0F1117] text-white shadow-xl"
                  : "bg-white border-border/70 text-foreground hover:border-gold/50 hover:shadow-md"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-body font-bold uppercase tracking-[0.12em] text-black">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className={`${pkg.featured ? "text-white/70" : "text-muted-foreground"} font-body text-sm mb-6`}>
                {pkg.subtitle}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className={`mt-1 h-1.5 w-1.5 rounded-full ${pkg.featured ? "bg-gold" : "bg-pink-500"}`} />
                    <span className={`font-body text-sm leading-relaxed ${pkg.featured ? "text-white/85" : "text-foreground/85"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`inline-flex items-center gap-2 text-sm font-body font-semibold transition-colors ${
                  pkg.featured ? "text-gold hover:text-gold/80" : "text-pink-600 hover:text-purple-600"
                }`}
              >
                Request Package
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
