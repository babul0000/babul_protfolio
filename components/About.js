"use client";
import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  const ref = useScrollReveal();
  const resumeLink = "/resume.pdf";

  const stats = [
    { label: "Focus", value: "Frontend Dev", sub: "React, Next.js" },
    { label: "Status", value: "Open to Work", sub: "MERN Stack" }
  ];

  return (
    <section id="about" className="section-padding bg-themeBg border-b border-themeBorder relative" ref={ref}>
      
      {/* Background glow orb */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-themeAccent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-7 space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
                <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
                  Biography
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-themeText leading-tight uppercase tracking-tight">
                My Story &amp; <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xs font-bold uppercase text-themeAccent tracking-wider mt-2.5">
                Full Stack Mern Developer
              </p>
            </div>

            <div className="space-y-4 text-themeTextSecondary text-sm md:text-base leading-relaxed font-normal">
              <p>
                I am a Software Engineer with a background in technical operations and cross-functional coordination. My journey into programming was driven by a clear purpose: <strong>to solve real-world human problems through code</strong>. I believe that software is at its best when it makes people&apos;s lives easier, and that motivation pushes me to build robust, efficient, and user-centric solutions.
              </p>
              <p>
                Currently, I specialize in full-stack MERN development (Next.js, React, Node.js, Express, and MongoDB). I enjoy designing elegant user interfaces, optimization, and structuring efficient backend architectures.
              </p>
              <p>
                Outside of coding, I am passionate about <strong>travelling</strong> to explore new environments, <strong>learning new things</strong> to expand my horizons, and <strong>building meaningful connections</strong> with people from different walks of life.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-medium rounded-xl shadow-lg shadow-themeAccent/10 transition-all text-sm tracking-wide hover:scale-[1.02]"
              >
                Get Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Metric Stats */}
          <div className="lg:col-span-5 space-y-4 reveal" style={{ transitionDelay: "0.2s" }}>
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="p-6 bg-themeCard border border-themeBorder rounded-3xl hover:border-themeAccent/20 hover:shadow-md transition-all duration-300 shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] text-themeTextMuted font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-xl font-black text-themeText mt-1.5">
                    {stat.value}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono font-bold px-2.5 py-1 bg-themeAccent/10 text-themeAccent border border-themeAccent/20 rounded-full uppercase tracking-wider">
                    {stat.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
