'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisonData = [
  { feature: 'Type Safety', ndnStack: true, alternatives: false },
  { feature: 'Built-in Auth', ndnStack: true, alternatives: false },
  { feature: 'Database Included', ndnStack: true, alternatives: false },
  { feature: 'ORM Pre-configured', ndnStack: true, alternatives: false },
  { feature: 'Type-Safe Queries', ndnStack: true, alternatives: false },
  { feature: 'Environment Validation', ndnStack: true, alternatives: false },
  { feature: 'Production Ready', ndnStack: true, alternatives: true },
  { feature: 'Minimal Setup', ndnStack: true, alternatives: false },
  { feature: 'Regular Updates', ndnStack: true, alternatives: true },
]

export default function ComparisonSection() {
  return (
    <section className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-glass-border w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Why <span className="gradient-text">NDN Stack</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            The complete solution for modern full-stack development
          </p>
        </motion.div>

        {/* Comparison table container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="overflow-x-auto rounded-xl border border-glass-border bg-card/10 backdrop-blur-md"
        >
          {/* Minimum width lock guarantees smooth horizontal scrolling on small phones */}
          <table className="w-full min-w-[600px] border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-glass-border/80 bg-card/30 select-none">
                <th className="px-6 py-4 text-left font-semibold text-foreground/90">Feature</th>
                <th className="px-6 py-4 text-center font-bold text-cyan-400 bg-cyan-500/[0.02]">
                  NDN Stack
                </th>
                <th className="px-6 py-4 text-center font-semibold text-foreground/60">
                  Other Solutions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-glass-border/40">
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-cyan-500/[0.02] transition-colors duration-150"
                >
                  <td className="px-6 py-4 font-medium text-foreground/80">{item.feature}</td>
                  <td className="px-6 py-4 text-center bg-cyan-500/[0.01]">
                    {item.ndnStack ? (
                      <Check className="w-5 h-5 text-cyan-400 mx-auto stroke-[2.5]" />
                    ) : (
                      <X className="w-4 h-4 text-foreground/20 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item.alternatives ? (
                      <Check className="w-5 h-5 text-foreground/40 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-foreground/20 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Highlight cards grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 w-full">
          {[
            {
              title: 'Complete Package',
              description: 'Everything you need to build modern applications, pre-configured out of the box.',
            },
            {
              title: 'Developer Experience',
              description: 'Strict type safety paired with intuitive DX loops optimized for engineering velocity.',
            },
            {
              title: 'Future Proof',
              description: 'Built upon elite ecosystem mainstays that are actively maintained by open-source leaders.',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-5 md:p-6 rounded-xl border border-glass-border bg-card/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <h3 className="font-semibold text-base md:text-lg mb-2 text-foreground group-hover:text-cyan-400 transition-colors tracking-tight">
                {card.title}
              </h3>
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
