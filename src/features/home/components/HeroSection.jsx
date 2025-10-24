import React from "react";
import { Button } from "@/shadcn-components/ui/button";
import { Briefcase, FolderGit2, Users } from "lucide-react";
import profilePic from "@/assets/images/profile-pic-3.png";
import StatChip from "./StatChip";

const HeroSection = () => {
  return (
    <section className="w-full bg-background dark:bg-background-dark">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <p className="text-base sm:text-lg tracking-wide text-primary dark:text-primary-dark mb-4">
              Hello, I’m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-text1 dark:text-text1-dark">
              Ehtesham
              <span className="text-primary dark:text-primary-dark">
                {" "}
                Zahid
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-text2 dark:text-text1-dark/80 max-w-2xl">
              A Full Stack Developer specializing in MERN stack and Next.js,
              crafting end-to-end solutions from database design to user
              interfaces.
            </p>

            {/* Tech chips */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
              {[
                "MongoDB",
                "Express.js",
                "React",
                "Node.js",
                "Next.js",
                "TypeScript",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border border-secondary dark:border-secondary-dark text-text1 dark:text-text1-dark bg-background/40 dark:bg-background-dark/40 hover:bg-secondary/50 dark:hover:bg-secondary-dark/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <Button className="bg-primary dark:bg-primary-dark text-white hover:opacity-90 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-secondary dark:border-secondary-dark text-text1 dark:text-text1-dark hover:bg-secondary/70 dark:hover:bg-secondary-dark/70 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Me
              </Button>
              <Button
                variant="ghost"
                className="text-text1 dark:text-text1-dark hover:text-primary dark:hover:text-primary-dark px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
              >
                Download CV
              </Button>
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-10 flex items-center gap-3 sm:gap-4">
              <div className="h-2 w-2 rounded-full bg-primary dark:bg-primary-dark flex-shrink-0" />
              <p className="text-xs sm:text-sm text-text2 dark:text-text1-dark/70">
                Available for freelance projects and collaborations
              </p>
            </div>
          </div>

          {/* Right: Simple Visual */}
          <div className="relative animate-fade-in-up [animation-delay:120ms] order-first lg:order-last">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-xs">
              {/* Simple profile image */}
              <div className="relative mb-6 sm:mb-8">
                <img
                  src={profilePic}
                  alt="Ehtesham Zahid profile"
                  className="w-full h-auto rounded-full border-2 border-primary/20 dark:border-primary-dark/20 shadow-lg"
                  loading="eager"
                  width="300"
                  height="300"
                />
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-primary/10 dark:bg-primary-dark/10 border border-primary/20 dark:border-primary-dark/20 shadow-md">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-lg bg-primary/15 dark:bg-primary-dark/15 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-primary dark:text-primary-dark" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-text1 dark:text-text1-dark">
                    3+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-text1 dark:text-text1-dark">
                    Years
                  </div>
                </div>

                <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-secondary/10 dark:bg-secondary-dark/10 border border-secondary/20 dark:border-secondary-dark/20 shadow-md">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-lg bg-secondary/15 dark:bg-secondary-dark/15 flex items-center justify-center">
                    <FolderGit2 className="h-4 w-4 sm:h-5 sm:w-5 text-secondary dark:text-secondary-dark" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-text1 dark:text-text1-dark">
                    25+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-text1 dark:text-text1-dark">
                    Projects
                  </div>
                </div>

                <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-accent/10 dark:bg-accent-dark/10 border border-accent/20 dark:border-accent-dark/20 shadow-md">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-lg bg-accent/15 dark:bg-accent-dark/15 flex items-center justify-center">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent dark:text-accent-dark" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-text1 dark:text-text1-dark">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-text1 dark:text-text1-dark">
                    Mentees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
