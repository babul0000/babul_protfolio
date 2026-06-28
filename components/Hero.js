"use client";
import Image from "next/image";

export default function Hero() {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1wVdSsXlzOlbM3FNlMGpkz8Djyvf1MyxB";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-slate-50 font-sans antialiased text-slate-900 border-b border-slate-200/50"
    >
      {/* Background glowing meshes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(#e2e8f0 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column info */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="space-y-4">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-semibold tracking-wide w-fit">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Dhaka, Bangladesh
              </div>

              {/* Greeting */}
              <p className="text-sm font-bold tracking-widest uppercase text-orange-600 leading-none">
                Hey, I&apos;m Babul Hossan
              </p>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 uppercase leading-[1.1]">
                Full Stack<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 font-extrabold">
                  Developer
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base max-w-xl font-normal leading-relaxed tracking-normal">
                I build modern web applications that solve real-world problems. Leveraging 8+ years of detail-oriented garments technology experience to architect clean, scalable, and optimized digital solutions.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:scale-[1.02] transition-all text-sm tracking-wider uppercase"
              >
                Contact Me
              </a>

              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl shadow-sm transition-all text-sm flex items-center gap-2 tracking-wide hover:scale-[1.02]"
              >
                Get Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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

              {/* Social icons */}
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-orange-500/30 transition-all text-slate-500 hover:text-orange-600 shadow-sm"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-orange-500/30 transition-all text-slate-500 hover:text-orange-600 shadow-sm"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column card image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] max-w-[360px] mx-auto group">
              {/* Orange border backing panel */}
              <div className="absolute top-8 -left-8 w-full h-full bg-orange-100/80 rounded-[3rem] rotate-[-4deg] group-hover:rotate-0 transition-transform duration-700"></div>

              {/* Image card wrapper */}
              <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl bg-white">
                <Image
                  alt="Babul Hossan"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/my.webp"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div>
                    <h3 className="text-xl font-bold tracking-wide text-white">Babul Hossan</h3>
                    <p className="text-orange-400 font-mono text-xs tracking-wider uppercase mt-1">
                      Mern-Stack Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* JS Tech Tag overlay */}
              <div className="absolute -right-6 top-16 z-20 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                    JS
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                      Main Stack
                    </p>
                    <p className="text-xs font-semibold text-slate-800 leading-none mt-1">
                      Modern Web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid at the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200/80">
          {[
            { value: "2025", label: "Journey Started" },
            { value: "8+ Yrs", label: "Garments Industry Exp" },
            { value: "6+", label: "Projects Built" },
            { value: "25+", label: "GitHub Repos" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 bg-white rounded-3xl border border-slate-200/80 hover:border-orange-500/30 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              <p className="text-3xl font-black text-orange-600 leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
