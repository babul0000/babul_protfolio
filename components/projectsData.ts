export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string[];
  desc: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  glow: string;
  color: string;
  features: string[];
  challenges: string;
  futurePlans: string;
}

export const projects: Project[] = [
  {
    id: "prompt-forge",
    name: "PromptForge",
    tagline: "AI Prompt Marketplace & Creator Platform",
    category: ["fullstack", "nextjs", "mern"],
    desc: "A full-stack marketplace where creators publish, discover, and monetize AI prompts for ChatGPT, Midjourney, Claude, and Gemini. Built with comprehensive authentication, clean database models, dynamic search, and responsive user dashboards.",
    tech: ["Next.js 14", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/babul0000/prompt-forge",
    live: "https://promt-nexus.vercel.app/",
    image: "/promptforge.webp",
    glow: "rgba(168,85,247,0.18)",
    color: "#a855f7",
    features: [
      "User authentication and protected dashboard routes.",
      "Dynamic prompt marketplace catalog with category and model filtering.",
      "Optimized MongoDB data schemas for fast listing queries."
    ],
    challenges: "Coordinating client-side state with backend API endpoints and designing flexible MongoDB schemas for multi-modal AI prompt variations.",
    futurePlans: "Integrating Stripe payment gateway for creator monetization and adding automated prompt test runs using Gemini API."
  },
  {
    id: "bloodconnect",
    name: "BloodConnect",
    tagline: "TypeScript MERN Blood Donation Network",
    category: ["fullstack", "typescript", "mern"],
    desc: "A full-stack emergency blood donation network connecting voluntary donors with patients across Bangladesh. Features strict TypeScript type safety, custom blood-group search algorithms, and location filtering.",
    tech: ["TypeScript", "Next.js", "React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000/bloodconnect",
    live: "https://lifeflow-bd.vercel.app",
    image: "/bloodconnect.webp",
    glow: "rgba(239,68,68,0.18)",
    color: "#ef4444",
    features: [
      "Real-time donor discovery and availability status toggling.",
      "Strict TypeScript end-to-end type safety for API contracts.",
      "Location and blood group instant filtering with zero lag."
    ],
    challenges: "Handling real-time state consistency across donor lists and ensuring robust error handling across server-side Express controllers.",
    futurePlans: "Integrating direct map-based donor radius searching and automated SMS alerts for emergency requests."
  },
  {
    id: "tiles-gallery",
    name: "Tiles Gallery",
    tagline: "Architectural Tiles Catalog & Visual Showcase",
    category: ["frontend", "nextjs"],
    desc: "A sleek, responsive visual showcase platform built for cataloging and displaying high-quality architectural tile designs. Features advanced multi-criteria filtering by material, size, and application.",
    tech: ["React", "Next.js 14", "Tailwind CSS", "CSS Grid", "Vercel"],
    github: "https://github.com/babul0000/tiles-galary-a-8",
    live: "https://tiles-galary-a-8.vercel.app",
    image: "/tiles.webp",
    glow: "rgba(245,158,11,0.18)",
    color: "#f59e0b",
    features: [
      "Dynamic catalog filtering based on material type and size profiles.",
      "High-performance responsive image grid with lazy-loading and blur placeholders.",
      "Modern clean UI optimized for architectural product presentations."
    ],
    challenges: "Optimizing high-resolution asset delivery and maintaining 100% Lighthouse performance score on mobile viewports.",
    futurePlans: "Adding an interactive 2D room tile previewer and downloadable PDF spec sheets for architects."
  },
  {
    id: "pixgen",
    name: "PixGen Studio",
    tagline: "Creative Visual Asset Showcase & Generator",
    category: ["frontend", "fullstack"],
    desc: "A modern web application crafted for generating and showcasing digital artwork and visual media assets with instant download, tagging, and responsive card layouts.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "REST APIs"],
    github: "https://github.com/babul0000",
    live: "https://babul-portfolio.vercel.app",
    image: "/pixgen.webp",
    glow: "rgba(59,130,246,0.18)",
    color: "#3b82f6",
    features: [
      "Interactive asset filtering and tag-based search.",
      "High-speed client-side caching for instant UI response.",
      "Accessible dark and light UI with responsive grid."
    ],
    challenges: "Structuring reusable React UI components with responsive grid transitions across varying device viewports.",
    futurePlans: "Adding batch asset downloading and cloud storage integration."
  },
  {
    id: "wanderlust",
    name: "Wanderlust Travel",
    tagline: "Tour & Adventure Booking Experience",
    category: ["fullstack", "mern"],
    desc: "Full-stack travel booking application featuring curated travel packages, interactive destination exploration, user review system, and booking management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/babul0000",
    live: "https://babul-portfolio.vercel.app",
    image: "/wanderlust.webp",
    glow: "rgba(16,185,129,0.18)",
    color: "#10b981",
    features: [
      "Curated travel package explorer with dynamic pricing display.",
      "Secure backend CRUD endpoints for destination listings.",
      "Responsive booking forms with input validation."
    ],
    challenges: "Designing relational-style data models inside MongoDB for bookings, users, and destination packages.",
    futurePlans: "Implementing real-time availability calendar and weather forecast widget."
  },
  {
    id: "issue-tracker",
    name: "DevTracker",
    tagline: "Agile Bug & Workflow Task Manager",
    category: ["fullstack", "typescript"],
    desc: "A developer productivity web application for tracking software bugs, sprint tasks, and team milestones with status boards and priority filtering.",
    tech: ["TypeScript", "React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000",
    live: "https://babul-portfolio.vercel.app",
    image: "/issue-tracker.webp",
    glow: "rgba(99,102,241,0.18)",
    color: "#6366f1",
    features: [
      "Kanban-style task status boards with drag-and-drop state flow.",
      "Priority badges, assignment filters, and activity timelines.",
      "Modular Express REST API with MongoDB data persistence."
    ],
    challenges: "Managing real-time status transitions and optimizing MongoDB indices for multi-user issue queries.",
    futurePlans: "Integrating GitHub webhook synchronization for automatic commit-to-issue linking."
  }
];
