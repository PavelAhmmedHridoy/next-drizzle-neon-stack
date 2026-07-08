'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface DocPageTemplateProps {
  title: string
  description: string
  children: ReactNode
}

export default function DocPageTemplate({
  title,
  description,
  children,
}: DocPageTemplateProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-8 md:space-y-12"
      >
        {/* Header Section */}
        <div className="space-y-4 border-b border-glass-border/30 pb-8 md:pb-10">
          
          {/* Fixed word array logic loop prevents duplicating index 0 string data */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
            {title.split(' ').map((word, i) => (
              <span key={i} className="inline-block">
                {i === 0 ? (
                  <span className="gradient-text pr-2">{word}</span>
                ) : (
                  <span>{word}&nbsp;</span>
                )}
              </span>
            ))}
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-2xl font-medium">
            {description}
          </p>
        </div>

        {/* Markdown Content Wrapper */}
        {/* Added prose text scaling to optimize document reading sizes between devices */}
        <div className="prose prose-sm sm:prose-base prose-invert max-w-none focus:outline-none selection:bg-cyan-500/30">
          {children}
        </div>
        
      </motion.div>
    </article>
  )
}
