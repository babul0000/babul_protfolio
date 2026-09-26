"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ExternalLink, Code2, LayoutGrid, List } from "lucide-react";
import {
  Navbar,
  FooterContact,
  Magnetic,
  dennisProjects,
  DennisProject,
  useLenis,
} from "../../components/dennis";

const categories = ["All"];

export default function WorkPage() {
  useLenis();

  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [modalState, setModalState] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // GSAP quickTo setters for 60fps cursor physics
  const xMoveModal = useRef<((value: number) => void) | null>(null);
  const yMoveModal = useRef<((value: number) => void) | null>(null);
  const xMoveCursor = useRef<((value: number) => void) | null>(null);
  const yMoveCursor = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    if (!modalRef.current || !cursorRef.current) return;

    xMoveModal.current = gsap.quickTo(modalRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveModal.current = gsap.quickTo(modalRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    xMoveCursor.current = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    const { clientX, clientY } = e;
    if (xMoveModal.current && yMoveModal.current) {
      xMoveModal.current(clientX);
      yMoveModal.current(clientY);
    }
    if (xMoveCursor.current && yMoveCursor.current) {
      xMoveCursor.current(clientX);
      yMoveCursor.current(clientY);
    }
  };

  const filteredProjects = dennisProjects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Other") {
      return (
        project.category !== "Design & Development" &&
        project.category !== "Full Stack Web App"
      );
    }
    return project.category === activeCategory;
  });

  const activeProject: DennisProject =
    filteredProjects[modalState.index] || filteredProjects[0] || dennisProjects[0];

  return (
    <div
      onPointerMove={handlePointerMove}
      className="relative min-h-screen w-full bg-[#f4f4f4] text-[#1C1D20] font-['Dennis_Sans',sans-serif] antialiased selection:bg-[#455CE9] selection:text-white overflow-x-hidden"
    >
      {/* Navigation */}
      <Navbar />

      <main className="w-full pt-36 sm:pt-48 md:pt-56 pb-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        {/* Dennis Signature Hero Title */}
        <div className="mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#999D9E] block mb-4">
            Archive • Selected Works
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-normal font-['Dennis_Sans',sans-serif] tracking-tight leading-[1.05] text-[#1C1D20] max-w-5xl">
            Creating next level digital products
          </h1>
        </div>

        {/* Filter Pills & View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-[#D2D2D2] mb-6">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => {
              const count = dennisProjects.length;
              const isSelected = activeCategory === cat;

              return (
                <Magnetic key={cat} strength={0.2}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? "bg-[#1C1D20] text-white shadow-md"
                        : "bg-transparent text-[#1C1D20]/75 border border-[#1C1D20]/15 hover:border-[#1C1D20]/50"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[#1C1D20]/5 text-[#1C1D20]/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                </Magnetic>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 border border-[#1C1D20]/15 rounded-full p-1 bg-white/50">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 sm:p-2.5 rounded-full transition-colors ${
                viewMode === "list"
                  ? "bg-[#1C1D20] text-white shadow-sm"
                  : "text-[#1C1D20]/60 hover:text-[#1C1D20]"
              }`}
              title="List View"
            >
              <List className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 sm:p-2.5 rounded-full transition-colors ${
                viewMode === "grid"
                  ? "bg-[#1C1D20] text-white shadow-sm"
                  : "text-[#1C1D20]/60 hover:text-[#1C1D20]"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* LIST VIEW (Dennis Signature 12-Column Table & Hover Follower) */}
        {viewMode === "list" && (
          <div className="flex flex-col border-b border-[#D2D2D2]">
            {/* Table Header Row */}
            <div className="hidden sm:grid sm:grid-cols-12 text-xs font-mono uppercase tracking-widest text-[#999D9E] pb-5 border-b border-[#D2D2D2]">
              <div className="col-span-6">CLIENT</div>
              <div className="col-span-2">LOCATION</div>
              <div className="col-span-3">SERVICES</div>
              <div className="col-span-1 text-right">YEAR</div>
            </div>

            {filteredProjects.map((project, idx) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setModalState({ active: true, index: idx })}
                onMouseLeave={() => setModalState({ active: false, index: idx })}
                className="group relative flex flex-col sm:grid sm:grid-cols-12 sm:items-center py-10 sm:py-14 border-t sm:border-t-0 sm:border-b border-[#D2D2D2] transition-all duration-500 ease-out cursor-pointer hover:px-4"
              >
                {/* Client / Title */}
                <div className="sm:col-span-6 flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm font-mono text-[#999D9E]">
                    0{idx + 1}
                  </span>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal font-['Dennis_Sans',sans-serif] tracking-tight text-[#1C1D20] group-hover:text-[#1C1D20]/40 transition-colors duration-500">
                    {project.title}
                  </h2>
                </div>

                {/* Location */}
                <div className="sm:col-span-2 text-sm sm:text-base font-['Dennis_Sans',sans-serif] text-[#1C1D20]/70 mt-2 sm:mt-0">
                  <span className="sm:hidden text-xs font-mono text-[#999D9E] mr-2">Location:</span>
                  Dhaka / Remote
                </div>

                {/* Services */}
                <div className="sm:col-span-3 text-sm sm:text-base font-['Dennis_Sans',sans-serif] text-[#1C1D20]/70 mt-1 sm:mt-0 group-hover:translate-x-[-6px] transition-transform duration-500">
                  <span className="sm:hidden text-xs font-mono text-[#999D9E] mr-2">Services:</span>
                  {project.category}
                </div>

                {/* Year */}
                <div className="sm:col-span-1 text-right font-mono text-xs sm:text-sm text-[#999D9E] mt-1 sm:mt-0">
                  {project.year}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* GRID VIEW (Dennis 100% Authentic Off-White Showcase Cards) */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 pt-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col cursor-pointer"
              >
                {/* Dennis Signature #E1E1E1 Outer Container with Padded Image Frame */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl bg-[#E1E1E1] p-6 sm:p-10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:bg-[#d8d8d8] shadow-sm group-hover:shadow-xl"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black/80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Floating Blue View Pill in Grid Mode */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-[#455CE9] text-white flex items-center justify-center font-['Dennis_Sans',sans-serif] text-sm font-medium shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      View
                    </div>
                  </div>
                </a>

                {/* Card Title & Meta Information */}
                <div className="pt-6 sm:pt-8 flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl sm:text-4xl md:text-[42px] font-normal font-['Dennis_Sans',sans-serif] tracking-tight text-[#1C1D20] group-hover:text-[#455CE9] transition-colors"
                    >
                      {project.title}
                    </a>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.github && (
                        <Magnetic strength={0.2}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-[#1C1D20]/15 flex items-center justify-center hover:bg-[#1C1D20] hover:text-white transition-colors"
                            title="View Source Code"
                          >
                            <Code2 className="w-4 h-4" />
                          </a>
                        </Magnetic>
                      )}
                      <Magnetic strength={0.2}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-[#1C1D20] text-white flex items-center justify-center hover:bg-[#455CE9] transition-colors"
                          title="Open Live Project"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    </div>
                  </div>

                  {/* Clean Hairline Divider */}
                  <div className="w-full h-[1px] bg-[#D2D2D2] my-4" />

                  {/* Bottom Meta Row */}
                  <div className="flex items-center justify-between text-sm sm:text-base font-['Dennis_Sans',sans-serif] text-[#1C1D20]/70">
                    <span>{project.category}</span>
                    <span className="font-mono text-xs sm:text-sm text-[#999D9E]">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Project Image Modal with Dennis's Light Grey Border Card */}
      <div
        ref={modalRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 40,
        }}
        className={`w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-lg overflow-hidden bg-[#E1E1E1] p-4 flex items-center justify-center shadow-2xl transition-transform duration-400 ease-out ${
          modalState.active && viewMode === "list"
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0"
        }`}
      >
        <div className="relative w-full h-full rounded overflow-hidden bg-black/90">
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            sizes="420px"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Floating Magnetic Blue "View" Pill (Dennis Signature) */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 45,
        }}
        className={`w-20 h-20 rounded-full bg-[#455CE9] text-white flex items-center justify-center font-['Dennis_Sans',sans-serif] text-sm font-medium shadow-xl transition-transform duration-250 ease-out ${
          modalState.active && viewMode === "list"
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0"
        }`}
      >
        View
      </div>

      {/* Curved Footer */}
      <FooterContact />
    </div>
  );
}
