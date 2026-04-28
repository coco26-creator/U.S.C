import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import caseStudiesData from "@/lib/caseStudiesData";

const ALL = "All";
const eventTypes = [ALL, "Brand Collaboration", "Diplomatic Visit", "Meeting", "Education Event", "Facility Tour"];
const years = [ALL, "2025", "2024", "2023", "2022"];

const typeColors = {
  "Brand Collaboration": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Diplomatic Visit": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Meeting": "bg-gold/10 text-gold border-gold/20",
  "Education Event": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Facility Tour": "bg-green-500/10 text-green-400 border-green-500/20",
};

export default function CaseStudies() {
  const [activeType, setActiveType] = useState(ALL);
  const [activeYear, setActiveYear] = useState(ALL);
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    return caseStudiesData.filter((cs) => {
      const matchType = activeType === ALL || cs.eventType === activeType;
      const matchYear = activeYear === ALL || cs.year === activeYear;
      return matchType && matchYear;
    });
  }, [activeType, activeYear]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleTypeChange = (type) => { setActiveType(type); setVisibleCount(9); };
  const handleYearChange = (year) => { setActiveYear(year); setVisibleCount(9); };

  return (
    <section id="case-studies" className="bg-[#0F1117] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
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
              In the Field
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
            Case Studies & Events
          </h2>
          <p className="font-body text-lg text-white/50 max-w-xl mx-auto">
            From diplomatic tastings to distributor tours — a record of our work across Asia and beyond.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-white/30 flex-shrink-0" />
            {eventTypes.map((t) => (
              <button
                key={t}
                onClick={() => handleTypeChange(t)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold border transition-all duration-200 ${
                  activeType === t
                    ? "bg-gold text-white border-gold"
                    : "bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white/80"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-wrap sm:ml-auto">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => handleYearChange(y)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold border transition-all duration-200 ${
                  activeYear === y
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent"
                    : "bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white/80"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((cs, i) => (
              <motion.div
                key={cs.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-gold/20 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={cs.imageUrl}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full border ${typeColors[cs.eventType] || "bg-white/10 text-white/60 border-white/10"}`}>
                      {cs.eventType}
                    </span>
                    <span className="text-xs font-body text-white/30">{cs.date}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="font-body text-xs text-white/40 leading-relaxed mb-4 flex-1">
                    {cs.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-body text-xs text-white/25 italic">{cs.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-white/30 py-16">No events match these filters.</p>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + 9)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/15 text-sm font-body font-semibold text-white/70 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
