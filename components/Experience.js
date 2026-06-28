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
    <section id="experience" className="section-padding bg-white border-b border-slate-200/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-orange-600" />
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
              My Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
            Career Path &amp; <span className="gradient-text">Transition</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto font-normal">
            A chronological timeline of my professional journey from precision manufacturing to full stack software engineering.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-10 reveal" style={{ transitionDelay: "0.2s" }}>
          
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10">
              
              {/* Timeline indicator node */}
              <span className="absolute -left-[9px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-white border-2 border-orange-600 shadow-sm z-10">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-600"></span>
              </span>

              {/* Event card details */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 hover:shadow-md hover:border-orange-500/20 transition-all duration-300 shadow-sm space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-orange-100/50 text-orange-700 rounded-full">
                      {event.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{event.title}</h3>
                    <p className="text-xs font-bold text-slate-400 mt-0.5">{event.org}</p>
                  </div>
                  
                  <span className="text-xs font-bold text-orange-600 sm:text-right shrink-0">
                    {event.year}
                  </span>
                </div>

                <p className="text-slate-500 text-xs leading-relaxed font-normal">
                  {event.desc}
                </p>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/50">
                  {event.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500 font-semibold"
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
