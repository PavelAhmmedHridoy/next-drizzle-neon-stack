'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Getting Started', href: '/docs/getting-started' },
  { label: 'Installation', href: '/docs/installation' },
  { label: 'Folder Structure', href: '/docs/folder-structure' },
  { label: 'Features', href: '/docs/features' },
  { label: 'Examples', href: '/docs/examples' },
  { label: 'Deployment', href: '/docs/deployment' },
  { label: 'Why This Stack', href: '/docs/why-stack' },
  { label: 'FAQ', href: '/docs/faq' },
]

export default function DocsNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const Logo = () => (
    <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center font-bold text-background group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
        ◈
      </div>
      <span className="font-bold text-lg text-foreground">NDN</span>
    </Link>
  )

  const SocialLinks = () => (
    <div className="space-y-2 pt-4 border-t border-glass-border mt-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/5 transition-all"
      >
        GitHub
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/5 transition-all"
      >
        Discord
      </a>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-card border-r border-glass-border backdrop-blur-md flex-col p-6 z-40">
        <div className="mb-8">
          <Logo />
        </div>

        <div className="flex-1 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? 'bg-accent/10 text-accent shadow-lg shadow-cyan-500/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-accent/5'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <SocialLinks />
      </nav>

      {/* Mobile Top Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-glass-border flex items-center justify-between px-4 z-50">
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-glass-light border border-glass-border hover:bg-accent/10 transition-all text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Animated Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Smooth Dim Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Slide-out Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 h-screen w-72 bg-card border-r border-glass-border p-6 z-40 pt-20 flex flex-col justify-between"
            >
              <div className="flex-1 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                        isActive
                          ? 'bg-accent/10 text-accent'
                          : 'text-foreground/70 hover:text-foreground hover:bg-accent/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              <SocialLinks />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
