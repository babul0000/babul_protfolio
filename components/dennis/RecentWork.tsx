"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { dennisProjects, DennisProject } from "./data";

export default function RecentWork() {
  const [modalState, setModalState] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  const containerRef = useRef<HTMLElement>(null);
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

  const activeProject: DennisProject = dennisProjects[modalState.index] || dennisProjects[0];

  return (
    <section
      id="work"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative w-full bg-[#f4f4f4] text-[#1C1D20] pt-12 pb-24 sm:pb-36 px-6 sm:px-12 md:px-20 select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Dennis Recent Work Label */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
            Recent Work
          </span>
        </div>

        {/* Project Rows List (Dennis Snellenberg 100% Authentic Style) */}
        <div className="flex flex-col border-t border-[#D2D2D2]">
          {dennisProjects.slice(0, 4).map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setModalState({ active: true, index: idx })}
              onMouseLeave={() => setModalState({ active: false, index: idx })}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-10 sm:py-14 border-b border-[#D2D2D2] transition-all duration-500 ease-out cursor-pointer hover:px-6"
            >
              {/* Project Title */}
              <div className="flex items-center">
                <h3 className="text-4xl sm:text-6xl md:text-[76px] font-normal font-['Dennis_Sans',sans-serif] tracking-tight text-[#1C1D20] group-hover:text-[#1C1D20]/40 transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Category & Services */}
              <div className="flex items-center justify-between sm:justify-end gap-10 mt-4 sm:mt-0 text-sm sm:text-base font-['Dennis_Sans',sans-serif] text-[#1C1D20]/70 group-hover:translate-x-[-10px] transition-transform duration-500">
                <span>{project.category}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Dennis Signature Centered "More work" Pill Button */}
        <div className="flex justify-center mt-16 sm:mt-24">
          <Magnetic strength={0.3}>
            <Link
              href="/work"
              className="btn btn-normal group block"
            >
              <div className="btn-click px-9 sm:px-11 py-5 sm:py-6 rounded-full border border-[#1C1D20]/25 text-[#1C1D20] flex items-center justify-center relative overflow-hidden shadow-sm hover:border-[#1C1D20]/50 transition-colors">
                <div className="btn-fill !bg-[#455CE9]" />
                <span className="btn-text">
                  <span className="btn-text-inner text-base sm:text-lg font-['Dennis_Sans',sans-serif] group-hover:text-white transition-colors">
                    More work <sup className="text-xs ml-1 font-mono">{dennisProjects.length}</sup>
                  </span>
                </span>
              </div>
            </Link>
          </Magnetic>
        </div>

      </div>

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
          modalState.active ? "scale-100 opacity-100" : "scale-0 opacity-0"
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
          modalState.active ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        View
      </div>
    </section>
  );
}
