'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Terminal, Database, Key, Zap } from 'lucide-react'
import CodeBlock from './CodeBlock'

const setupPhases = [
  {
    phase: 'Phase 1',
    title: 'Initialize Project',
    icon: Terminal,
    duration: '~30s',
    steps: [
      'Run CLI command',
      'Choose project name',
      'Select package manager (pnpm/npm/yarn)',
      'Project scaffolded with all dependencies',
    ],
    code: `npx next-drizzle-neon-stack my-app\ncd my-app\npnpm install`,
    output: `✓ Creating project structure\n✓ Installing dependencies\n✓ Setting up TypeScript\n✓ Configuring Tailwind CSS\n✓ Project ready!`,
  },
  {
    phase: 'Phase 2',
    title: 'Configure Database',
    icon: Database,
    duration: '~2m',
    steps: [
      'Create Neon PostgreSQL database',
      'Generate connection string',
      'Add DATABASE_URL to .env.local',
      'Run migrations',
    ],
    code: `# Copy .env.example to .env.local\ncp .env.example .env.local\n\n# Add your Neon database URL\nDATABASE_URL="postgresql://user:pass@host/db"\n\n# Run migrations\npnpm migrate`,
    output: `Neon PostgreSQL Connection ✓\nDatabase URL configured ✓\nMigrations applied ✓\nTables created successfully ✓`,
  },
  {
    phase: 'Phase 3',
    title: 'Setup Authentication',
    icon: Key,
    duration: '~1m',
    steps: [
      'Add BETTER_AUTH_SECRET',
      'Configure OAuth providers (optional)',
      'Set up session management',
      'Test login flow',
    ],
    code: `# Generate auth secret\nopenssl rand -base64 32\n\n# Add to .env.local\nBETTER_AUTH_SECRET="your-generated-secret"\n\n# Optional: Add OAuth providers\nGITHUB_ID="your-github-id"\nGITHUB_SECRET="your-github-secret"`,
    output: `Better Auth configured ✓\nSession storage ready ✓\nOAuth providers enabled ✓\nReady for authentication ✓`,
  },
  {
    phase: 'Phase 4',
    title: 'Deploy & Go Live',
    icon: Zap,
    duration: '~5m',
    steps: [
      'Push to GitHub repository',
      'Connect to deployment platform',
      'Configure environment variables',
      'Deploy to production',
    ],
    code: `git add .\ngit commit -m "Initial commit"\ngit push origin main\n\n# Or deploy directly\nvercel deploy --prod`,
    output: `Repository pushed ✓\nBuild successful ✓\nDeployment complete ✓\nLive at: https://your-app.vercel.app ✓`,
  },
]

export default function SetupGuide() {
  return (
    // Scaled global padding for mobile vs desktop
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-20"
        >
          {/* Scaled typography */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Setup in 4 Phases</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2">
            From zero to deployed in just a few minutes. Follow our interactive setup guide to get your project running.
          </p>
        </motion.div>

        {/* Interactive Setup Timeline */}
        {/* Expanded vertical spacing to allow the grid layout to breathe */}
        <div className="space-y-16 md:space-y-32">
          {setupPhases.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                // Added 'relative' here so the timeline connector stays attached to the row
                className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Left side - Content */}
                {/* md:order-2 flips the content to the right side on alternating rows for desktop */}
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                  className={index % 2 === 1 ? 'md:order-2' : ''}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex-shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-dark-bg" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-mono text-cyan-400 block mb-0.5">{item.phase}</span>
                        <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                      </div>
                      <span className="ml-auto text-xs font-mono text-foreground/50 bg-foreground/5 px-2.5 py-1 rounded-lg border border-glass-border">
                        {item.duration}
                      </span>
                    </div>

                    {/* Steps list */}
                    <ul className="space-y-2.5 md:space-y-2 pl-2 md:pl-4 mt-4">
                      {item.steps.map((step, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2.5 text-sm md:text-base text-gray-300"
                        >
                          <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Right side - Code */}
                {/* md:order-1 pushes the code to the left side on alternating rows for desktop */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={index % 2 === 1 ? 'md:order-1' : ''}
                >
                  <div className="space-y-3 md:space-y-4 w-full overflow-hidden rounded-lg">
                    {/* Assuming CodeBlock has its own max-w/overflow protections */}
                    <CodeBlock code={item.code} language="bash" title="Commands" />
                    
                    <div className="glass-effect p-3 md:p-4 rounded-lg border border-glass-border">
                      <p className="text-[10px] md:text-xs font-mono text-cyan-400 font-semibold mb-1.5 md:mb-2 tracking-wider">
                        OUTPUT:
                      </p>
                      {/* Responsive font size and break-words to prevent mobile horizontal scroll */}
                      <pre className="text-[11px] md:text-xs text-green-400 whitespace-pre-wrap break-words font-mono">
                        {item.output}
                      </pre>
                    </div>
                  </div>
                </motion.div>

                {/* Desktop Timeline Connector */}
                {/* Properly sized and anchored to bottom center of the relative grid row */}
                {index < setupPhases.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-cyan-500/40 to-transparent -bottom-24" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24 pt-8 border-t border-glass-border"
        >
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Need more detailed instructions?
          </p>
          <a
            href="/docs/getting-started"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 hover:border-cyan-500/60 font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-teal-500/20 w-full sm:w-auto"
          >
            View Full Setup Guide
            <span className="text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
