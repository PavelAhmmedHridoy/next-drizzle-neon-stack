'use client'

import { motion } from 'framer-motion'
import { Terminal, CheckCircle2, AlertCircle, Zap } from 'lucide-react'

const terminalLines = [
  { type: 'command', text: '$ npx next-drizzle-neon-stack my-app' },
  { type: 'info', text: '📦 Creating project structure...' },
  { type: 'success', text: '✓ Initialized git repository' },
  { type: 'success', text: '✓ Created Next.js 16 app with TypeScript' },
  { type: 'success', text: '✓ Configured Tailwind CSS' },
  { type: 'success', text: '✓ Set up Drizzle ORM' },
  { type: 'success', text: '✓ Added authentication (Better Auth)' },
  { type: 'info', text: '📥 Installing dependencies...' },
  { type: 'success', text: '✓ Installed 47 packages' },
  { type: 'success', text: '✓ Created .env.local template' },
  { type: 'info', text: '🚀 Setup complete!' },
  { type: 'command', text: '$ cd my-app && pnpm dev' },
  { type: 'info', text: '▲ Next.js 16.0.0 ready on http://localhost:3000' },
]

// Framer motion variants for synchronized terminal typing experience
const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08, // Uniformly staggers lines on all screen sizes
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export default function SetupOutput() {
  return (
    // Adjusted padding from static py-24 to mobile-friendly py-12 scaling up to md:py-24
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="text-cyan-400 w-6 h-6 md:w-7 md:h-7" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="gradient-text">See It In Action</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2">
            Watch how quickly you can scaffold a production-ready application with just one command.
          </p>
        </motion.div>

        {/* Terminal mockup */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass-effect border border-glass-border rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10"
        >
          {/* Terminal Header */}
          <div className="bg-black/50 border-b border-glass-border px-4 py-3 flex items-center justify-between select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-gray-500 tracking-wider">bash</span>
            <div className="w-12" /> {/* Visually balances window controls */}
          </div>

          {/* Terminal Content */}
          {/* text-xs on mobile scales up cleanly to text-sm on desktop to prevent clipping */}
          <div className="p-4 md:p-6 font-mono text-xs sm:text-sm overflow-x-auto selection:bg-cyan-500/30">
            <div className="space-y-2">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  variants={lineVariants}
                  className="flex items-start gap-2 min-h-[1.5rem]"
                >
                  {line.type === 'command' && (
                    <>
                      <span className="text-cyan-400 flex-shrink-0 select-none">→</span>
                      <span className="text-cyan-300 flex-1 break-all sm:break-words">{line.text}</span>
                    </>
                  )}
                  {line.type === 'success' && (
                    <>
                      <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-green-300 flex-1 break-words">{line.text}</span>
                    </>
                  )}
                  {line.type === 'info' && (
                    <>
                      <Zap size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-yellow-300 flex-1 break-words">{line.text}</span>
                    </>
                  )}
                  {line.type === 'error' && (
                    <>
                      <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-red-300 flex-1 break-words">{line.text}</span>
                    </>
                  )}
                </motion.div>
              ))}
              
              {/* Inline Blinking cursor row */}
              <div className="flex items-center gap-2 min-h-[1.5rem]">
                <span className="text-cyan-400 flex-shrink-0 select-none">→</span>
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "steps(2)"
                  }}
                  className="w-2 h-4 bg-cyan-400"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Result showcase cards */}
        {/* Adjusted from single stack to sm:grid-cols-2 to md:grid-cols-3 for seamless tablet spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            {
              title: 'Project Created',
              description: 'Full-stack project scaffolded with all dependencies configured.',
              icon: '✨',
            },
            {
              title: 'Ready to Develop',
              description: 'Start building immediately with hot-reloading dev server running.',
              icon: '⚡',
            },
            {
              title: 'Deploy Anywhere',
              description: 'Push to production on Vercel, Netlify, or VPS in minutes.',
              icon: '🚀',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              // sm:last:col-span-2 md:last:col-span-1 centers the 3rd card beautifully on 2-column tablet displays
              className="glass-effect p-5 md:p-6 rounded-xl border border-glass-border text-center sm:last:col-span-2 md:last:col-span-1"
            >
              <div className="text-2xl md:text-3xl mb-3 select-none">{item.icon}</div>
              <h4 className="font-bold text-base md:text-lg mb-1.5 text-foreground">{item.title}</h4>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
