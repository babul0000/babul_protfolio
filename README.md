# Babul Hossan — Professional Developer Portfolio

A premium, modern, and highly responsive developer portfolio built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to highlight full-stack technical competencies, project architecture case studies, verifiable credentials, career transition, and direct contact options.

Live Site: [https://babul-portfolio.vercel.app](https://babul-portfolio.vercel.app)

---

## ✨ Features & Highlights

- **⚡ Full TypeScript Type Safety**: High-quality codebase fully migrated to TypeScript with strict type definitions across pages, components, and data stores.
- **⌘ Command Palette (CMD/CTRL + K)**: Interactive search and command launcher for instant navigation, theme switching, project discovery, and quick contact actions.
- **🎨 Dual Theme Support (Light / Dark)**: Smooth, flicker-free theme switching with persistent localStorage preferences and custom CSS design tokens.
- **🌐 Tech Ecosystem Marquee**: Continuous infinite marquee showcasing core technologies: React, Next.js, Node.js, MongoDB, TypeScript, Tailwind CSS, Express, and REST APIs.
- **📱 Responsive Navigation & Layout**: Sleek sticky navigation with smooth-scroll section links, mobile drawer, and dynamic scroll-to-top indicator.
- **💼 Detailed Project Case Studies**: Dedicated dynamic routes (`/project/[id]`) highlighting:
  - Technical stack chips and clean UI mockups.
  - Live interactive demos & GitHub repository links.
  - Core feature breakdowns.
  - Real-world **Challenges Faced** and strategic solutions.
  - **Future Roadmap & Improvements** plan.
- **📜 Verified Certifications & Credentials**: Dedicated credentials section showcasing professional milestones, MERN stack certifications, and technical proficiencies.
- **📈 GitHub Activity & Insights**: Graphical visual counters showcasing repositories, contributions, and active commits.
- **📬 Instant Multi-Channel Contact**: Reach directly via Formspree Email, Phone, WhatsApp, and social networks with instant toast notifications powered by Sonner.
- **🔍 SEO & Schema.org JSON-LD**: Comprehensive metadata tags, OpenGraph, Twitter Cards, `sitemap.ts`, `robots.ts`, and structured Person/WebSite Schema markup.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & Vanilla CSS custom variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.dev/)
- **Analytics & Tracking**: Microsoft Clarity & Google Schema JSON-LD
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Directory Structure

```text
portfolio/
├── app/
│   ├── project/[id]/
│   │   └── page.tsx         # Dynamic route for project case studies
│   ├── globals.css          # Design system tokens, themes, and animations
│   ├── layout.tsx           # Main HTML structure, metadata, Schema.org, & analytics
│   ├── not-found.tsx        # Custom 404 error page
│   ├── page.tsx             # Home landing layout combining all sections
│   ├── robots.ts            # Dynamic robots.txt configuration
│   └── sitemap.ts           # Dynamic sitemap generator
│
├── components/
│   ├── About.tsx            # Biography, coding journey, and key stats
│   ├── Certificates.tsx     # Verified credentials and achievements
│   ├── CommandPalette.tsx   # Keyboard-driven (Ctrl+K) quick actions palette
│   ├── Contact.tsx          # Direct contact form, WhatsApp, phone, and socials
│   ├── Ecosystem.tsx        # Infinite marquee tech ecosystem display
│   ├── Experience.tsx       # Timeline showing professional career path
│   ├── Footer.tsx           # Clean footer with quick navigation links
│   ├── GithubActivity.tsx   # GitHub activity and repository statistics
│   ├── Hero.tsx             # Hero section with headline, CTA, and profile photo
│   ├── Navbar.tsx           # Sticky navigation header with theme toggle
│   ├── Projects.tsx         # Filterable project gallery with live previews
│   ├── projectsData.ts      # Typed data store for projects
│   ├── ScrollToTop.tsx      # Interactive floating back-to-top button
│   ├── SectionHeader.tsx    # Reusable section title component
│   ├── SkeletonLoader.tsx   # Initial loading skeleton state
│   ├── Skills.tsx           # Filterable technical skill toolkit cards
│   ├── Workflow.tsx         # Development workflow process stages
│   └── useScrollReveal.ts   # Custom intersection observer scroll hook
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