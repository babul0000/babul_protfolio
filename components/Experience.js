"use client";
import { useScrollReveal } from "./useScrollReveal";

const timelineEvents = [
  {
    year: "2025 — Present",
    title: "Mern Stack Developer (Programming Hero Level 1 + Self Learning)",
    org: "Programming Hero & Personal Projects",
    desc: "Currently learning full stack web development through Programming Hero Level 1 course while building real-world projects. Working with frontend and backend technologies including React, Next.js, Node.js, Express.js, and MongoDB. Focused on UI/UX, API development, authentication, and performance optimization.",
    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"],
    badge: "Software"
  },
  {
    year: "2018 — Present",
    title: "Technical Operations Specialist (Cross-Functional Coordination)",
    org: "Manufacturing & Buying House Operations",
    desc: "Diagnosed and resolved complex technical issues under tight deadlines, coordinating across design, quality, and production teams to deliver projects on schedule. Led end-to-end project execution for international clients. Served as primary technical point of contact, translating requirements into execution plans—a skill directly transferable to client-facing engineering roles.",
    skills: ["Project Coordination", "Quality Control", "Client Relations", "Workflow Optimization"],
    badge: "Buying House"
  }
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-themeBg border-b border-themeBorder relative transition-colors duration-300" ref={ref}>
      
      {/* Background glowing orb */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-themeAccent/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              My Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 uppercase tracking-tight">
            Career Path &amp; <span className="gradient-text">Transition</span>
          </h2>
          <p className="text-themeTextMuted text-sm mt-3 max-w-md mx-auto font-normal">
            A chronological timeline of my professional journey from precision manufacturing to full stack software engineering.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative ml-3 md:ml-6 space-y-10 reveal" style={{ transitionDelay: "0.2s" }}>
          
          {/* Vertical Laser Line */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-themeAccent via-emerald-500 to-cyan-500 shadow-[0_0_10px_rgba(46,204,113,0.2)]" />
          
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              
              {/* Timeline indicator node */}
              <span className="absolute -left-[7px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-themeBg border-2 border-themeAccent shadow-[0_0_8px_rgba(46,204,113,0.3)] z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-themeAccent"></span>
              </span>

              {/* Event card details */}
              <div className="bg-themeCard border border-themeBorder rounded-3xl p-6 md:p-8 hover:border-themeAccent/20 hover:shadow-md transition-all duration-300 shadow-sm space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] font-mono font-bold px-2.5 py-1 bg-themeAccent/10 text-themeAccent border border-themeAccent/20 rounded-full uppercase tracking-wider">
                      {event.badge}
                    </span>
                    <h3 className="text-lg font-bold text-themeText mt-2">{event.title}</h3>
                    <p className="text-xs font-bold text-themeTextMuted mt-0.5">{event.org}</p>
                  </div>
                  
                  <span className="text-xs font-bold text-themeAccent sm:text-right shrink-0">
                    {event.year}
                  </span>
                </div>

                <p className="text-themeTextMuted text-xs leading-relaxed font-normal">
                  {event.desc}
                </p>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-themeBorder">
                  {event.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-themeCardHover border border-themeBorder text-themeTextMuted font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
