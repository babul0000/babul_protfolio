"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "./data";
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
      className="relative min-h-screen lg:min-h-[115vh] w-full bg-[#8e9394] text-white overflow-hidden flex items-center justify-center select-none"
    >
      {/* ========================================================================= */}
      {/* 1. Center Portrait of MD Babul Hossan (Dennis Snellenberg Authentic)      */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none z-[1]">
        <div className="relative w-full h-[110%] -top-[5%] flex items-center justify-center">
          <Image
            src="/babul-dennis-exact.webp"
            alt={personalInfo.name}
            width={720}
            height={980}
            priority
            className="h-full w-auto max-w-none object-cover object-center filter contrast-[1.03]"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. Left Edge Hanger (Dennis Snellenberg Authentic SVG & 3D Rotating Globe)*/}
      {/* ========================================================================= */}
      <div className="absolute left-0 top-[48%] -translate-y-1/2 z-20 hidden md:block select-none pointer-events-auto">
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
      </div>

      {/* ========================================================================= */}
      {/* 3. Right Subtitle & Downward Arrow (Dennis Snellenberg Authentic)         */}
      {/* ========================================================================= */}
      <div className="absolute right-8 sm:right-16 md:right-24 lg:right-32 top-[46%] -translate-y-1/2 z-20 flex flex-col items-start gap-4 select-none pointer-events-none">
        
        {/* Downward Right Arrow ↘ (Dennis Snellenberg Authentic) */}
        <div className="w-8 h-8 text-white">
          <svg
            width="28px"
            height="28px"
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
        <h4 className="text-2xl sm:text-3xl md:text-[34px] font-light font-['Dennis_Sans',sans-serif] leading-[1.25] text-white">
          <span className="block font-normal">Freelance</span>
          <span className="block text-white/95 font-light">Designer &amp; Developer</span>
        </h4>
      </div>

      {/* ========================================================================= */}
      {/* 4. Infinite Horizontal Marquee (In Front of Portrait at z-[15])           */}
      {/* ========================================================================= */}
      <div className="big-name absolute bottom-[8vh] sm:bottom-[10vh] left-0 w-full overflow-hidden pointer-events-none z-[15]">
        <div ref={slider} className="relative flex w-max whitespace-nowrap">
          <div ref={firstText} className="flex items-center shrink-0 pr-16 sm:pr-24">
            <p className="m-0 text-white font-['Dennis_Sans',sans-serif] font-normal text-[clamp(6rem,16vw,15rem)] leading-none tracking-tight select-none">
              {personalInfo.name} <span className="px-6 text-white/70">—</span>
            </p>
          </div>
          <div ref={secondText} className="flex items-center shrink-0 pr-16 sm:pr-24">
            <p className="m-0 text-white font-['Dennis_Sans',sans-serif] font-normal text-[clamp(6rem,16vw,15rem)] leading-none tracking-tight select-none">
              {personalInfo.name} <span className="px-6 text-white/70">—</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
