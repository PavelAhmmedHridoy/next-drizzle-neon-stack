'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the Next Drizzle Neon Stack?',
    answer: 'The NDN Stack is a complete, modern full-stack development scaffolding tool that combines Next.js, Drizzle ORM, and Neon PostgreSQL into a production-ready CLI. It provides everything you need to start building immediately with best practices already in place.',
  },
  {
    question: 'Do I need to know TypeScript to use this?',
    answer: 'While TypeScript is pre-configured and recommended, you can use JavaScript if you prefer. However, TypeScript is strongly encouraged as it provides excellent type safety and developer experience, especially with Drizzle ORM.',
  },
  {
    question: 'Can I use this with my existing database?',
    answer: 'Yes! While Neon PostgreSQL is recommended, Drizzle ORM supports multiple databases including PostgreSQL, MySQL, and SQLite. You can configure your database connection in the environment variables.',
  },
  {
    question: 'Is authentication included?',
    answer: 'Yes, the scaffolded project comes with authentication patterns pre-configured and ready to use. You can customize it based on your needs.',
  },
  {
    question: 'What if I need to add more technologies?',
    answer: 'The stack is designed to be extensible. All packages and patterns follow modern conventions, making it easy to integrate additional tools and libraries. The folder structure supports growth as your project scales.',
  },
  {
    question: 'Is there a way to get help or join the community?',
    answer: 'Yes! We have an active Discord community, comprehensive documentation, and GitHub discussions. Check out the links in the footer for more information.',
  },
  {
    question: 'Can I use this for production?',
    answer: 'Absolutely! The stack is specifically designed for production-ready applications. All dependencies are carefully selected, and best practices are baked into the project structure.',
  },
  {
    question: 'What about deployment?',
    answer: 'The generated project works seamlessly with Vercel, but can be deployed anywhere. We provide documentation for popular deployment platforms.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-glass-border w-full overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Frequently <span className="gradient-text">Asked</span> Questions
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            Everything you need to know about the NDN Stack
          </p>
        </motion.div>

        {/* FAQ Items wrapper stack */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
                viewport={{ once: true, margin: '-40px' }}
                className="rounded-xl border border-glass-border bg-card/10 backdrop-blur-md overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-button-${index}`}
                  aria-controls={`faq-panel-${index}`}
                  aria-expanded={isOpen}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between text-left hover:bg-cyan-500/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 transition-colors group select-none"
                >
                  <span className="font-semibold text-sm md:text-base text-foreground group-hover:text-cyan-400 transition-colors tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} className="text-cyan-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-glass-border/60"
                    >
                      {/* Kept padding interior here to safeguard the height calculation loop from jitter */}
                      <div className="px-5 py-4 md:px-6 md:py-5 text-foreground/70 text-xs md:text-sm leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Additional resources helper card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 p-5 md:p-6 rounded-xl border border-glass-border bg-gradient-to-r from-cyan-500/5 to-teal-500/5 text-center backdrop-blur-sm"
        >
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            <span className="font-semibold text-cyan-400">Need more help?</span> Check out our{' '}
            <a href="/docs" className="text-cyan-400 font-semibold hover:underline decoration-2 underline-offset-2 transition-all">
              documentation
            </a>{' '}
            or join our community on{' '}
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:underline decoration-2 underline-offset-2 transition-all">
              Discord
            </a>
            .
          </p>
        </motion.div>
        
      </div>
    </section>
  )
}
