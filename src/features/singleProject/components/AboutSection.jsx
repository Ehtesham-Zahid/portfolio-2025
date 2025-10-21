import React from "react";

const AboutSection = () => {
  // This would typically come from props or a data source
  const aboutData = {
    heading: "About This Project",
    description:
      "Learneazy represents a comprehensive Learning Management System designed to revolutionize online education. Built with modern web technologies, this platform addresses the critical challenges faced by instructors in the digital learning space, particularly around content protection and monetization. The system integrates advanced video security through VidoCipher, ensuring that educational content remains protected from piracy while maintaining an excellent user experience for legitimate learners. With seamless Stripe payment integration and detailed enrollment analytics, instructors can focus on creating quality content while the platform handles the technical complexities of course delivery and student management.",
  };

  return (
    <section className="w-full bg-background dark:bg-background-dark py-16 md:py-24">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text1-light dark:text-text1-dark mb-4">
              {aboutData.heading}
            </h2>
            <div className="w-16 h-0.5 bg-primary-light dark:bg-primary-dark rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-text2 dark:text-text1-dark/80">
              {aboutData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
