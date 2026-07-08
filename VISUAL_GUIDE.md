# Visual Design Guide - NDN Stack Documentation Site

## Landing Page Layout

```
┌─────────────────────────────────────────────────┐
│  ◈ NDN  [Nav Sidebar]    ☰ (mobile)            │ Header
├─────────────────────────────────────────────────┤
│                                                 │
│          🌀 Animated Background Orbs 🌀         │
│                                                 │
│              PREMIUM                            │
│          Full-Stack Development                 │ Hero Section
│                                                 │
│         npx next-drizzle-neon-stack             │ (with CLI command)
│                                                 │
│  [Get Started]  [View Documentation]            │
│                                                 │
│  [100% Type-Safe]  [Production Ready]  [∞ Ext] │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│         Everything You NEED                     │ Feature Cards
│  ┌─────────┬─────────┬─────────┬─────────┐     │ (4 columns)
│  │ Next.js │ TypeScrp│ Drizzle │  Neon   │     │
│  ├─────────┼─────────┼─────────┼─────────┤     │
│  │ Tailwind│  Auth   │  Env V  │  Prod   │     │
│  └─────────┴─────────┴─────────┴─────────┘     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│         Get Started in 3 Steps                  │ Installation Guide
│                                                 │
│  ① Run CLI      ② Configure    ③ Start Dev    │
│  [Code Block]   [Code Block]   [Code Block]    │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│              Why NDN Stack                      │ Comparison
│  ┌──────────────────────────────────────────┐  │
│  │ Feature      │ NDN Stack │ Other Solutions│ │
│  ├──────────────┼───────────┼────────────────┤ │
│  │ Type Safety  │    ✓      │       ✗        │ │
│  │ Auth Included│    ✓      │       ✗        │ │
│  │ Database Incl│    ✓      │       ✗        │ │
│  │ Prod Ready   │    ✓      │       ✓        │ │
│  └──────────────┴───────────┴────────────────┘ │
│                                                 │
│  [Complete Package] [DX] [Future Proof]        │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│    Frequently Asked Questions (with Toggle)    │ FAQ Section
│                                                 │
│  ▸ What is NDN Stack?                          │
│    └─ The NDN Stack is a complete...           │
│                                                 │
│  ▸ Do I need to know all technologies?         │
│  ▸ Can I use with existing database?           │
│  ▸ Is authentication included?                 │
│  ... (8 total)                                 │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  © 2026 NDN Stack  │ Privacy │ Terms           │ Footer
│  [GitHub] [Discord] [Email] [Docs]             │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Documentation Page Layout

```
┌──────────────────────────────────────────────────────┐
│  ◈ NDN                                               │ Header
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────────┐  ┌──────────────────────────┐ │
│  │   Navigation    │  │   Getting Started        │ │
│  │                 │  │                          │ │
│  │ Home            │  │ Getting Started with... │ │
│  │ Getting Started │  │                          │ │
│  │ Installation    │  │ Quick Start              │ │
│  │ Folder Struct   │  │ Prerequisites            │ │
│  │ Features        │  │ Installation Steps       │ │
│  │ Examples        │  │ Project Setup            │ │
│  │ Why This Stack  │  │ Environment Config       │ │
│  │ FAQ             │  │ Run Dev Server           │ │
│  │ ─────────────── │  │                          │ │
│  │ GitHub          │  │ [Next Steps Section]     │ │
│  │ Discord         │  │                          │ │
│  │                 │  │                          │ │
│  │ (64px wide)     │  │ (Main Content Area)      │ │
│  └─────────────────┘  └──────────────────────────┘ │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│                      Footer                         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

## Component Visual Examples

### Hero Section Breakdown

```
┌─────────────────────────────────────┐
│                                     │
│      [Header Badge]                 │  "NDN - Next Drizzle Neon"
│      ◈ Next Drizzle Neon Stack     │
│                                     │
│  Premium Full-Stack Development     │  Main Title
│                                     │
│  A modern CLI for Next.js, etc...   │  Description
│                                     │
│  npx next-drizzle-neon-stack        │  CLI Command (in CodeBlock)
│                                     │  with copy button
│                                     │
│  [Get Started]  [Documentation]     │  CTA Buttons
│                                     │
│  [100%] [Yes]  [∞]                  │  Stats Cards
│                                     │
└─────────────────────────────────────┘
```

### Feature Card Design

```
┌──────────────────────────┐
│                          │
│  [Icon Background]       │  Icon (with gradient bg)
│                          │
│  Feature Title           │  Heading (hover: cyan)
│                          │
│  Feature description     │  Text
│  explaining benefits     │
│                          │
└──────────────────────────┘
```

### Code Block Component

```
┌─────────────────────────────────────┐
│ Installation    [Copy Button]       │  Title bar
├─────────────────────────────────────┤
│                                     │
│ ▌ npx next-drizzle-neon-stack      │  Syntax highlighted code
│ ▌ npm install                       │  with line numbers
│ ▌ npm run dev                       │
│                                     │
└─────────────────────────────────────┘
```

