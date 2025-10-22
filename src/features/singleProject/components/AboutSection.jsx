import React from "react";

const AboutSection = ({ project }) => {
  return (
    <section className="w-full bg-background dark:bg-background-dark py-16 md:py-24">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text1-light dark:text-text1-dark mb-4">
              About This Project
            </h2>
            <div className="w-16 h-0.5 bg-primary-light dark:bg-primary-dark rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-text2 dark:text-text1-dark/80">
              {project.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
