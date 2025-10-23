import React from "react";
import { Button } from "@/shadcn-components/ui/button";
import { Briefcase, FolderGit2, Users } from "lucide-react";
import profilePic from "@/assets/images/profile-pic.png";
import StatChip from "./StatChip";

const HeroSection = () => {
  return (
    <section className="w-full bg-background dark:bg-background-dark">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <p className="text-base sm:text-lg tracking-wide text-primary dark:text-primary-dark mb-4">
              Hello, I’m
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-text1 dark:text-text1-dark">
              Ehtesham{" "}
              <span className="text-primary dark:text-primary-dark">Zahid</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text2 dark:text-text1-dark/80 max-w-2xl">
              A Full Stack Developer specializing in MERN stack and Next.js,
              crafting end-to-end solutions from database design to user
              interfaces.
            </p>

            {/* Tech chips */}
            <div className="mt-8 flex flex-wrap gap-3">
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
                  className="px-4 py-2 rounded-full text-sm border border-secondary dark:border-secondary-dark text-text1 dark:text-text1-dark bg-background/40 dark:bg-background-dark/40 hover:bg-secondary/50 dark:hover:bg-secondary-dark/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button className="bg-primary dark:bg-primary-dark text-white hover:opacity-90 px-6 py-3 text-base">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-secondary dark:border-secondary-dark text-text1 dark:text-text1-dark hover:bg-secondary/70 dark:hover:bg-secondary-dark/70 px-6 py-3 text-base"
              >
                Contact Me
              </Button>
              <Button
                variant="ghost"
                className="text-text1 dark:text-text1-dark hover:text-primary dark:hover:text-primary-dark px-4 py-3 text-base"
              >
                Download CV
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-primary dark:bg-primary-dark" />
              <p className="text-sm text-text2 dark:text-text1-dark/70">
                Available for freelance projects and collaborations
              </p>
            </div>
          </div>

          {/* Right: Visuals */}
          <div className="relative animate-fade-in-up [animation-delay:120ms]">
            {/* Portrait card */}
            <div className="relative mx-auto w-64 sm:w-80 lg:w-[22rem]">
              <div className="rounded-2xl overflow-hidden border border-secondary dark:border-secondary-dark bg-secondary/20 dark:bg-secondary-dark/20 shadow-xl animate-float-slow">
                <img
                  src={profilePic}
                  alt="Ehtesham Zahid profile"
                  className="h-auto w-full aspect-square object-cover"
                  loading="eager"
                />
              </div>
              {/* Glow */}
              <div className="pointer-events-none absolute -bottom-6 -right-8 h-28 w-28 rounded-full bg-primary/15 dark:bg-primary-dark/15 blur-2xl" />
            </div>

            {/* Stats chips */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <StatChip icon={Briefcase} value="3+ yrs" label="Experience" />
              <StatChip icon={FolderGit2} value="25+" label="Projects" />
              <StatChip icon={Users} value="10+" label="Mentees" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
