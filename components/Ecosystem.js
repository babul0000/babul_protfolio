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
    <section className="py-14 bg-[#f8fafc] border-y border-slate-200/60 overflow-hidden relative mb-8 md:mb-14">
      {/* Side fades */}
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      
      {/* Section Header */}
      <div className="mb-6 text-center">
        <span className="text-[10px] font-mono text-blue-600/60 uppercase tracking-[0.4em]">
          Current Tech Ecosystem
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex select-none">
        <div className="flex animate-marquee">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center justify-center px-10 py-4 opacity-50 hover:opacity-100 hover:text-blue-600 transition-all duration-300 cursor-default"
            >
              <span className="text-slate-800 font-black text-xl tracking-tighter whitespace-nowrap uppercase italic hover:text-blue-600 transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
