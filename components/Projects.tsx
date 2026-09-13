"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects, Project } from "./projectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "mern", label: "MERN Stack" },
    { id: "nextjs", label: "Next.js 14" },
    { id: "typescript", label: "TypeScript" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
              FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-themeText tracking-tight">
              Latest Web Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-themeTextSecondary max-w-xl">
              Real-world full-stack and frontend applications with public source code and live deployments.
            </p>
          </div>

          {/* Filter Tabs (Shakeeb style) */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
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

        {/* 2x2 / 3x2 Grid Visual Showcase (NasirChy style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card-container group flex flex-col justify-between"
            >
              {/* Image Preview Container with Gradient Mask */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-zinc-900/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
                    {project.name}
                  </span>
                </div>

                {/* Bottom Overlay Gradient on Hover (NasirChy style) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-white text-xs">
                    <span className="font-mono text-emerald-400 font-medium flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Case Study Available
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px]">
                      View Live <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-heading font-bold text-themeText group-hover:text-emerald-500 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 mb-2">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-themeTextSecondary leading-relaxed line-clamp-3 mb-4">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
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

                  {/* Actions Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs font-medium">
                    <Link
                      href={`/project/${project.id}`}
                      className="inline-flex items-center gap-1 text-themeText hover:text-emerald-500 transition-colors"
                    >
                      <span>Read Case Study</span>
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
                        className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Link to GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/babul0000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-themeTextSecondary hover:text-themeText group transition-colors"
          >
            <span>Explore all repositories on GitHub</span>
            <GithubIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
