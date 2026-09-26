"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  FooterContact,
  Magnetic,
  personalInfo,
  useLenis,
} from "../../components/dennis";
import { Code2, Palette, Layers, Award, Terminal, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    num: "01",
    title: "Design & Interaction",
    desc: "With a solid eye for detail and aesthetics, I craft intuitive digital interfaces, design systems, and fluid micro-interactions that elevate brand perception and delight users.",
    tags: ["UI/UX Design", "Design Systems", "Framer Motion", "GSAP Animations", "Responsive Layouts"],
  },
  {
    num: "02",
    title: "Full Stack Development",
    desc: "I build robust, production-grade applications from the ground up using Next.js 14, React, Node.js, TypeScript, Express, and PostgreSQL/MongoDB, prioritizing performance and security.",
    tags: ["Next.js (App Router)", "React.js", "TypeScript", "Node.js & Express", "PostgreSQL & Prisma", "MongoDB"],
  },
  {
    num: "03",
    title: "The Full Package",
    desc: "A complete digital product from initial wireframe to cloud deployment. I ensure lightning-fast load times, SEO optimization, responsive fidelity across all screens, and continuous maintenance.",
    tags: ["End-to-End Architecture", "Performance & SEO", "Secure Authentication", "Vercel & Cloud Deploy", "Database Design"],
  },
];

const techCategories = [
  {
    title: "Languages & Core",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5 / Semantic", "CSS3 / Modern CSS", "SQL"],
  },
  {
    title: "Frontend Engineering",
    items: ["Next.js 14", "React.js", "Tailwind CSS", "Framer Motion", "GSAP", "Lenis Scroll", "Redux Toolkit"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs", "Better Auth / Firebase"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git & GitHub", "Vercel", "Figma", "Postman", "VS Code", "npm / pnpm", "Linux Bash"],
  },
];

export default function AboutPage() {
  useLenis();

  return (
    <div className="relative min-h-screen w-full bg-[#f4f4f4] text-[#1C1D20] font-['Dennis_Sans',sans-serif] antialiased selection:bg-[#455CE9] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      <main className="w-full pt-36 sm:pt-48 md:pt-56 pb-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        {/* Dennis Signature Hero Title */}
        <div className="mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#999D9E] block mb-4">
            About • MD Babul Hossan
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-normal font-['Dennis_Sans',sans-serif] tracking-tight leading-[1.05] text-[#1C1D20] max-w-5xl">
            Helping brands thrive in the digital world
          </h1>
        </div>

        {/* Top Portrait & Editorial Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-[#D2D2D2]">
          {/* Portrait Photo */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#8e9394] shadow-xl">
            <Image
              src="/babul-about-editorial.webp"
              alt={personalInfo.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#1C1D20]/80 backdrop-blur-md rounded-2xl p-4 text-white text-xs sm:text-sm font-mono flex items-center justify-between border border-white/10">
              <span>MD Babul Hossan</span>
              <span className="text-emerald-400">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Bio Quote & Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug tracking-tight text-[#1C1D20]">
              “I help clients and companies build robust web systems and memorable interactive experiences. Passionate about marrying thoughtful design with rock-solid engineering.”
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#1C1D20]/80 leading-relaxed font-['Dennis_Sans',sans-serif]">
              <p>
                Based in Dhaka, Bangladesh, I work as a freelance full-stack developer and designer. Over the past years, I have engineered diverse web applications ranging from high-performance e-commerce platforms (like OnWear) to emergency healthcare systems (BloodConnect and MediQueue).
              </p>
              <p>
                My philosophy centers on clean code, seamless user interactions, and robust data architectures. I don&apos;t just deliver code—I partner with brands to craft scalable digital solutions that drive real-world impact.
              </p>
            </div>

            {/* Quick Contact & Resume CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="btn btn-normal group"
                >
                  <div className="btn-click px-8 py-4 rounded-full bg-[#1C1D20] text-white flex items-center justify-center relative overflow-hidden shadow-md">
                    <div className="btn-fill !bg-[#455CE9]" />
                    <span className="btn-text">
                      <span className="btn-text-inner text-base font-normal text-white">
                        Get in touch
                      </span>
                    </span>
                  </div>
                </Link>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-normal group"
                >
                  <div className="btn-click px-8 py-4 rounded-full border border-[#1C1D20]/20 bg-transparent text-[#1C1D20] flex items-center justify-center relative overflow-hidden">
                    <div className="btn-fill" />
                    <span className="btn-text">
                      <span className="btn-text-inner text-base font-normal flex items-center gap-2">
                        <span>Download CV</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </span>
                  </div>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Dennis "I can help you with..." 3 Pillars Section */}
        <div className="py-24 border-b border-[#D2D2D2]">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#999D9E] block mb-12">
            Capabilities • What I Do
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-14">
            {capabilities.map((item) => (
              <div
                key={item.num}
                className="flex flex-col justify-between p-8 rounded-3xl bg-white/60 border border-[#1C1D20]/10 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <span className="text-sm font-mono text-[#999D9E] block mb-4">
                    {item.num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#1C1D20] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1C1D20]/75 leading-relaxed mb-6 font-['Dennis_Sans',sans-serif]">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1C1D20]/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#1C1D20]/5 text-[#1C1D20]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal / Skills Matrix */}
        <div className="py-24">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#999D9E] block mb-12">
            Arsenal • Technologies &amp; Tools
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-white/40 border border-[#1C1D20]/10"
              >
                <h4 className="text-lg font-medium text-[#1C1D20] mb-4 pb-2 border-b border-[#1C1D20]/10 font-['Dennis_Sans',sans-serif]">
                  {cat.title}
                </h4>
                <ul className="space-y-2.5">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm sm:text-base text-[#1C1D20]/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#455CE9]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Curved Footer */}
      <FooterContact />
    </div>
  );
}
