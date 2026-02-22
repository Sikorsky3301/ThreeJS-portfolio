import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Development",
    icon: mobile,
  },
  {
    title: "Backend & APIs",
    icon: backend,
  },
  {
    title: "Cloud Computing and Deployment",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "STEAM Trainer",
    company_name: "Aerobay · Noida, India",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2025 - Jan 2026",
    points: [
      "STEAM Trainer at GD Goenka Public School Shahjahanpur, specializing in hands-on STEM education, robotics, aeromodelling, and project-based learning.",
      "Trained and mentored K–12 students in STEM/STEAM using robotics, drones, and aerospace kits; managed full-fledged STEM lab and safe usage of tools.",
      "Designed project-based learning modules in robotics, 3D design, and aeromodelling; integrated Arduino, Raspberry Pi, and CAD (SolidWorks, CATIA).",
      "Contributed to STEM outreach and events; tracked student performance and collaborated with teams to enhance curriculum and adopt new technologies.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "SKOLAR Edtech · Bengaluru (Remote)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "3 months · 2024",
    points: [
      "Collected, cleaned, and analyzed large datasets with Python (Pandas, NumPy); built and evaluated ML models using Scikit-learn and TensorFlow/PyTorch.",
      "Prepared reports and dashboards for decision-making; evaluated accuracy, precision, recall, F1-score and optimized hyperparameters.",
      "Collaborated with cross-functional teams to deploy AI solutions, automating 70% of manual data processes; used Azure for scalable training and deployment.",
      "Learning: Python, TensorFlow, feature engineering, ML techniques, AWS, MLOps, data visualization.",
    ],
  },
  {
    title: "Data Analyst (Job Simulation)",
    company_name: "Tata Group · Forage",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2025",
    points: [
      "Completed AI-powered data analytics and strategy simulation for Tata iQ Financial Services team.",
      "Conducted EDA using GenAI tools to assess data quality, identify risk indicators and structure insights for predictive modelling.",
      "Designed an AI-driven collections strategy with agentic AI and automation, incorporating ethical AI, regulatory compliance and scalable frameworks.",
      "Learning: Python, AI & predictive analytics, data quality, AI strategy, GenAI tools, EDA.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ProcLens.ai",
    description:
      "AI-based real-time system monitoring application with an interactive dashboard using TypeScript and React. Monitor processes via LLM; optimized data streaming reduced dashboard latency by 30%. Stack: TypeScript, React, Vite, Express.js, REST APIs, Ollama, Gemini API.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "LLM", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sikorsky3301",
  },
  {
    name: "HRMS (Human Resource Management System)",
    description:
      "Lightweight, production-ready HRMS to manage employee records and daily attendance with a clean, responsive UI. RESTful APIs with Node.js (Express) and optional FastAPI backend; PostgreSQL (Supabase); attendance tracking and dashboard. Deployed on Render and Vercel.",
    tags: [
      { name: "React 19", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sikorsky3301",
  },
  {
    name: "Cars and Pedestrian Detection System",
    description:
      "Real-time detection system using YOLO, OpenCV, and TensorFlow to identify and track pedestrians and vehicles from live video. Fine-tuned YOLO weights; database module for detection results; optimized for real-time inference on edge devices. Stack: Python, YOLO, OpenCV, TensorFlow, PostgreSQL.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "YOLO", color: "green-text-gradient" },
      { name: "TensorFlow", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Sikorsky3301",
  },
  {
    name: "Silo (AI Website Builder)",
    description:
      "Prompt-driven SaaS that generates production-ready websites/apps from natural-language specs. Converts prompts into data models, API routes, and typed UI; Inngest for background job orchestration; live preview with TanStack Query; tRPC + Zod + SuperJSON; Radix UI, Tailwind v4. Stack: Next.js 15, React 19, TypeScript, Prisma, Docker, AWS.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "tRPC", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sikorsky3301",
  },
];

export { services, technologies, experiences, testimonials, projects };
