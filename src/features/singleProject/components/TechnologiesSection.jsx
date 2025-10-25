import React from "react";

// Local SVG imports
import html5Icon from "@/assets/icons/skills/html5.svg";
import css3Icon from "@/assets/icons/skills/css3.svg";
import tailwindIcon from "@/assets/icons/skills/tailwindcss.svg";
import reactIcon from "@/assets/icons/skills/react.svg";
import nextjsIcon from "@/assets/icons/skills/nextdotjs.png";
import javascriptIcon from "@/assets/icons/skills/javascript.svg";
import typescriptIcon from "@/assets/icons/skills/typescript.svg";
import nodejsIcon from "@/assets/icons/skills/nodedotjs.svg";
import expressIcon from "@/assets/icons/skills/express.svg";
import mongodbIcon from "@/assets/icons/skills/mongodb.svg";
import gitIcon from "@/assets/icons/skills/git.svg";
import vercelIcon from "@/assets/icons/skills/vercel.svg";
import reduxIcon from "@/assets/icons/skills/redux.svg";
import muiIcon from "@/assets/icons/skills/mui.svg";
import socketioIcon from "@/assets/icons/skills/socketdotio.svg";
import redisIcon from "@/assets/icons/skills/redis.svg";
import postmanIcon from "@/assets/icons/skills/postman.svg";
import rtkQueryIcon from "@/assets/icons/skills/rtk-query.svg";
import restApiIcon from "@/assets/icons/skills/rest-apis.svg";
import mongooseIcon from "@/assets/icons/skills/mongoose.svg";
import shadcnIcon from "@/assets/icons/skills/shadcn.png";
import jwtIcon from "@/assets/icons/skills/jwt.png";
import multerIcon from "@/assets/icons/skills/multer.svg";
import bcryptIcon from "@/assets/icons/skills/bcrypt.svg";

// Map skill names to local SVG imports
const iconMap = {
  HTML: html5Icon,
  CSS: css3Icon,
  "Tailwind CSS": tailwindIcon,
  React: reactIcon,
  "Next.js": nextjsIcon,
  JavaScript: javascriptIcon,
  TypeScript: typescriptIcon,
  "Node.js": nodejsIcon,
  "Express.js": expressIcon,
  MongoDB: mongodbIcon,
  Git: gitIcon,
  Vercel: vercelIcon,
  Redux: reduxIcon,
  "Material-UI": muiIcon,
  "Socket.io": socketioIcon,
  Redis: redisIcon,
  Postman: postmanIcon,
  "RTK Query": rtkQueryIcon,
  "REST APIs": restApiIcon,
  Mongoose: mongooseIcon,
  ShadCN: shadcnIcon,
  JWT: jwtIcon,
  Multer: multerIcon,
  Bcrypt: bcryptIcon,
  "Redux Toolkit": reduxIcon,
  "React Hot Toast": reactIcon,
  "React Hook Form": reactIcon,
  "NextAuth.js": nextjsIcon,
  NodeMailer: postmanIcon, // Using Postman icon as fallback
  Recharts: reactIcon, // Using React icon as fallback
  VidoCipher: reactIcon, // Using React icon as fallback
  Stripe: reactIcon, // Using React icon as fallback
  Cloudinary: reactIcon, // Using React icon as fallback
  Zod: typescriptIcon, // Using TypeScript icon as fallback
};

const TechIcon = ({ name }) => {
  const iconSrc = iconMap[name];

  if (!iconSrc) {
    return (
      <span className="text-xs font-semibold text-text1-light dark:text-text1-dark">
        {name?.[0] || "?"}
      </span>
    );
  }

  return <img src={iconSrc} alt={name} className="h-4 w-4" loading="lazy" />;
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
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary-light/60 dark:bg-secondary-dark/40 border border-secondary-light dark:border-secondary-dark text-text1-light dark:text-text1-dark hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors duration-200"
                >
                  <div className="h-6 w-6 rounded-full bg-text1-light dark:bg-text1-dark flex items-center justify-center">
                    <TechIcon name={tech} />
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
