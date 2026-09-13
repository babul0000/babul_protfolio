"use client";
import React, { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(16,185,129,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
