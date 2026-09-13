"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, Sparkles, Layers, ChevronRight } from "lucide-react";
import { projects } from "./projectsData";

export default function HeroProjectStack() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Take first 3-4 projects for the stack
  const stackProjects = projects.slice(0, 4);

  const handleCardClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx(idx);
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none flex flex-col items-center select-none">
      {/* Stack Header / Hint */}
      <div className="flex items-center justify-between w-full px-2 mb-3 text-xs font-mono text-themeTextMuted">
        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
          <Layers className="w-3.5 h-3.5" />
          Interactive Project Stack
        </span>
        <span className="text-[11px] hidden sm:inline text-themeTextMuted">
          Hover to fan • Click to cycle
        </span>
      </div>

      {/* 3D Stack Container */}
      <div
        className="relative w-full aspect-[16/11] cursor-pointer perspective-1000 py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {stackProjects.map((p, idx) => {
          // Calculate relative position based on activeIdx
          const order = (idx - activeIdx + stackProjects.length) % stackProjects.length;
          const isTop = order === 0;

          // Compute transform offsets
          let transformStyle = "";
          let zIndex = 30 - order * 10;
          let opacity = 1 - order * 0.15;

          if (isHovered) {
            // Fan out on hover
            if (order === 0) {
              transformStyle = "translateY(-14px) rotate(0deg) scale(1.03)";
              zIndex = 40;
            } else if (order === 1) {
              transformStyle = "translateX(26px) translateY(8px) rotate(6deg) scale(0.98)";
            } else if (order === 2) {
              transformStyle = "translateX(-26px) translateY(14px) rotate(-6deg) scale(0.94)";
            } else {
              transformStyle = "translateY(28px) scale(0.90)";
            }
          } else {
            // Default stacked deck
            if (order === 0) {
              transformStyle = "translateY(0px) rotate(0deg) scale(1)";
            } else if (order === 1) {
              transformStyle = "translateY(12px) translateX(6px) rotate(2.5deg) scale(0.96)";
            } else if (order === 2) {
              transformStyle = "translateY(22px) translateX(-6px) rotate(-2.5deg) scale(0.92)";
            } else {
              transformStyle = "translateY(30px) scale(0.88)";
            }
          }

          return (
            <div
              key={p.id}
              onClick={(e) => handleCardClick(idx, e)}
              className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-300/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-900 shadow-xl transition-all duration-500 ease-out will-change-transform group/card"
              style={{
                transform: transformStyle,
                zIndex: zIndex,
                opacity: opacity,
                boxShadow: isTop
                  ? "0 20px 40px -15px rgba(0, 0, 0, 0.25), 0 0 20px 0 rgba(16, 185, 129, 0.15)"
                  : "0 10px 25px -10px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Card Image */}
              <div className="relative w-full h-[65%] overflow-hidden bg-zinc-950">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                />
                
                {/* Top Floating Badge */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-zinc-900/90 text-white backdrop-blur-md border border-white/10 shadow-sm">
                    {p.name}
                  </span>
                  {isTop && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500 text-white shadow-xs animate-pulse">
                      Featured
                    </span>
                  )}
                </div>

                {/* Live Link Button on Top Card */}
                {isTop && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/90 text-zinc-900 hover:bg-white dark:bg-zinc-900/90 dark:text-white backdrop-blur-md border border-black/10 dark:border-white/10 flex items-center gap-1 shadow-sm transition-all"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                  </a>
                )}
              </div>

              {/* Card Bottom Meta */}
              <div className="p-3.5 flex flex-col justify-between h-[35%] bg-white dark:bg-zinc-900">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-heading font-bold text-themeText truncate">
                    {p.name}
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold truncate ml-2">
                    {p.tagline}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-1">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-themeTextSecondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/project/${p.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11px] font-mono text-themeTextSecondary hover:text-emerald-500 flex items-center gap-0.5 transition-colors font-medium"
                  >
                    Details <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stack Indicators / Dots & Scroll Link */}
      <div className="flex items-center justify-between w-full px-2 mt-4">
        {/* Navigation Dots */}
        <div className="flex items-center gap-1.5">
          {stackProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === i
                  ? "w-6 bg-emerald-500"
                  : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-emerald-500/50"
              }`}
              aria-label={`Show project ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll To Projects Grid link */}
        <a
          href="#projects"
          className="inline-flex items-center gap-1 text-xs font-mono text-themeTextMuted hover:text-emerald-500 transition-colors group"
        >
          <span>Scroll to all projects</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
