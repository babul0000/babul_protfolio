"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    name: "PromptForge",
    tagline: "AI Prompt Marketplace.",
    desc: "Built a full-stack marketplace where creators publish, discover, and monetize AI prompts for ChatGPT, Midjourney, Claude, and Gemini, with authentication and a subscription-based premium content model. Designed the database structure, API integration, and user dashboards.",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/babul0000/prompt-forge",
    live: "https://prompt-forge-babul.vercel.app/",
    image: "/pixgen.webp",
    glow: "rgba(168,85,247,0.15)",
    color: "#a855f7",
    features: [
      "Secure user sessions & sign-ins via BetterAuth.",
      "Complete prompt marketplace listings CRUD with attachment tags.",
      "AI creative prompt parser engine integration."
    ],
    challenge: "Architected the platform end-to-end — frontend, backend, API integration, and database schema design."
  },
  {
    name: "MediQueue",
    tagline: "Tutor/Doctor Booking Platform.",
    desc: "Built a production-ready appointment booking platform with secure authentication, payment integration, and SSR/ISR for fast loads and strong SEO. Supports dynamic slots management.",
    tech: ["Next.js", "Tailwind CSS", "HeroUI", "Express.js", "BetterAuth", "MongoDB"],
    github: "https://github.com/babul0000/mediqueue-client",
    live: "https://mediqueue-babul.vercel.app/",
    image: "/wanderlust.webp",
    glow: "rgba(56,189,248,0.15)",
    color: "#38bdf8",
    features: [
      "Tutor and doctor slot availability scheduler.",
      "Secure gateway checkout transaction setups.",
      "BetterAuth authentication middleware hooks."
    ],
    challenge: "Designed optimized SSR & ISR page setups to boost SEO parameters and load speeds."
  },
  {
    name: "Tile Gallery",
    tagline: "Modern Gallery Platform.",
    desc: "Developed a responsive, tile-based gallery with dynamic image rendering and full CRUD content management via REST APIs and MongoDB.",
    tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000/tiles-galary-a-8",
    live: "https://tiles-galary-a-8.vercel.app/",
    image: "/tiles.webp",
    glow: "rgba(16,185,129,0.15)",
    color: "#10b981",
    features: [
      "Dynamic filtering by size, type, and color categories.",
      "Meticulous high-resolution thumbnail rendering with zoom grids.",
      "Full CRUD operations via REST API integrations."
    ],
    challenge: "Achieved seamless navigation and image lazy-loading to optimize Largest Contentful Paint (LCP) rendering times."
  },
  {
    name: "WanderLust",
    tagline: "A full-stack travel accommodation platform inspired by Airbnb.",
    desc: "Built with authentication, property listings, and CRUD features for users to explore and manage places easily. Features BetterAuth for secure login and a seamless booking experience.",
    tech: ["Next.js", "Tailwind CSS", "BetterAuth", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000/wander-lust",
    live: "https://wander-lust-phi-lyart.vercel.app/",
    image: "/wanderlust.webp",
    glow: "rgba(99,102,241,0.15)",
    color: "#6366f1",
    features: [
      "Secure user sessions & sign-ins via BetterAuth.",
      "Complete property listings CRUD with file upload attachments.",
      "Interactive booking schedule calendar with client triggers."
    ],
    challenge: "Handling dynamic mapping of user session parameters in SSR pages without rendering lags. Solved by middleware request intercepts."
  },
  {
    name: "Pixgen",
    tagline: "AI-powered creative image generator tool with a modern glassmorphism UI.",
    desc: "An AI-powered creative image generator tool with a modern glassmorphism UI, offering dynamic tools for creative professionals.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/babul0000/pixgen-s-8-2",
    live: "https://pixgen-b.vercel.app/",
    image: "/pixgen.webp",
    glow: "rgba(168,85,247,0.15)",
    color: "#a855f7",
    features: [
      "AI creative prompt parser engine integration.",
      "Sleek glassmorphism details cards overlay with glowing meshes.",
      "Clean user gallery page fetching generative history."
    ],
    challenge: "Styling translucent background blur filters that remain compatible across mobile platforms. Solved using optimized backdrop CSS attributes."
  },
  {
    name: "The Dragon News",
    tagline: "A full-stack dynamic news portal application with auth.",
    desc: "A full-stack dynamic news portal application. Features category-wise news rendering, user authentication, and responsive layout for a smooth reading experience.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/babul0000/The-dragan-news-m-46",
    live: "https://the-dragan-news-b.vercel.app/category/01",
    image: "/dragon-news.webp",
    glow: "rgba(249,115,22,0.15)",
    color: "#f97316",
    features: [
      "Real-time news feeds filtering by category tabs.",
      "Firebase auth integration (social and email login).",
      "Clean responsive article grid matching dashboard templates."
    ],
    challenge: "Mitigating excessive Firebase fetches during route swapping. Solved using React local state persistence layers."
  }
];

