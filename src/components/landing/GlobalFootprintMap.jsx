import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markets = [
  { name: "Hong Kong", tag: "Global Hub", desc: "Company headquarters and regional operations centre.", lat: 22.3193, lng: 114.1694, color: "#C9A84C" },
  { name: "China", tag: "Core Market", desc: "Full distribution network across major tier-1 and tier-2 cities.", lat: 35.8617, lng: 104.1954, color: "#ec4899" },
  { name: "Japan", tag: "Premium Focus", desc: "Specialised import channels for premium wine & spirits.", lat: 36.2048, lng: 138.2529, color: "#a855f7" },
  { name: "Korea", tag: "Growing Demand", desc: "Rapidly expanding consumer market for imported wines.", lat: 35.9078, lng: 127.7669, color: "#a855f7" },
  { name: "ASEAN", tag: "Expanding Reach", desc: "Multi-country distribution across Southeast Asia.", lat: 4.2105, lng: 108.9758, color: "#ec4899" },
  { name: "Ghana", tag: "Africa Distribution", desc: "Gateway to West African spirits distribution.", lat: 7.9465, lng: -1.0232, color: "#C9A84C" },
];

export default function GlobalFootprintMap() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-[#0F1117] py-24 lg:py-32 overflow-hidden">
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

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/8 h-[420px]"
          >
            <MapContainer
              center={[25, 100]}
              zoom={2.5}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", background: "#0F1117" }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              />
              {markets.map((m) => (
                <CircleMarker
                  key={m.name}
                  center={[m.lat, m.lng]}
                  radius={active?.name === m.name ? 14 : 10}
                  pathOptions={{
                    fillColor: m.color,
                    fillOpacity: 0.85,
                    color: m.color,
                    weight: active?.name === m.name ? 3 : 1,
                  }}
                  eventHandlers={{
                    click: () => setActive(m),
                    mouseover: () => setActive(m),
                  }}
                >
                  <Tooltip permanent direction="top" offset={[0, -8]} className="leaflet-tooltip-dark">
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: "#fff" }}>
                      {m.name}
                    </span>
                  </Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>
          </motion.div>

          {/* Market Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            {markets.map((m) => (
              <button
                key={m.name}
                onClick={() => setActive(active?.name === m.name ? null : m)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  active?.name === m.name
                    ? "bg-white/[0.08] border-gold/40"
                    : "bg-white/[0.03] border-white/8 hover:bg-white/[0.06] hover:border-white/15"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-base font-bold text-white mb-0.5">{m.name}</h3>
                    <span
                      className="inline-block text-xs font-body font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: m.color, background: `${m.color}18` }}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: m.color }}
                  />
                </div>
                {active?.name === m.name && (
                  <p className="font-body text-xs text-white/50 leading-relaxed mt-2">{m.desc}</p>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
