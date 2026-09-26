"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Magnetic from "./Magnetic";
import Link from "next/link";
import { personalInfo } from "./data";

interface OffcanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function OffcanvasMenu({ isOpen, onClose }: OffcanvasMenuProps) {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

  const curveVariants: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const menuVariants: Variants = {
    initial: { x: "calc(100% + 100px)" },
    enter: {
      x: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-[#1C1D20] text-white z-[90] flex flex-col justify-between p-12 sm:p-20 shadow-2xl"
        >
          {/* Curved Left Border SVG */}
          <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-[#1C1D20] stroke-none pointer-events-none">
            <motion.path
              variants={curveVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            />
          </svg>

          {/* Navigation Section */}
          <div className="flex flex-col gap-6 mt-12">
            <span className="text-xs uppercase tracking-widest text-[#999D9E] border-b border-[#999D9E]/20 pb-4 font-mono">
              Navigation
            </span>

            <ul className="flex flex-col gap-4 font-['Dennis_Sans',sans-serif]">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.title}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.2 + idx * 0.08,
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.6,
                    },
                  }}
                  exit={{
                    x: 80,
                    opacity: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center text-4xl sm:text-5xl font-light hover:text-white/80 transition-colors"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 mr-4" />
                    <span>{link.title}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Socials & Identity */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#999D9E] font-mono">
              Socials
            </span>
            <div className="flex flex-wrap gap-4 text-sm text-[#999D9E]">
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
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
