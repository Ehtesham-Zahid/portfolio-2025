import React from "react";
import { Button } from "@/shadcn-components/ui/button";
import { ExternalLink, Github, Play, ArrowRight } from "lucide-react";
import Badge from "@/features/skills/components/badge";

const projects = [
  {
    title: "HealthSIA",
    description:
      "Role-based dashboards and real-time chat for a patient–therapist–surgeon communication platform.",
    image: "", // optional image path; leave empty for gradient placeholder
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.io",
      "Docker",
    ],
    demoUrl: "#",
    codeUrl: "#",
    detailsUrl: "#",
  },
  {
    title: "Peepskill",
    description:
      "Social platform featuring profiles, feeds, connections, and moderation, serving 2,000+ users.",
    image: "",
    tech: [
      "React",
      "Next.js",
      "Sequelize",
      "Node.js",
      "MySQL",
      "Docker",
      "GCP",
    ],
    demoUrl: "#",
    codeUrl: "#",
    detailsUrl: "#",
  },
  {
    title: "Royal Vision Tourism",
    description:
      "Travel booking and commerce platform with multi-currency pricing and admin dashboards.",
    image: "",
    tech: ["React", "Next.js", "Node.js", "MySQL", "TypeScript", "Docker"],
    demoUrl: "#",
    codeUrl: "#",
    detailsUrl: "#",
  },
];

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demoUrl,
  codeUrl,
  detailsUrl,
}) => {
  return (
    <div className="group rounded-2xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden hover:-translate-y-0.5">
      {/* Cover */}
      <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-secondary-light/70 to-transparent dark:from-secondary-dark/40">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-text2 dark:text-text1-dark/60 text-sm">
            Cover coming soon
          </div>
        )}
        {/* Subtle overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/90 dark:from-background-dark/90 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-text1-light dark:text-text1-dark">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text2 dark:text-text1-dark/80">
          {description}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          <Button
            asChild
            className="bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 h-9 px-4"
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Play className="h-4 w-4" /> Demo
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-9 px-4 border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
          >
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="h-9 px-4 bg-secondary-light dark:bg-secondary-dark text-text1-light dark:text-text1-dark"
          >
            <a href={detailsUrl} className="inline-flex items-center gap-2">
              Details <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full bg-background dark:bg-background-dark"
    >
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text1-light dark:text-text1-dark">
            Featured Projects
          </h2>
          <p className="mt-3 text-text2 dark:text-text1-dark/80">
            A curated selection of systems and apps with emphasis on performance
            and UX.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="h-10 px-5 border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
          >
            <span className="inline-flex items-center gap-2">
              View All Projects <ExternalLink className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
