import Badge from "@/components/Badge";
import SkillIcon from "./SkillIcon";

const categoryStyles = {
  Frontend: "text-cyan-600 border-cyan-200/60 bg-cyan-50/30 dark:text-cyan-400 dark:border-cyan-900/30 dark:bg-cyan-950/20",
  Backend: "text-indigo-600 border-indigo-200/60 bg-indigo-50/30 dark:text-indigo-400 dark:border-indigo-900/30 dark:bg-indigo-950/20",
  Database: "text-emerald-600 border-emerald-200/60 bg-emerald-50/30 dark:text-emerald-400 dark:border-emerald-900/30 dark:bg-emerald-950/20",
  Language: "text-amber-600 border-amber-200/60 bg-amber-50/30 dark:text-amber-400 dark:border-amber-900/30 dark:bg-amber-950/20",
  Tools: "text-rose-600 border-rose-200/60 bg-rose-50/30 dark:text-rose-400 dark:border-rose-900/30 dark:bg-rose-950/20",
};

const SkillCard = ({ name, category, view }) => {
  const badgeClass =
    categoryStyles[category] ||
    "text-text2-light border-secondary-light bg-secondary-light/20 dark:text-text1-dark/80 dark:border-secondary-dark dark:bg-secondary-dark/25";

  return (
    <div
      className={`rounded-xl border border-secondary-light dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${
        view === "grid" ? "p-4" : "p-3"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-9 w-9 rounded-lg grid place-items-center bg-secondary-light/60 dark:bg-secondary-dark/40 text-text1-light dark:text-text1-dark ring-1 ring-secondary-light/70 dark:ring-secondary-dark/60 shrink-0">
            <SkillIcon name={name} />
          </div>
          <span className="text-sm font-semibold text-text1-light dark:text-text1-dark truncate">
            {name}
          </span>
        </div>
        <Badge tone="custom" className={badgeClass}>
          {category}
        </Badge>
      </div>
    </div>
  );
};

export default SkillCard;
