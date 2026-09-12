export const projects = [
  {
    id: "prompt-forge",
    name: "PromptForge",
    tagline: "AI Prompt Marketplace.",
    category: ["fullstack", "nextjs"],
    desc: "Built a full-stack marketplace where creators publish, discover, and monetize AI prompts for ChatGPT, Midjourney, Claude, and Gemini, with authentication and a subscription-based premium content model. Designed the database structure, API integration, and user dashboards.",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/babul0000/prompt-forge",
    live: "https://promt-nexus.vercel.app/",
    image: "/promptforge.webp",
    glow: "rgba(168,85,247,0.15)",
    color: "#a855f7",
    features: [
      "Secure user sessions & sign-ins via BetterAuth.",
      "Complete prompt marketplace listings CRUD with attachment tags.",
      "AI creative prompt parser engine integration."
    ],
    challenges: "Developing secure authentication states, implementing the MongoDB schema for dynamic prompt listings, and coordinating state management between backend API endpoints and user dashboards.",
    futurePlans: "We plan to integrate Stripe for direct payment processing, add a prompt review and rating system, and incorporate automated validation of prompts using LLMs."
  },
  {
    id: "tiles-gallery",
    name: "Tiles Gallery",
    tagline: "Premium Tiles Showcase & Catalog.",
    category: ["frontend", "nextjs"],
    desc: "A sleek, responsive visual showcase platform built for cataloging and displaying high-quality tile designs. Features advanced filtering by categories, materials, and sizes, optimized for seamless performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "CSS Grid", "Vercel"],
    github: "https://github.com/babul0000/tiles-galary-a-8",
    live: "https://tiles-galary-a-8.vercel.app",
    image: "/tiles.webp",
    glow: "rgba(245,158,11,0.15)",
    color: "#f59e0b",
    features: [
      "Dynamic catalog filtering based on material type and size profiles.",
      "High-performance responsive image grid with lazy-loading.",
      "Clean, modern UI optimized for visual product presentations."
    ],
    challenges: "Optimizing multiple high-resolution asset displays concurrently without affecting core web vitals, which was resolved by configuring Next.js Image component parameters and responsive sizes.",
    futurePlans: "Integrating an interactive 3D room visualizer for different tiles, adding user bookmark folders for architecture projects, and enabling dynamic catalog downloading."
  },
  {
    id: "bloodconnect",
    name: "BloodConnect",
    tagline: "TypeScript MERN Blood Donation App.",
    category: ["fullstack", "typescript", "nextjs"],
    desc: "A full-stack blood donation platform connecting volunteers and donors. Built with React, Next.js, Node.js, Express, MongoDB, and TypeScript, featuring custom location sorting and notifications.",
    tech: ["TypeScript", "Next.js", "React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000/bloodconnect",
    live: "https://lifeflow-bd.vercel.app",
    image: "/bloodconnect.webp",
    glow: "rgba(239,68,68,0.15)",
    color: "#ef4444",
    features: [
      "Secure donor profile creation and availability status toggles.",
      "TypeScript type-safety implemented across API parameters.",
      "Real-time search filters matching donor blood groups."
    ],
    challenges: "Enforcing complex database schemas and type safety in high-frequency donor data states, solved by implementing strict TypeScript interfaces and schema validation in Express.",
    futurePlans: "Adding a real-time chat feature between donors and requestors, integrating Google Maps location searches, and scheduling automated SMS reminders for eligible donors."
  }
];
