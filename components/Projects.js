"use client";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "./useScrollReveal";
import { projects } from "./projectsData";
import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-themeBg border-b border-themeBorder relative" ref={ref}>
      
      {/* Background glowing orb */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-themeAccent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
              <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 uppercase tracking-tight">
              Featured <span className="gradient-text font-extrabold">Projects</span>
            </h2>
          </div>
          <p className="text-themeTextMuted text-sm max-w-xs font-normal">
            Real-world applications built with clean code and verified user workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className="h-full bg-themeCard rounded-3xl border border-themeBorder overflow-hidden group transition-all duration-500 hover:border-themeAccent/20 flex flex-col justify-between reveal"
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div>
                {/* Browser Mockup Header */}
                <div className="bg-themeCard border-b border-themeBorder p-3.5 flex items-center justify-between z-20 select-none">
                  {/* Red, Yellow, Green mock buttons */}
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  </div>
                  {/* Address bar mockup */}
                  <div className="h-5 w-44 max-w-[55%] bg-themeBg/80 border border-themeBorder/85 rounded-md flex items-center justify-center text-[8px] font-mono text-themeTextMuted truncate px-2 select-none">
                    {project.live.replace("https://", "")}
                  </div>
                  <div className="w-8" /> {/* Spacer */}
                </div>

                {/* Banner with wallpaper image */}
                <div className="aspect-video w-full relative overflow-hidden flex items-center justify-center bg-slate-900 border-b border-themeBorder">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Glow highlights */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{
                    background: `radial-gradient(ellipse at center, ${project.glow} 0%, transparent 70%)`
                  }}
                />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-themeText font-bold text-base leading-tight group-hover:text-themeAccent transition-colors">
                      {project.name}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-themeTextMuted group-hover:text-themeAccent transition-colors shrink-0 mt-0.5"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>

                  <p className="text-themeTextMuted text-xs leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-themeBorder bg-themeCardHover/60 text-themeTextMuted font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Direct Visible Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-themeBorder text-themeTextSecondary hover:text-white bg-themeCardHover/40 hover:bg-themeAccent hover:border-themeAccent text-[10px] font-bold transition-all shadow-sm uppercase tracking-wide"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-themeBorder text-themeTextSecondary hover:text-themeText hover:border-themeTextMuted bg-themeCardHover/40 hover:bg-themeCard text-[10px] font-bold transition-all shadow-sm uppercase tracking-wide"
                    >
                      <span>GitHub</span>
                      <Code2 className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* View Details Action */}
                  <div>
                    <Link
                      href={`/project/${project.id}`}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-themeBorder hover:border-themeAccent/20 text-themeTextSecondary hover:text-themeAccent bg-themeCardHover/40 hover:bg-themeCard text-xs font-bold transition-all group/btn"
                    >
                      <span>View More / Details</span>
                      <svg
                        className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View all on Github button */}
        <div className="text-center mt-14 reveal">
          <a
            href="https://github.com/babul0000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-themeBorder text-themeTextSecondary text-xs font-bold bg-themeCard hover:bg-themeCardHover hover:border-themeAccent/30 hover:text-themeAccent transition-colors tracking-wide uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
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
