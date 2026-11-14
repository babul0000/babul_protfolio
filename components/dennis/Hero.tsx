"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "./data";
import Magnetic from "./Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let xPercent = 0;
    let direction = -1;

    const animate = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }

      if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent });
        gsap.set(secondText.current, { xPercent });
      }

      xPercent += 0.08 * direction;
      requestAnimationFrame(animate);
    };

    const reqId = requestAnimationFrame(animate);

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      onUpdate: (e) => {
        direction = e.direction * -1;
      },
    });

    return () => {
      cancelAnimationFrame(reqId);
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <header
      id="home"
      className="relative h-[86svh] min-h-[86svh] sm:h-[90svh] sm:min-h-[90svh] lg:h-auto lg:min-h-[115vh] w-full bg-[#8e9394] text-white overflow-hidden flex items-center justify-center select-none"
    >
      {/* Primary Semantic H1 for SEO (Screen Readers & Google Crawler) */}
      <h1 className="sr-only">Babul Hossan — Full Stack &amp; MERN Stack Developer in Dhaka</h1>

      {/* ========================================================================= */}
      {/* 1. Center Portrait of Babul Hossan (Dennis Snellenberg Authentic)          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full flex items-end sm:items-center justify-center overflow-hidden pointer-events-none z-[1]">
        <div className="relative w-full h-[75svh] sm:h-[82vh] md:h-[110%] flex items-end justify-center">
          <Image
            src="/babul-dennis-exact.webp"
            alt="Babul Hossan — Full Stack & MERN Stack Developer in Dhaka"
            width={720}
            height={980}
            priority
            className="h-full w-auto max-w-none object-cover object-[center_top] lg:object-center filter contrast-[1.03]"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. Subtle Gradient Contrast Overlays (Top for Subtitle, Bottom for Marquee)*/}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-[5] flex flex-col justify-between">
        {/* Top subtle fade for header and subtitle legibility */}
        <div className="w-full h-36 sm:h-44 bg-gradient-to-b from-black/35 via-black/10 to-transparent" />
        {/* Bottom fade with black/40 as requested for marquee contrast */}
        <div className="w-full h-44 sm:h-56 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
      </div>

      {/* ========================================================================= */}
      {/* 3. Left Edge Hanger (Dennis Snellenberg Authentic SVG & 3D Rotating Globe) */}
      {/* Desktop only (Dennis Snellenberg hides this on mobile for clean breathing room) */}
      {/* ========================================================================= */}
      <div className="absolute left-0 top-[48%] -translate-y-1/2 z-20 hidden md:flex flex-col items-start gap-4 select-none pointer-events-auto">
        <div className="relative flex items-center">
          
          {/* Authentic Dennis Hanger Combined Shape SVG */}
          <svg
            width="280px"
            height="115px"
            viewBox="0 0 300 121"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <path
              d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
              fill="#1C1D20"
            />
          </svg>

          {/* Location Text */}
          <p className="absolute left-8 top-1/2 -translate-y-1/2 text-[14px] leading-[1.25] font-['Dennis_Sans',sans-serif] font-normal tracking-tight text-white select-none">
            <span className="block text-white/90">Located</span>
            <span className="block text-white/90">in Dhaka,</span>
            <span className="block text-white font-medium">Bangladesh</span>
          </p>

          {/* 3D Wireframe Rotating Globe inside the Circle Cutout */}
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-[#757a7b] flex items-center justify-center shadow-inner">
            <div className="digital-ball !w-9 !h-9 relative">
              <div className="globe !w-9 !h-9">
                <div className="globe-wrap !border-white">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle-hor" />
                  <div className="circle-hor-middle" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Magnetic Resume (CV) Badge beneath the Hanger */}
        <div className="pl-8 pt-1">
          <Magnetic strength={0.3}>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Babul_Hossan_Resume.pdf"
              className="btn btn-normal group block cursor-pointer"
            >
              <div className="btn-click px-5 py-3 rounded-full border border-white/20 bg-[#1C1D20]/90 backdrop-blur-md text-white flex items-center gap-2.5 shadow-xl hover:border-white/40 transition-colors">
                <div className="btn-fill !bg-[#455CE9]" />
                <span className="btn-text">
                  <span className="btn-text-inner text-xs sm:text-sm font-['Dennis_Sans',sans-serif] font-normal flex items-center gap-2 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Download CV</span>
                    <svg
                      width="12px"
                      height="12px"
                      viewBox="0 0 14 14"
                      className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
                        <polyline points="4 2 12 2 12 10" />
                        <line x1="2" y1="12" x2="12" y2="2" />
                      </g>
                    </svg>
                  </span>
                </span>
              </div>
            </a>
          </Magnetic>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. Subtitle & Downward Arrow (Dennis Snellenberg Authentic Mobile & Desktop) */}
      {/* On Mobile: Top-left below navbar. On Desktop: Middle-right.                */}
      {/* ========================================================================= */}
      <div className="absolute top-20 left-6 sm:left-12 sm:top-24 md:top-[46%] md:left-auto md:right-24 lg:right-32 md:-translate-y-1/2 z-20 flex flex-col items-start gap-2 sm:gap-4 select-none pointer-events-none">
        
        {/* Downward Right Arrow ↘ (Dennis Snellenberg Authentic) */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white">
          <svg
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g stroke="#FFFFFF" strokeWidth="1.3" fill="none">
              <polyline points="3 12 12 12 12 3" />
              <line x1="0" y1="0" x2="12" y2="12" />
            </g>
          </svg>
        </div>

        {/* Subtitle */}
        <h4 className="text-lg sm:text-2xl md:text-[34px] font-light font-['Dennis_Sans',sans-serif] leading-[1.25] text-white">
          <span className="block font-normal">Freelance</span>
          <span className="block text-white/95 font-light">Designer &amp; Developer</span>
        </h4>
      </div>

      {/* ========================================================================= */}
      {/* 5. Infinite Horizontal Marquee (In Front of Portrait at z-[15])           */}
      {/* ========================================================================= */}
      <div className="big-name absolute bottom-[3.5vh] sm:bottom-[6vh] md:bottom-[10vh] left-0 w-full overflow-hidden pointer-events-none z-[15]">
        <div ref={slider} className="relative flex w-max whitespace-nowrap">
          <div ref={firstText} className="flex items-center shrink-0 pr-10 sm:pr-16 md:pr-24">
            <p className="m-0 text-white font-['Dennis_Sans',sans-serif] font-normal text-[clamp(3.75rem,15vw,6.5rem)] lg:text-[clamp(6rem,16vw,15rem)] leading-none tracking-tight select-none">
              {personalInfo.name} <span className="px-4 sm:px-6 text-white/70">—</span>
            </p>
          </div>
          <div ref={secondText} className="flex items-center shrink-0 pr-10 sm:pr-16 md:pr-24">
            <p className="m-0 text-white font-['Dennis_Sans',sans-serif] font-normal text-[clamp(3.75rem,15vw,6.5rem)] lg:text-[clamp(6rem,16vw,15rem)] leading-none tracking-tight select-none">
              {personalInfo.name} <span className="px-4 sm:px-6 text-white/70">—</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