export default function ProjectsPage() {
  const [theme, setTheme] = useState("dark");
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const toggleDetails = (name) => {
    setExpandedProject(expandedProject === name ? null : name);
  };

  return (
    <main className="relative min-h-screen bg-themeBg text-themeText font-sans antialiased transition-colors duration-300 pb-20">
      {/* Background glowing meshes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-themeAccent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Mini Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-themeBg/85 backdrop-blur-md border-b border-themeBorder shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-themeText tracking-tight">
            <span className="w-8 h-8 bg-gradient-to-tr from-themeAccent to-emerald-400 text-white rounded-lg flex items-center justify-center font-black">
              BH
            </span>
            <span className="text-xl">
              Babul<span className="text-themeAccent">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-themeTextSecondary hover:text-themeAccent bg-themeCard/60 border border-themeBorder hover:border-themeAccent/30 rounded-xl transition duration-300 shadow-sm flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Link
              href="/"
              className="px-4 py-2 text-xs font-bold text-themeTextSecondary rounded-xl bg-themeCard border border-themeBorder hover:border-themeAccent/30 hover:text-themeText transition duration-300 shadow-sm"
            >
              Back Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              Showcase
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-themeText uppercase tracking-tight">
            All <span className="gradient-text font-extrabold">Projects</span>
          </h1>
          <p className="text-themeTextMuted text-sm mt-4 max-w-md mx-auto font-normal">
            A comprehensive compilation of applications, platforms, and utilities built using modern web standard stacks.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <div
              key={project.name}
              className="bg-themeCard rounded-3xl border border-themeBorder overflow-hidden group transition-all duration-500 hover:border-themeAccent/20 flex flex-col"
            >
              {/* Banner */}
              <div className="h-44 relative overflow-hidden flex items-center justify-center bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{
                    background: `radial-gradient(ellipse at center, ${project.glow} 0%, transparent 70%)`
                  }}
                />

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-300 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 z-20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-themeCard/90 border border-themeBorder flex items-center justify-center text-themeTextSecondary hover:text-themeAccent hover:border-themeAccent/30 transition"
                    title="View Source Code"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-themeCard/90 border border-themeBorder flex items-center justify-center text-themeTextSecondary hover:text-themeAccent hover:border-themeAccent/30 transition"
                    title="View Live Site"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-themeText font-bold text-base leading-tight group-hover:text-themeAccent transition-colors">
                      {project.name}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-themeTextMuted group-hover:text-themeAccent transition-colors shrink-0 mt-0.5">
                      <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                  <p className="text-themeTextMuted text-xs leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-themeBorder bg-themeCardHover/60 text-themeTextMuted font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <button
                      onClick={() => toggleDetails(project.name)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-themeBorder hover:border-themeAccent/20 text-themeTextSecondary hover:text-themeAccent bg-themeCardHover/40 hover:bg-themeCard text-xs font-bold transition-all"
                    >
                      {expandedProject === project.name ? "Hide Details" : "Show Details"}
                      <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedProject === project.name ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Drawer Content */}
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedProject === project.name ? "max-h-[300px] opacity-100 border-t border-themeBorder pt-4 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <div className="space-y-3.5 text-left font-normal">
                      <div>
                        <h4 className="text-[10px] font-bold text-themeAccent uppercase tracking-widest">Key Features</h4>
                        <ul className="list-disc pl-4 text-[11px] text-themeTextMuted mt-1 space-y-1 leading-relaxed">
                          {project.features.map((feature, fIdx) => (
                            <li key={fIdx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-themeAccent uppercase tracking-widest">Tech Highlight</h4>
                        <p className="text-[11px] text-themeTextMuted mt-1 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
