"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "./Icons";
import { projects } from "./projectsData";

export default function Hero() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute scroll progress from hero (0) to projects grid transition (1)
  // When scrollY is 0 -> progress is 0 (cards fanned in banner)
  // When scrollY is between 0 and 550px -> progress moves smoothly from 0 to 1
  const progress = Math.min(Math.max(scrollY / 500, 0), 1);
  const factor = 1 - progress;

  // 4 Featured projects
  const topProjects = projects.slice(0, 4);

  // Initial fan offsets in hero banner (matching nasirchy.com DOM inspection)
  const initialStackConfigs = [
    { tx: -70, ty: -50, rot: -6, sc: 0.88, zIndex: 40 }, // Card 0: PromptForge
    { tx: 70, ty: -30, rot: 6, sc: 0.88, zIndex: 30 },   // Card 1: BloodConnect
    { tx: -50, ty: 60, rot: -4, sc: 0.86, zIndex: 20 },  // Card 2: Tiles Gallery
    { tx: 50, ty: 50, rot: 5, sc: 0.86, zIndex: 10 },    // Card 3: PixGen Studio
  ];

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 border-b border-gray-200 dark:border-zinc-800/80 overflow-hidden">
      {/* Background radial blur */}
      <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-emerald-500/5 via-transparent to-transparent blur-3xl md:block" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-11">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
          
          {/* Left Column: NasirChy Exact Typography & Buttons */}
          <div className="flex max-w-lg flex-col gap-6 md:min-w-sm z-10">
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

            {/* GitHub CTA Button (NasirChy bubble-hover style) */}
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

          {/* Right Column: Floating Stack of Cards in Hero Banner that glides into the project grid */}
          <div className="w-full lg:max-w-md relative aspect-[16/11] select-none">
            {topProjects.map((p, idx) => {
              const cfg = initialStackConfigs[idx];
              const curTx = cfg.tx * factor;
              const curTy = cfg.ty * factor;
              const curRot = cfg.rot * factor;
              const curSc = cfg.sc + (1 - cfg.sc) * progress;

              return (
                <div
                  key={p.id}
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-200/90 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl transition-transform duration-100 ease-out will-change-transform group cursor-pointer"
                  style={{
                    transform: `translate3d(${curTx}px, ${curTy}px, 0) rotate(${curRot}deg) scale(${curSc})`,
                    zIndex: cfg.zIndex,
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2), 0 0 15px 0 rgba(16,185,129,0.1)",
                  }}
                >
                  <div className="relative w-full h-full bg-zinc-950">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="450px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Pill Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="rounded-full bg-black/80 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-md shadow-sm">
                        {p.name}
                      </span>
                    </div>

                    {/* Bottom Gradient with Live Link */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 flex items-end justify-between text-white"
                      style={{
                        background: `linear-gradient(to top, ${p.color}dd 0%, rgba(0,0,0,0.6) 40%, transparent 80%)`,
                      }}
                    >
                      <span className="text-base font-medium">{p.name}</span>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white/20 hover:bg-white hover:text-black backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 transition-all"
                      >
                        View Live Site ↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
