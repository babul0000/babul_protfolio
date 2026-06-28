"use client";
import Image from "next/image";

export default function Hero() {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1wVdSsXlzOlbM3FNlMGpkz8Djyvf1MyxB";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white font-sans antialiased text-slate-900"
    >
      {/* Background grids and glowing meshes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(#e2e8f0 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left column info */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest">
                Available for Projects
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-slate-900 leading-[1.2]">
              Building <span className="text-blue-600 font-semibold">Smart</span>
              <br />
              <span className="flex items-center gap-3 my-1">
                <span className="h-[1px] w-8 md:w-12 bg-slate-200 hidden sm:block"></span>
                &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold">
                  Scalable
                </span>
              </span>
              Web Solutions
            </h1>

            <p className="text-slate-500 text-sm md:text-base max-w-md font-normal leading-relaxed tracking-normal">
              I build modern web applications that solve real-world problems, work fast, and are easy to use.{" "}
              <span className="text-blue-600 font-medium">
                Focused on performance and user-friendly experience
              </span>
              .
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/10 transition-all text-sm flex items-center gap-2 tracking-wide"
            >
              Get Resume{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </a>

            <div className="flex gap-2.5">
              <a
                href="https://github.com/babul0000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-all text-slate-500 hover:text-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
                className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-all text-slate-500 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
        <div className="relative">
          <div className="relative w-full aspect-[4/5] max-w-[400px] mx-auto group">
            {/* Blue border backing panel */}
            <div className="absolute top-10 -left-10 w-full h-full bg-blue-100/70 rounded-[3rem] rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700"></div>
            
            {/* Image card wrapper */}
            <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
              <Image
                alt="Babul Hossan"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="/my.webp"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-medium tracking-wide text-white">Babul Hossan</h3>
                    <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mt-1">
                      Mern-Stack Web Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* JS Tech Tag overlay */}
            <div className="absolute -right-8 top-20 z-20 px-5 py-3 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                  JS
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    Main Stack
                  </p>
                  <p className="text-xs font-semibold text-slate-800 leading-none mt-0.5">
                    Modern Web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
