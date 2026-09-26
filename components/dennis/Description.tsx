"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

function Word({ children, progress, range }: { children: React.ReactNode; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <span className="relative inline-block mr-2 sm:mr-3">
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Description() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const { scrollYProgress: sectionScroll } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dennis Signature Parallax floating speed on the circular "About me" button
  const buttonY = useTransform(sectionScroll, [0, 1], [0, 110]);

  const words = phrase.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#f4f4f4] text-[#1C1D20] pt-28 sm:pt-40 md:pt-48 pb-16 sm:pb-24 px-6 sm:px-12 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Statement with Scroll Word-by-Word Reveal */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-normal font-['Dennis_Sans',sans-serif] leading-[1.3] tracking-tight text-[#1C1D20] flex flex-wrap">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </h2>
          </div>

          {/* Secondary Column & Circular Magnetic "About me" Button with Parallax */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-10">
            <p className="text-base sm:text-lg text-[#1C1D20]/75 font-['Dennis_Sans',sans-serif] leading-relaxed">
              The combination of my passion for design, code &amp; interaction positions me in a unique place in the modern web development world.
            </p>

            <motion.div style={{ y: buttonY }} className="self-start lg:self-auto pt-2">
              <Magnetic strength={0.35}>
                <Link
                  href="/about"
                  className="btn btn-round group block"
                >
                  <div className="btn-click w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-[#1C1D20] text-white flex items-center justify-center relative overflow-hidden shadow-xl">
                    <div className="btn-fill !bg-[#455CE9]" />
                    <span className="btn-text">
                      <span className="btn-text-inner text-base font-normal text-white">
                        About me
                      </span>
                    </span>
                  </div>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
