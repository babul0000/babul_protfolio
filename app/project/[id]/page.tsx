"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects, Project } from "../../../components/projectsData";
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2, AlertTriangle, Rocket, Sun, Moon } from "lucide-react";
import { GithubIcon } from "../../../components/Icons";

export default function ProjectDetails() {
  const params = useParams();
  const [theme, setTheme] = useState<string>("dark");
  const [project, setProject] = useState<Project | null>(null);

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

    const projectId = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : undefined;
    const foundProject = projects.find((p) => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [params]);

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
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black text-themeText flex-col gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
        <p className="text-xs font-mono uppercase tracking-wider text-themeTextMuted">Loading Project Details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black font-sans antialiased text-themeText selection:bg-emerald-500/20 selection:text-emerald-500">
      <div className="max-w-6xl mx-auto border-x border-zinc-200/80 dark:border-zinc-800/80 min-h-screen bg-white dark:bg-[#09090b] relative shadow-2xl pb-20">
        
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-themeTextSecondary hover:text-themeText transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-emerald-500/60">
              <Image
                src="/my.webp"
                alt="Babul Hossan"
                width={28}
                height={28}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-sm font-semibold text-themeText hidden sm:inline">Babul Hossan</span>
          </Link>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center text-themeTextSecondary hover:text-themeText bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>
        </header>

        {/* Case Study Body */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10">
          {/* Header Title */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
              CASE STUDY &amp; ARCHITECTURE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-themeText tracking-tight">
              {project.name}
            </h1>
            <p className="text-base sm:text-lg text-themeTextSecondary font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Screenshot Preview */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 shadow-xl">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all"
            >
              <span>Launch Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-themeText text-xs font-semibold hover:border-emerald-500 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Source Code</span>
            </a>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            {/* Left 7 cols: Overview & Tech */}
            <div className="md:col-span-7 space-y-8">
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-themeText flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-emerald-500 rounded-full" />
                  Project Overview
                </h2>
                <p className="text-sm sm:text-base text-themeTextSecondary leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-mono text-themeTextMuted uppercase">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-themeTextSecondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Features, Challenges, Future */}
            <div className="md:col-span-5 space-y-5">
              {/* Features Card */}
              <div className="bento-crosshair p-5 space-y-3">
                <h3 className="text-sm font-bold text-themeText flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  Key Features
                </h3>
                <ul className="space-y-2 text-xs text-themeTextSecondary">
                  {project.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges Card */}
              <div className="bento-crosshair p-5 space-y-2 border-amber-500/30">
                <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Challenges &amp; Solutions
                </h3>
                <p className="text-xs text-themeTextSecondary leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Future Improvements Card */}
              <div className="bento-crosshair p-5 space-y-2 border-blue-500/30">
                <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Future Roadmap
                </h3>
                <p className="text-xs text-themeTextSecondary leading-relaxed">
                  {project.futurePlans}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
