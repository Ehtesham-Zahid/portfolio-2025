const Badge = ({ children, tone = "neutral", className = "" }) => {
  const classes =
    tone === "accent"
      ? "text-primary-light dark:text-primary-dark border-primary-light/40 dark:border-primary-dark/40"
      : tone === "custom"
      ? ""
      : "text-text1-light dark:text-text1-dark border-secondary-light dark:border-secondary-dark";
  return (
    <span
      className={`text-[11px] px-2 py-0.5 rounded-full border transition-colors ${classes} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
