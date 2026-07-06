"use client";

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "JavaScript",
  "MERN Stack",
  "Express",
  "HeroUI"
];

export default function Ecosystem() {
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-12 bg-themeBg border-y border-themeBorder overflow-hidden relative font-sans antialiased text-themeText transition-colors duration-300">
      
      {/* Background glowing orb meshes matching Hero */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[250px] h-[250px] bg-themeAccent/5 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Side fades blending into the theme background */}
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-themeBg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-themeBg to-transparent z-10 pointer-events-none" />
      
      {/* Section Header */}
      <div className="mb-8 text-center relative z-20">
        <span className="text-[10px] font-mono text-themeAccent uppercase tracking-[0.4em] font-extrabold">
          Current Tech Ecosystem
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex select-none relative z-20 overflow-hidden">
        <div className="flex animate-marquee py-2 gap-4">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center justify-center px-6 py-2.5 rounded-2xl bg-themeCard border border-themeBorder shadow-sm hover:border-themeAccent/30 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <span className="text-themeTextSecondary font-bold text-xs tracking-wide whitespace-nowrap uppercase group-hover:text-themeAccent transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-themeAccent/40 group-hover:bg-themeAccent transition-colors" />
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
