import React from "react";

const partners = [
  { name: "Bernard Mayet", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/bernard-mayet.png" },
  { name: "Wickham Estate", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/wickham-estate.png" },
  { name: "Louis XIII", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/louis-xiii.png" },
  { name: "Groupe Bernard Lucien Bernard", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/groupe-bernard-lucien-bernard.png" },
  { name: "Kingston Estate", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/kingston-estate.png" },
  { name: "Vinous Australis", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/vinous-australis.png" },
  { name: "U.C.I.", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/uci.png" },
  { name: "Baron Philippe de Rothschild", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/baron-philippe-de-rothschild.png" },
  { name: "Grand Cru Classé en 1855", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/grand-cru-classe-en-1855.png" },
  { name: "Australian Premium Wine Group", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/apwg.png" },
  { name: "Eurovins", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/eurovins.png" },
  { name: "MW Wines Spain", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/mw-wines-spain.png" },
  { name: "T. Wines", img: "https://www.unitedspiritshk.com/united-spirits-site/assets/img/partners/t-wines.png" },
];

export default function PartnerLogos() {
  const items = [...partners, ...partners]; // duplicate for seamless loop

  return (
    <section className="bg-white py-12 border-b border-border/50 overflow-hidden">
      <p className="text-center text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted-foreground/60 mb-8">
        Our Global Partners
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee w-max items-center gap-12 px-8">
          {items.map((partner, i) => (
            <img
              key={i}
              src={partner.img}
              alt={partner.name}
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
