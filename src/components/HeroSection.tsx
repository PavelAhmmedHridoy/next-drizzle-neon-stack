'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'
import CodeBlock from './CodeBlock'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    // Adjusted padding-top and minimum height to complement the fixed mobile top navigation bar cleanly
    <section className="min-h-[calc(100vh-4rem)] lg:min-h-screen relative overflow-hidden flex items-center justify-center py-12 lg:pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] opacity-40" />

        {/* Glowing orbs - Scaled responsibly from w-64 to w-96 */}
        <motion.div
          className="absolute top-10 left-4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 sm:bg-cyan-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-4 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/10 sm:bg-teal-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo and badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-glass-border bg-card/40 backdrop-blur-md">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center font-bold text-slate-900 text-xs select-none">
              ◈
            </div>
            <span className="text-xs md:text-sm text-foreground/80 font-medium tracking-wide">Next Drizzle Neon Stack</span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
          {/* Changed text-5xl to text-4xl on mobile to keep words from hyphenating or spilling outside margins */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15]">
            <span className="block text-foreground">Premium</span>
            <span className="gradient-text block py-1">Full-Stack Development</span>
          </h1>
          <p className="text-base sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed px-2">
            A modern CLI scaffolding tool for production-ready Next.js applications with TypeScript, Drizzle ORM, Neon PostgreSQL, and Tailwind CSS.
          </p>
        </motion.div>

        {/* CLI Command Box wrapper */}
        <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto overflow-hidden rounded-lg">
          <CodeBlock
            code="npx next-drizzle-neon-stack"
            language="bash"
            title="Get Started"
            showLineNumbers={false}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full max-w-md sm:max-w-none mx-auto px-4 sm:px-0"
        >
          <Link
            href="/docs/getting-started"
            className="group w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-semibold text-base md:text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/docs/installation"
            className="group w-full sm:w-auto px-8 py-3.5 rounded-lg border border-glass-border bg-card/30 backdrop-blur-sm font-semibold text-base md:text-lg hover:bg-accent/10 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 text-foreground"
          >
            <Code2 size={18} />
            View Documentation
          </Link>
        </motion.div>

        {/* Stats Grid */}
        {/* Swapped out full grid-cols-3 for grid-cols-1 sm:grid-cols-3 so text blocks have space to expand on phones */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-10 max-w-2xl mx-auto w-full text-left sm:text-center"
        >
          {[
            { label: 'Type-Safe', value: '100%' },
            { label: 'Production Ready', value: 'Yes' },
            { label: 'Extensible', value: '∞' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex sm:flex-col justify-between sm:justify-center items-center px-4 py-3 rounded-xl border border-glass-border bg-card/20 backdrop-blur-sm group hover:border-cyan-500/20 transition-all"
            >
              <div className="text-xs text-foreground/60 font-medium sm:mb-1 order-1 sm:order-none">{stat.label}</div>
              <div className="text-xl md:text-2xl font-bold gradient-text order-2 sm:order-none">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
