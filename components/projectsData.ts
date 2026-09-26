export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string[];
  desc: string;
  tech: string[];
  github: string;
  live: string;
  displayUrl: string;
  image: string;
  glow: string;
  color: string;
  isFlagship: boolean;
  bulletPoints: string[];
  features?: string[];
  challenges: string;
  futurePlans: string;
}

export const projects: Project[] = [
  {
    id: "onwear",
    name: "OnWear",
    tagline: "E-Commerce Clothing Platform",
    category: ["fullstack", "nextjs", "typescript", "prisma", "postgresql"],
    desc: "A modern, full-featured e-commerce web application with product browsing, multi-category filtering, user authentication, dynamic cart drawer, and seamless checkout experience.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/babul0000/onwear",
    live: "https://onwear.vercel.app",
    displayUrl: "onwear.vercel.app",
    image: "/onwear.webp",
    glow: "rgba(16,185,129,0.18)",
    color: "#10b981",
    isFlagship: true,
    bulletPoints: [
      "Developed a modern e-commerce web application with product browsing, filtering, and seamless checkout.",
      "Integrated user authentication and dynamic cart management for an enhanced shopping experience.",
      "Designed responsive layouts and high-performance frontend interfaces using Next.js and Tailwind CSS."
    ],
    challenges: "Engineering type-safe relational schemas with Prisma ORM and maintaining high performance across dynamic product catalogs.",
    futurePlans: "Integrating SSLCommerz / Stripe payment gateways and automated parcel delivery tracking via SMS."
  },
  {
    id: "lifeflow",
    name: "LifeFlow",
    tagline: "Blood Donation Platform",
    category: ["fullstack", "nextjs", "express", "mongodb", "betterauth"],
    desc: "A full-stack emergency blood donation network connecting voluntary donors with patients across Bangladesh for urgent life-saving requirements.",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "BetterAuth"],
    github: "https://github.com/babul0000/bloodconnect",
    live: "https://lifeflow-bd.vercel.app",
    displayUrl: "lifeflow-bd.vercel.app",
    image: "/bloodconnect.png",
    glow: "rgba(239,68,68,0.18)",
    color: "#ef4444",
    isFlagship: true,
    bulletPoints: [
      "Built a full-stack platform connecting blood donors and recipients for urgent requirements.",
      "Implemented secure authentication with role-based access for donors, recipients, and admins.",
      "Developed request filtering, user dashboards, and responsive UI components."
    ],
    challenges: "Handling real-time state consistency across donor request lists and role-based route protection with BetterAuth.",
    futurePlans: "Integrating direct map-based donor radius searching and automated SMS alerts for emergency requests."
  },
  {
    id: "promptforge",
    name: "PromptForge",
    tagline: "AI Prompt Marketplace",
    category: ["fullstack", "nextjs", "heroui", "mongodb", "betterauth"],
    desc: "A full-stack creative marketplace where AI creators publish, discover, test, and monetize optimized prompts for ChatGPT, Midjourney, Claude, and Gemini.",
    tech: ["Next.js", "HeroUI", "Node.js", "Express.js", "MongoDB", "BetterAuth", "Tailwind CSS"],
    github: "https://github.com/babul0000/prompt-forge",
    live: "https://promt-nexus.vercel.app",
    displayUrl: "promt-nexus.vercel.app",
    image: "/promptforge.png",
    glow: "rgba(168,85,247,0.18)",
    color: "#a855f7",
    isFlagship: true,
    bulletPoints: [
      "Created a full-stack marketplace to publish, discover, and monetize AI prompts.",
      "Integrated secure authentication and a subscription-based premium access model.",
      "Engineered dynamic prompt browsing, multi-model search, and responsive filtering."
    ],
    challenges: "Designing multi-modal prompt schemas in MongoDB and coordinating state between backend API endpoints and user dashboards.",
    futurePlans: "Integrating live Gemini API prompt execution sandbox directly inside browser viewports."
  },
  {
    id: "tiles-gallery",
    name: "Tiles Gallery",
    tagline: "Architectural Showcase & Catalog",
    category: ["frontend", "nextjs"],
    desc: "A sleek, responsive visual showcase platform built for cataloging and displaying high-quality architectural tile designs with multi-criteria dynamic filtering.",
    tech: ["React", "Next.js 14", "Tailwind CSS", "CSS Grid", "Vercel"],
    github: "https://github.com/babul0000/tiles-galary-a-8",
    live: "https://tiles-galary-a-8.vercel.app",
    displayUrl: "tiles-galary-a-8.vercel.app",
    image: "/tiles.webp",
    glow: "rgba(245,158,11,0.18)",
    color: "#f59e0b",
    isFlagship: false,
    bulletPoints: [
      "Architected dynamic multi-criteria catalog filtering by material, size, and application.",
      "Implemented responsive image layouts with lazy-loading and blur placeholders.",
      "Achieved high performance and seamless mobile viewport responsiveness."
    ],
    challenges: "Optimizing multiple high-resolution asset displays without degrading Core Web Vitals.",
    futurePlans: "Adding an interactive 2D room tile previewer and downloadable architectural specification sheets."
  },
  {
    id: "mediqueue",
    name: "MediQueue",
    tagline: "Doctor Appointment & Medical Queue System",
    category: ["fullstack", "mern", "nextjs"],
    desc: "A full-featured healthcare appointment booking platform designed to streamline doctor consultations, manage dynamic patient queues, and eliminate physical waiting room congestion.",
    tech: ["Next.js", "React", "Tailwind CSS", "Express.js", "MongoDB", "Node.js"],
    github: "https://github.com/babul0000/mediqueue-client",
    live: "https://mediqueue-babul.vercel.app",
    displayUrl: "mediqueue-babul.vercel.app",
    image: "/mediqueue.png",
    glow: "rgba(56,189,248,0.18)",
    color: "#38bdf8",
    isFlagship: false,
    bulletPoints: [
      "Doctor and specialist slot availability scheduler with real-time slot locking.",
      "Dynamic queue status tracker for patients checking consultation turn.",
      "Comprehensive patient booking history and digital prescription storage."
    ],
    challenges: "Preventing concurrent double-booking of identical consultation slots during peak appointment rush hours.",
    futurePlans: "Integrating tele-medicine WebRTC video consultations and automated prescription reminders."
  },
  {
    id: "dragon-news",
    name: "Dragon News Pro",
    tagline: "Dynamic Multi-Category News & Media Portal",
    category: ["fullstack", "react"],
    desc: "A modern digital journalism and news aggregation portal providing breaking news, category-based journalism, editorial insights, and real-time social authentication.",
    tech: ["React", "Node.js", "Express.js", "Firebase Auth", "Tailwind CSS"],
    github: "https://github.com/babul0000/dragon-news-client",
    live: "https://dragon-news-auth-e2798.web.app",
    displayUrl: "dragon-news.web.app",
    image: "/dragon-news.webp",
    glow: "rgba(225,29,72,0.18)",
    color: "#e11d48",
    isFlagship: false,
    bulletPoints: [
      "Dynamic news categorizer covering National, International, Tech, and Sports.",
      "Secure Firebase OAuth authentication with Google and email/password.",
      "Bookmark articles and trending news ticker marquee."
    ],
    challenges: "Implementing responsive mobile layouts for multi-column newspaper editorial design with zero layout shift.",
    futurePlans: "Adding bilingual Bengali/English language switcher and offline article reading mode via Service Workers."
  }
];
