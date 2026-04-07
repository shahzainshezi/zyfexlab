# Zyfex Lab — Website Source Code

## Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm or pnpm

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shared UI components (shadcn)
│   ├── Nav.tsx       # Navigation bar
│   ├── Hero.tsx      # Hero section with terminal widget
│   ├── Services.tsx  # Services cards
│   ├── TechStrip.tsx # Tech stack strip
│   ├── Process.tsx   # 3-step process section
│   ├── Automation.tsx# Automation suite cards
│   ├── Metrics.tsx   # Stats / results section
│   ├── Guarantee.tsx # 30-day guarantee section
│   ├── FAQ.tsx       # FAQ accordion
│   ├── CTA.tsx       # Call to action + lead form
│   └── Footer.tsx    # Footer
├── pages/
│   └── Home.tsx      # Main page (assembles all sections)
├── App.tsx           # Root app with routing
├── main.tsx          # Entry point
└── index.css         # Global styles + theme
```

## Tech Stack
- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- Framer Motion (animations)
- Radix UI (accessible components)
- Lucide React (icons)
- Wouter (routing)
