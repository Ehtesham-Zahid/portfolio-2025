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

export default Badge;
