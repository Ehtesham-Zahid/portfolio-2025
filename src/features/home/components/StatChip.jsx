import React from "react";

const StatChip = ({ icon: Icon, value, label }) => {
  return (
    <div className="group relative rounded-xl p-[1px] bg-gradient-to-tr from-primary/40 to-transparent dark:from-primary-dark/40 transition-transform duration-200 hover:-translate-y-0.5">
      <div className="rounded-xl border border-secondary dark:border-secondary-dark bg-background/70 dark:bg-background-dark/60 backdrop-blur-sm px-3.5 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg grid place-items-center bg-primary/12 dark:bg-primary-dark/12 text-primary dark:text-primary-dark ring-1 ring-primary/25 dark:ring-primary-dark/25 transition-colors duration-200 group-hover:bg-primary/18 group-hover:dark:bg-primary-dark/18">
            {Icon ? <Icon className="h-4 w-4" /> : null}
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold text-text1 dark:text-text1-dark">
              {value}
            </div>
            <div className="text-[10px] text-text2 dark:text-text1-dark/70">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatChip;
