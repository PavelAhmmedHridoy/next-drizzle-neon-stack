# Quick Reference - NDN Stack Documentation Site

## 🚀 Getting Started (60 seconds)

```bash
# 1. Install dependencies
pnpm install

# 2. Start development
pnpm dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Most Important Files to Edit

| File | Purpose | Location |
|------|---------|----------|
| **app/page.tsx** | Landing page content | Change hero text, CTA buttons |
| **app/globals.css** | Colors & design tokens | Update brand colors |
| **components/DocsNav.tsx** | Navigation links | Add/remove docs pages |
| **components/FeatureCards.tsx** | Features list | Update 8 features |
| **app/docs/** | Documentation content | All your guides |

---

## 🎨 Quick Customization

### Change Brand Color
```css
/* app/globals.css */
--neon-cyan: #your-color;
--neon-teal: #your-color;
```

### Update CLI Command
```tsx
// components/HeroSection.tsx (line ~85)
<CodeBlock
  code="your-command-here"
  language="bash"
/>
```

### Add New Feature Card
```tsx
// components/FeatureCards.tsx - add to features array
{
  icon: YourIcon,
  title: "Feature Name",
  description: "Description here",
  color: "from-color-400 to-color-600",
}
```

### Add Documentation Page
```bash
# 1. Create new directory
mkdir app/docs/your-page

# 2. Create page file
touch app/docs/your-page/page.tsx

# 3. Use template
# Copy from any /app/docs/*/page.tsx

# 4. Add to navigation
# Edit components/DocsNav.tsx
```

---

## 🎬 Animation Types

### Scroll-Triggered (Most Common)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content here
</motion.div>
```

### Parallax Background
```tsx
<motion.div
  animate={{ y: [0, 50, 0] }}
  transition={{ duration: 8, repeat: Infinity }}
>
  Orb
</motion.div>
```

---

## 📐 Design Tokens

```css
/* Colors */
--neon-cyan: #00d9ff;
--neon-teal: #06b6d4;
--dark-bg: #0a0e27;
--glass-light: rgba(15, 23, 42, 0.4);

/* Typography */
H1: 5xl-7xl (Geist Bold)
H2: 3xl-5xl (Geist SemiBold)
Body: 16-18px (Geist Regular)
Code: 12-14px (JetBrains Mono)

/* Spacing (4px base) */
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px...
```

---

## 🔧 Component API Quick Reference

### CodeBlock
```tsx
<CodeBlock
  code="your code here"
  language="bash|typescript|tsx|python|sql"
  title="Optional title"
  showLineNumbers={true}
  copyable={true}
/>
```

### DocsNav
**No props needed** - Uses Next.js routing automatically
- Edit `navItems` array to change links
- Edit `socialLinks` array for footer links

### DocPageTemplate
```tsx
<DocPageTemplate
  title="Your Title"
  description="Your description"
>
  {/* Your content here */}
</DocPageTemplate>
```

---

## 📱 Responsive Helpers

```tsx
/* Mobile first, then enhance */

/* Default (mobile) */
<div className="text-xl">Text</div>

/* Tablet and up */
<div className="md:text-2xl">Text</div>

/* Desktop and up */
<div className="lg:text-3xl">Text</div>

/* Common patterns */
grid-cols-1              /* Mobile: 1 column */
md:grid-cols-2           /* Tablet: 2 columns */
lg:grid-cols-4           /* Desktop: 4 columns */

hidden lg:flex           /* Hide on mobile, show on desktop */
lg:ml-64                 /* Add sidebar margin on desktop */
```

---

## 📊 Page Structure

### Landing Page
```
Hero → Features → Installation → Comparison → FAQ → Footer
```

### Docs Pages
```
Sidebar → Content → Footer
```

---

## 🎯 Common Tasks

### Add Link to Navigation
```tsx
// components/DocsNav.tsx
const navItems = [
  // ... existing items
  { label: 'New Page', href: '/docs/new-page' },
]
```

### Change Section Background
```tsx
// Add to container div
className="bg-gradient-to-r from-cyan-500/5 to-teal-500/5"
```

### Add Glass Effect
```tsx
className="glass-effect"
/* Automatically applies:
   - Semi-transparent background
   - Backdrop blur
   - Border with cyan tint
   - Rounded corners
*/
```

### Disable Animation
```tsx
// Remove motion component or set static
<div>Static content</div>
```

---

## 🔗 Navigation Structure

```
/ (Landing)
├── /docs
│   ├── /getting-started
│   ├── /installation
│   ├── /folder-structure
│   ├── /features
│   ├── /examples
│   ├── /why-stack
│   └── /faq
```

All docs share same sidebar navigation.

---

## 🎨 CSS Utilities

```css
/* Glass morphism */
.glass-effect

/* Glowing effects */
.glow-cyan
.glow-cyan-lg

/* Text effects */
.gradient-text        /* Cyan to teal gradient */

/* Transitions */
.smooth-transition    /* 300ms ease-out */
```

---

## 📦 Key Dependencies

| Package | Version | Use |
|---------|---------|-----|
| Next.js | 16+ | Framework |
| React | 19+ | UI library |
| Framer Motion | ^12 | Animations |
| Tailwind CSS | 4 | Styling |
| react-syntax-highlighter | ^16 | Code blocks |
| Lucide React | ^1.17 | Icons |

---

## 🚀 Deployment Commands

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Deploy to Vercel
vercel deploy

# Deploy with Vercel (auto)
git push origin main
# (Vercel auto-deploys when linked)
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Animations not working | Check `'use client'` directive at top of file |
| Styling broken | Run `pnpm build` to verify Tailwind |
| Nav links dead | Check page exists in `/app/docs/` |
| Mobile menu broken | Verify `DocsNav.tsx` is imported |
| Syntax highlighting off | Check language prop matches real language |

---

## 💡 Pro Tips

1. **Colors**: Edit only `--neon-cyan` and `--neon-teal` in globals.css for full rebrand
2. **Fonts**: Already loaded (Geist, JetBrains Mono) - just use class names
3. **Animations**: All components have `'use client'` at top - mobile friendly
4. **Responsive**: Use `md:` and `lg:` prefixes, not `sm:` for mobile-first
5. **Performance**: All pages statically generated at build time

---

## 📖 Documentation Structure

Each doc page includes:
- **Header**: Title + description
- **Sections**: Semantic `<section>` tags
- **Code blocks**: Syntax highlighted
- **Lists**: Semantic `<ul>` or `<ol>`
- **Links**: Internal (docs) and external (GitHub, etc)

---

## 🎓 Quick Learning Path

1. **Understand the structure**: Read `PROJECT_SUMMARY.md`
2. **See the design**: Read `VISUAL_GUIDE.md`
3. **Learn to customize**: Read `IMPLEMENTATION.md`
4. **Start editing**: Edit `app/globals.css` first (colors)
5. **Add content**: Update `app/docs/` pages

---

## ✅ Pre-Deployment Checklist

- [ ] Update logo (replace ◈ symbol)
- [ ] Update brand colors
- [ ] Update CLI command text
- [ ] Update social links (GitHub, Discord)
- [ ] Review all documentation
- [ ] Test on mobile
- [ ] Test on desktop
- [ ] Check lighthouse score
- [ ] Set up custom domain
- [ ] Enable analytics

---

## 📞 Quick Links

- **Local Dev**: `http://localhost:3000`
- **Build**: `pnpm build`
- **Production**: `pnpm start`
- **Dependencies**: `pnpm install`

---

**Quick Reference v1.0 - Updated July 2026**

*For detailed information, see README.md, IMPLEMENTATION.md, or VISUAL_GUIDE.md*
