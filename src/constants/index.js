// Project data structure
import skillstackImage from "@/assets/images/projects/skillstack.png";
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
      "Material-UI",
      "Redux Toolkit",
      "React Hot Toast",
      "Formik",
      "Yup",
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
      thumbnail: skillstackImage, // optional thumbnail image
      youtubeUrl: "https://youtu.be/PC2D0_RNu4k",
    },
  },
  {
    id: "healthsia-platform",
    title: "HealthSIA",
    category: "Healthcare",
    year: "2024",
    status: "Production",
    description:
      "A patient-therapist-surgeon communication and perioperative care platform with role-based dashboards and real-time chat.",
    about:
      "HealthSIA is a comprehensive healthcare communication platform designed to streamline patient care coordination between therapists, surgeons, and patients. The platform features role-based dashboards, real-time messaging, and comprehensive patient management tools.",
    image: "",
    liveUrl: "#",
    codeUrl: "#",
    detailsUrl: "#",
    stats: "500+ healthcare professionals",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.io",
      "Docker",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
    ],
    features: [
      {
        icon: "Shield",
        title: "HIPAA-compliant messaging",
        description:
          "Secure real-time communication between healthcare professionals with end-to-end encryption.",
      },
      {
        icon: "Users",
        title: "Role-based access control",
        description:
          "Differentiated dashboards and permissions for patients, therapists, and surgeons.",
      },
      {
        icon: "Calendar",
        title: "Appointment scheduling",
        description:
          "Integrated scheduling system with automated reminders and conflict resolution.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Ensuring HIPAA compliance while maintaining real-time communication capabilities",
        solution:
          "Implemented end-to-end encryption with secure key management and audit logging for all communications",
      },
      {
        challenge:
          "Managing complex role-based permissions across different user types",
        solution:
          "Built a flexible permission system with middleware-based access control and dynamic UI rendering",
      },
    ],
    videoData: {
      thumbnail: "",
      youtubeUrl: "https://youtube.com/watch?v=example2",
    },
  },
  // Add more projects here...
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projects;
};

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter((project) => project.category === category);
};
