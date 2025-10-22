import React, { useState } from "react";

// Simple Icons CDN slugs per technology
const slugMap = {
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  "Material-UI": "mui",
  "Redux Toolkit": "redux",
  "React Hot Toast": "react",
  Formik: "formik",
  Yup: "yup",
  "Express.js": "express",
  MongoDB: "mongodb",
  Redis: "redis",
  JWT: "jsonwebtoken",
  Bcrypt: "bcrypt",
  "NextAuth.js": "nextdotjs",
  VidoCipher: "vimeo",
  Stripe: "stripe",
  Cloudinary: "cloudinary",
  "Socket.io": "socketdotio",
  NodeMailer: "nodemailer",
  Recharts: "recharts",
  Vercel: "vercel",
};

const TechIcon = ({ slug, label }) => {
  const [fallbackTried, setFallbackTried] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!slug || failed) {
    return (
      <span className="text-xs font-semibold text-background-light dark:text-background-dark">
        {label[0]}
      </span>
    );
  }

  const src = !fallbackTried
    ? `https://cdn.simpleicons.org/${slug}`
    : `https://cdn.jsdelivr.net/npm/simple-icons/icons/${slug}.svg`;

  return (
    <img
      src={src}
      alt={label}
      className="h-4 w-4"
      loading="lazy"
      onError={() => {
        if (!fallbackTried) {
          setFallbackTried(true);
        } else {
          setFailed(true);
        }
      }}
    />
  );
};

const TechnologiesSection = ({ project }) => {
  const technologies = project.technologies;

  return (
    <section className="w-full bg-background dark:bg-background-dark py-16 md:py-24">
      <div className="w-11/12 2xl:w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text1-light dark:text-text1-dark mb-4">
              Technologies Used
            </h2>
            <div className="w-16 h-0.5 bg-primary-light dark:bg-primary-dark rounded-full"></div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => {
              const slug = slugMap[tech];
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary-light/60 dark:bg-secondary-dark/40 border border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors duration-200"
                >
                  <div className="h-6 w-6 rounded-full bg-text1-light dark:bg-text1-dark flex items-center justify-center">
                    <TechIcon slug={slug} label={tech} />
                  </div>
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
