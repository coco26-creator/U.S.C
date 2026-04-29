import React from "react";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import PartnerLogos from "../components/landing/PartnerLogos";
import About from "../components/landing/About";
import ForProducers from "../components/landing/ForProducers";
import ServicePackages from "../components/landing/ServicePackages";
import GlobalFootprintMap from "../components/landing/GlobalFootprintMap";
import CaseStudies from "../components/landing/CaseStudies";
import Collections from "../components/landing/Collections";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PartnerLogos />
      <About />
      <ForProducers />
      <ServicePackages />
      <GlobalFootprintMap />
      <CaseStudies />
      <Collections />
      <Contact />
      <Footer />
    </div>
  );
}
