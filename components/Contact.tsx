"use client";
import React, { useState, FormEvent, ChangeEvent, MouseEvent } from "react";
import { toast } from "sonner";
import { Mail, MessageSquare, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormDataState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const emailAddress = "babulhossan.dev@gmail.com";
  const whatsappNumber = "+880 1934-825500";

  const handleCopyEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
        toast.error("Failed to send message. Please reach out via direct email or WhatsApp.");
      }
    } catch {
      setStatus("idle");
      toast.error("An error occurred. Please reach out directly via email.");
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-themeText tracking-tight">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-2 text-sm sm:text-base text-themeTextSecondary max-w-2xl">
            Open for full-time engineering roles, high-impact contract projects, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (5 cols): Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="bento-crosshair p-5 flex items-center justify-between">
              <a href={`mailto:${emailAddress}`} className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-themeTextMuted">EMAIL ME</div>
                  <div className="text-sm font-semibold text-themeText truncate hover:text-emerald-500 transition-colors">
                    {emailAddress}
                  </div>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-themeTextMuted hover:text-emerald-500 transition-colors shrink-0 ml-2"
                title="Copy email"
                aria-label="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/8801934825500"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-crosshair p-5 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-themeTextMuted">WHATSAPP DIRECT</div>
                  <div className="text-sm font-semibold text-themeText group-hover:text-emerald-500 transition-colors">
                    {whatsappNumber}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-themeTextMuted group-hover:text-emerald-500 transition-colors shrink-0" />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/babul-hossan-09932837a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-crosshair p-5 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-themeTextMuted">LINKEDIN PROFILE</div>
                  <div className="text-sm font-semibold text-themeText group-hover:text-emerald-500 transition-colors">
                    Babul Hossan
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-themeTextMuted group-hover:text-emerald-500 transition-colors shrink-0" />
            </a>

            {/* GitHub Profile Card */}
            <a
              href="https://github.com/babul0000"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-crosshair p-5 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-zinc-500/10 text-themeText flex items-center justify-center shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-themeTextMuted">GITHUB REPOSITORIES</div>
                  <div className="text-sm font-semibold text-themeText group-hover:text-emerald-500 transition-colors">
                    @babul0000
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-themeTextMuted group-hover:text-emerald-500 transition-colors shrink-0" />
            </a>
          </div>

          {/* Right Column (7 cols): Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bento-crosshair p-6 sm:p-8">
              <span className="absolute -top-2 -left-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>
              <span className="absolute -top-2 -right-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>
              <span className="absolute -bottom-2 -left-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>
              <span className="absolute -bottom-2 -right-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>

              {status === "sent" ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-themeText">Message Sent Successfully!</h3>
                  <p className="text-xs text-themeTextSecondary max-w-sm mx-auto">
                    Thank you for reaching out. I&apos;ll review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-themeTextMuted mb-1.5 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/60 text-xs text-themeText focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-themeTextMuted mb-1.5 uppercase">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/60 text-xs text-themeText focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-themeTextMuted mb-1.5 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/60 text-xs text-themeText focus:border-emerald-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-themeTextMuted mb-1.5 uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Hi Babul, I came across your portfolio and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/60 text-xs text-themeText focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
          </div>
        </div>
      </div>
    </section>
  );
}
