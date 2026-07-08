'use client'

import { motion } from 'framer-motion'
import CodeBlock from './CodeBlock'
import { Download, Settings, Zap } from 'lucide-react'

const steps = [
  {
    icon: Download,
    number: 1,
    title: 'Run the CLI',
    description: 'Execute the CLI command to scaffold a new project instantly.',
    code: 'npx next-drizzle-neon-stack',
    codeLanguage: 'bash',
  },
  {
    icon: Settings,
    number: 2,
    title: 'Configure Environment',
    description: 'Set up your Neon database and authentication environment variables.',
    code: `# .env.local\nDATABASE_URL=postgresql://user:password@ep-xxxxx.us-east-1.neon.tech/mydb\nNEXTAUTH_SECRET=your-secret-key-here`,
    codeLanguage: 'bash',
  },
  {
    icon: Zap,
    number: 3,
    title: 'Start Development',
    description: 'Run the local development server and start building.',
    code: 'npm run dev\n# or\nyarn dev\n# or\npnpm dev',
    codeLanguage: 'bash',
  },
]

export default function InstallationGuide() {
  return (
    // Updated padding to scale gracefully between mobile and desktop devices
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-glass-border">
      <div className="max-w-5xl mx-auto">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get <span className="gradient-text">Started</span> in 3 Steps
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            From zero to production-ready in minutes
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-10 md:space-y-16">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                // Uses flex-col on mobile/tablet for perfect code box stretching, maps to row on desktop
                className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start"
              >
                {/* Step Metadata (Indicator + Titles) */}
                {/* Allocates a fixed 40% width on large viewports for crisp vertical alignment */}
                <div className="flex items-start gap-4 w-full lg:w-2/5 flex-shrink-0">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center font-bold text-slate-900 text-base md:text-lg flex-shrink-0 shadow-lg shadow-cyan-500/10 select-none">
                    {step.number}
                  </div>
                  <div className="space-y-1 pt-0.5 md:pt-1">
                    <h3 className="font-semibold text-lg text-foreground tracking-tight">{step.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Code block wrapper */}
                {/* Takes up the remaining 60% of layout width on desktops */}
                <div className="w-full lg:w-3/5 overflow-hidden rounded-lg border border-glass-border/40">
                  <CodeBlock
                    code={step.code}
                    language={step.codeLanguage}
                    showLineNumbers={false}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional note / Pro-Tip Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 p-5 md:p-6 rounded-xl border border-glass-border glass-effect bg-gradient-to-r from-cyan-500/5 to-teal-500/5"
        >
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            <span className="font-semibold text-cyan-400">💡 Pro Tip:</span> The CLI automatically configures layout architecture, absolute path mapping aliases, directory paths, database client instances, and validation schemas out of the box.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
