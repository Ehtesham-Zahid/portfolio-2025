import IntroSection from "@/features/singleProject/components/IntroSection";
import AboutSection from "@/features/singleProject/components/AboutSection";
import TechnologiesSection from "@/features/singleProject/components/TechnologiesSection";
import FeaturesSection from "@/features/singleProject/components/FeaturesSection";
import ChallengesSolutionsSection from "../../features/singleProject/components/ChallengesSolutionsSection";

const ProjectPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark">
      <IntroSection />
      <AboutSection />
      <TechnologiesSection />
      <FeaturesSection />
      <ChallengesSolutionsSection />
    </div>
  );
};

export default ProjectPage;
