import React from "react";
import {
  Star,
  Shield,
  Users,
  BookOpen,
  Bell,
  BarChart3,
  MessageCircle,
} from "lucide-react";

const ICON_MAP = {
  Star,
  Shield,
  Users,
  BookOpen,
  Bell,
  BarChart3,
  MessageCircle,
};

const FeaturesSection = ({ project }) => {
  const features = project.features;

  return (
    <section className="w-full bg-background dark:bg-background-dark py-16 md:py-24">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text1-light dark:text-text1-dark mb-4">
              Key Features
            </h2>
            <div className="w-16 h-0.5 bg-primary-light dark:bg-primary-dark rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = ICON_MAP[feature.icon] || Star;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-tr from-primary-light/40 to-transparent dark:from-primary-dark/40 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="rounded-2xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 backdrop-blur-sm p-6 shadow-sm h-full">
                    {/* Icon */}
                    <div className="h-12 w-12 rounded-xl grid place-items-center bg-primary-light/15 dark:bg-primary-dark/15 text-primary-light dark:text-primary-dark ring-1 ring-primary-light/25 dark:ring-primary-dark/25 transition-colors duration-200 group-hover:bg-primary-light/20 group-hover:dark:bg-primary-dark/20 mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-text1-light dark:text-text1-dark mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-text2-light dark:text-text1-dark/80 leading-relaxed">
                        {feature.description}
                      </p>
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

export default FeaturesSection;
