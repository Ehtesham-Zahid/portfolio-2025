import React from "react";
import { Button } from "@/shadcn-components/ui/button";
import {
  ExternalLink,
  Github,
  Calendar,
  Folder,
  Circle,
  ArrowLeft,
} from "lucide-react";

const IntroSection = ({ project }) => {
  return (
    <section className="w-full bg-background dark:bg-background-dark py-16 md:py-24">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            asChild
            variant="outline"
            className="group border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-200 hover:-translate-x-1"
          >
            <a href="/projects" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              Back to Projects
            </a>
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Project Info */}
            <div className="space-y-8">
              {/* Project Title */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text1-light dark:text-text1-dark leading-tight">
                  {project.title}
                </h1>
              </div>

              {/* Metadata Tags */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200">
                  <Folder className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                  <Circle className="h-3 w-3 fill-current" />
                  <span className="text-sm font-medium">{project.status}</span>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <p className="text-lg text-text2 dark:text-text1-dark/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stats */}
              {/* <div className="flex items-center gap-2 text-text2 dark:text-text1-dark/70">
                <div className="h-2 w-2 rounded-full bg-primary-light dark:bg-primary-dark" />
                <span className="text-sm font-medium">{project.stats}</span>
              </div> */}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 h-12 px-8 text-base font-medium"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70 h-12 px-8 text-base font-medium"
                >
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Project Screenshot */}
            <div className="relative">
              <div className="relative rounded-2xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 shadow-2xl overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary-light/20 to-transparent dark:from-secondary-dark/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-light dark:text-primary-dark">
                          {project.title[0]}
                        </span>
                      </div>
                      <p className="text-text2 dark:text-text1-dark/60 text-sm">
                        Project screenshot coming soon
                      </p>
                    </div>
                  </div>
                )}

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary-light/20 dark:bg-secondary-dark/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
