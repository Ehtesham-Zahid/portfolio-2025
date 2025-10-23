import React, { useState, useMemo } from "react";
import { Button } from "@/shadcn-components/ui/button";
import {
  Search,
  Calendar,
  Users,
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
  ArrowLeft,
} from "lucide-react";
import Badge from "@/features/skills/components/badge";
import { getAllProjects } from "@/constants";

const projects = getAllProjects();

const categories = [
  "All",
  "Education",
  "Healthcare",
  "E-commerce",
  "Social",
  "Travel",
];

const ProjectCard = ({ project, view = "grid" }) => {
  const visibleTech = project.technologies.slice(0, 3);
  const remainingTech = project.technologies.length - 3;

  return (
    <div
      className={`group h-full rounded-2xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden hover:-translate-y-0.5 ${
        view === "list" ? "flex" : "flex flex-col"
      }`}
    >
      {/* Cover Image */}
      <div
        className={`relative aspect-[16/9] w-full bg-gradient-to-br from-secondary-light/70 to-transparent dark:from-secondary-dark/40 ${
          view === "list" ? "w-80 flex-shrink-0" : ""
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-text2 dark:text-text1-dark/60 text-sm">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-primary-light/20 dark:bg-primary-dark/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                  {project.title[0]}
                </span>
              </div>
              <p>Cover coming soon</p>
            </div>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge tone="accent">{project.category}</Badge>
        </div>
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium bg-primary-light dark:bg-primary-dark text-white rounded-full">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={`p-6 flex flex-col ${view === "list" ? "flex-1" : "flex-1"}`}
      >
        <h3 className="text-xl font-bold text-text1-light dark:text-text1-dark mb-2">
          {project.title}
        </h3>
        <p className="text-text2 dark:text-text1-dark/80 mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {visibleTech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {remainingTech > 0 && (
              <Badge className="bg-secondary-light/60 dark:bg-secondary-dark/60 text-text1-light dark:text-text1-dark">
                +{remainingTech}
              </Badge>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-text2 dark:text-text1-dark/70">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text2 dark:text-text1-dark/70">
            <Users className="h-4 w-4" />
            <span>{project.stats}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="flex-1 bg-primary-light dark:bg-primary-dark text-white hover:opacity-90 h-10"
          >
            <a
              href={project.detailsUrl}
              className="inline-flex items-center gap-2"
            >
              View Details <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-10 w-10 border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
          >
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Code"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-10 w-10 border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectsPageSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      {/* Back Button */}
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Button
          asChild
          variant="outline"
          className="group border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-200 hover:-translate-x-1"
        >
          <a href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </a>
        </Button>
      </div>

      {/* Header */}
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text1-light dark:text-text1-dark mb-6">
            All Projects
          </h1>
          <p className="text-lg text-text2 dark:text-text1-dark/80 max-w-3xl mx-auto">
            Explore my engineering work across full-stack systems, backend
            architectures, and mobile experiences — designed with scalability
            and impact in mind.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text2 dark:text-text1-dark/70" />
            <input
              type="text"
              placeholder="Search projects by title, description, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 text-text1-light dark:text-text1-dark placeholder-text2 dark:placeholder-text1-dark/60 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-text2 dark:text-text1-dark/70" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-primary-light dark:bg-primary-dark text-white"
                      : "border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
                  } rounded-full px-4 py-2 transition-colors`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-text2 dark:text-text1-dark/80">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className={`${
                viewMode === "grid"
                  ? "bg-primary-light dark:bg-primary-dark text-white"
                  : "border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
              } h-9 w-9 rounded-lg`}
            >
              <div className="grid grid-cols-2 gap-1 h-4 w-4">
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
              </div>
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className={`${
                viewMode === "list"
                  ? "bg-primary-light dark:bg-primary-dark text-white"
                  : "border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light/70 dark:hover:bg-secondary-dark/70"
              } h-9 w-9 rounded-lg`}
            >
              <div className="flex flex-col gap-1 h-4 w-4">
                <div className="bg-current rounded-sm h-1" />
                <div className="bg-current rounded-sm h-1" />
                <div className="bg-current rounded-sm h-1" />
              </div>
            </Button>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`mt-8 ${
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-6"
          }`}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} view={viewMode} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary-light/20 dark:bg-secondary-dark/20 flex items-center justify-center">
              <Search className="h-12 w-12 text-text2 dark:text-text1-dark/60" />
            </div>
            <h3 className="text-xl font-semibold text-text1-light dark:text-text1-dark mb-2">
              No projects found
            </h3>
            <p className="text-text2 dark:text-text1-dark/80">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPageSection;
