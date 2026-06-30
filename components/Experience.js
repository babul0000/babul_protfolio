"use client";
import { useScrollReveal } from "./useScrollReveal";

const timelineEvents = [
  {
    year: "2025 — Present",
    title: "MERN Stack Web Developer",
    org: "Self-Learning & Programming Hero Level 1",
    desc: "Decided to follow my passion for software systems. Dived into computer science foundations and full-stack web development. Mastered HTML, CSS, JavaScript, React, Next.js, Express.js, Node.js, and MongoDB. Committed to writing clean code, building responsive interfaces, and resolving complex workflow logics.",
    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"],
    badge: "Software"
  },
  {
    year: "2018 — Present",
    title: "Garments Sample Technician",
    org: "Buying House (Apparel Sector)",
    desc: "Promoted to Buying House as a Sample Technician. Coordinating complex sample fabrication stages between international fashion buyers and local factory operations. Excelled in parsing detailed client requirement documents, maintaining strict audit specifications, and resolving technical sizing/material challenges.",
    skills: ["Requirements Parsing", "Meticulous Audit", "Communication", "Problem Solving"],
    badge: "Buying House"
  },
  {
    year: "2013 — 2018",
    title: "Production Coordinator & Auditor",
    org: "Garments Manufacturing Units",
    desc: "Started my career in garments manufacturing factories. Managed assembly workflows, audited product quality, and tracked hourly yield charts. Developed a deep respect for operational discipline, workflow optimization, and speed under strict deadlines.",
    skills: ["Operational Quality", "Workflow Efficiency", "Attention to Detail", "Discipline"],
    badge: "Manufacturing"
  }
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-gray-950 border-b border-white/5 relative" ref={ref}>
      
      {/* Background glowing orb */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-indigo-500" />
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              My Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-1 uppercase tracking-tight">
            Career Path &amp; <span className="gradient-text">Transition</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto font-normal">
            A chronological timeline of my professional journey from precision manufacturing to full stack software engineering.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative ml-3 md:ml-6 space-y-10 reveal" style={{ transitionDelay: "0.2s" }}>
          
          {/* Vertical Laser Line */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
          
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              
              {/* Timeline indicator node */}
              <span className="absolute -left-[7px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
              </span>

              {/* Event card details */}
              <div className="bg-slate-900/35 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:border-indigo-500/20 hover:shadow-xl transition-all duration-300 shadow-lg space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] font-mono font-bold px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full uppercase tracking-wider">
                      {event.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2">{event.title}</h3>
                    <p className="text-xs font-bold text-gray-500 mt-0.5">{event.org}</p>
                  </div>
                  
                  <span className="text-xs font-bold text-indigo-400 sm:text-right shrink-0">
                    {event.year}
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed font-normal">
                  {event.desc}
                </p>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {event.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-white/5 text-gray-400 font-semibold"
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
