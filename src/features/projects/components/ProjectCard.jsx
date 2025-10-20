import { Button } from "@/shadcn-components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Badge from "@/features/skills/components/Badge";

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
              <ExternalLink className="h-4 w-4" /> Demo
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

export default ProjectCard;
