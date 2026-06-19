# 4AT AI — Finance Automation Platform

> Full-stack Next.js 14 landing page with Three.js neural globe, GSAP scroll animations, interactive 3D card tilt effects, and a Hybrid AI + Human support section. Built to align with the NestJS + FastAPI + AWS engineering architecture.

---

## 🗂 Project Structure

```
4at-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Lenis smooth scroll)
│   │   ├── page.tsx            # Main page — all sections assembled
│   │   └── globals.css         # Dark theme tokens, glass cards, animations
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx                  # Sticky pill nav
│   │   │   └── SmoothScrollProvider.tsx # Lenis smooth scroll wrapper
│   │   ├── hero/
│   │   │   └── HeroSection.tsx          # Hero + Neural Globe console
│   │   ├── 3d/
│   │   │   ├── NeuralGlobe.tsx          # Interactive neural network canvas
│   │   │   └── AmbientBackground.tsx   # Per-section ambient particle bg
│   │   ├── ui/
│   │   │   └── TiltCard.tsx            # 3D magnetic tilt card wrapper
│   │   ├── hooks/
│   │   │   └── useTilt.ts              # Perspective tilt + glow hook
│   │   └── sections/
│   │       ├── GlimpseSection.tsx       # Product demo video
│   │       ├── CapabilitiesSection.tsx  # Bento grid
│   │       ├── WhySection.tsx           # Value props
│   │       ├── AgentsSection.tsx        # AI agents (FastAPI layer)
│   │       ├── HowItWorksSection.tsx    # 4-step flow with hover pulses
│   │       ├── IntegrationsSection.tsx  # Marquee + custom CTA
│   │       ├── HybridSection.tsx        # AI + Human support
│   │       ├── OtherSections.tsx        # Pricing, Security, Academy, FAQ
│   │       └── FooterSection.tsx        # Final CTA + footer
├── public/
│   └── images/                 # Local images (optional — uses Unsplash by default)
├── package.json
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── postcss.config.mjs
```

---

## ⚡ Local Setup (Step-by-Step)

### Prerequisites
- **Node.js** ≥ 18.17 — [Download](https://nodejs.org/)
- **npm** ≥ 9 (comes with Node.js)
- **Git** — [Download](https://git-scm.com/)

---

### Step 1 — Create the Next.js project

```bash
npx create-next-app@14.2.5 4at-ai \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git
```

When prompted:
- ✅ TypeScript: **Yes**
- ✅ ESLint: **Yes**
- ✅ Tailwind CSS: **Yes**
- ✅ `src/` directory: **Yes**
- ✅ App Router: **Yes**
- ✅ Import alias `@/*`: **Yes**

---

### Step 2 — Install animation & 3D dependencies

```bash
cd 4at-ai

npm install \
  three \
  @react-three/fiber \
  @react-three/drei \
  gsap \
  @gsap/react \
  framer-motion \
  lenis \
  clsx \
  tailwind-merge

npm install --save-dev \
  @types/three
```

**Package reference:**

| Package              | Version  | Purpose                            |
|----------------------|----------|------------------------------------|
| `three`              | ^0.166.1 | 3D WebGL (neural globe, orbits)    |
| `@react-three/fiber` | ^8.17.5  | React renderer for Three.js        |
| `@react-three/drei`  | ^9.108.3 | R3F helpers (OrbitControls, etc.)  |
| `gsap`               | ^3.12.5  | GSAP core animations               |
| `@gsap/react`        | ^2.1.1   | GSAP React hooks                   |
| `framer-motion`      | ^11.3.8  | Scroll animations & variants       |
| `lenis`              | ^1.1.9   | Smooth scroll inertia              |
| `clsx`               | ^2.1.1   | Conditional classNames             |
| `tailwind-merge`     | ^2.4.0   | Tailwind class merging             |

---

### Step 3 — Copy the generated files

Replace the contents of your project with all the files provided in this repository.
Key files to replace/add:
- `src/app/globals.css` — full dark theme CSS
- `src/app/layout.tsx` — root layout
- `src/app/page.tsx` — main page assembly
- All files under `src/components/`
- `tailwind.config.ts` — extended color palette & animations
- `next.config.mjs` — Unsplash image domain allowlist

---

### Step 4 — Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Step 5 — Build for production

```bash
npm run build
npm run start
```

---

## 🚀 GitHub Setup

> **Note:** Before running the steps below, please share your GitHub repository URL so we can configure the remote correctly.

### Step 1 — Initialize Git

```bash
cd 4at-ai
git init
```

### Step 2 — Create `.gitignore`

```bash
cat > .gitignore << 'EOF'
# dependencies
node_modules/
.pnp
.pnp.js

# production
.next/
out/
dist/

# env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOF
```

### Step 3 — First commit

```bash
git add .
git commit -m "feat: initial 4AT AI landing page with neural globe + full dark theme"
```

### Step 4 — Connect to GitHub

*(Provide your repository URL and we'll add it here)*

```bash
# Replace with your actual GitHub repo URL:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## 🔧 Environment Variables

Create a `.env.local` file for any API keys:

```bash
# Backend API (NestJS)
NEXT_PUBLIC_API_URL=http://localhost:3001

# AI Service (FastAPI)
NEXT_PUBLIC_AI_API_URL=http://localhost:8000

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token
```

---

## 🏗 Architecture Alignment

This frontend is built to integrate with the system architecture:

```
Next.js (Frontend)
    ↓
NestJS API Layer (Auth, Finance, AI Request Handler, Academy, Notifications)
    ↓ (AI Processing)
Python FastAPI AI Service (Fraud Detection, Audit Insights, Financial Analysis)
    ↓
PostgreSQL (Users, Financial Data, AI Results, Academy Data, Analytics Logs)
    ↓
Amazon RDS → ElastiCache (Redis) → CloudFront CDN
```

---

## 📦 What's Included

| Section             | Features                                           |
|---------------------|----------------------------------------------------|
| **Hero**            | Neural Globe canvas, metrics console, floating chips |
| **Product Glimpse** | Video frame with Unsplash dashboard screenshot     |
| **Capabilities**    | Bento grid with tilt cards + sparkline chart       |
| **Why 4AT**         | 4 value cards with magnetic hover glow             |
| **AI Agents**       | Cards with real dashboard images (FastAPI agents)  |
| **How It Works**    | 4-step flow with SVG pulse lines + hover tooltips  |
| **Integrations**    | Infinite marquee (2 rows) + custom CTA             |
| **Pricing**         | 3 tiers, popular highlight, tilt effect            |
| **Security**        | 6 trust badges aligned to AWS stack                |
| **Hybrid Support**  | AI + Human columns with DiceBear avatars           |
| **Academy**         | 4 course cards with Unsplash thumbnails            |
| **FAQ**             | Accordion with tech-stack-specific answers         |
| **Footer**          | 5-column footer + final CTA section                |
