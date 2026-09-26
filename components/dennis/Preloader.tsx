"use client";
import React, { useEffect, useState } from "react";
import { preloaderGreetings } from "./data";

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (index === preloaderGreetings.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsComplete(true);
        // Completely remove from DOM after curtain slide-up
        setTimeout(() => setIsVisible(false), 950);
      }, 300);
      return () => clearTimeout(exitTimer);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 280 : 150);

    return () => clearTimeout(interval);
  }, [index]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        transform: isComplete ? "translateY(-100%)" : "translateY(0%)",
        transition: "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)",
        pointerEvents: isComplete ? "none" : "auto",
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#141517] text-white select-none overflow-visible"
    >
      {/* Greetings Text */}
      <div className="z-10 flex items-center gap-3.5 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
        <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-sm" />
        <span className="font-['Dennis_Sans',sans-serif]">
          {preloaderGreetings[index]}
        </span>
      </div>

      {/* Signature Curved Bottom SVG Arch (Theatre Curtain Pull-Up Effect) */}
      <svg
        viewBox="0 0 1440 250"
        className="absolute top-[99%] left-0 w-full h-[180px] fill-[#141517] pointer-events-none"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L1440,0 Q720,250 0,0 Z" />
      </svg>
    </div>
  );
}
