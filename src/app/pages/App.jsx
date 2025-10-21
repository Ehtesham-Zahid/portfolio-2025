import React from "react";
import Header from "../../components/Header";
import HeroSection from "@/features/home/components/HeroSection";
import AboutSection from "@/features/about/components/AboutSection";
import SkillsSection from "@/features/skills/components/SkillsSection";
import ProjectsSection from "@/features/projects/components/ProjectsSection";
import ContactSection from "@/features/contact/components/ContactSection";
import Footer from "../../components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
