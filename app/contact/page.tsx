"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  Navbar,
  Magnetic,
  personalInfo,
  useLenis,
} from "../../components/dennis";
import { Check, Send, ArrowDownLeft } from "lucide-react";

const availableServices = [
  "Web Development",
  "Web Design",
  "Full Stack App",
  "E-Commerce",
  "API & Database",
];

export default function ContactPage() {
  useLenis();

  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    services: [] as string[],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleService = (service: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Inquiry from ${form.name}${
            form.organization ? ` (${form.organization})` : ""
          } [${form.services.join(", ") || "General"}]`,
          message: `${form.message}\n\nSelected Services: ${
            form.services.join(", ") || "None specified"
          }\nOrganization: ${form.organization || "N/A"}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully! Babul will get back to you soon.");
        setForm({
          name: "",
          email: "",
          organization: "",
          services: [],
          message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred. You can email directly at babulhossan.info@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#1C1D20] text-white font-['Dennis_Sans',sans-serif] antialiased selection:bg-[#455CE9] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      <main className="w-full pt-36 sm:pt-48 md:pt-56 pb-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Title & Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#999D9E] block mb-4">
                Contact • Let&apos;s Connect
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal font-['Dennis_Sans',sans-serif] tracking-tight leading-[1.05] text-white mb-8">
                Let’s start a project together
              </h1>

              {/* Portrait & Subtitle */}
              <div className="flex items-center gap-5 pt-4 pb-8 border-b border-white/15">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-zinc-800 border border-white/20 shrink-0">
                  <Image
                    src="/babul-dennis-exact.webp"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#999D9E]">
                    Freelance Designer &amp; Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-8 text-sm sm:text-base font-['Dennis_Sans',sans-serif]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#999D9E] font-mono block mb-2">
                  Contact Details
                </span>
                <p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-[#455CE9] transition-colors block text-lg font-light"
                  >
                    {personalInfo.email}
                  </a>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-[#455CE9] transition-colors block text-base text-white/80 font-mono mt-1"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#999D9E] font-mono block mb-2">
                  Business Location
                </span>
                <p className="text-white/90">
                  Dhaka, Bangladesh • Open for Remote Worldwide
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#999D9E] font-mono block mb-2">
                  Local Time (Dhaka)
                </span>
                <p className="font-mono text-white/80">
                  {time || "Loading..."} GMT+6
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#999D9E] font-mono block mb-2">
                  Socials
                </span>
                <div className="flex flex-wrap gap-4 text-white/80">
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <a
                      href={personalInfo.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Resume
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dennis Snellenberg Interactive Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 sm:gap-12">
              {/* Field 01: Name */}
              <div className="border-t border-white/20 pt-8 flex flex-col gap-3">
                <label className="text-sm font-mono text-[#999D9E] flex items-center gap-3">
                  <span>01</span>
                  <span className="text-base sm:text-lg text-white font-['Dennis_Sans',sans-serif]">
                    What&apos;s your name?
                  </span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent text-xl sm:text-2xl text-white placeholder-white/25 focus:outline-none pb-2 border-b border-transparent focus:border-white/40 transition-colors"
                />
              </div>

              {/* Field 02: Email */}
              <div className="border-t border-white/20 pt-8 flex flex-col gap-3">
                <label className="text-sm font-mono text-[#999D9E] flex items-center gap-3">
                  <span>02</span>
                  <span className="text-base sm:text-lg text-white font-['Dennis_Sans',sans-serif]">
                    What&apos;s your email?
                  </span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@doe.com *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent text-xl sm:text-2xl text-white placeholder-white/25 focus:outline-none pb-2 border-b border-transparent focus:border-white/40 transition-colors"
                />
              </div>

              {/* Field 03: Organization */}
              <div className="border-t border-white/20 pt-8 flex flex-col gap-3">
                <label className="text-sm font-mono text-[#999D9E] flex items-center gap-3">
                  <span>03</span>
                  <span className="text-base sm:text-lg text-white font-['Dennis_Sans',sans-serif]">
                    What&apos;s the name of your organization?
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Company or Brand ®"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className="w-full bg-transparent text-xl sm:text-2xl text-white placeholder-white/25 focus:outline-none pb-2 border-b border-transparent focus:border-white/40 transition-colors"
                />
              </div>

              {/* Field 04: Services Chips */}
              <div className="border-t border-white/20 pt-8 flex flex-col gap-4">
                <label className="text-sm font-mono text-[#999D9E] flex items-center gap-3">
                  <span>04</span>
                  <span className="text-base sm:text-lg text-white font-['Dennis_Sans',sans-serif]">
                    What services are you looking for?
                  </span>
                </label>
                <div className="flex flex-wrap gap-3 pt-2">
                  {availableServices.map((service) => {
                    const isSelected = form.services.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-5 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? "bg-[#455CE9] text-white border border-[#455CE9] shadow-lg"
                            : "bg-white/5 text-white/80 border border-white/15 hover:border-white/40"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                        <span>{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 05: Message */}
              <div className="border-t border-white/20 pt-8 flex flex-col gap-3">
                <label className="text-sm font-mono text-[#999D9E] flex items-center gap-3">
                  <span>05</span>
                  <span className="text-base sm:text-lg text-white font-['Dennis_Sans',sans-serif]">
                    Your message...
                  </span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello Babul, can you help me with... *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent text-xl text-white placeholder-white/25 focus:outline-none pb-2 resize-none border-b border-transparent focus:border-white/40 transition-colors"
                />
              </div>

              {/* Submit Button: Large Dennis Blue Circle */}
              <div className="pt-8 flex justify-end">
                <Magnetic strength={0.4}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-round group block"
                  >
                    <div className="btn-click w-40 h-40 sm:w-48 sm:h-48 rounded-full !bg-[#455CE9] hover:!bg-[#334BD3] text-white flex flex-col items-center justify-center relative overflow-hidden shadow-2xl transition-colors duration-300 cursor-pointer">
                      <div className="btn-fill !bg-[#334BD3]" />
                      <span className="btn-text">
                        <span className="btn-text-inner text-lg sm:text-xl font-medium tracking-tight text-white flex items-center gap-2">
                          <span>{loading ? "Sending..." : "Send it!"}</span>
                        </span>
                      </span>
                    </div>
                  </button>
                </Magnetic>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-28 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#999D9E] gap-4">
          <div>
            <span>VERSION 2026 © Edition</span>
          </div>
          <div>
            <span>© Code by MD Babul Hossan</span>
          </div>
        </div>
      </main>
    </div>
  );
}
