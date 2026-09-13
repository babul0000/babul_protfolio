"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects, Project } from "./projectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(1); // default 1 for SSR / instant load
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(true);

  // Filter tabs
  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "mern", label: "MERN Stack" },
    { id: "nextjs", label: "Next.js 14" },
    { id: "typescript", label: "TypeScript" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  // Scroll tracking with requestAnimationFrame for 60FPS fluid GPU animation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Start when container is near viewport, complete when it centers
          // When rect.top is windowHeight -> progress 0 (stacked deck)
          // When rect.top <= windowHeight * 0.35 -> progress 1 (settled in grid)
          const start = windowHeight * 0.95;
          const end = windowHeight * 0.35;
          
          let p = (start - rect.top) / (start - end);
          if (p < 0) p = 0;
          if (p > 1) p = 1;

          setScrollProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute transform styles for the 4 featured cards when in "all" filter
  const getCardTransformStyle = (index: number) => {
    // Only apply stack-to-grid animation for the first 4 cards when 'all' is active on desktop
    if (!isAnimationActive || activeFilter !== "all" || index >= 4) {
      return {};
    }

    // Inverse progress (1 at stacked state, 0 at settled grid state)
    const factor = 1 - scrollProgress;

    // Offsets & rotations matching nasirchy.com
    const configs = [
      { tx: -90, ty: -80, rot: -7, sc: 0.88 }, // Card 0: Top Left (PromptForge)
      { tx: 90, ty: -60, rot: 7, sc: 0.88 },   // Card 1: Top Right (BloodConnect)
      { tx: -75, ty: 80, rot: -5, sc: 0.86 },  // Card 2: Bottom Left (Tiles Gallery)
      { tx: 75, ty: 70, rot: 6, sc: 0.86 }     // Card 3: Bottom Right (PixGen Studio)
    ];

    const cfg = configs[index] || { tx: 0, ty: 0, rot: 0, sc: 1 };
    const currentTx = cfg.tx * factor;
    const currentTy = cfg.ty * factor;
    const currentRot = cfg.rot * factor;
    const currentScale = cfg.sc + (1 - cfg.sc) * scrollProgress;

    return {
      transform: `translate3d(${currentTx}px, ${currentTy}px, 0) rotate(${currentRot}deg) scale(${currentScale})`,
      transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform",
    };
  };

  return (
    <section id="projects" ref={containerRef} className="py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-grid-pattern relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header (NasirChy style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-themeText tracking-tight">
              Latest Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-themeTextSecondary max-w-xl">
              Scroll-responsive project showcase. Explore production architectures, live apps, and public GitHub code.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeFilter === tab.id
                      ? "bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-xs"
                      : "text-themeTextMuted hover:text-themeText"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2x2 Grid with Flying Scroll-Driven Morph Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative">
          {filteredProjects.map((project, idx) => {
            const transformStyle = getCardTransformStyle(idx);

            return (
              <div
                key={project.id}
                style={transformStyle}
                className="project-card-container group flex flex-col justify-between"
              >
                {/* Image Preview Container with Gradient Mask */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-900/90 text-white backdrop-blur-md border border-white/10 shadow-sm">
                      {project.name}
                    </span>
                  </div>

                  {/* Hover Overlay Gradient (NasirChy style) */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none"
                    style={{
                      background: `linear-gradient(to top, ${project.color}dd 0%, rgba(0,0,0,0.7) 40%, transparent 80%)`
                    }}
                  >
                    <div className="flex items-center justify-between w-full text-white text-xs font-mono">
                      <span className="font-semibold text-white drop-shadow-sm">
                        {project.tagline}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/25 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white shadow-sm">
                        View Live <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-white dark:bg-zinc-900">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-heading font-bold text-themeText group-hover:text-emerald-500 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                        {project.category[0].toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2.5">
                      {project.tagline}
                    </p>
                    
                    <p className="text-sm text-themeTextSecondary leading-relaxed line-clamp-3 mb-5">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 text-themeTextSecondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3.5 border-t border-zinc-100 dark:border-zinc-800 text-xs font-medium">
                      <Link
                        href={`/project/${project.id}`}
                        className="inline-flex items-center gap-1 text-themeText hover:text-emerald-500 transition-colors font-semibold"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-themeTextSecondary hover:text-themeText transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Site</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Link to GitHub */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/babul0000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-themeTextSecondary hover:text-themeText group transition-colors"
          >
            <span>Explore all open-source repositories on GitHub</span>
            <GithubIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
