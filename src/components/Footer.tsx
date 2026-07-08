'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GitBranch, Mail, MessageSquare, FileText } from 'lucide-react'

export default function Footer() {
  // Safe hydration handling for dynamic dates
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Getting Started', href: '/docs/getting-started' },
        { label: 'Features', href: '/docs/features' },
        { label: 'Examples', href: '/docs/examples' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'GitHub', href: 'https://github.com', external: true },
        { label: 'Discord', href: 'https://discord.com', external: true },
        { label: 'Discussions', href: 'https://github.com/discussions', external: true },
        { label: 'Issues', href: 'https://github.com/issues', external: true },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Guides', href: '/docs' },
        { label: 'API Reference', href: '#' },
        { label: 'FAQ', href: '/docs/faq' },
      ],
    },
  ]

  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com', label: 'GitHub' },
    { icon: MessageSquare, href: 'https://discord.com', label: 'Discord' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
    { icon: FileText, href: '/docs', label: 'Docs' },
  ]

  return (
    // Replaced hardcoded 'from-dark-bg' with system 'bg-background' gradients for better themes stability
    <footer className="relative border-t border-glass-border bg-gradient-to-b from-background via-background/90 to-background/50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Main footer content columns */}
        {/* Adjusted grid breakpoints for fluid tablet transitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center gap-2 group w-fit">
              {/* Changed text-dark-bg to standard text-background for cross-theme text color safety */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center font-bold text-background group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all select-none">
                ◈
              </div>
              <span className="font-bold text-lg gradient-text">NDN</span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
              Premium full-stack development scaffolding for Next.js, Drizzle ORM, and Neon PostgreSQL.
            </p>
          </motion.div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="space-y-3.5"
            >
              <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground/90 select-none">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-foreground/60 hover:text-cyan-400 transition-colors text-sm font-medium block w-fit"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social links and bottom sub-header */}
        <div className="border-t border-glass-border pt-8 space-y-6">
          
          {/* Social icons row */}
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-lg border border-glass-border bg-card/30 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
                >
                  <Icon size={18} className="text-foreground/60 group-hover:text-cyan-400 transition-colors" />
                </a>
              )
            })}
          </motion.div>

          {/* Copyright Section */}
          {/* Flex conversion separates data metadata cleanly on desktop layouts while staying unified on phones */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm text-foreground/50 border-t border-glass-border/30 pt-6">
            <p className="text-center sm:text-left">
              &copy; {currentYear} Next Drizzle Neon Stack. All rights reserved.
            </p>
            <div className="flex items-center gap-4 font-medium">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-glass-border/40 select-none">|</span>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
