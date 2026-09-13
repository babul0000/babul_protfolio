"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-gray-200 dark:border-zinc-800/80 bg-white dark:bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-11">
        
        {/* Section Heading matching nasirchy.com */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-slate-900 dark:text-white">
            Latest Projects
          </h2>
        </div>

        {/* 2x2 Grid Layout matching nasirchy.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-zinc-950 aspect-[16/10] shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Preview */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Top Category Badge */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="rounded-full border border-gray-700/80 bg-black/85 px-3.5 py-1.5 text-xs font-medium text-white shadow-md backdrop-blur-md">
                  {project.tagline}
                </span>
              </div>

              {/* Bottom Gradient Overlay matching nasirchy.com */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity p-5 sm:p-6 flex items-end justify-between text-white"
                style={{
                  background: `linear-gradient(to top, ${project.color} 0%, rgba(0,0,0,0.65) 30%, transparent 60%)`,
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

        {/* View More Projects footer link matching nasirchy.com */}
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
