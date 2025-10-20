import React from "react";
import Header from "../components/Header";
import HeroSection from "@/features/home/components/HeroSection";
import AboutSection from "@/features/about/components/AboutSection";
import SkillsSection from "@/features/skills/components/SkillsSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
};

export default App;
