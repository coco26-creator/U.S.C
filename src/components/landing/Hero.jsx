import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F1117]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://www.unitedspiritshk.com/united-spirits-site/assets/img/hg.png"
      >
        <source src="https://www.unitedspiritshk.com/united-spirits-site/assets/img/U.S.C.mp4" type="video/mp4" />
        
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0F1117]/55" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-2xl"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4"
          >
            Your Winery.{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Asia's
            </span>
            <br />
            Shelves.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-body text-xs sm:text-sm text-white/60 tracking-[0.3em] uppercase mb-10"
          >
            FROM THE WORLD, FOR THE WORLD.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo("#collections")}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-body font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
            >
              Explore Collection
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-body font-semibold rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
