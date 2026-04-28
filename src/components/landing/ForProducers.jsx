import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  "Customs & bonded management",
  "Packaging & bottling",
  "Design & branding for Asian markets",
  "Storage & logistics",
  "Distribution (retail, e-commerce, on-trade)",
];

export default function ForProducers() {
  return (
    <section id="producers" className="bg-secondary/40 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
                For Producers
              </span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              You make the wine.{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                We take it to market.
              </span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Full-service Asian market entry, managed end to end.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Getting wine from vineyard to Asian shelf involves customs paperwork, bonded
              warehousing, local label compliance, packaging adjustments, and distribution
              partnerships. Most producers don't have the infrastructure or local knowledge to
              manage this alone. That's where we come in — we are the single operational layer
              that sits between your cellar door and the consumer.
            </p>
          </motion.div>

          {/* Right – services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/50 shadow-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-body text-base font-medium text-foreground pt-1">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 font-heading text-xl font-semibold text-foreground italic">
              "You produce the wine — we handle the rest."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
