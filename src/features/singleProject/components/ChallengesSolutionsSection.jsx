import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

const ChallengesSolutionsSection = ({ project }) => {
  const challengesAndSolutions = project.challengesAndSolutions;

  return (
    <section className="w-full bg-background dark:bg-background-dark py-16 md:py-24">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text1-light dark:text-text1-dark mb-4">
              Challenges & Solutions
            </h2>
            <div className="w-16 h-0.5 bg-primary-light dark:bg-primary-dark rounded-full"></div>
          </div>

          {/* Challenges & Solutions Grid */}
          <div className="space-y-8">
            {challengesAndSolutions.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-primary/40 to-transparent dark:from-primary-dark/40 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="rounded-2xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 backdrop-blur-sm p-8 shadow-sm">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Challenge */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-xl grid place-items-center bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 ring-1 ring-red-200 dark:ring-red-800">
                            <AlertCircle className="h-5 w-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-text1-light dark:text-text1-dark">
                            Challenge
                          </h3>
                        </div>
                        <p className="text-text2 dark:text-text1-dark/80 leading-relaxed pl-13">
                          {item.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-xl grid place-items-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 ring-1 ring-green-200 dark:ring-green-800">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-text1-light dark:text-text1-dark">
                            Solution
                          </h3>
                        </div>
                        <p className="text-text2 dark:text-text1-dark/80 leading-relaxed pl-13">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutionsSection;
