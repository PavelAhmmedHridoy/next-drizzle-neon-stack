'use client'

import { motion } from 'framer-motion'
import { Cloud, GitBranch, Zap, Globe, CheckCircle2 } from 'lucide-react'
import CodeBlock from './CodeBlock'

const deploymentPlatforms = [
  {
    name: 'Vercel',
    icon: Cloud,
    description: 'Official Next.js hosting with built-in optimizations.',
    link: 'https://vercel.com',
    features: ['Zero-config deployment', 'Edge Functions', 'Global Analytics', 'Automatic scaling'],
    command: 'pnpm deploy',
  },
  {
    name: 'Railway',
    icon: Zap,
    description: 'Simple cloud platform with PostgreSQL support.',
    link: 'https://railway.app',
    features: ['PostgreSQL included', 'Environment tooling', 'Instant deployments', 'Team collaboration'],
    command: 'railway deploy',
  },
  {
    name: 'Fly.io',
    icon: Globe,
    description: 'Deploy globally using standard Docker containers.',
    link: 'https://fly.io',
    features: ['Global distribution', 'Docker support', 'PostgreSQL instances', 'Custom routing domains'],
    command: 'fly deploy',
  },
  {
    name: 'Netlify',
    icon: GitBranch,
    description: 'Full-stack deployment paired with serverless functions.',
    link: 'https://netlify.com',
    features: ['Native Git workflows', 'Serverless execution', 'Edge function layers', 'Form capture layers'],
    command: 'netlify deploy',
  },
]

const deploymentSteps = [
  {
    step: '1',
    title: 'Build your project',
    description: 'Create your project with the CLI and develop locally',
    code: 'npx next-drizzle-neon-stack my-app\ncd my-app\npnpm dev',
  },
  {
    step: '2',
    title: 'Configure environment',
    description: 'Set up your database, API keys, and environment variables',
    code: 'DATABASE_URL="postgresql://user:pass@host/db"\nNEXT_PUBLIC_API_URL="https://api.example.com"',
  },
  {
    step: '3',
    title: 'Deploy to your platform',
    description: 'Choose your hosting platform and deploy with one command',
    code: '# Vercel\nvercel deploy\n\n# Or Railway\nrailway deploy',
  },
]

export default function DeploymentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
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
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-glass-border w-full">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-40 -right-20 w-72 h-72 md:w-96 md:h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-20 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Deploy Anywhere</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto px-2">
            Your Next Drizzle Neon Stack project is ready for production out of the box. Deploy to your favorite cloud provider with a single workflow.
          </p>
        </motion.div>

        {/* Deployment Platforms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24"
        >
          {deploymentPlatforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <motion.a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-5 md:p-6 rounded-xl border border-glass-border bg-card/20 backdrop-blur-md hover:border-cyan-500/30 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="text-xs font-mono text-foreground/40 group-hover:text-cyan-400 transition-colors select-none" aria-hidden="true">↗</span>
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-1.5 text-foreground">{platform.name}</h3>
                  <p className="text-xs md:text-sm text-foreground/70 mb-4 leading-relaxed">{platform.description}</p>
                  
                  <div className="space-y-2 mb-5">
                    {platform.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                        <CheckCircle2 size={13} className="text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <code className="text-[11px] font-mono text-cyan-400 bg-card/60 border border-glass-border/40 p-2 rounded-lg block text-center truncate group-hover:bg-cyan-500/5 group-hover:border-cyan-500/20 transition-all">
                  {platform.command}
                </code>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Deployment Steps Workflow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-28"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-10 md:mb-14 text-center tracking-tight text-foreground">
            Deployment Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {deploymentSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative h-full flex flex-col"
              >
                {/* Horizontal flow line indicator (Desktop only) */}
                {index < deploymentSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 lg:-right-4 w-6 lg:w-8 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent z-20 pointer-events-none" />
                )}

                <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-card/10 backdrop-blur-sm flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center font-bold text-sm text-slate-900 select-none flex-shrink-0">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-base md:text-lg text-foreground tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-foreground/70 text-xs md:text-sm leading-relaxed mb-1">{item.description}</p>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg border border-glass-border/30">
                    <CodeBlock code={item.code} language="bash" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Deploy Conversion Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-cyan-500/5 via-teal-500/5 to-transparent border border-glass-border rounded-2xl p-6 sm:p-10 md:p-14 backdrop-blur-sm"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-foreground">Deploy with One Click</h3>
          <p className="text-foreground/70 text-xs md:text-sm mb-6 md:mb-8 max-w-lg mx-auto leading-relaxed">
            Use preconfigured template targets to quickly spin up your pipeline settings directly inside your hosting platform of choice.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 w-full max-w-xl mx-auto">
            {[
              { name: 'Deploy to Vercel', url: 'https://vercel.com/new' },
              { name: 'Deploy to Railway', url: 'https://railway.app' },
              { name: 'Deploy to Fly.io', url: 'https://fly.io' },
            ].map((btn, i) => (
              <motion.a
                key={i}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 font-semibold text-sm text-slate-900 hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-center"
              >
                {btn.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
