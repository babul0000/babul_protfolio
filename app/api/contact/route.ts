import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Optional Formspree forwarding or custom notification integration
    try {
      await fetch("https://formspree.io/f/xkodpoyv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject: subject || "Portfolio Direct Inquiry", message })
      });
    } catch {
      // Fallback logged
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully! Babul will respond within 24 hours.",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error processing your inquiry." },
      { status: 500 }
    );
  }
}
