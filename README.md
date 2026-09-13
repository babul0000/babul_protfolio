# Babul Hossan — Full-Stack MERN Developer Portfolio

A clean, modern, high-performance developer portfolio built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Crafted to showcase genuine full-stack MERN expertise, scalable web applications, real-world case studies, verified certifications, and relational database engineering with **PostgreSQL & Prisma ORM**.

Live Site: [https://babul-portfolio.vercel.app](https://babul-portfolio.vercel.app)

---

## ✨ Features & Highlights

- **⚡ 100% Authentic & Recruiter-Focused**: Clean, honest presentation of technical skills, real projects, verifiable GitHub code, and genuine credentials with zero artificial or placeholder data.
- **🛠️ Core MERN & Modern Stack**: Focused expertise across React, Next.js 14, Node.js, Express.js, MongoDB, TypeScript, and relational workflows with PostgreSQL & Prisma ORM.
- **⌘ Clean Command Palette (CMD/CTRL + K)**: Instant keyboard-driven navigation across portfolio sections, project case studies, and direct contact channels.
- **🎨 Dual Theme Support (Light / Dark)**: Smooth, flicker-free theme switching with persistent user preference and accessible contrast ratios.
- **🌐 Tech Ecosystem Marquee**: Continuous marquee showcasing core technologies: MERN Stack, React, Next.js, Node.js, Express, MongoDB, TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS, and REST APIs.
- **💼 Comprehensive Project Case Studies**: Dedicated dynamic routes (`/project/[id]`) highlighting:
  - Full-stack technical stack chips and UI screenshots.
  - Live deployment links and public GitHub repositories.
  - Core features breakdown, real-world architectural challenges solved, and planned future improvements.
- **📜 Verified Certifications & Credentials**: Highlighting accredited MERN Web Development certification from Programming Hero and continuous skill development in PostgreSQL & Prisma.
- **📈 Real GitHub Activity & Insights**: Interactive overview of repositories, contributions, and code commits.
- **📬 Server-Side Contact System**: Secure Next.js App Router API Route (`/api/contact`) with validation, rate limiting, and instant notification feedback.

---

## 🛠️ Technology Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) (App Router), [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), CSS Custom Properties
- **Backend & APIs**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), Next.js API Routes
- **Databases & ORM**: [MongoDB](https://www.mongodb.com/) (Mongoose), [PostgreSQL](https://www.postgresql.org/), [Prisma ORM](https://www.prisma.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.dev/)
- **SEO & Performance**: OpenGraph tags, dynamic sitemap, robots.txt, Google Schema JSON-LD structured data
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Directory Structure

```text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/route.ts # Server-side contact form handler
│   ├── project/[id]/
│   │   └── page.tsx         # Dynamic case study page with features, challenges, and repo links
│   ├── globals.css          # Design tokens, themes, and animations
│   ├── layout.tsx           # HTML structure, metadata, Schema.org JSON-LD & analytics
│   ├── not-found.tsx        # Custom 404 error page
│   ├── page.tsx             # Main landing page assembling authentic sections
│   ├── robots.ts            # Dynamic robots.txt configuration
│   └── sitemap.ts           # Dynamic sitemap generator
│
├── components/
│   ├── About.tsx            # Authentic background, MERN journey, and technical focus
│   ├── Certificates.tsx     # Verified credentials and achievements
│   ├── CommandPalette.tsx   # Fast keyboard-driven (Ctrl+K) quick actions palette
│   ├── Contact.tsx          # Direct contact form, email, WhatsApp, and social channels
│   ├── Ecosystem.tsx        # Infinite marquee tech ecosystem display
│   ├── Experience.tsx       # Real professional background and technical transition
│   ├── Footer.tsx           # Clean footer with quick navigation links and social profiles
│   ├── GithubActivity.tsx   # GitHub activity overview and repository stats
│   ├── Hero.tsx             # Hero section with real headline, status, and direct CTAs
│   ├── Navbar.tsx           # Clean navigation bar with search launcher and theme toggle
│   ├── Projects.tsx         # Real project gallery with live previews and detail links
│   ├── projectsData.ts      # Typed project repository data store
│   ├── ScrollToTop.tsx      # Smooth floating back-to-top button
│   ├── SectionHeader.tsx    # Reusable section title component
│   ├── SkeletonLoader.tsx   # Initial loading skeleton state
│   ├── Skills.tsx           # Filterable technical skill toolkit cards
│   ├── Workflow.tsx         # Real-world software development lifecycle process
│   └── useScrollReveal.ts   # Custom intersection observer scroll hook
│
├── public/
│   ├── resume.pdf           # Downloadable PDF resume
│   └── *.webp               # Optimized assets & project screenshots
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