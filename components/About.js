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
    <section id="about" className="section-padding bg-gray-950 border-b border-white/5 relative" ref={ref}>
      
      {/* Background glow orb */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Terminal Mockup */}
          <div className="lg:col-span-6 space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 rounded-full bg-gradient-to-t from-indigo-500 to-purple-500" />
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                  About me
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                My Story &amp; <span className="gradient-text">Background</span>
              </h2>
            </div>

            {/* VS Code Mockup */}
            <div className="w-full bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/5 select-none">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-wider">
                  developer@babul: ~/portfolio
                </span>
                <span className="w-12" /> {/* spacing element */}
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <p className="text-slate-500">&lt;!-- Developer profile properties --&gt;</p>
                <div className="mt-2 text-indigo-400 font-bold">
                  const <span className="text-purple-400">developer</span> = &#123;
                </div>
                <div className="pl-6 space-y-1 mt-1">
                  <div>
                    <span className="text-cyan-400">name</span>:{" "}
                    <span className="text-emerald-400">&quot;Babul Hossan&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">origin</span>:{" "}
                    <span className="text-emerald-400">&quot;Garments Sample Tech (8+ Yrs)&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">stack</span>: [
                    <span className="text-amber-400">&quot;MongoDB&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;Express.js&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;React&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-amber-400">&quot;Next.js&quot;</span>],
                  </div>
                  <div>
                    <span className="text-cyan-400">focus</span>:{" "}
                    <span className="text-emerald-400">&quot;Performance, UI/UX &amp; Clean Architectures&quot;</span>,
                  </div>
                  <div>
                    <span className="text-cyan-400">motto</span>:{" "}
                    <span className="text-emerald-400">&quot;Precision from Buying House audits translates directly to clean software engineering.&quot;</span>
                  </div>
                </div>
                <div className="text-indigo-400 font-bold mt-1">&#125;;</div>
                
                {/* Simulated typed line */}
                <p className="mt-4 text-emerald-400 leading-none">
                  babul@mern-terminal:~$&nbsp;<span className="terminal-cursor text-white font-bold">npm run build</span>
                </p>
              </div>

              {/* Connect footer row */}
              <div className="px-6 py-4 bg-slate-900/50 border-t border-white/5 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-gray-300 bg-slate-900 border border-white/5 hover:border-indigo-500/30 hover:text-white rounded-xl transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-gray-300 bg-slate-900 border border-white/5 hover:border-indigo-500/30 hover:text-white rounded-xl transition"
                >
                  LinkedIn
                </a>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition shadow-md shadow-indigo-500/10"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: What I Do */}
          <div className="lg:col-span-6 space-y-6 reveal" style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-3xl font-black text-white leading-tight md:pt-14 uppercase tracking-tight">
              What I <span className="gradient-text font-extrabold">Do</span>
            </h2>

            <div className="space-y-4">
              {whatIDo.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-slate-900/30 backdrop-blur-md border border-white/5 hover:border-indigo-500/20 rounded-3xl transition-all duration-300 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed font-normal">{item.desc}</p>
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
