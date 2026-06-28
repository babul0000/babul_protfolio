"use client";
import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative bg-white pt-20 pb-28 md:pb-36" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-4 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest" style={{ letterSpacing: "0.12em" }}>
                  Contact
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
                Let’s build something <span className="gradient-text">great</span>
              </h2>
            </div>
            
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md">
              Have a project or idea? I’m ready to help you build it.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-xs font-medium text-green-700">
              <span className="w-2 h-2 rounded-full bg-green-500 status-badge" />
              Available for Work
            </div>

            {/* Email contact block */}
            <div className="space-y-3 pt-4">
              <a
                href="mailto:babulhossan.info@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-0.5">Email</div>
                  <div className="text-sm font-semibold text-slate-800">
                    babulhossan.info@gmail.com
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-slate-400 ml-auto group-hover:text-blue-600 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
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
                  className="w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-800 shadow-sm"
                  aria-label="GitHub"
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
                  className="w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors text-slate-400 hover:text-blue-600 shadow-sm"
                  aria-label="LinkedIn"
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

          {/* Form Side */}
          <div className="reveal w-full" style={{ transitionDelay: "0.2s" }}>
            <div className="p-8 rounded-3xl border border-slate-200/80 bg-slate-50/50 shadow-sm">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Message sent!</h3>
                    <p className="text-sm text-slate-500">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder-slate-400 focus:border-blue-500/40 outline-none transition shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder-slate-400 focus:border-blue-500/40 outline-none transition shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder-slate-400 focus:border-blue-500/40 outline-none transition resize-none shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
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
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
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
