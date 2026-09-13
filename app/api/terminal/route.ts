import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "online",
    system: "Babul-Portfolio-Kernel v2.4 (x86_64-node-darwin/linux)",
    uptime: process.uptime(),
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
    commands: ["help", "about", "skills", "projects", "contact", "hire", "quote", "whoami", "date"]
  });
}
