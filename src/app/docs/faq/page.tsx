import DocPageTemplate from '@/components/DocPageTemplate'
import { ChevronDown, HelpCircle, MessageSquare, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'FAQ - NDN Stack',
  description: 'Frequently asked questions about the Next Drizzle Neon Stack',
}

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is the Next Drizzle Neon Stack?',
      answer: 'The NDN Stack is a complete, production-ready scaffolding tool that combines Next.js, TypeScript, Drizzle ORM, Neon PostgreSQL, and Tailwind CSS into a single CLI deployment workflow. It sets up your entire architecture using modular, industry-standard best practices.',
    },
    {
      question: 'Do I need to know all these technologies to use NDN Stack?',
      answer: 'Not at all. The CLI handles all the structural boilerplate orchestration for you, and our comprehensive documentation guides you through each layer. You can spin up a boilerplate project immediately and scale your technical knowledge as you build.',
    },
    {
      question: 'Can I use this with an existing pre-provisioned database?',
      answer: 'Yes. While an edge-native Neon PostgreSQL cluster is highly recommended for serverless auto-scaling benefits, Drizzle ORM natively supports any standard PostgreSQL, MySQL, or SQLite instance. Simply update your DATABASE_URL target string in your local .env.local file.',
    },
    {
      question: 'Is user authentication pre-configured out of the box?',
      answer: 'Yes, the scaffolded workspace comes pre-wired with secure, modern authentication patterns utilizing robust, platform-agnostic libraries. Sessions, middleware guards, and account creation paths are immediately operational.',
    },
    {
      question: 'Can I deploy my application to hosting providers other than Vercel?',
      answer: 'Absolutely. The NDN Stack is optimized out-of-the-box for Vercel edge nodes, but compiles into standard builds ready for any cloud hosting container platform running Node.js runtime environments (such as AWS, Zeabur, or Docker environments).',
    },
    {
      question: 'How modular is the default template if I need to add libraries?',
      answer: 'Extremely flexible. The architecture enforces structural separation of concerns, meaning you can plug in packages like state managers, validation libraries, or testing suites without breaking core data flows or page router hooks.',
    },
    {
      question: 'Is this stack suitable for enterprise-scale high-traffic projects?',
      answer: 'Yes. By shifting compute workloads to React Server Components and utilizing serverless database connection pooling via Neon, the runtime architecture is built to absorb sudden scaling spikes with minimal latency.',
    },
    {
      question: 'How are engine dependency upgrades managed?',
      answer: 'We continuously maintain the CLI core blueprint to align with major version shifts in Next.js, Drizzle, and TypeScript. The underlying generation tooling safely references locked, peer-tested package version structures.',
    },
    {
      question: 'Can I use this to deploy headless, API-only applications?',
      answer: 'Yes. While Tailwind CSS and standard layout views come included, you can safely strip out presentational assets and utilize Next.js unified Route Handlers alongside Drizzle ORM to build a hyper-fast, type-safe API service layer.',
    },
    {
      question: 'Does the template include testing infrastructure?',
      answer: 'The orchestration wizard establishes baseline environment configuration mappings tailored for modern unit and integration test runners like Vitest or Playwright, complete with mock environmental setups.',
    },
    {
      question: 'What limits are enforced on the Neon Cloud free database tier?',
      answer: 'Neon provides an extremely developer-friendly free tier configuration featuring generous pooled project storage and instant data branching tools. It provides an ideal sandbox space to test features before scaling up production boundaries.',
    },
  ]

  return (
    <DocPageTemplate
      title="Frequently Asked Questions"
      description="Clear, actionable answers to common questions regarding technical architecture, configurations, and cloud deployment targets."
    >
      <div className="space-y-12">
        
        {/* Page Section Subheader */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <HelpCircle size={20} className="text-cyan-400" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Common Questions</h2>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base max-w-2xl">
            Review detailed operational profiles covering how our unified components integrate to deliver accelerated product development loops.
          </p>
        </div>

        {/* Native Interactive Accordion Group */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-glass-border bg-card/5 backdrop-blur-sm overflow-hidden transition-all duration-200 open:bg-card/10 open:border-glass-border/80"
            >
              <summary className="px-5 py-4 sm:px-6 cursor-pointer list-none flex items-center justify-between font-semibold text-sm sm:text-base select-none outline-none focus-visible:bg-cyan-500/5">
                <span className="text-foreground group-hover:text-cyan-400 transition-colors duration-150 tracking-tight pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={18} 
                  className="text-cyan-400/70 transition-transform duration-200 group-open:rotate-180 group-hover:text-cyan-400 flex-shrink-0" 
                />
              </summary>
              <div className="px-5 pb-5 pt-3 sm:px-6 border-t border-glass-border/40 text-foreground/70 text-xs sm:text-sm leading-relaxed bg-slate-950/20">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Support Context Footnote Callout */}
        <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-gradient-to-r from-cyan-500/5 to-teal-500/5 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
          <div className="space-y-1">
            <h4 className="font-bold text-cyan-400 text-sm sm:text-base">
              {"Didn't find the answers you need?"}
            </h4>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Explore our deeper API documentation repositories, jump into our developer forum streams, or file a bug tracker ticket.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:flex-shrink-0">
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-glass-border bg-card/20 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-xs font-semibold text-foreground transition-all"
            >
              <MessageSquare size={14} className="text-cyan-400" />
              <span>Discord Hub</span>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-glass-border bg-card/20 hover:bg-cyan-500/10 hover:border-cyan-500/30 text-xs font-semibold text-foreground transition-all"
            >
              <span>GitHub Issues</span>
              <ExternalLink size={12} className="text-foreground/50" />
            </a>
          </div>
        </div>
        
      </div>
    </DocPageTemplate>
  )
}
