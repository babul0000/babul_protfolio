"use client";
import { useScrollReveal } from "./useScrollReveal";

const whatIDo = [
  {
    title: "Full-Stack Development",
    desc: "Building robust, client-focused web applications using React, Next.js, and Node.js."
  },
  {
    title: "API Design & Integrations",
    desc: "Designing and connecting fast RESTful APIs with secure databases and authentication (BetterAuth, JWT)."
  },
  {
    title: "Responsive UI/UX Design",
    desc: "Crafting modern, pixel-perfect, mobile-first, and responsive layouts using Tailwind CSS."
  },
  {
    title: "Domain Logic Translation",
    desc: "Applying 8+ years of buying house coordination, quality control, and workflow management structure to software cycles."
  },
  {
    title: "Clean Code & Optimization",
    desc: "Writing maintainable, well-documented, modular JavaScript with optimized asset management."
  }
];

export default function About() {
  const ref = useScrollReveal();
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1wVdSsXlzOlbM3FNlMGpkz8Djyvf1MyxB";

  return (
    <section id="about" className="section-padding bg-themeBg border-b border-themeBorder relative transition-colors duration-300" ref={ref}>
      
      {/* Background glow orb */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-themeAccent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Terminal Mockup */}
          <div className="lg:col-span-6 space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
                <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
                  About me
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-themeText leading-tight">
                My Story &amp; <span className="gradient-text">Background</span>
              </h2>
            </div>

            {/* VS Code Mockup */}
            <div className="w-full bg-[#0d1117] border border-themeBorder rounded-2xl overflow-hidden shadow-xl">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-themeBorder select-none">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] text-themeTextMuted font-mono font-bold uppercase tracking-wider">
                  developer@babul: ~/portfolio
                </span>
                <span className="w-12" /> {/* spacing element */}
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <p className="text-slate-500">&lt;!-- Developer profile properties --&gt;</p>
                <div className="mt-2 text-indigo-400 font-bold">
                  const <span className="text-purple-400">babul</span> = &#123;
                </div>
                <div className="pl-6 space-y-1 mt-1">
                  <div>
                    <span className="text-cyan-400">name</span>:{" "}
                    <span className="text-emerald-400">&quot;Babul Hossan&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">role</span>:{" "}
                    <span className="text-emerald-400">&quot;MERN Stack Developer&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">location</span>:{" "}
                    <span className="text-emerald-400">&quot;Bangladesh 🇧🇩&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">codingStart</span>:{" "}
                    <span className="text-emerald-400">&quot;31 December 2025 ⚡&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">learning</span>: [
                    <span className="text-amber-400">&quot;React.js&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;MongoDB&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;Express.js&quot;</span>],
                  </div>
                  <div>
                    <span className="text-cyan-400">current</span>:{" "}
                    <span className="text-emerald-400">&quot;Building projects with React &amp; Tailwind&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">goal</span>:{" "}
                    <span className="text-emerald-400">&quot;Become a professional Full-Stack Developer 🚀&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">funFact</span>:{" "}
                    <span className="text-emerald-400">&quot;Switched careers &rarr; turning ideas into code!&quot;</span>
                  </div>
                </div>
                <div className="text-indigo-400 font-bold mt-1">&#125;;</div>
                
                {/* Simulated typed line */}
                <p className="mt-4 text-emerald-400 leading-none">
                  babul@mern-terminal:~$&nbsp;<span className="terminal-cursor text-white font-bold">npm run build</span>
                </p>
              </div>

              {/* Connect footer row */}
              <div className="px-6 py-4 bg-[#161b22]/50 border-t border-themeBorder flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-themeTextSecondary bg-themeCard border border-themeBorder hover:border-themeAccent/30 hover:text-themeText rounded-xl transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-themeTextSecondary bg-themeCard border border-themeBorder hover:border-themeAccent/30 hover:text-themeText rounded-xl transition"
                >
                  LinkedIn
                </a>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-themeAccent hover:bg-themeAccentHover rounded-xl transition shadow-sm"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: What I Do */}
          <div className="lg:col-span-6 space-y-6 reveal" style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-3xl font-black text-themeText leading-tight md:pt-14 uppercase tracking-tight">
              What I <span className="gradient-text font-extrabold">Do</span>
            </h2>

            {/* Career Switch Journey Indicator Card */}
            <div className="p-6 bg-themeCard border border-themeBorder rounded-3xl relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-themeAccent/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center justify-between gap-4 text-center">
                <div>
                  <span className="text-[10px] font-mono font-bold text-themeTextMuted uppercase tracking-wider block mb-1">🎯 Then</span>
                  <div className="px-3 py-1.5 rounded-xl bg-themeCard border border-themeBorder text-xs font-semibold text-themeTextSecondary">
                    Garments Sample Tech
                  </div>
                  <span className="text-[10px] text-themeTextMuted mt-1 block">👕 Stitching fabric</span>
                </div>
                <div className="text-themeAccent animate-pulse text-lg">⚡</div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-themeTextMuted uppercase tracking-wider block mb-1">🚀 Now</span>
                  <div className="px-3 py-1.5 rounded-xl bg-themeAccent/10 border border-themeAccent/20 text-xs font-bold text-themeAccent">
                    MERN Stack Developer
                  </div>
                  <span className="text-[10px] text-themeTextMuted mt-1 block">💻 Writing code</span>
                </div>
              </div>
              <blockquote className="text-center italic text-xs text-themeTextSecondary mt-4 pt-4 border-t border-themeBorder font-medium">
                &ldquo;Coding is my new craft — and I&apos;m just getting started.&rdquo;
              </blockquote>
            </div>

            <div className="space-y-4">
              {whatIDo.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-themeCard border border-themeBorder rounded-3xl hover:border-themeAccent/20 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-themeAccent/10 border border-themeAccent/20 flex items-center justify-center text-themeAccent font-black text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-themeText">{item.title}</h4>
                    <p className="text-xs text-themeTextMuted mt-1 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
