# Babul Hossan — Developer Portfolio

Ultra-modern, futuristic developer portfolio built with **Next.js 14 App Router** + **Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Navigate to the portfolio folder
cd babul-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
babul-portfolio/
├── app/
│   ├── globals.css        # All custom CSS, animations, variables
│   ├── layout.js          # Root layout with metadata + DM Sans font
│   └── page.js            # Main page — assembles all sections
│
├── components/
│   ├── Navbar.js          # Sticky nav with blur + mobile hamburger
│   ├── Hero.js            # Hero with typing animation + abstract SVG avatar
│   ├── About.js           # About + stats cards
│   ├── Skills.js          # Google-style skill grid + proficiency bars
│   ├── Experience.js      # Vertical timeline (Google Careers style)
│   ├── Projects.js        # Apple-style project cards (featured + compact)
│   ├── Achievements.js    # Hackathons, certs, open source milestones
│   ├── Contact.js         # Contact form + social links
│   ├── Footer.js          # Clean minimal footer
│   ├── SectionHeader.js   # Reusable section header component
│   └── useScrollReveal.js # Custom hook for scroll-triggered fade-in
│
├── public/
│   └── resume.pdf         # ← ADD YOUR RESUME HERE
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🎨 Customization Guide

### 1. Personal Info
- **Hero.js** — Update name, headline, social links, typing words array
- **About.js** — Edit bio paragraphs and stats (years, projects, etc.)
- **Contact.js** — Replace email address and social URLs

### 2. Experience
- **Experience.js** — Update `experiences` array with your actual roles
  - company, role, period, type, bullets (impact-focused)

### 3. Projects  
- **Projects.js** — Update `projects` array with your real projects
  - name, tagline, description, tech stack, impact line, GitHub/live URLs
  - Set `featured: true` for top 2 projects (large cards)

### 4. Skills
- **Skills.js** — Update `skillGroups` with your proficiency levels
  - Also update `topSkills` chip array

### 5. Achievements
- **Achievements.js** — Replace with your certifications, hackathons, contributions

### 6. Resume
- Drop your `resume.pdf` in the `/public` folder
- Download link is already wired to `/resume.pdf`

### 7. Colors (optional)
- Edit `--accent` in `globals.css` to change the primary blue
- All colors use CSS custom properties for easy theming

## ✨ Features

- **Light theme only** — crisp white + slate grays + blue accent
- **Scroll reveal animations** — fade-up on enter viewport
- **Typing animation** — cycles through tech keywords in hero
- **Interactive contact form** — with loading + success states
- **Mobile hamburger menu** — smooth animated overlay
- **Skill proficiency bars** — animated progress indicators
- **Featured project cards** — with accent color per project
- **Google Careers-style timeline** — vertical with dotted line
- **Status badge** — pulsing green "Open to Opportunities"

## 🛠 Tech Stack

- **Next.js 14** — App Router, React Server/Client Components
- **Tailwind CSS 3** — Utility-first styling
- **DM Sans** — Typography (Google Fonts)
- **Vanilla JS animations** — IntersectionObserver for scroll reveal
- **No unnecessary dependencies** — lightweight and fast

## 📱 Responsive Breakpoints

- Mobile: 375px+ (default)
- Tablet: 640px+ (sm)
- Desktop: 768px+ (md) / 1024px+ (lg)

## 🚢 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Other platforms
```bash
npm run build
npm start
```

---

Built to impress. Customize and deploy in under 30 minutes. 🚀
