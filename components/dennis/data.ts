export interface DennisProject {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
  github?: string;
  description: string;
  tech: string[];
}

export const dennisProjects: DennisProject[] = [
  {
    id: "onwear",
    title: "OnWear",
    category: "Design & Development",
    year: "2026",
    image: "/onwear.webp",
    link: "https://onwear.vercel.app",
    github: "https://github.com/babul0000/onwear",
    description: "Full-stack high-performance e-commerce platform with Next.js 14, Stripe checkout, dynamic filtering, and Prisma ORM.",
    tech: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "bloodconnect",
    title: "LifeFlow (BloodConnect)",
    category: "Full Stack Web App",
    year: "2026",
    image: "/bloodconnect.webp",
    link: "https://lifeflow-bd.vercel.app",
    github: "https://github.com/babul0000/bloodconnect",
    description: "Critical life-saving emergency blood donation network connecting donors, recipients, and hospitals with real-time matching.",
    tech: ["Next.js", "Express.js", "MongoDB", "BetterAuth", "Tailwind CSS"],
  },
  {
    id: "promptforge",
    title: "PromptForge",
    category: "AI & Innovation",
    year: "2026",
    image: "/promptforge.webp",
    link: "https://promt-nexus.vercel.app",
    github: "https://github.com/babul0000/prompt-forge",
    description: "Full-stack creative marketplace where AI creators publish, discover, test, and monetize prompts for ChatGPT and Midjourney.",
    tech: ["Next.js 14", "MongoDB", "BetterAuth", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "tiles-gallery",
    title: "Tiles Gallery",
    category: "Design & Showcase",
    year: "2026",
    image: "/tiles.webp",
    link: "https://tiles-galary-a-8.vercel.app",
    github: "https://github.com/babul0000/tiles-galary-a-8",
    description: "Sleek architectural showcase platform cataloging and displaying high-quality architectural tile designs with multi-criteria dynamic filtering.",
    tech: ["React", "Next.js", "Tailwind CSS", "CSS Grid"],
  },
  {
    id: "mediqueue",
    title: "MediQueue",
    category: "Healthcare System",
    year: "2026",
    image: "/mediqueue.png",
    link: "https://mediqueue-babul.vercel.app",
    github: "https://github.com/babul0000/mediqueue-client",
    description: "Smart hospital outpatient appointment queue management system minimizing patient wait times and streamlining doctor schedules.",
    tech: ["Next.js", "React.js", "Express.js", "MongoDB", "Node.js"],
  },
  {
    id: "dragon-news",
    title: "Dragon News",
    category: "News & Media",
    year: "2026",
    image: "/dragon-news.webp",
    link: "https://dragon-news-auth-e2798.web.app",
    github: "https://github.com/babul0000/dragon-news-client",
    description: "Dynamic real-time journalism platform with categorized news streams, breaking alerts, and reader authentication.",
    tech: ["React.js", "Firebase", "Node.js", "Tailwind CSS"],
  },
];

export const preloaderGreetings = [
  "Hello",
  "Bonjour",
  "স্বাগতম",
  "Ciao",
  "Olá",
  "おい",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export const personalInfo = {
  name: "MD Babul Hossan",
  brandName: "Babul",
  role: "Freelance",
  subtitle: "Designer & Developer",
  location: "Dhaka, Bangladesh",
  email: "babulhossan.info@gmail.com",
  phone: "+8801952860053",
  phoneDisplay: "+880 1952 860053",
  github: "https://github.com/babul0000",
  linkedin: "https://www.linkedin.com/in/babul-hossan-09932837a/",
  whatsapp: "https://wa.me/8801952860053",
  resume: "/Babul_Hossan_Resume.pdf",
};
