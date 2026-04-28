import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const markets = [
  { name: "China", tag: "Core Market", desc: "Full distribution network across major tier-1 and tier-2 cities" },
  { name: "Japan", tag: "Premium Focus", desc: "Specialised import channels for premium wine & spirits" },
  { name: "Korea", tag: "Growing Demand", desc: "Rapidly expanding consumer market for imported wines" },
  { name: "ASEAN", tag: "Expanding Reach", desc: "Multi-country distribution across Southeast Asia" },
  { name: "Hong Kong", tag: "Global Hub", desc: "Company headquarters and regional operations centre" },
  { name: "Ghana", tag: "Africa Distribution", desc: "Gateway to West African spirits distribution" },
];

export default function GlobalFootprint() {
  return (
    <section className="bg-[#0F1117] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
              Our Reach
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Global Footprint
          </h2>
          <p className="font-body text-lg text-white/50 max-w-xl mx-auto">
            Strategically positioned to serve Asia's most dynamic markets.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {market.name}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body font-semibold">
                    {market.tag}
                  </span>
                </div>
                <Globe className="w-5 h-5 text-white/20 group-hover:text-gold/50 transition-colors" />
              </div>
              <p className="font-body text-sm text-white/40 leading-relaxed">
                {market.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
