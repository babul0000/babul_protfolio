"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Mail, MessageSquare, Send, Check, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [form, setForm] = useState<FormDataState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const emailAddress = "babulhossan.dev@gmail.com";
  const whatsappUrl = "https://wa.me/8801934825500";
  const linkedinUrl = "https://www.linkedin.com/in/babul-hossan-09932837a/";
  const githubUrl = "https://github.com/babul0000";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent successfully! I will reply promptly.");
      } else {
        setStatus("idle");
        toast.error("Failed to send message. Please reach out via email or WhatsApp.");
      }
    } catch {
      setStatus("idle");
      toast.error("An error occurred. Please email babulhossan.dev@gmail.com directly.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Centered NasirChy Exact Contact Card */}
        <div className="rounded-3xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-8 sm:p-12 md:p-14 text-center backdrop-blur-sm shadow-xl relative overflow-hidden">
          
          {/* Avatar Header */}
          <div className="flex flex-col items-center gap-2.5 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-white dark:border-zinc-700 ring-2 ring-zinc-200 dark:ring-zinc-800">
              <Image
                src="/my.webp"
                alt="Babul Hossan"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-base">
              Babul Hossan
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-zinc-400">
              Full Stack MERN Developer
            </p>
          </div>

          {/* Bold Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Building Something Amazing?<br />
            <span className="text-slate-400 dark:text-zinc-500 font-normal">Let&apos;s chat.</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 dark:text-zinc-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            I build fast, accessible, and scalable web apps with React, Next.js, TypeScript, Node.js, and PostgreSQL. Open for full-time frontend/full-stack engineering roles and high-impact freelance projects.
          </p>

          {/* Action Buttons Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <a
              href={`mailto:${emailAddress}`}
              className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email me</span>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-800 text-slate-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-800 text-slate-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Action Buttons Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-800 text-slate-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-green-500" />
              <span>WhatsApp</span>
            </a>

            <a
              href="/Babul_Hossan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-zinc-800 text-slate-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              <FileText className="w-4 h-4 text-emerald-500" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-zinc-100 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 px-4 py-2.5 rounded-full font-medium text-sm flex items-center gap-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
              <span>{showForm ? "Hide Message Form" : "Send Quick Message"}</span>
              {showForm ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Expandable Direct Contact Form */}
          {showForm && (
            <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-left animate-in fade-in slide-in-from-top-4">
              {status === "sent" ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 max-w-sm mx-auto">
                    Thank you! I will review your note and respond as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-mono text-emerald-500 hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 max-w-lg mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-500 dark:text-zinc-400 mb-1 uppercase">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-500 dark:text-zinc-400 mb-1 uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 dark:text-zinc-400 mb-1 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Hiring"
                      className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 dark:text-zinc-400 mb-1 uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Hi Babul, I would like to discuss..."
                      className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
