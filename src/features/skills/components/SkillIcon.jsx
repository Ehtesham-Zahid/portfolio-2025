import React from "react";

// Simple Icons CDN slugs per skill
const slugMap = {
  HTML: "html5",
  CSS: "css",
  "Tailwind CSS": "tailwindcss",
  ShadCN: "shadcnui",
  React: "react",
  "Next.js": "nextdotjs",
  Redux: "redux",
  "RTK Query": "redux",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "REST APIs": "openapiinitiative",
  "Socket.io": "socketdotio",
  TypeScript: "typescript",
  JavaScript: "javascript",
  MongoDB: "mongodb",
  Redis: "redis",
  Postman: "postman",
  Git: "git",
  "CI/CD": "githubactions",
};

const SkillIcon = ({ name }) => {
  const slug = slugMap[name];
  if (!slug) {
    return (
      <span className="text-xs font-semibold text-text1-light dark:text-text1-dark">
        {name?.[0] || "?"}
      </span>
    );
  }
  const src = `https://cdn.simpleicons.org/${slug}`;
  return <img src={src} alt={name} className="h-5 w-5" loading="lazy" />;
};

export default SkillIcon;
