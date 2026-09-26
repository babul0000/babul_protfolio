"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { personalInfo } from "./data";

export default function FooterContact() {
  const [time, setTime] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Dennis Signature Dynamic Curve flattening from 120px to 0px on scroll
  const curveHeight = useTransform(scrollYProgress, [0, 0.4], [120, 0]);

  // Dennis Signature Parallax floating speed on "Get in touch" circle button
  const buttonY = useTransform(scrollYProgress, [0, 1], [-80, 20]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="contact"
      ref={containerRef}
      className="relative w-full bg-[#f4f4f4] overflow-hidden select-none"
    >
      {/* Signature Scroll-Flattening Dynamic Curved Transition into Dark Footer */}
      <div className="relative w-full overflow-hidden pointer-events-none z-10">
        <motion.div
          style={{ height: curveHeight }}
          className="w-full relative overflow-hidden"
        >
          <div className="absolute top-0 -left-[25%] w-[150%] h-[500%] bg-[#1C1D20] rounded-[50%]" />
        </motion.div>
      </div>

      <footer className="relative w-full bg-[#1C1D20] text-white pt-16 sm:pt-24 pb-14 sm:pb-16 px-6 sm:px-12 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[70vh]">
          
          {/* Main Hero Header Row: Profile Avatar + "Let's work together" */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-2xl bg-zinc-800">
                <Image
                  src="/icon.png"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal font-['Dennis_Sans',sans-serif] tracking-tight leading-none text-white">
                Let’s work
              </h2>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal font-['Dennis_Sans',sans-serif] tracking-tight leading-none text-white">
                together
              </h2>
              
              {/* Downward-Left Arrow (Dennis Signature) */}
              <div className="hidden sm:flex w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/20 items-center justify-center text-white/70">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 14 14"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                >
                  <g stroke="#FFFFFF" strokeWidth="1.25" fill="none">
                    <polyline points="11.2307692 14 2 14 2 4.76923077" />
                    <line x1="2" y1="14" x2="14" y2="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Divider Line with Floating Cobalt Blue "Get in touch" Button */}
          <div className="relative mt-20 mb-16 sm:mt-28 sm:mb-20 w-full">
            <div className="w-full h-[1px] bg-white/20" />

            {/* Cobalt Blue Circle Button right on top of the line with Parallax */}
            <motion.div
              style={{ y: buttonY }}
              className="absolute right-6 sm:right-16 md:right-32 top-0 -translate-y-1/2 z-20"
            >
              <Magnetic strength={0.4}>
                <Link
                  href="/contact"
                  className="btn btn-round group block"
                >
                  <div className="btn-click w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full !bg-[#455CE9] hover:!bg-[#334BD3] text-white flex items-center justify-center relative overflow-hidden shadow-2xl transition-colors duration-300">
                    <div className="btn-fill !bg-[#334BD3]" />
                    <span className="btn-text">
                      <span className="btn-text-inner text-base sm:text-xl font-medium tracking-tight text-white">
                        Get in touch
                      </span>
                    </span>
                  </div>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* Contact Action Pills on Left below Divider */}
          <div className="flex flex-wrap gap-4 items-center">
            <Magnetic strength={0.25}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-normal group block"
              >
                <div className="btn-click px-7 sm:px-9 py-4 sm:py-5 rounded-full border border-white/25 text-white flex items-center justify-center relative overflow-hidden shadow-sm hover:border-white/50 transition-colors">
                  <div className="btn-fill !bg-[#455CE9]" />
                  <span className="btn-text">
                    <span className="btn-text-inner text-sm sm:text-base font-['Dennis_Sans',sans-serif] text-white">
                      {personalInfo.email}
                    </span>
                  </span>
                </div>
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href={`tel:${personalInfo.phone}`}
                className="btn btn-normal group block"
              >
                <div className="btn-click px-7 sm:px-9 py-4 sm:py-5 rounded-full border border-white/25 text-white flex items-center justify-center relative overflow-hidden shadow-sm hover:border-white/50 transition-colors">
                  <div className="btn-fill !bg-[#455CE9]" />
                  <span className="btn-text">
                    <span className="btn-text-inner text-sm sm:text-base font-['Dennis_Sans',sans-serif] text-white">
                      {personalInfo.phoneDisplay}
                    </span>
                  </span>
                </div>
              </a>
            </Magnetic>
          </div>

          {/* Bottom Footer Bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-xs font-mono text-white/50">
            
            {/* Version & Live Clock */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-16">
              <div>
                <span className="text-[10px] uppercase text-white/40 block mb-1">
                  VERSION
                </span>
                <span className="text-white/85">2026 © Edition</span>
              </div>

              <div>
                <span className="text-[10px] uppercase text-white/40 block mb-1">
                  LOCAL TIME (DHAKA)
                </span>
                <span className="text-white/85">{time || "07:30 PM GMT+6"}</span>
              </div>
            </div>

            {/* Socials with Magnetic Hover */}
            <div>
              <span className="text-[10px] uppercase text-white/40 block mb-2 md:text-right">
                SOCIALS
              </span>
              <ul className="flex items-center gap-6 sm:gap-8 text-sm text-white/85 font-['Dennis_Sans',sans-serif]">
                <li>
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Babul_Hossan_Resume.pdf"
                      className="hover:text-white transition-colors"
                    >
                      Resume
                    </a>
                  </Magnetic>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}
