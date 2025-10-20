import React from "react";
import { Button } from "@/shadcn-components/ui/button";
import { ExternalLink, Github, Play, ArrowRight } from "lucide-react";
import Badge from "@/features/skills/components/badge";
import ProjectCard from "./ProjectCard";

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
