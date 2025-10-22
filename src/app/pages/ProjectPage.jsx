import React from "react";
import { useParams } from "react-router";
import { getProjectById } from "@/constants";
import IntroSection from "@/features/singleProject/components/IntroSection";
import AboutSection from "@/features/singleProject/components/AboutSection";
import TechnologiesSection from "@/features/singleProject/components/TechnologiesSection";
import FeaturesSection from "@/features/singleProject/components/FeaturesSection";
import ChallengesSolutionsSection from "../../features/singleProject/components/ChallengesSolutionsSection";
import DemoVideoSection from "../../features/singleProject/components/DemoVideoSection";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text1-light dark:text-text1-dark mb-4">
            Project Not Found
          </h1>
          <p className="text-text2 dark:text-text1-dark/80">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-background-dark">
      <IntroSection project={project} />
      <AboutSection project={project} />
      <TechnologiesSection project={project} />
      <FeaturesSection project={project} />
      <ChallengesSolutionsSection project={project} />
      <DemoVideoSection project={project} />
    </div>
  );
};

export default ProjectPage;
