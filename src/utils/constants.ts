import isaconsultingImg from "../../public/images/isaconsulting/1.png";
import isaWorkbrigeImg from "../../public/images/isaworkbridge/1.png";
import shoferiimImg from "../../public/images/shoferiim/1.png";
import deventiaImg from "../../public/images/deventia/1.png";

export const GITHUB_PROFILE_URL = "https://github.com/AmirSuliman";
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/amirsuliman/";

export const PROJECTS = [
  {
    title: "ISA Consulting",
    description:
      "ISA Consulting is a professional IT consulting and digital-transformation website designed to highlight the company’s end-to-end technology services. This website includes job and blog postings, apply for a job, create an account as an employee seeker or job seeker. I built the site with a clean UI, strong structure, and a corporate look to effectively communicate the brand’s expertise and service value.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "Yup",
    ],
    image: isaconsultingImg,
    github: "#",
    live: "https://isaconsulting.com/",
  },
  {
    title: "ISA WorkBridge",
    description: `WorkBridge is an all-in-one app for HR that offers a comprehensive suite of features including employee management, leave time management, hiring and onboarding, data and reporting, and more.
      This website is a multi-tenant SaaS application - Super Admin, HR Admin, Manager, and Employee portals - each with its own unique features and functionalities tailored to the specific needs of its users.`,
    tech: ["Next.js", "Socket.io", "Redux", "Tailwind CSS", "Zod"],
    image: isaWorkbrigeImg,
    github: "#",
    live: "https://app.isaworkbridge.com/sign-in",
  },
  {
    title: "Shoferilm – Ride Smarter, Travel Easier",
    description:
      "Shoferilm is a modern ride-hailing platform that connects riders with nearby drivers. Book rides instantly, track your trip in real-time, and travel with confidence.",
    tech: [
      "Next.js",
      "Socket.io",
      "Zustand",
      "Shadcn",
      "Tailwind CSS",
      "Zod",
      "Google Maps API",
      "React hook form",
    ],
    image: shoferiimImg,
    github: "#",
    live: "https://dev.admin.shoferiim.com/en/login",
  },
  {
    title: "DeventiaTech Pvt Limited",
    description:
      "DevEntia Tech is an IT solutions company specializing in custom web/mobile applications, cloud engineering, AI/ML development, and UI/UX design. Their website presents key services like full-stack development, machine-learning solutions, cloud consulting, and staff augmentation — all wrapped in a clean, corporate-ready layout. I developed the site to clearly communicate their capabilities and make it easy for clients to explore services and get in touch.",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: deventiaImg,
    github: "#",
    live: "https://www.deventiatech.com/",
  },
];

export const SKILLS = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "HTML/CSS",
  ],
  backend: ["Node.js", "Express", "REST APIs", "GraphQL", "Socket.io", "JWT"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Prisma"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Postman", "Firebase", "Shadcn"],
};
