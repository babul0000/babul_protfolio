"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { projects } from "../../../components/projectsData";

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const [theme, setTheme] = useState("dark");
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Sync theme on mount
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Load project data
    const foundProject = projects.find((p) => p.id === params.id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [params.id]);

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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-themeBg text-themeText flex-col gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-themeBorder border-t-themeAccent animate-spin" />
        <p className="text-xs font-bold uppercase tracking-wider text-themeTextMuted">Loading Project Case Study...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-themeBg text-themeText font-sans antialiased relative overflow-hidden pb-20">

      {/* Background glowing meshes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-75"
          style={{ backgroundColor: `${project.color}08` }}
        />
        <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-themeAccent/5 rounded-full blur-[110px]" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 border-b border-themeBorder bg-themeBg/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 group text-xs font-bold uppercase tracking-widest text-themeTextMuted hover:text-themeAccent transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>

          <Link href="/" className="flex items-center gap-1 group py-1">
            <span className="signature-logo text-3xl font-bold tracking-wide text-themeText group-hover:text-themeAccent transition-colors duration-300">
              Babul
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-themeAccent group-hover:bg-emerald-400 transition-colors self-end mb-2"></span>
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2.5 text-themeTextSecondary hover:text-themeAccent bg-white/60 dark:bg-slate-900/60 border border-themeBorder hover:border-themeAccent/30 rounded-xl transition duration-300 shadow-sm flex items-center justify-center"
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
        </div>
      </header>

      {/* Main Content Body */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-12 md:pt-16 space-y-10">

        {/* Title Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-3 py-1 bg-themeAccent/10 text-themeAccent border border-themeAccent/20 rounded-full uppercase tracking-wider">
              Project Case Study
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-themeText uppercase">
            {project.name}
          </h1>
          <p className="text-lg text-themeTextSecondary font-bold leading-normal">
            {project.tagline}
          </p>
        </div>

        {/* Browser Mockup Screen */}
        <div className="bg-themeCard border border-themeBorder rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-themeCard border-b border-themeBorder px-4 py-3 flex items-center justify-between select-none">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="h-6 w-72 max-w-[60%] bg-themeBg border border-themeBorder/85 rounded-md flex items-center justify-center text-[10px] font-mono text-themeTextMuted truncate px-3">
              {project.live}
            </div>
            <div className="w-8" />
          </div>

          {/* Screenshot Container */}
          <div className="aspect-[16/9] w-full relative bg-slate-900">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover object-top opacity-95"
            />
          </div>
        </div>

        {/* Dynamic Detail Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4">

          {/* Left Column: Tech Stack, Description, & Buttons */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-themeText uppercase tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-4 bg-themeAccent rounded-full" />
                Overview
              </h3>
              <p className="text-sm md:text-base text-themeTextSecondary leading-relaxed font-normal">
                {project.desc}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-themeTextMuted uppercase tracking-wider">
                Technology Stack Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3.5 py-1 rounded-full border border-themeBorder bg-themeCard/60 text-themeTextSecondary font-bold shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-bold text-sm tracking-wide transition duration-300 shadow-md shadow-themeAccent/10 hover:scale-[1.02]"
              >
                Launch Live Site
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" x2="21" y1="14" y2="3"></line>
                </svg>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-themeBorder bg-themeCard hover:border-themeAccent/20 hover:text-themeAccent text-themeTextSecondary font-bold text-sm tracking-wide transition duration-300 hover:scale-[1.02] shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                GitHub Client Repo
              </a>
            </div>
          </div>

          {/* Right Column: Features, Challenges, and Plans */}
          <div className="md:col-span-5 space-y-6">

            {/* Key Features List */}
            <div className="p-6 bg-themeCard border border-themeBorder rounded-3xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-themeText uppercase tracking-wider flex items-center gap-2">
                ⭐ Key Features
              </h3>
              <ul className="list-disc pl-4 text-xs text-themeTextSecondary space-y-2.5 font-normal leading-relaxed">
                {project.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Faced Section */}
            <div className="p-6 bg-amber-500/5 border border-amber-500/20 dark:border-amber-500/10 rounded-3xl shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-amber-500 dark:text-amber-400 uppercase tracking-wider flex items-center gap-2">
                ⚠️ Challenges Faced
              </h3>
              <p className="text-xs text-themeTextSecondary leading-relaxed font-normal">
                {project.challenges}
              </p>
            </div>

            {/* Future Plans Section */}
            <div className="p-6 bg-themeAccent/5 border border-themeAccent/20 dark:border-themeAccent/10 rounded-3xl shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-themeAccent uppercase tracking-wider flex items-center gap-2">
                🚀 Future Plans
              </h3>
              <p className="text-xs text-themeTextSecondary leading-relaxed font-normal">
                {project.futurePlans}
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
