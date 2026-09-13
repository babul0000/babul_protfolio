"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "./projectsData";

export default function HeroProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const topProjects = projects.slice(0, 4);

  // Scroll progress from 0 (at top of hero banner) to 1 (when cards reach 2x2 grid)
  // Cards animate smoothly as scrollY progresses from 0 to 520px
  const progress = isMobile ? 1 : Math.min(Math.max(scrollY / 500, 0), 1);
  const factor = 1 - progress;

  // Compute exact transforms for the 4 cards so that at factor=1 (scrollY=0)
  // they sit in the Hero banner right column, and at factor=0 (scrollY>=500px)
  // they settle seamlessly in the 2x2 Latest Projects grid.
  const getCardStyle = (index: number) => {
    if (isMobile) {
      return {
        transform: "none",
        zIndex: 10,
      };
    }

    let tx = "0px";
    let ty = "0px";
    let rot = 0;
    let sc = 1;
    let zIndex = 10;

    if (index === 0) {
      // PromptForge (Row 1, Col 1): Starts in Hero Right Column -> Flies to Row 1 Col 1
      tx = `calc((100% + 2rem) * ${factor})`;
      ty = `calc(-135% * ${factor})`;
      rot = -5 * factor;
      sc = 0.88 + 0.12 * (1 - factor);
      zIndex = 40;
    } else if (index === 1) {
      // BloodConnect (Row 1, Col 2): Starts in Hero Right Column -> Straightens in Row 1 Col 2
      tx = `calc(24px * ${factor})`;
      ty = `calc(-135% * ${factor})`;
      rot = 6 * factor;
      sc = 0.90 + 0.10 * (1 - factor);
      zIndex = 30;
    } else if (index === 2) {
      // Tiles Gallery (Row 2, Col 1): Starts in Hero Right Column -> Flies to Row 2 Col 1
      tx = `calc((100% + 2rem) * ${factor})`;
      ty = `calc(-245% * ${factor})`;
      rot = -6 * factor;
      sc = 0.86 + 0.14 * (1 - factor);
      zIndex = 20;
    } else if (index === 3) {
      // PixGen Studio (Row 2, Col 2): Starts in Hero Right Column -> Flies to Row 2 Col 2
      tx = `calc(32px * ${factor})`;
      ty = `calc(-245% * ${factor})`;
      rot = 5 * factor;
      sc = 0.84 + 0.16 * (1 - factor);
      zIndex = 10;
    }

    return {
      transform: `translate3d(${tx}, ${ty}, 0) rotate(${rot}deg) scale(${sc})`,
      zIndex,
      willChange: "transform",
      transition: factor === 0 ? "transform 0.3s ease" : "none",
      boxShadow: factor > 0.05
        ? "0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 25px 0 rgba(16, 185, 129, 0.15)"
        : undefined,
    };
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-28 border-b border-gray-200 dark:border-zinc-800/80 overflow-hidden bg-white dark:bg-[#09090b]"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-emerald-500/5 via-transparent to-transparent blur-3xl md:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        
        {/* Hero Banner Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20 min-h-[360px] sm:min-h-[400px]">
          
          {/* Left Column: NasirChy typography and GitHub bubble button */}
          <div className="flex flex-col gap-6 z-20">
            {/* Status Badge */}
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-slate-800 dark:text-zinc-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to full-time &amp; freelance work
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Babul <br />
              <span className="text-slate-500 dark:text-zinc-400 font-normal">Portfolio</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-sm text-sm sm:text-base leading-snug tracking-tight text-slate-600 dark:text-zinc-300">
              Full-Stack MERN Developer | Creating clean, responsive, and production-ready, high-quality web systems
            </p>

            {/* GitHub Bubble CTA Button */}
            <div className="pt-2">
              <a
                href="https://github.com/babul0000"
                target="_blank"
                rel="noopener noreferrer"
                className="group bubble-hover inline-flex items-center gap-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-3 text-base font-medium tracking-tight shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <div className="relative flex items-center gap-1.5">
                  <div className="relative h-7 w-7 rounded-full overflow-hidden ring-2 ring-white/75 dark:ring-black/75">
                    <Image
                      src="/my.webp"
                      alt="Babul Hossan"
                      width={28}
                      height={28}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-base font-light text-zinc-400 dark:text-zinc-600">+</span>
                  <div className="w-5 h-5 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center ring-1 ring-black/20 dark:ring-white/20">
                    <GithubIcon className="w-3 h-3" />
                  </div>
                </div>
                <span>See My Github</span>
              </a>
            </div>
          </div>

          {/* Right Column: Placeholder space where cards are situated when factor=1 */}
          <div className="relative aspect-[16/10] hidden md:block select-none pointer-events-none" />
        </div>

        {/* "Latest Projects" Section Title */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-slate-900 dark:text-white">
            Latest Projects
          </h2>
        </div>

        {/* 2x2 Grid with Scroll-Linked Flight into Grid Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
          {topProjects.map((project, idx) => (
            <div
              key={project.id}
              style={getCardStyle(idx)}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-zinc-950 aspect-[16/10] shadow-md hover:shadow-2xl transition-all duration-300 will-change-transform"
            >
              {/* Project Image Preview */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Category Pill Badge */}
              <div className="absolute top-3.5 left-3.5 z-20">
                <span className="rounded-full border border-gray-700/80 bg-black/85 px-3.5 py-1.5 text-xs font-medium text-white shadow-md backdrop-blur-md">
                  {project.tagline}
                </span>
              </div>

              {/* Bottom Gradient Overlay (Exact NasirChy style) */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity p-5 sm:p-6 flex items-end justify-between text-white z-10"
                style={{
                  background: `linear-gradient(to top, ${project.color}dd 0%, rgba(0,0,0,0.65) 35%, transparent 70%)`,
                }}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-1">
                    {project.tech.slice(0, 4).join(" • ")}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/project/${project.id}`}
                    className="rounded-full border border-white/30 bg-black/40 hover:bg-white hover:text-black px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-all shadow-sm flex items-center gap-1"
                  >
                    <span>Details</span>
                  </Link>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/40 bg-white/20 hover:bg-white hover:text-black px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md transition-all shadow-sm flex items-center gap-1"
                  >
                    <span>View Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects on GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/babul0000"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-lg sm:text-xl font-medium tracking-tight text-slate-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <span className="underline decoration-slate-400 dark:decoration-zinc-600 underline-offset-4">
              View More Projects on GitHub
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
