"use client";
import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, sent

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const response = await fetch("https://formspree.io/f/mqaeorle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative bg-themeBg pt-20 pb-28 md:pb-36 font-sans antialiased text-themeText border-b border-themeBorder transition-colors duration-300" ref={ref}>
      
      {/* Background glowing orb */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-themeAccent/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div className="space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
                <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
                  Contact
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 leading-tight uppercase tracking-tight">
                Let’s build something <span className="gradient-text">great</span>
              </h2>
            </div>
            
            <p className="text-themeTextMuted text-sm md:text-base leading-relaxed max-w-md font-normal">
              Have a project or idea? I’m ready to help you build it. Fill out the form or reach out via email or LinkedIn.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 w-fit uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-badge" />
              Available for Work
            </div>

            {/* Email contact block */}
            <div className="space-y-3 pt-4">
              <a
                href="mailto:babulhossan.info@gmail.com"
                className="flex items-center gap-4 p-4 rounded-3xl border border-themeBorder bg-themeCard hover:border-themeAccent/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-themeAccent/10 border border-themeAccent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-themeAccent group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-themeAccent group-hover:text-white transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-themeTextMuted font-bold uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-sm font-semibold text-themeTextSecondary">
                    babulhossan.info@gmail.com
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-themeTextMuted ml-auto group-hover:text-themeAccent transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-themeBorder flex items-center justify-center bg-themeCard hover:border-themeAccent/20 hover:text-themeAccent transition-colors text-themeTextMuted shadow-sm"
                  aria-label="GitHub"
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
                  className="w-10 h-10 rounded-xl border border-themeBorder flex items-center justify-center bg-themeCard hover:border-themeAccent/20 hover:text-themeAccent transition-colors text-themeTextMuted shadow-sm"
                  aria-label="LinkedIn"
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

          {/* Form Side */}
          <div className="reveal w-full" style={{ transitionDelay: "0.2s" }}>
            <div className="p-8 rounded-3xl border border-themeBorder bg-themeCard shadow-sm">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-themeAccent/10 border border-themeAccent/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-themeAccent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-themeText mb-1">Message sent!</h3>
                    <p className="text-xs text-themeTextMuted">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-bold text-themeAccent hover:text-themeAccentHover mt-2 uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-bold text-themeTextMuted mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-themeBorder bg-themeBg text-themeText text-xs placeholder-themeTextMuted focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/10 outline-none transition shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-themeTextMuted mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-themeBorder bg-themeBg text-themeText text-xs placeholder-themeTextMuted focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/10 outline-none transition shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-themeTextMuted mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about the project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl border border-themeBorder bg-themeBg text-themeText text-xs placeholder-themeTextMuted focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/10 outline-none transition resize-none shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-medium text-sm tracking-wide transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
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
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
