"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import Magnetic from "./Magnetic";
import { dennisProjects } from "./data";

export default function SlidingProjects() {
  const [showAllModal, setShowAllModal] = useState(false);

  // Group 1 & 2 for opposite parallax sliders
  const firstRow = [...dennisProjects.slice(0, 3), ...dennisProjects.slice(0, 3)];
  const secondRow = [...dennisProjects.slice(3, 6), ...dennisProjects.slice(3, 6)];

  return (
    <section className="relative w-full bg-[#f4f4f4] py-16 sm:py-24 overflow-hidden">
      
      {/* Sliding Row 1 (Moves Left) */}
      <div className="mb-6 sm:mb-8 overflow-hidden w-full">
        <div className="sliding-row left flex gap-6 sm:gap-8 w-max">
          {firstRow.map((project, idx) => (
            <a
              key={`${project.id}-r1-${idx}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sliding-card group block relative w-[300px] sm:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 shadow-md shrink-0 border border-stone-300/40"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 300px, 420px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 text-white">
                <div>
                  <h4 className="text-xl font-bold font-['Dennis_Sans',sans-serif]">
                    {project.title}
                  </h4>
                  <p className="text-xs text-white/70 font-mono mt-1">
                    {project.category}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Sliding Row 2 (Moves Right) */}
      <div className="overflow-hidden w-full">
        <div className="sliding-row right flex gap-6 sm:gap-8 w-max">
          {secondRow.map((project, idx) => (
            <a
              key={`${project.id}-r2-${idx}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="sliding-card group block relative w-[300px] sm:w-[420px] aspect-[16/10] rounded-2xl overflow-hidden bg-stone-900 shadow-md shrink-0 border border-stone-300/40"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 300px, 420px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 text-white">
                <div>
                  <h4 className="text-xl font-bold font-['Dennis_Sans',sans-serif]">
                    {project.title}
                  </h4>
                  <p className="text-xs text-white/70 font-mono mt-1">
                    {project.category}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Center Magnetic Button: "More work (6)" linking to /work */}
      <div className="mt-16 sm:mt-24 flex justify-center">
        <Magnetic strength={0.35}>
          <Link
            href="/work"
            className="btn btn-normal group"
          >
            <div className="btn-click px-8 py-4 sm:px-12 sm:py-5 rounded-full border border-[#1C1D20]/20 bg-transparent text-[#1C1D20] flex items-center justify-center relative overflow-hidden shadow-sm">
              <div className="btn-fill" />
              <span className="btn-text">
                <span className="btn-text-inner text-base sm:text-lg font-['Dennis_Sans',sans-serif] font-normal flex items-center gap-2">
                  <span>More work</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#1C1D20]/10 group-hover:bg-white/20 transition-colors">
                    {dennisProjects.length}
                  </span>
                </span>
              </span>
            </div>
          </Link>
        </Magnetic>
      </div>

      {/* Archive Modal for All Projects */}
      {showAllModal && (
        <div className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="bg-[#1C1D20] text-white w-full max-w-4xl max-h-[85vh] rounded-3xl p-6 sm:p-10 overflow-y-auto border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-white/15 mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-light font-['Dennis_Sans',sans-serif]">
                  Full Project Archive
                </h3>
                <p className="text-xs font-mono text-white/50 mt-1">
                  6 Authenticated Production Deployments
                </p>
              </div>
              <button
                onClick={() => setShowAllModal(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dennisProjects.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col justify-between gap-4"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-bold font-['Dennis_Sans',sans-serif]">
                        {p.title}
                      </h4>
                      <span className="text-xs font-mono text-emerald-400">
                        {p.year}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 line-clamp-2 mb-3">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#455CE9] hover:bg-[#334BD3] text-white text-xs font-medium transition-colors"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                        >
                          <Code2 className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
