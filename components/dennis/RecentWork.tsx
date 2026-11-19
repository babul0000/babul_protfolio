"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP quickTo setters for 60fps cursor physics (Desktop hover)
  const xMoveModal = useRef<((value: number) => void) | null>(null);
  const yMoveModal = useRef<((value: number) => void) | null>(null);
  const xMoveCursor = useRef<((value: number) => void) | null>(null);
  const yMoveCursor = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    // 1. Initialize Desktop cursor follower
    if (modalRef.current && cursorRef.current) {
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
    }

    // 2. Initialize Mobile Stacking Cards Animation (GSAP ScrollTrigger scrub)
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mm = gsap.matchMedia();

    // Only active on mobile viewport (< 768px) and when user has not requested reduced motion
    mm.add("(max-width: 767px)", () => {
      if (prefersReducedMotion) return;

      const cards = mobileCardsRef.current.filter(Boolean) as HTMLDivElement[];

      // As nextCard scrolls up to land on this card, this card scales down to ~0.94 and dims
      cards.slice(0, -1).forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (!nextCard) return;

        const nextStickyTop = 80 + (index + 1) * 20;

        gsap.to(card, {
          scale: 0.94,
          opacity: 0.6,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: `top top+=${nextStickyTop}`,
            scrub: true,
          },
        });
      });
    });

    // Refresh ScrollTrigger to sync with layout & Lenis
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
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
  const featuredProjects = dennisProjects.slice(0, 4);

  return (
    <section
      id="work"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative w-full bg-[#f4f4f4] text-[#1C1D20] pt-12 pb-16 sm:pb-36 px-6 sm:px-12 md:px-20 select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Dennis Recent Work Label */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
            Recent Work
          </span>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< md): 4 Light Stacking Cards with Sticky, Scale & Dim Scrub */}
        {/* ========================================================================= */}
        <div className="block md:hidden relative w-full pt-2">
          {featuredProjects.map((project, idx) => {
            const isFirst = idx === 0;
            const topSticky = 80 + idx * 20;

            return (
              <div
                key={`mobile-card-${project.id}`}
                ref={(el) => {
                  mobileCardsRef.current[idx] = el;
                }}
                style={{
                  top: `${topSticky}px`,
                  zIndex: idx + 1,
                }}
                className="sticky w-full rounded-3xl bg-white text-[#1C1D20] p-5 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-[#E5E5E5] mb-12 will-change-transform"
              >
                {/* Visual Image / Video Preview with Dennis Light Frame */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#F2F2F2] border border-[#E5E5E5] shadow-inner mb-4">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.title} — Web Development Project by Babul Hossan`}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority={isFirst}
                      loading={isFirst ? "eager" : "lazy"}
                      className="object-cover object-top"
                    />
                  )}
                </div>

                {/* Card Header & Title */}
                <div className="flex items-center justify-between gap-4 pt-1 pb-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-xs font-mono text-[#1C1D20]/45">0{idx + 1}</span>
                    <h3 className="text-2xl sm:text-3xl font-normal font-['Dennis_Sans',sans-serif] tracking-tight text-[#1C1D20]">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1C1D20]/5 hover:bg-[#455CE9] hover:text-white text-[#1C1D20] flex items-center justify-center transition-colors shrink-0"
                    aria-label={`View ${project.title} live`}
                  >
                    <svg
                      width="12px"
                      height="12px"
                      viewBox="0 0 14 14"
                      className="w-3.5 h-3.5"
                    >
                      <g stroke="currentColor" strokeWidth="1.5" fill="none">
                        <polyline points="4 2 12 2 12 10" />
                        <line x1="2" y1="12" x2="12" y2="2" />
                      </g>
                    </svg>
                  </a>
                </div>

                {/* Category & Year */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-['Dennis_Sans',sans-serif] text-[#1C1D20]/65 pt-2 border-t border-[#EAEAEA]">
                  <span>{project.category}</span>
                  <span className="font-mono text-[#1C1D20]/45">{project.year}</span>
                </div>
              </div>
            );
          })}

          {/* Mobile Bottom CTA: View all projects */}
          <div className="flex justify-center pt-6 pb-4">
            <Link
              href="/work"
              className="w-full flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-full border border-[#1C1D20]/25 bg-white text-[#1C1D20] font-['Dennis_Sans',sans-serif] text-sm sm:text-base font-normal shadow-sm hover:border-[#1C1D20] hover:bg-[#1C1D20] hover:text-white active:scale-95 transition-all"
            >
              <span>View all projects</span>
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= md): 100% Authentic Dennis Snellenberg Hover Rows List    */}
        {/* ========================================================================= */}
        <div className="hidden md:flex flex-col border-t border-[#D2D2D2]">
          {featuredProjects.map((project, idx) => (
            <a
              key={`desktop-row-${project.id}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setModalState({ active: true, index: idx })}
              onMouseLeave={() => setModalState({ active: false, index: idx })}
              className="group relative flex flex-row items-center justify-between py-12 lg:py-14 border-b border-[#D2D2D2] transition-all duration-500 ease-out cursor-pointer hover:px-6"
            >
              {/* Project Title */}
              <div className="flex items-center">
                <h3 className="text-5xl md:text-6xl lg:text-[76px] font-normal font-['Dennis_Sans',sans-serif] tracking-tight text-[#1C1D20] group-hover:text-[#1C1D20]/40 transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              {/* Category & Services */}
              <div className="flex items-center justify-end gap-10 text-base font-['Dennis_Sans',sans-serif] text-[#1C1D20]/70 group-hover:translate-x-[-10px] transition-transform duration-500">
                <span>{project.category}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop Signature Centered "More work" Pill Button */}
        <div className="hidden md:flex justify-center mt-20 lg:mt-24">
          <Magnetic strength={0.3}>
            <Link
              href="/work"
              className="btn btn-normal group block"
            >
              <div className="btn-click px-11 py-6 rounded-full border border-[#1C1D20]/25 text-[#1C1D20] flex items-center justify-center relative overflow-hidden shadow-sm hover:border-[#1C1D20]/50 transition-colors">
                <div className="btn-fill !bg-[#455CE9]" />
                <span className="btn-text">
                  <span className="btn-text-inner text-lg font-['Dennis_Sans',sans-serif] group-hover:text-white transition-colors">
                    More work <sup className="text-xs ml-1 font-mono">{dennisProjects.length}</sup>
                  </span>
                </span>
              </div>
            </Link>
          </Magnetic>
        </div>

      </div>

      {/* Floating Project Image / Video Modal (Active on desktop >= md) */}
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
        className={`hidden md:flex w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-lg overflow-hidden bg-[#E1E1E1] p-4 items-center justify-center shadow-2xl transition-transform duration-400 ease-out ${
          modalState.active ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="relative w-full h-full rounded overflow-hidden bg-black/90">
          {activeProject.video ? (
            <video
              key={activeProject.id}
              src={activeProject.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <Image
              src={activeProject.image}
              alt={`${activeProject.title} — Web Development Project by Babul Hossan`}
              fill
              sizes="420px"
              className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
            />
          )}
        </div>
      </div>

      {/* Floating Magnetic Blue "View" Pill (Desktop only) */}
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
        className={`hidden md:flex w-20 h-20 rounded-full bg-[#455CE9] text-white items-center justify-center font-['Dennis_Sans',sans-serif] text-sm font-medium shadow-xl transition-transform duration-250 ease-out ${
          modalState.active ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        View
      </div>
    </section>
  );
}
