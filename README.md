# Babul Hossan — Professional Developer Portfolio

A premium, modern, and highly responsive developer portfolio built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to highlight full-stack technical competencies, project architecture case studies, verifiable credentials, career transition, and direct contact options.

Live Site: [https://babul-portfolio.vercel.app](https://babul-portfolio.vercel.app)

---

## ✨ Features & Highlights

- **⚡ Full TypeScript Type Safety**: High-quality codebase fully migrated to TypeScript with strict type definitions across pages, components, and data stores.
- **⌘ Command Palette (CMD/CTRL + K)**: Interactive search and command launcher for instant navigation, theme switching, project discovery, and quick contact actions.
- **💻 Interactive Developer Terminal (`>_`)**: UNIX-like developer shell supporting interactive commands (`help`, `about`, `skills`, `projects`, `contact`, `hire`, `quote`, `date`, `whoami`, `clear`).
- **🎙️ Synthesized Voice Intro Player**: Audio speech introduction widget in the Hero section with live animated audio equalizer bars.
- **📊 Interactive Project Cost & Timeline Estimator**: Real-time project scope, add-on features, and delivery timeline calculator with automatic contact form forwarder.
- **⭐ Peer Reviews & Endorsements**: Recommendation showcase with 5-star ratings, collaborator roles, and verified badges.
- **📅 1-on-1 Meeting & Discovery Call Booking**: Instant scheduling modal for 15-30 min introductory calls.
- **🔊 Zero-Latency Web Audio Synthesizer**: Micro-interaction click and switch sounds synthesized directly via Web Audio API.
- **📏 Top Reading Scroll Progress Bar**: Sleek neon scroll indicator tracking reading position.
- **🎨 Dual Theme Support (Light / Dark)**: Smooth, flicker-free theme switching with persistent localStorage preferences and custom CSS design tokens.
- **🌐 Tech Ecosystem Marquee**: Continuous infinite marquee showcasing core technologies: React, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, Express, and REST APIs.
- **💼 Detailed Project Case Studies**: Dedicated dynamic routes (`/project/[id]`) highlighting:
  - Technical stack chips and clean UI mockups.
  - Interactive **System Architecture Flow Diagram** (Client $\to$ API Gateway $\to$ MongoDB $\to$ CDN).
  - **Lighthouse 100% Audit Badges** (Performance, Accessibility, Best Practices, SEO).
  - Core feature breakdowns, **Challenges Faced**, and **Future Roadmap**.
- **📜 Verified Certifications & Credentials**: Dedicated credentials section showcasing professional milestones and MERN stack certifications.
- **📈 GitHub Activity & Insights**: Graphical visual counters showcasing repositories, contributions, and active commits.
- **📬 Instant Multi-Channel Contact & Next.js API Routes**: Dedicated API routes (`/api/contact`, `/api/estimate`, `/api/terminal`) with instant toast feedback.
- **🛠️ Standalone Express.js + MongoDB Backend**: Dedicated production-ready backend server (`server/`) with rate limiting and database models.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Backend**: [Node.js & Express.js](https://expressjs.com/) (Dedicated API server + Next.js App Router API Routes)
- **Database**: [MongoDB / Mongoose](https://www.mongodb.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & JavaScript (ES6+)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & Vanilla CSS custom variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Synthesis**: Web Audio API & Web Speech API
- **Notifications**: [Sonner](https://sonner.dev/)
- **Analytics & Tracking**: Microsoft Clarity & Google Schema JSON-LD
- **Deployment**: [Vercel](https://vercel.com/) (Frontend) & Node Server (Backend)

---

## 📁 Directory Structure

```text
portfolio/
├── app/
│   ├── api/
│   │   ├── contact/route.ts # Server-side contact form handler
│   │   ├── estimate/route.ts# Project cost & quotation calculator API
│   │   └── terminal/route.ts# Dynamic developer terminal system status API
│   ├── project/[id]/
│   │   └── page.tsx         # Dynamic case study page with architecture diagrams & Lighthouse scores
│   ├── globals.css          # Design system tokens, themes, and animations
│   ├── layout.tsx           # Main HTML structure, metadata, Schema.org, & analytics
│   ├── not-found.tsx        # Custom 404 error page
│   ├── page.tsx             # Home landing layout combining all sections
│   ├── robots.ts            # Dynamic robots.txt configuration
│   └── sitemap.ts           # Dynamic sitemap generator
│
├── components/
│   ├── About.tsx            # Biography, coding journey, and key stats
│   ├── BookingModal.tsx     # One-click 1-on-1 meeting & call scheduler
│   ├── Certificates.tsx     # Verified credentials and achievements
│   ├── CommandPalette.tsx   # Keyboard-driven (Ctrl+K) quick actions palette
│   ├── Contact.tsx          # Direct contact form, WhatsApp, phone, and socials
│   ├── Ecosystem.tsx        # Infinite marquee tech ecosystem display
│   ├── Experience.tsx       # Timeline showing professional career path
│   ├── Footer.tsx           # Clean footer with quick navigation links
│   ├── GithubActivity.tsx   # GitHub activity and repository statistics
│   ├── Hero.tsx             # Hero section with voice intro, CTA, and profile photo
│   ├── Navbar.tsx           # Sticky navigation header with terminal launcher & theme toggle
│   ├── ProjectEstimator.tsx # Interactive project cost & timeline calculator
│   ├── Projects.tsx         # Filterable project gallery with live previews
│   ├── projectsData.ts      # Typed data store for projects
│   ├── ReadingProgressBar.tsx# Top scroll reading progress indicator
│   ├── ScrollToTop.tsx      # Interactive floating back-to-top button
│   ├── SectionHeader.tsx    # Reusable section title component
│   ├── SkeletonLoader.tsx   # Initial loading skeleton state
│   ├── Skills.tsx           # Filterable technical skill toolkit cards
│   ├── Terminal.tsx         # Interactive UNIX developer terminal / CLI widget
│   ├── Testimonials.tsx     # Client & peer recommendations with ratings
│   ├── VoiceIntroPlayer.tsx # Synthesized voice introduction player
│   ├── Workflow.tsx         # Development workflow process stages
│   ├── useScrollReveal.ts   # Custom intersection observer scroll hook
│   └── useSound.ts          # Web Audio API sound synthesizer
│
├── server/
│   ├── server.js            # Standalone Express.js + MongoDB API server
│   ├── package.json         # Backend dependencies (express, mongoose, cors, rate-limit)
│   ├── .env.example         # Backend environment variables
│   └── README.md            # Standalone backend setup guide
│
├── public/
│   ├── resume.pdf           # Downloadable PDF resume
│   └── *.webp               # High-performance compressed assets & project previews
│
├── package.json             # Project dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── tailwind.config.js       # Custom Tailwind CSS configuration
```

---

## 🚀 Live Site Link

You can view the live portfolio website at:

👉 **[https://babul-portfolio.vercel.app](https://babul-portfolio.vercel.app)**

---

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/babul0000/babul_protfolio.git
   cd babul_protfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Production Build

```bash
npm run build
npm run start
```