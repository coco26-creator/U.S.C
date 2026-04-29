import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Who We Are
            </h2>
            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              We began as a bridge between world-class distilleries and emerging Asian markets.
              Today, Spirits United is the complete supply chain layer for premium wine and spirits
              brands entering Asia — a single, trusted partner who handles production oversight,
              bonded warehousing, local branding, compliance, and distribution across China, Japan,
              Korea, ASEAN, and Ghana.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Based in the <strong>Qingdao Free Trade Zone</strong>, we oversee production, blending,
              bottling, export logistics, and brand development with precision and care.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div>
                <p className="font-heading text-2xl font-bold text-foreground mb-1">50+</p>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Partner Labels</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground mb-1">12</p>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Origins</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground mb-1">6</p>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Active Markets</p>
              </div>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50"
          >
            <video
              src="https://www.unitedspiritshk.com/united-spirits-site/assets/img/facility-tours/warehouse.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
