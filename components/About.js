"use client";
import { useScrollReveal } from "./useScrollReveal";

const stats = [
  { value: "8+ Years", label: "Experience" },
  { value: "Frontend Dev", label: "Focus" },
  { value: "Open to Work", label: "Status" }
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading and narrative text */}
          <div className="lg:col-span-7 space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-4 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest" style={{ letterSpacing: "0.12em" }}>
                  About me
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-1">
                My Story &amp; <span className="gradient-text">Expertise</span>
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 tracking-wide">
                Babul Hossan
              </h3>
              <p className="text-blue-600 font-mono text-sm tracking-wide uppercase font-semibold">
                Frontend Developer → Future Full Stack
              </p>

              <p className="text-slate-500 text-sm md:text-base font-normal leading-relaxed">
                I started my career as a Sample Technician in the garments industry with 8+ years of experience.
              </p>

              <p className="text-slate-500 text-sm md:text-base font-normal leading-relaxed">
                Now I build modern web applications using React, Next.js, and Node.js. My goal is to become a Full Stack Developer and work globally.
              </p>
            </div>
          </div>

          {/* Right: Stats list grid */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4 reveal" style={{ transitionDelay: "0.2s" }}>
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-blue-500 leading-none">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
