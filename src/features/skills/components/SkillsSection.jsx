import React, { useMemo, useState } from "react";
import { Grid, List, Search, Filter } from "lucide-react";

const ALL = "All";
const CATEGORIES = [
  ALL,
  "Frontend",
  "Backend",
  "Database",
  "Language",
  "Tools",
];

const SKILLS = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "ShadCN", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "RTK Query", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Socket.io", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Postman", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "CI/CD", category: "Too" },
];

const Badge = ({ children, tone = "neutral" }) => {
  const classes =
    tone === "accent"
      ? "text-primary-light dark:text-primary-dark border-primary-light/40 dark:border-primary-dark/40"
      : "text-text1-light dark:text-text1-dark border-secondary-light dark:border-secondary-dark";
  return (
    <span className={`text-[11px] px-2 py-0.5 rounded-full border ${classes}`}>
      {children}
    </span>
  );
};

const SkillCard = ({ name, category, view }) => {
  return (
    <div
      className={`rounded-xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${
        view === "grid" ? "p-4" : "p-3"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg grid place-items-center bg-secondary-light/60 dark:bg-secondary-dark/40 text-text1-light dark:text-text1-dark ring-1 ring-secondary-light/70 dark:ring-secondary-dark/60">
            {/* Placeholder for icon (optional) */}
            <span className="text-xs font-semibold">{name[0]}</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-text1-light dark:text-text1-dark">
              {name}
            </div>
            <div className="mt-1">
              <Badge>{category}</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [view, setView] = useState("grid");

  const filtered = useMemo(() => {
    return SKILLS.filter(
      (s) =>
        (category === ALL || s.category === category) &&
        s.name.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [query, category]);

  return (
    <section
      id="skills"
      className="w-full bg-background dark:bg-background-dark"
    >
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text1-light dark:text-text1-dark">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-text2 dark:text-text1-dark/80">
            A comprehensive overview of my technical expertise across the full
            stack
          </p>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          {/* Search */}
          <div className="flex-1 min-w-[260px] max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text2 dark:text-text1-dark/70" />
            <input
              type="text"
              placeholder="Search skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 h-10 rounded-md border border-secondary-light dark:border-secondary-dark bg-background/60 dark:bg-background-dark/60 text-text1-light dark:text-text1-dark placeholder:text-text2 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition"
            />
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`inline-flex items-center gap-1 h-9 px-3 rounded-md border text-sm transition ${
                view === "grid"
                  ? "bg-primary-light text-white border-primary-light dark:bg-primary-dark dark:border-primary-dark"
                  : "border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark"
              }`}
            >
              <Grid className="h-4 w-4" /> Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={`inline-flex items-center gap-1 h-9 px-3 rounded-md border text-sm transition ${
                view === "list"
                  ? "bg-primary-light text-white border-primary-light dark:bg-primary-dark dark:border-primary-dark"
                  : "border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark"
              }`}
            >
              <List className="h-4 w-4" /> List
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 h-9 px-3 rounded-md border border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark text-sm">
            <Filter className="h-4 w-4" /> Filter
          </span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`h-9 px-3 rounded-md border text-sm transition ${
                category === c
                  ? "bg-primary-light text-white border-primary-light dark:bg-primary-dark dark:border-primary-dark"
                  : "border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Skills grid/list */}
        <div
          className={`mt-8 ${
            view === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              : "space-y-3"
          }`}
        >
          {filtered.map((s) => (
            <SkillCard
              key={`${s.name}-${s.category}`}
              name={s.name}
              category={s.category}
              view={view}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
