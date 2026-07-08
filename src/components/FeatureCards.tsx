'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Shield,
  Palette,
  Lock,
  CheckCircle2,
  Package,
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Next.js App Router',
    description: 'Modern server components and client-side interactivity with the latest Next.js App Router architecture.',
    colorClass: 'from-blue-400 to-blue-600',
    glowColor: 'rgba(96, 165, 250, 0.25)',
  },
  {
    icon: CheckCircle2,
    title: 'TypeScript',
    description: 'Full type safety across your entire application stack for an enhanced developer experience and fewer production bugs.',
    colorClass: 'from-cyan-400 to-cyan-600',
    glowColor: 'rgba(34, 211, 238, 0.25)',
  },
  {
    icon: Database,
    title: 'Drizzle ORM',
    description: 'Type-safe SQL query generation with an intuitive API that combines raw speed with complete runtime security.',
    colorClass: 'from-emerald-400 to-emerald-600',
    glowColor: 'rgba(52, 211, 153, 0.25)',
  },
  {
    icon: Shield,
    title: 'Neon PostgreSQL',
    description: 'Serverless PostgreSQL database instance offering instant auto-scaling, branching capability, and pay-as-you-go pricing.',
    colorClass: 'from-purple-400 to-purple-600',
    glowColor: 'rgba(192, 132, 252, 0.25)',
  },
  {
    icon: Palette,
    title: 'Tailwind CSS',
    description: 'Utility-first utility CSS design token classes framework configured for rapid responsive interface deployment.',
    colorClass: 'from-teal-400 to-teal-600',
    glowColor: 'rgba(45, 212, 191, 0.25)',
  },
  {
    icon: Lock,
    title: 'Authentication Ready',
    description: 'Pre-configured modern auth patterns with secure state session management and fast user verification handling loops.',
    colorClass: 'from-red-400 to-red-600',
    glowColor: 'rgba(248, 113, 113, 0.25)',
  },
  {
    icon: CheckCircle2,
    title: 'Environment Validation',
    description: 'Strict programmatic validation of all required environment variables automatically enforced during standard build steps.',
    colorClass: 'from-orange-400 to-orange-600',
    glowColor: 'rgba(251, 146, 60, 0.25)',
  },
  {
    icon: Package,
    title: 'Production Structure',
    description: 'Battle-tested enterprise file organization design layout built ready for multi-team scale and codebase predictability.',
    colorClass: 'from-pink-400 to-pink-600',
    glowColor: 'rgba(236, 72, 153, 0.25)',
  },
]

export default function FeatureCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Reduced lag overhead on mobile scroll updates
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto px-2">
            A complete, modern tech stack ready for production use.
          </p>
        </motion.div>

        {/* Feature grid */}
        {/* Replaced 'md:grid-cols-2 lg:grid-cols-4' with a multi-breakpoint tier layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full flex flex-col"
              >
                {/* Clean, dynamic backdrop blur/glow panel using config strings */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-95 pointer-events-none"
                  style={{
                    boxShadow: `0 0 35px 5px ${feature.glowColor}`,
                  }}
                />

                {/* Card content structure */}
                <div className="relative px-5 py-6 md:px-6 md:py-8 rounded-xl border border-glass-border bg-card/20 backdrop-blur-md group-hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {/* Icon container */}
                    <div
                      className={`w-11 h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${feature.colorClass} p-2.5 mb-4 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}
                      style={{
                        boxShadow: `0 4px 12px ${feature.glowColor}`,
                      }}
                    >
                      <Icon className="w-full h-full text-slate-900 font-bold dark:text-white flex-shrink-0" />
                    </div>

                    {/* Text block elements */}
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground tracking-tight group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
