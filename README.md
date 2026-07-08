# Next Drizzle Neon Stack - Premium Documentation Website

A modern, premium animation project scaffolding CLI landing page and comprehensive documentation website for the **Next Drizzle Neon Stack**.

## 🎯 Project Overview

This project showcases a production-ready, developer-focused documentation site for the NDN Stack—a complete full-stack development framework combining:

- **Next.js 16** - Modern React with App Router
- **TypeScript** - Full type safety throughout
- **Drizzle ORM** - Type-safe database operations
- **Neon PostgreSQL** - Serverless database
- **Tailwind CSS** - Utility-first styling

## ✨ Features

### Landing Page
- **Premium dark theme** with glassmorphism design
- **Animated hero section** with parallax effects and glowing accents
- **8 feature cards** highlighting core capabilities
- **Installation guide** with step-by-step setup
- **Comparison section** showing advantages over alternatives
- **FAQ section** with expandable accordion
- **Responsive design** for all device sizes

### Documentation Site
- **8 comprehensive documentation pages**:
  - Getting Started
  - Installation Guide
  - Folder Structure
  - Features Overview
  - Code Examples
  - Why This Stack
  - FAQ
  - Home
  
- **Persistent navigation sidebar** for desktop
- **Mobile-friendly hamburger menu** for mobile devices
- **Code blocks** with syntax highlighting and copy buttons
- **Smooth animations** using Framer Motion
- **Beautiful typography** with Geist and JetBrains Mono fonts

## 🚀 Tech Stack

```
Frontend Framework:    Next.js 16 (App Router)
Styling:              Tailwind CSS v4
Animations:           Framer Motion
Code Highlighting:    react-syntax-highlighter
Icons:                Lucide React
Fonts:                Google Fonts (Geist, Geist Mono)
Analytics:            Vercel Analytics
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles & design tokens
│   └── docs/
│       ├── layout.tsx          # Docs layout with sidebar
│       ├── getting-started/    # Getting started guide
│       ├── installation/       # Installation instructions
│       ├── folder-structure/   # Project structure guide
│       ├── features/           # Feature overview
│       ├── examples/           # Code examples
│       ├── why-stack/          # Stack justification
│       └── faq/                # FAQ section
│
├── components/
│   ├── HeroSection.tsx         # Landing hero with CLI command
│   ├── FeatureCards.tsx        # 8 feature cards
│   ├── InstallationGuide.tsx   # 3-step setup guide
│   ├── ComparisonSection.tsx   # Stack comparison table
│   ├── FAQSection.tsx          # FAQ with accordion
│   ├── CodeBlock.tsx           # Syntax-highlighted code
│   ├── DocsNav.tsx             # Navigation sidebar + mobile menu
│   ├── Footer.tsx              # Footer with links
│   └── DocPageTemplate.tsx     # Reusable doc page wrapper
│
├── public/                     # Static assets
├── styles/                     # Additional styles if needed
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary Brand**: Cyan (#00d9ff) - Modern, tech-forward
- **Secondary**: Teal (#06b6d4) - Complementary accent
- **Dark Background**: #0a0e27 - Premium dark theme
- **Card Background**: #1a1f3a - Subtle depth
- **Neutrals**: White, grays for text hierarchy

### Glass Effect Elements
- Semi-transparent backgrounds with backdrop blur
- Subtle borders with cyan glow accents
- Smooth hover animations and transitions

### Typography
- **Headings**: Geist (Bold, 5xl-7xl)
- **Body**: Geist (Regular, 16px-18px)
- **Code**: JetBrains Mono (12px-14px)

## 🎬 Animation Features

- **Parallax scrolling** on background orbs in hero
- **Staggered component animations** on page load
- **Hover effects** on cards and buttons
- **Glow effects** on cyan/teal elements
- **Smooth transitions** between states
- **Expandable accordion** for FAQ
- **Scroll-triggered animations** for sections

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- pnpm, npm, or yarn

### Installation

```bash
# Clone or download the project
cd my-app

# Install dependencies
pnpm install
# or
npm install

# Run development server
pnpm dev
# or
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📝 Customization

### Update Branding
Edit `/app/globals.css` to change:
- `--neon-cyan` - Primary brand color
- `--neon-teal` - Secondary color
- `--dark-bg` - Background color

### Update Content
- **Landing page**: `/app/page.tsx`
- **Docs pages**: `/app/docs/[page]/page.tsx`
- **Components**: `/components/` directory

### Add Navigation Links
Edit `components/DocsNav.tsx` to add or modify navigation items.

## 📚 Page Structure

### Landing Page Flow
1. **Hero Section** - CLI command showcase
2. **Features** - 8 key features as cards
3. **Installation** - 3-step setup guide
4. **Comparison** - Why choose this stack
5. **FAQ** - Common questions
6. **Footer** - Links and social

### Documentation Pages
Each documentation page uses the `DocPageTemplate` component for consistent styling and structure. Pages include:
- Descriptive header with gradient accent
- Content sections with proper semantic HTML
- Code examples with syntax highlighting
- Info boxes and callouts

## 🔧 Components API

### CodeBlock
```tsx
<CodeBlock
  code="npm install package"
  language="bash"
  title="Installation"
  showLineNumbers={false}
  copyable={true}
/>
```

### Feature Cards
Auto-generated from array in `FeatureCards.tsx`. Customize by editing the `features` array.

### DocsNav
Responsive navigation with:
- Desktop sidebar (64 units width)
- Mobile hamburger menu
- Active link highlighting
- Quick links section

## 🎯 Key Design Patterns

1. **Glass Morphism** - Semi-transparent cards with backdrop blur
2. **Gradient Text** - Cyan-to-teal gradient on headers
3. **Glow Effects** - Box shadows with cyan color
4. **Smooth Transitions** - 300ms duration on interactive elements
5. **Mobile First** - Responsive design starting from small screens

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: `md:` (640px - 1024px)
- **Desktop**: `lg:` (1024px+)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
vercel deploy
```

### Deploy Elsewhere
The project is a standard Next.js application and can be deployed to:
- AWS
- Google Cloud
- Azure
- Any Node.js hosting

## 📄 License

MIT License - Feel free to use this as a template for your projects.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Add documentation

## 📞 Support

For questions or issues:
- Check the [FAQ](/docs/faq)
- Review [Documentation](/docs)
- Join our community (Discord link in footer)

---

Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS.
