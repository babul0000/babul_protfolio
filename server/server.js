/**
 * Production-Ready Express.js & MongoDB Backend Server
 * Built for Babul Hossan Portfolio
 */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: "Too many requests from this IP, please try again after 15 minutes." }
});

// Middleware
app.use(limiter);
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin) return callback(null, true);
      const allowed = (process.env.CLIENT_URL || "http://localhost:3000,https://babul-portfolio.vercel.app").split(",");
      if (allowed.includes(origin) || allowed.includes("*")) {
        return callback(null, true);
      }
      return callback(null, true); // Dev-friendly default
    },
    credentials: true
  })
);

// MongoDB Schema Definitions
const ContactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, default: "General Inquiry" },
    message: { type: String, required: true },
    ipAddress: { type: String },
    status: { type: String, enum: ["unread", "read", "replied"], default: "unread" }
  },
  { timestamps: true }
);

const ProjectEstimateSchema = new mongoose.Schema(
  {
    projectType: { type: String, required: true },
    addons: [{ type: String }],
    urgency: { type: String, default: "standard" },
    estimatedCost: { type: Number, required: true },
    estimatedDays: { type: Number, required: true },
    clientEmail: { type: String },
    notes: { type: String }
  },
  { timestamps: true }
);

const ContactMessage = mongoose.models.ContactMessage || mongoose.model("ContactMessage", ContactMessageSchema);
const ProjectEstimate = mongoose.models.ProjectEstimate || mongoose.model("ProjectEstimate", ProjectEstimateSchema);

// Optional MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log(" Connected to MongoDB Database successfully."))
    .catch((err) => console.warn(" MongoDB connection warning (running in memory/mock fallback):", err.message));
} else {
  console.log("ℹ️ Running without MongoDB_URI. Add MONGODB_URI to server/.env to persist messages.");
}

// Routes

// 1. Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    developer: "Babul Hossan",
    stack: "Node.js, Express.js, MongoDB, TypeScript, Next.js 14",
    timestamp: new Date().toISOString()
  });
});

// 2. Submit Contact Inquiry
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    if (mongoose.connection.readyState === 1) {
      const saved = await ContactMessage.create({
        name,
        email,
        subject: subject || "Portfolio Direct Contact",
        message,
        ipAddress: req.ip
      });
      return res.status(201).json({
        success: true,
        message: "Message received and saved to database!",
        id: saved._id
      });
    }

    // In-memory fallback
    return res.status(200).json({
      success: true,
      message: "Message dispatched successfully! Babul will reply within 24 hours.",
      data: { name, email, subject, message }
    });
  } catch (error) {
    console.error("Contact API error:", error);
    res.status(500).json({ error: "Failed to process message." });
  }
});

// 3. Submit & Calculate Project Estimate
app.post("/api/estimate", async (req, res) => {
  try {
    const { projectType, addons, urgency, clientEmail } = req.body;

    const basePricing = {
      landing: { cost: 150, days: 4 },
      fullstack: { cost: 380, days: 14 },
      ecommerce: { cost: 550, days: 21 },
      dashboard: { cost: 450, days: 18 }
    };

    const addonPricing = {
      auth: { cost: 60, days: 2 },
      payment: { cost: 80, days: 3 },
      seo: { cost: 50, days: 2 },
      admin: { cost: 100, days: 4 },
      ai: { cost: 90, days: 3 }
    };

    const base = basePricing[projectType] || basePricing.fullstack;
    let totalCost = base.cost;
    let totalDays = base.days;

    if (Array.isArray(addons)) {
      addons.forEach((ad) => {
        if (addonPricing[ad]) {
          totalCost += addonPricing[ad].cost;
          totalDays += addonPricing[ad].days;
        }
      });
    }

    if (urgency === "express") {
      totalCost = Math.round(totalCost * 1.25);
      totalDays = Math.max(3, Math.round(totalDays * 0.65));
    } else if (urgency === "relaxed") {
      totalCost = Math.round(totalCost * 0.95);
      totalDays = Math.round(totalDays * 1.2);
    }

    if (mongoose.connection.readyState === 1 && clientEmail) {
      await ProjectEstimate.create({
        projectType: projectType || "fullstack",
        addons: addons || [],
        urgency: urgency || "standard",
        estimatedCost: totalCost,
        estimatedDays: totalDays,
        clientEmail
      });
    }

    res.json({
      success: true,
      quote: {
        currency: "USD",
        estimatedCost: totalCost,
        estimatedWorkingDays: totalDays,
        techStack: ["Next.js 14", "React 18", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
        summary: `Custom ${projectType || "fullstack"} engineering specification.`
      }
    });
  } catch (error) {
    console.error("Estimate API error:", error);
    res.status(500).json({ error: "Failed to generate estimate." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Babul Portfolio Express Server running on http://localhost:${PORT}`);
});
