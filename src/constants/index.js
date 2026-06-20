import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  tensorflow,
  postgresql,
  fastapi,
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
    title: "Computer Vision & AI",
    icon: mobile,
  },
  {
    title: "Generative AI & LLMs",
    icon: creator,
  },
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Cloud & DevOps",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Javascript",
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
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Uniconverge Technologies Pvt. Ltd. · Noida Sector 62",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2025 – Present",
    points: [
      "Developed an AI-powered crack detection system for Indian Railway suspension springs using UV imaging, Python, OpenCV, and Computer Vision, automating inspection of 1000+ spring components.",
      "Built a real-time defect monitoring and alert platform, reducing manual inspection time by up to 70% and improving maintenance efficiency.",
      "Developed an AI-based Railway Inspection System detecting 25+ critical coach and bogie defects using Vision, Thermal, and Edge AI technologies.",
      "Built an automated defect detection pipeline processing trains at speeds up to 100 km/h, reducing manual inspection effort and improving safety monitoring.",
    ],
  },
  {
    title: "Computer Vision / AI Engineer Intern",
    company_name: "Uniconverge Technologies Pvt. Ltd. · Noida Sector 62",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2025 – June 2025",
    points: [
      "Jetsen Orion Nano: Designed a multi-camera object detection application processing 4 simultaneous feeds using NVIDIA TensorRT and YOLO with modular pipeline design and deployment-ready structuring.",
      "MIRA Platform: Developed and integrated full-stack features including REST API endpoints, real-time data processing, and enterprise system integration using FastAPI and SQLAlchemy; applied dependency injection and TDD throughout.",
      "Person ReID System: Built and containerized a cross-camera identity tracking application using Docker; implemented embedding-based similarity search with ResNet and YOLO-Pose; utilized CI/CD workflows for deployment.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "SKOLAR Edtech · Bengaluru (Remote)",
    icon: shopify,
    iconBg: "#383E56",
    date: "3 months · 2024",
    points: [
      "Collected, cleaned, and analyzed large datasets with Python (Pandas, NumPy); built and evaluated ML models using Scikit-learn and TensorFlow/PyTorch.",
      "Prepared reports and dashboards for decision-making; evaluated accuracy, precision, recall, F1-score and optimized hyperparameters.",
      "Collaborated with cross-functional teams to deploy AI solutions, automating 70% of manual data processes; used Azure for scalable training and deployment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rishi built our multi-camera person re-identification pipeline from the ground up. The modular architecture and TensorRT optimizations made it genuinely production-ready.",
    name: "Arjun Mehta",
    designation: "Engineering Lead",
    company: "Uniconverge Technologies",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "The MIRA interview platform Rishi developed shows rare depth — solid FastAPI architecture, real enterprise patterns like dependency injection, and a polished React frontend.",
    name: "Priya Sharma",
    designation: "Senior Product Manager",
    company: "TechVentures IN",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Rishi's Railway Inspection AI reduced our manual inspection overhead by 70%. Impressive work on real-time inference at scale under tight operational constraints.",
    name: "Vikram Singh",
    designation: "Operations Director",
    company: "Rail Analytics Ltd.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
  },
];

const projects = [
  {
    name: "MIRA – AI Mock Interview Platform",
    description:
      "Full-stack enterprise web app with real-time interview orchestration and adaptive question generation. JWT auth, tokenized subscriptions, resume parsing, ATS-style skill extraction, and browser-side proctoring via TensorFlow.js. Scalable data layer with SQLAlchemy + MySQL.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "React 19", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sikorsky3301",
  },
  {
    name: "Silo – AI Full-Stack App Generator",
    description:
      "Prompt-driven SaaS that converts natural language into fully functional Next.js apps, cutting prototyping time by 80%+. Autonomous agent pipeline using GPT-4.1, Inngest, and E2B Sandboxes for live code generation, dependency install, and hot-reload previews.",
    tags: [
      { name: "Next.js 15", color: "blue-text-gradient" },
      { name: "GPT-4.1", color: "green-text-gradient" },
      { name: "tRPC", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sikorsky3301/Silo",
  },
  {
    name: "CrossCamReID – Multi-Camera ReID",
    description:
      "Real-time distributed analytics system for multi-camera people tracking with global identity memory and dwell-time analytics. Session-aware FastAPI + WebSocket backend for low-latency streaming, occupancy monitoring, and threshold-based alerting. GPU edge deployment via Docker.",
    tags: [
      { name: "TensorRT", color: "blue-text-gradient" },
      { name: "ByteTrack", color: "green-text-gradient" },
      { name: "FastAPI", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Sikorsky3301",
  },
];

export { services, technologies, experiences, testimonials, projects };
