import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Premium Wines",
    desc: "Rare white Cabernet — crisp, aromatic, and exquisitely balanced.",
    img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/products/product-anderra-reserva-cabernet-sauvignon-blanc-2023.jpg",
    href: "https://www.unitedspiritshk.com/collections/wines.html",
  },
  {
    title: "Whiskey Collection",
    desc: "Rich, spicy bourbon — aged 18 years for deep oak and caramel notes.",
    img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/products/product-caribbean-blaze-bourbon-18-box.jpg",
    href: "https://www.unitedspiritshk.com/collections/whiskey.html",
  },
  {
    title: "Brandy Selection",
    desc: "XO Cognac — luxurious, complex, and perfect for gifting.",
    img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/products/product-honney-conti-xo-royal.png",
    href: "https://www.unitedspiritshk.com/collections/brandy.html",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="bg-white py-24 lg:py-32">
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
              Our Portfolio
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Discover our curated selection of world-class spirits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((col, i) => (
            <motion.a
              key={i}
              href={col.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="h-64 overflow-hidden bg-secondary/30">
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {col.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {col.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-gold group-hover:text-foreground transition-colors">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
