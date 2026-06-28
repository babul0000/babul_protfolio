"use client";
import { useScrollReveal } from "./useScrollReveal";

const projects = [
  {
    name: "WanderLust",
    tagline: "A full-stack travel accommodation platform inspired by Airbnb.",
    desc: "Built with authentication, property listings, and CRUD features for users to explore and manage places easily. Features BetterAuth for secure login and a seamless booking experience.",
    tech: ["Next.js", "Tailwind CSS", "BetterAuth", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000/wander-lust",
    live: "https://wander-lust-phi-lyart.vercel.app/",
    gradient: "from-indigo-500 to-blue-400",
    glow: "rgba(99,102,241,0.1)",
    color: "#2563eb"
  },
  {
    name: "Tiles Galary",
    tagline: "Developed a fully functional tiles gallery application with interactive UI.",
    desc: "Developed a responsive tiles gallery with interactive UI and smooth navigation to showcase tile products effectively. Implemented clean product browsing and dynamic filtering.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript", "MongoDB"],
    github: "https://github.com/babul0000/tiles-galary-a-8",
    live: "https://tiles-galary-a-8.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.1)",
    color: "#16a34a"
  },
  {
    name: "Pixgen",
    tagline: "AI-powered creative image generator tool with a modern glassmorphism UI.",
    desc: "An AI-powered creative image generator tool with a modern glassmorphism UI, offering dynamic tools for creative professionals.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/babul0000/pixgen-s-8-2",
    live: "https://pixgen-b.vercel.app/",
    gradient: "from-purple-500 to-pink-400",
    glow: "rgba(168,85,247,0.1)",
    color: "#7c3aed"
  },
  {
    name: "The Dragon News",
    tagline: "A full-stack dynamic news portal application with auth.",
    desc: "A full-stack dynamic news portal application. Features category-wise news rendering, user authentication, and responsive layout for a smooth reading experience.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/babul0000/The-dragan-news-m-46",
    live: "https://the-dragan-news-b.vercel.app/category/01",
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.1)",
    color: "#ea580c"
  },
  {
    name: "DigiTools Platform",
    tagline: "A comprehensive digital tools platform featuring an interactive dashboard.",
    desc: "A comprehensive digital tools platform featuring an interactive dashboard, diverse utility applications, and a smooth user experience designed for productivity.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/babul0000/B13-A6-DigiTools-Platform-6",
    live: "https://digitools-platform-assignment-babul.netlify.app/",
    gradient: "from-sky-500 to-cyan-400",
    glow: "rgba(56,189,248,0.1)",
    color: "#0891b2"
  },
  {
    name: "GitHub Issue Tracker",
    tagline: "A dedicated issue tracking interface for GitHub repositories.",
    desc: "Streamlines bug reporting, task tracking, and developer workflows efficiently. Built with clean vanilla JavaScript for fast performance.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/babul0000/assingment-5--Issues-Tracker",
    live: "https://github-issue-tracker-babul.netlify.app/home.html",
    gradient: "from-slate-500 to-slate-400",
    glow: "rgba(148,163,184,0.1)",
    color: "#475569"
  }
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-[#f8fafc] border-y border-slate-200/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-4 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest" style={{ letterSpacing: "0.12em" }}>
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Real-world applications built with production-grade code and modern tooling.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden group transition-all duration-500 hover:shadow-md hover:border-slate-300 flex flex-col reveal"
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Banner with gradient overlay */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                <span className="text-white/30 font-black text-6xl tracking-tighter select-none transform group-hover:scale-110 transition-transform duration-700">
                  {project.name.split(" ").map(w => w[0]).join("")}
                </span>
                
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                
                {/* Glow highlights */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, ${project.glow} 0%, transparent 70%)`
                  }}
                />

                {/* External Action Links (Live & Code) */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/90 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition"
                    title="View Source Code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-white/90 border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition"
                    title="View Live Site"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-slate-900 font-bold text-base leading-tight group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 mt-0.5"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-slate-200/60 bg-slate-50 text-slate-500 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all on Github button */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/babul0000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium bg-white hover:bg-slate-50 transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
