"use client";
import Image from "next/image";

export default function Hero() {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1wVdSsXlzOlbM3FNlMGpkz8Djyvf1MyxB";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-themeBg text-themeText font-sans antialiased transition-colors duration-300"
    >
      {/* Ambient background glow meshes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-mesh-orb top-[-10%] left-[-5%] w-[600px] h-[600px] bg-themeAccent/10"></div>
        <div className="bg-mesh-orb bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-themeAccent/10"></div>
        <div className="bg-mesh-orb top-[40%] left-[30%] w-[350px] h-[350px] bg-cyan-500/5"></div>
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(#374151 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column info */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="space-y-4">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-themeCard/60 border border-themeBorder text-themeTextSecondary text-xs font-semibold tracking-wider shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-themeAccent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-themeAccent"></span>
                </span>
                Dhaka, Bangladesh
              </div>

              {/* Greeting */}
              <p className="text-xs font-bold tracking-widest uppercase text-themeAccent leading-none">
                Hey, I&apos;m Babul Hossan
              </p>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-themeText uppercase leading-[1.05]">
                Building Smart &amp;<br />
                <span className="gradient-text font-extrabold">
                  Scalable Web Solutions
                </span>
              </h1>

              {/* Description */}
              <p className="text-themeTextMuted text-sm md:text-base max-w-xl font-normal leading-relaxed">
                I am a Software Engineer specializing in full-stack MERN development (Next.js, React, Node.js, MongoDB) with 8+ years of technical operations and cross-functional coordination experience.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-medium rounded-xl shadow-lg shadow-themeAccent/10 hover:scale-[1.02] transition-all text-sm tracking-wide"
              >
                Contact Me
              </a>

              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-themeCard border border-themeBorder hover:border-themeAccent/30 text-themeTextSecondary font-medium rounded-xl shadow-sm transition-all text-sm flex items-center gap-2 tracking-wide hover:scale-[1.02] hover:text-themeText"
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

              {/* Social icons */}
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-themeBorder flex items-center justify-center bg-themeCard/60 hover:border-themeAccent/30 transition-all text-themeTextMuted hover:text-themeAccent shadow-sm"
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
                  className="w-11 h-11 rounded-xl border border-themeBorder flex items-center justify-center bg-themeCard/60 hover:border-themeAccent/30 transition-all text-themeTextMuted hover:text-themeAccent shadow-sm"
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

          {/* Right Column card image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] max-w-[350px] mx-auto group">
              
              {/* Glowing backing panel */}
              <div className="absolute top-6 -left-6 w-full h-full bg-gradient-to-tr from-themeAccent/20 to-cyan-500/20 rounded-[3rem] rotate-[-4deg] group-hover:rotate-0 transition-transform duration-700"></div>

              {/* Image card wrapper */}
              <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-themeBorder shadow-2xl bg-themeCard">
                <Image
                  alt="Babul Hossan"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/my.webp"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                  <div>
                    <h3 className="text-xl font-bold tracking-wide text-white">Babul Hossan</h3>
                    <p className="text-themeAccent font-mono text-[10px] tracking-widest uppercase mt-1 font-bold">
                      Mern-Stack Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* JS Tech Tag overlay */}
              <div className="absolute -right-6 top-16 z-20 px-4 py-2.5 bg-themeCard/90 backdrop-blur-md border border-themeBorder rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-themeAccent to-cyan-500 flex items-center justify-center text-white font-black text-xs">
                    JS
                  </div>
                  <div>
                    <p className="text-[8px] text-themeTextMuted font-bold uppercase tracking-wider leading-none">
                      Main Stack
                    </p>
                    <p className="text-xs font-semibold text-themeText leading-none mt-1">
                      Modern Web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      </div>
    </section>
  );
}
