# Babul Hossan — Professional Developer Portfolio

A premium, modern, and highly responsive developer portfolio built using the **Next.js 14 App Router** and **Tailwind CSS**. Designed to highlight technical skills, project experiences, career transition, and direct contact options with visual excellence.

Live Site: [https://babul-portfolio.vercel.app](https://babul-portfolio.vercel.app)

---

## ✨ Features

- **Responsive Navigation Bar**: Smooth scrolling and direct hamburger menu access to all sections on desktop, tablet, and mobile devices.
- **Designation & Introduction**: Showcases the "MERN-Stack Developer" designation with a professional photo and pulsing location badge.
- **Resume View/Download**: A clearly visible, single-click "Get Resume" button in the hero and biography sections linked to a local `/public/resume.pdf` document.
- **Detailed About Me**: Shares Babul's real programming journey (driven to solve human problems through code) and hobbies (travelling, learning new technologies, and connecting with people).
- **Categorized Skills Grid**: A filterable graphical tech toolkit showing skills segmented into Frontend, Backend & DB, and Auth & Tools with highlight cards.
- **Dynamic Project Case Studies**: Individual dynamic pages (`/project/[id]`) for each project containing:
  - Technology stack chips.
  - Brief project descriptions.
  - Active live deployment links and client GitHub repository links.
  - Key features list.
  - Highlighted **Challenges Faced** card.
  - **Future Plans & Potential Improvements** card.
- **Direct Contact Options**: Reach the developer instantly via Email, direct Phone call, WhatsApp chat, or direct Facebook link.
- **Double Theme Support**: Light/Dark theme toggler persistent across the main page and all subpages.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Client & Server Components)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) (with custom CSS variables for dark/light themes)
- **Notifications**: [Sonner](https://sonner.dev/) (rich toast messages)
- **Deployment**: [Vercel](https://vercel.com/) (Direct Vercel CLI deployment)

---

## 📁 Updated Directory Structure

```text
portfolio/
├── app/
│   ├── project/[id]/
│   │   └── page.js          # Dynamic route for project detailed case studies
│   ├── globals.css          # Core design system tokens, themes, and animations
│   ├── layout.js            # Main HTML structure, Caveat font loader, Microsoft Clarity tracking
│   ├── page.js              # Home landing layout combining all page components
│   └── not-found.js         # Custom 404 page
│
├── components/
│   ├── About.js             # Biography, coding journey, and stats
│   ├── Contact.js           # Formspree email submission, phone/WhatsApp, and socials
│   ├── Experience.js        # Timeline showing technical career path
│   ├── Footer.js            # Clean footer with quick links and social links
│   ├── Hero.js              # Hero landing section with designation and photo
│   ├── Navbar.js            # Sticky navigation header with theme switcher
│   ├── Projects.js          # Featured projects grid linking to dynamic case study pages
│   ├── projectsData.js      # Centralized database/store for all project assets and records
│   ├── Skills.js            # Interactive categorized skills dashboard
│   ├── Workflow.js          # Development workflow stages
│   └── useScrollReveal.js   # Custom scroll triggered reveal animation hook
│
├── public/
│   ├── resume.pdf           # Downloadable PDF resume
│   └── *.webp               # High-fidelity project screenshots and profile assets
│
├── package.json             # Build configuration, script commands, and packages
└── tailwind.config.js       # Custom Tailwind CSS configuration
```

---

## 🚀 Live Site Link

You can view the live portfolio website at the following production URL:

👉 **[https://babul-portfolio.vercel.app](https://babul-portfolio.vercel.app)**

---

## 🚢 Deployment Guide

This project is deployed directly using **Vercel CLI**:

### Direct Vercel Deployment

1. Make sure you have Vercel CLI installed:
   ```bash
   npm install -g vercel
   ```

2. Run the production deployment command inside the root folder:
   ```bash
   vercel --prod
   ```

### GitHub Deployment

The repository is hosted at [https://github.com/babul0000/babul_protfolio.git](https://github.com/babul0000/babul_protfolio.git). Pushing to the main branch will keep your source code updated:
```bash
git add .
git commit -m "commit message"
git push origin main
```
