import React from "react";
import { Sparkles, Code2, Rocket, Globe } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Product-focused",
    desc: "I care about outcomes, usability, and shipping polished experiences.",
  },
  {
    icon: Code2,
    title: "Clean engineering",
    desc: "Readable, accessible, and performant UI built with modern tooling.",
  },
  {
    icon: Rocket,
    title: "Fast iteration",
    desc: "Move quickly with quality – thoughtful DX, tight feedback loops.",
  },
  {
    icon: Globe,
    title: "Open mindset",
    desc: "Mentoring, collaboration, and always learning new patterns.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-background dark:bg-background-dark"
    >
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm tracking-wide text-primary dark:text-primary-dark mb-3">
            About me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text1 dark:text-text1-dark">
            I design and build full-stack applications that feel effortless
          </h2>
          <p className="mt-4 text-text2 dark:text-text1-dark/80">
            I'm a full-stack developer specializing in MERN stack and Next.js,
            focused on crafting complete solutions from database architecture to
            user interfaces. I enjoy bridging backend logic and frontend design
            to ship applications that are scalable, performant, and
            user-friendly.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {/* Highlights */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl p-[1px] bg-gradient-to-tr from-primary/30 to-transparent dark:from-primary-dark/30"
              >
                <div className="rounded-2xl h-full border border-secondary dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 backdrop-blur-sm p-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl grid place-items-center bg-primary/12 dark:bg-primary-dark/12 text-primary dark:text-primary-dark ring-1 ring-primary/20 dark:ring-primary-dark/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text1 dark:text-text1-dark">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-text2 dark:text-text1-dark/70">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini timeline */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-secondary dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 backdrop-blur-sm p-6">
              <h3 className="text-base font-semibold text-text1 dark:text-text1-dark">
                Journey
              </h3>
              <ol className="mt-4 space-y-5">
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary dark:bg-primary-dark" />
                  <p className="text-sm text-text1 dark:text-text1-dark">
                    2023–Now — Full Stack Developer, building MERN & Next.js
                    apps
                  </p>
                  <p className="text-xs text-text2 dark:text-text1-dark/70">
                    Performance, accessibility, and design systems
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary dark:bg-primary-dark" />
                  <p className="text-sm text-text1 dark:text-text1-dark">
                    2021–2023 — Freelance & mentoring
                  </p>
                  <p className="text-xs text-text2 dark:text-text1-dark/70">
                    Shipped full-stack applications and guided learners into
                    modern development
                  </p>
                </li>
                <li className="relative pl-6">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary dark:bg-primary-dark" />
                  <p className="text-sm text-text1 dark:text-text1-dark">
                    Earlier — Foundations in web and UI craft
                  </p>
                  <p className="text-xs text-text2 dark:text-text1-dark/70">
                    HTML/CSS, JS, component patterns, UX basics
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