### Navigation Sidebar (Desktop)

```
┌──────────────────┐
│  ◈ NDN           │  Logo (64px)
│                  │
│ Home             │  Link (normal)
│ Getting Started  │  Link (active) - cyan highlight
│ Installation     │  Link (normal)
│ Folder Structure │
│ Features         │
│ Examples         │
│ Why This Stack   │
│ FAQ              │
│ ──────────────── │
│ GitHub           │  External link
│ Discord          │  External link
│                  │
└──────────────────┘
```

### Navigation Menu (Mobile)

```
┌──────────────────┐
│ ☰                │  Hamburger button
│                  │
│ When clicked:    │
│ ┌──────────────┐ │
│ │ Home         │ │  Overlay menu
│ │ Getting...   │ │
│ │ Installation │ │
│ │ Folder...    │ │
│ │ Features     │ │
│ │ Examples     │ │
│ │ Why Stack    │ │
│ │ FAQ          │ │
│ │ GitHub       │ │
│ │ Discord      │ │
│ └──────────────┘ │
│                  │
└──────────────────┘
```

## Color Usage Map

```
Background:     #0a0e27 (Deep dark - main bg)
Card bg:        #1a1f3a (Lighter dark - cards)
Text primary:   #f1f5f9 (White)
Text secondary: #94a3b8 (Gray)
Primary accent: #00d9ff (Cyan) - borders, highlights
Secondary:      #06b6d4 (Teal) - gradients
```

## Animation Effects

### 1. Parallax Orbs (Hero)
```
Background orb at top-left
  ↗ Moves up-right
  ↙ Returns to original
  (8 second loop, infinite)

Background orb at bottom-right
  ↙ Moves down-left  
  ↗ Returns to original
  (8 second loop, infinite)
```

### 2. Staggered Component Entry
```
Timeline (total 1.2s):
  0.0s → Title fades in (0-0.8s)
  0.1s → Badge fades in (0.1-0.9s)
  0.2s → CLI command fades in (0.2-1.0s)
  0.3s → Buttons fade in (0.3-1.1s)
  0.4s → Stats fade in (0.4-1.2s)
```

### 3. Scroll-Based Animations
```
When 50% of section enters viewport:
  From: opacity 0, translateY 20px
  To:   opacity 1, translateY 0
  
  Duration: 0.8s
  Animation only plays once
```

### 4. Hover Effects
```
Card hover:
  Border color: transparent → cyan with opacity
  Background: no change → accent/5 opacity
  Shadow: normal → cyan glow shadow
  Duration: 200ms ease-out
```

## Responsive Breakpoints

### Mobile (< 640px)
```
┌─────────────┐
│ ☰ Logo      │  Hero
│             │  Title: 5xl (80px)
│ Title text  │  Buttons: stacked
│             │
│ [Button 1]  │  Features: 1 column
│ [Button 2]  │  Install: linear layout
│             │
└─────────────┘
```

### Tablet (640px - 1024px)
```
┌─────────────────────┐
│ ☰ Logo              │  Hero
│                     │  Title: 6xl
│   Title text        │  Buttons: stacked
│                     │
│ [Button 1] [Button 2]│ Features: 2 columns
│                     │  Sidebar hidden
└─────────────────────┘
```

### Desktop (1024px+)
```
┌─────────┬──────────────────┐
│ Sidebar │   Content        │  Sidebar: 256px
│ Logo    │                  │  Content: flex-1
│ Nav     │   Hero Title 7xl │  Features: 4 columns
│         │                  │  Install: 5-col grid
│         │ Content area     │
└─────────┴──────────────────┘
```

## Typography Hierarchy

```
H1 (Page Title)         5xl-7xl (80-84px)  | Geist Bold
    ↓
H2 (Section Header)     3xl-5xl (30-60px)  | Geist SemiBold
    ↓
H3 (Subsection)         2xl (24px)         | Geist SemiBold
    ↓
Body Text               16-18px            | Geist Regular
    ↓
Small Text              14px               | Geist Regular
    ↓
Code Text               12-14px            | JetBrains Mono
```

## Spacing & Layout Grid

Base unit: 4px (from Tailwind)

Common spacing:
- Tight: 8px (p-2)
- Normal: 16px (p-4)
- Comfortable: 24px (p-6)
- Spacious: 32px (p-8)
- Section gap: 48-64px (py-12-16)

Container widths:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Glass Morphism Styling

```
┌─────────────────────────────┐
│ Card with Glass Effect      │
├─────────────────────────────┤
│                             │
│ Applied CSS:                │
│ - bg: rgba(15,23,42, 0.4)  │
│ - backdrop: blur(12px)      │
│ - border: rgba(0,217,255,0.1)
│ - border-radius: 12px       │
│ - hover: opacity increases  │
│                             │
└─────────────────────────────┘
```

---

This visual guide helps developers understand the spatial organization, color usage, animations, and responsive behavior of the NDN Stack documentation site.
