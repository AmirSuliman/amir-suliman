"use client";
import { useState } from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import HomePageHero from "./components/home/HomePageHero";
import ProjectsSection from "./components/home/ProjectsSection";
import SkillsSection from "./components/home/SkillsSection";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <Header
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HomePageHero scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
