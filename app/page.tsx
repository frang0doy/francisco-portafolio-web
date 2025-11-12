"use client"

import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import ServicesSection from "@/components/services-section";
import FeaturedProjects from "@/components/featured-projects";
import WhatIOffer from "@/components/what-i-offer";
import ToolsSection from "@/components/tools-section";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      <TransitionPage />
      
      {/* Hero Section */}
      <section id="home">
        <Introduction />
      </section>
      
      {/* Sección de Servicios */}
      <section id="services">
        <SectionDivider />
        <ServicesSection />
      </section>
      
      {/* Proyectos Destacados */}
      <section id="portfolio">
        <SectionDivider />
        <FeaturedProjects />
      </section>
      
      {/* Lo que ofrezco como desarrollador */}
      <section id="offer">
        <SectionDivider />
        <WhatIOffer />
      </section>
      
      {/* Herramientas */}
      <section id="tools">
        <SectionDivider />
        <ToolsSection />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Botón scroll to top */}
      <ScrollToTop />
    </main>
  );
}
