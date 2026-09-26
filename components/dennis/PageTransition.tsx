"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/work": "Work",
  "/about": "About",
  "/contact": "Contact",
};

export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayRoute, setDisplayRoute] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Skip the transition on the very first mount if preloader runs on home
    if (!mounted) {
      setMounted(true);
      if (pathname !== "/") {
        const initialName = routeNames[pathname] || "Babul";
        setDisplayRoute(initialName);
        setIsTransitioning(true);
        const timer = setTimeout(() => {
          setIsTransitioning(false);
        }, 850);
        return () => clearTimeout(timer);
      }
      return;
    }

    const currentName = routeNames[pathname] || "Babul";
    setDisplayRoute(currentName);
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [pathname, mounted]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key={pathname}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[999] pointer-events-none flex flex-col items-center justify-center bg-[#1C1D20]"
        >
          {/* Centered Route Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center gap-3 text-white text-3xl sm:text-4xl md:text-5xl font-['Dennis_Sans',sans-serif] tracking-tight"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#455CE9]" />
            <span>{displayRoute}</span>
          </motion.div>

          {/* Dennis Signature Curved Bottom Mask */}
          <div className="absolute top-full left-0 w-full h-[120px] pointer-events-none overflow-hidden">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full text-[#1C1D20] fill-current"
            >
              <path d="M0 0 Q 720 120 1440 0 L 1440 0 L 0 0 Z" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
