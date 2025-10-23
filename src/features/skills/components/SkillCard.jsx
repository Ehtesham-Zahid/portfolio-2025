import Badge from "@/components/Badge";
import SkillIcon from "./SkillIcon";

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
            <SkillIcon name={name} />
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

export default SkillCard;
