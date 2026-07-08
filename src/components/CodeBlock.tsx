'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  showLineNumbers?: boolean
  copyable?: boolean
}

export default function CodeBlock({
  code,
  language,
  title,
  showLineNumbers = true,
  copyable = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Native block override style parameters targeting the underlying pre-tag container
  const preTagCustomStyles = {
    background: 'transparent',
    margin: 0,
    padding: '1.25rem',
    fontSize: '0.8125rem', // Highly readable 13px on mobile scaling to 14px via tailwind
    lineHeight: '1.65',
    fontFamily: 'var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  }

  // Reusable Copy Button element structure
  const CopyButton = () => (
    <button
      onClick={handleCopy}
      type="button"
      aria-label={copied ? "Copied code" : "Copy code to clipboard"}
      className="p-1.5 rounded-md border border-glass-border/40 bg-card/40 text-foreground/50 hover:text-cyan-400 hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 select-none flex-shrink-0"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Check size={14} className="text-emerald-400" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Copy size={14} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )

  return (
    <div className="w-full rounded-xl border border-glass-border bg-slate-950/40 backdrop-blur-md overflow-hidden flex flex-col group/block">
      
      {/* Header bar section */}
      {title ? (
        <div className="px-4 py-2.5 bg-card/20 border-b border-glass-border/60 flex items-center justify-between gap-4 select-none">
          <span className="font-mono text-xs text-cyan-400 truncate tracking-wide font-medium">
            {title}
          </span>
          {copyable && <CopyButton />}
        </div>
      ) : null}

      {/* Highlighter core wrapper code body */}
      <div className="relative w-full overflow-hidden flex-1 flex text-sm sm:text-base">
        
        {/* Floating standalone copy trigger button fallback when header title is missing */}
        {!title && copyable && (
          <div className="absolute top-3 right-3 z-20 md:opacity-0 md:group-hover/block:opacity-100 transition-opacity duration-200">
            <CopyButton />
          </div>
        )}

        <div className="w-full overflow-x-auto scrolling-touch">
          <SyntaxHighlighter
            language={language}
            style={dracula}
            showLineNumbers={showLineNumbers}
            customStyle={preTagCustomStyles}
            wrapLines={true}
            lineNumberStyle={{
              minWidth: '2.25rem',
              paddingRight: '1rem',
              color: 'rgba(248, 250, 252, 0.25)',
              textAlign: 'right',
              userSelect: 'none',
            }}
            lineProps={{
              style: {
                display: 'flex',
                flexWrap: 'wrap',
                wordBreak: 'break-word',
                // Guarantees standalone floating button space protection buffer clearance rule
                paddingRight: !title && copyable ? '2.5rem' : '0rem',
              },
            }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>

    </div>
  )
}
