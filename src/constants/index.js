// Project data structure
import skillstackImage from "@/assets/images/projects/skillstack.png";
import swiftcartImage from "@/assets/images/projects/swiftcart.png";
export const projects = [
  {
    id: "skillstack-lms",
    title: "SkillStack",
    category: "Education",
    year: "2025",
    status: "Production",
    description:
      "A Learning Management System with VidoCipher secure video protection, Stripe payments, and enrollment analytics for instructors to sell courses without piracy concerns.",
    about:
      "SkillStack represents a comprehensive Learning Management System designed to revolutionize online education. Built with modern web technologies, this platform addresses the critical challenges faced by instructors in the digital learning space, particularly around content protection and monetization. The system integrates advanced video security through VidoCipher, ensuring that educational content remains protected from piracy while maintaining an excellent user experience for legitimate learners. With seamless Stripe payment integration and detailed enrollment analytics, instructors can focus on creating quality content while the platform handles the technical complexities of course delivery and student management.",
    image: skillstackImage, // Project screenshot
    liveUrl: "https://skillstack-frontend-4.onrender.com/",
    codeUrl: "https://github.com/Ehtesham-Zahid/SkillStack",
    detailsUrl: "/projects/skillstack-lms",
    stats: "10+ Instructors",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "Redux Toolkit",
      "React Hot Toast",
      "React Hook Form",
      "Zod",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
      "Bcrypt",
      "NextAuth.js",
      "VidoCipher",
      "Stripe",
      "Cloudinary",
      "Socket.io",
      "NodeMailer",
      "Recharts",
      "Vercel",
    ],
    features: [
      {
        icon: "Shield",
        title: "DRM-protected video streaming",
        description:
          "Uses the VidoCipher API to prevent content piracy and unauthorized downloads, ensuring instructors' intellectual property is fully protected.",
      },
      {
        icon: "Users",
        title: "Multi-role authentication",
        description:
          "Supports both students and instructors with JWT authentication and social login integration for seamless user experience.",
      },
      {
        icon: "BookOpen",
        title: "Course creation platform",
        description:
          "Features a drag-and-drop curriculum builder with instant Stripe payment-to-enrollment integration for streamlined course management.",
      },
      {
        icon: "Bell",
        title: "Real-time notifications",
        description:
          "Delivered via Socket.io with advanced course filtering, search capabilities, and responsive dark/light mode design.",
      },
      {
        icon: "BarChart3",
        title: "Analytics dashboard",
        description:
          "Utilizes Recharts to provide comprehensive insights into enrollment metrics, revenue tracking, and user management.",
      },
      {
        icon: "MessageCircle",
        title: "Interactive learning tools",
        description:
          "Encompasses a Q&A system, reviews, and course completion tracking with milestones for enhanced student engagement.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Preventing video piracy while maintaining streaming performance across all devices and browsers",
        solution:
          "Integrated VidoCipher DRM with OTP-based validation for secure, piracy-resistant video streaming",
      },
      {
        challenge:
          "Building secure payment workflows with automated enrollment and role-based access control",
        solution:
          "Built Stripe webhook integration with JWT authentication middleware for secure automated course enrollment",
      },
      {
        challenge:
          "Creating scalable analytics that handle real-time data synchronization between client and server",
        solution:
          "Implemented Redis caching with optimized database queries for real-time analytics performance",
      },
    ],
    videoData: {
      thumbnail: skillstackImage,
      youtubeUrl: "https://youtu.be/PC2D0_RNu4k",
    },
  },
  {
    id: "swiftcart-ecommerce",
    title: "SwiftCart",
    category: "E-commerce",
    year: "2025",
    status: "Production",
    description:
      "A full-stack multi-vendor e-commerce marketplace with real-time chat, secure payments, and event-based flash sales for an engaging shopping experience.",
    about:
      "SwiftCart is a scalable multi-vendor e-commerce platform designed to empower sellers and enhance the shopping experience for buyers. Built with the MERN stack, the application supports secure authentication, Stripe-powered payments, and real-time customer-seller communication through Socket.io. Sellers can manage stores, track orders, and analyze performance while customers enjoy product filtering, wishlist/cl cart functionality, event-based sale timers, and streamlined checkout. The platform includes a powerful admin console for catalog moderation, vendor management, and system-wide analytics.",
    image: swiftcartImage,
    liveUrl: "https://swift-cartt.vercel.app/",
    codeUrl: "https://github.com/Ehtesham-Zahid/multivendor-project",
    detailsUrl: "/projects/swiftcart-ecommerce",
    stats: "30+ Active Vendors",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
      "ShadCN UI",
      "Stripe",
      "Cloudinary",
      "JWT",
      "Bcrypt",
    ],
    features: [
      {
        icon: "Lock",
        title: "Secure role-based access",
        description:
          "Authentication system with JWT, ensuring buyers, sellers, and admins have isolated permissions.",
      },
      {
        icon: "ShoppingCart",
        title: "Seamless shopping experience",
        description:
          "Product filtering, pagination, wishlist, and fast checkout flow for user convenience.",
      },
      {
        icon: "MessageCircle",
        title: "Real-time messaging",
        description:
          "Instant communication between buyers and vendors powered by Socket.io.",
      },
      {
        icon: "Timer",
        title: "Event-based flash sales",
        description:
          "Countdown timer system enabling time-restricted deals to boost conversions.",
      },
      {
        icon: "Package",
        title: "Order & inventory management",
        description:
          "Efficient tools for sellers to process orders, update inventory, and manage sales.",
      },
      {
        icon: "BarChart3",
        title: "Analytics dashboards",
        description:
          "Performance insights for both sellers and admins with revenue and engagement metrics.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Maintaining real-time interactions without affecting platform performance",
        solution:
          "Integrated Socket.io with optimized event handling and Redis-backed messaging architecture (optional future scale).",
      },
      {
        challenge:
          "Handling secure online payments and vendor-specific revenue split",
        solution:
          "Stripe checkout with webhook automation and separate vendor payout logic.",
      },
      {
        challenge:
          "Ensuring a scalable structure for multiple vendors and large product catalogs",
        solution:
          "Modular database schema with efficient indexing and paginated product queries.",
      },
    ],
    videoData: {
      thumbnail: swiftcartImage,
      youtubeUrl: "https://youtu.be/PC2D0_RNu4k",
    },
  },
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projects;
};
