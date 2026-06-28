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
    title: "Domain logic translation",
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
    <section id="about" className="section-padding bg-white border-b border-slate-200/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio Card */}
          <div className="lg:col-span-6 space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 rounded-full bg-orange-600" />
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                  About me
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                My Story &amp; <span className="gradient-text">Background</span>
              </h2>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Hey! I&apos;m Babul Hossan
              </h3>
              
              <p className="text-orange-600 font-mono text-xs font-bold uppercase tracking-wide">
                Garments Technician → MERN Stack Developer
              </p>

              <div className="space-y-3 text-slate-500 text-sm leading-relaxed font-normal">
                <p>
                  I started my professional career in the apparel sector as a Sample Technician, accumulating 8+ years of rigorous experience in production workflow coordination and buyer specification management.
                </p>
                <p>
                  Driven by a deep curiosity for software systems, I transitioned into software development. I dedicated myself to master the MERN stack (MongoDB, Express.js, React, Node.js) and modern tooling like Next.js.
                </p>
                <p>
                  My goal is to translate raw business requirements into performant, elegant web applications, combining technical skills with the meticulous quality control and operational discipline gained in buying houses.
                </p>
              </div>

              {/* Connect buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/60">
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 hover:text-orange-600 border border-slate-200 rounded-xl transition shadow-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 hover:text-orange-600 border border-slate-200 rounded-xl transition shadow-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition shadow-sm"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: What I Do */}
          <div className="lg:col-span-6 space-y-6 reveal" style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight md:pt-14">
              What I <span className="text-orange-600 font-extrabold">Do</span>
            </h2>

            <div className="space-y-4">
              {whatIDo.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 bg-white border border-slate-200/80 hover:border-orange-500/20 hover:shadow-md rounded-3xl transition-all duration-300 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-black text-sm shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
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
