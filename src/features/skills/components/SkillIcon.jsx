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
};

const SkillIcon = ({ name }) => {
  const iconSrc = iconMap[name];

  if (!iconSrc) {
    return (
      <span className="text-xs font-semibold text-text1-light dark:text-text1-dark">
        {name?.[0] || "?"}
      </span>
    );
  }

  return <img src={iconSrc} alt={name} className="h-5 w-5" loading="lazy" />;
};

export default SkillIcon;
