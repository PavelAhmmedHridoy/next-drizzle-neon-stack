import DocPageTemplate from '@/components/DocPageTemplate'
import CodeBlock from '@/components/CodeBlock'
import { ArrowRight, CheckCircle2, Terminal, Layers, FileCode2, Rocket } from 'lucide-react'

export const metadata = {
  title: 'Getting Started - NDN Stack',
  description: 'Get started with the Next Drizzle Neon Stack in minutes',
}

export default function GettingStartedPage() {
  return (
    <DocPageTemplate
      title="Getting Started with NDN Stack"
      description="Learn how to quickly scaffold and launch a production-grade full-stack architecture with our interactive developer ecosystem."
    >
      <div className="space-y-12 md:space-y-16">
        
        {/* Quick Start Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Quick Start</h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-3xl">
            The fastest way to deploy an optimized framework setup featuring strict type inference, serverless database mapping, and rapid UI styling mechanics is to utilize our custom orchestration script.
          </p>
        </div>

        {/* Prerequisites Container */}
        <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-card/10 backdrop-blur-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">Prerequisites</h3>
          </div>
          <p className="text-foreground/60 text-xs sm:text-sm">
            Before executing the installation script, verify your local runtime node holds the following requirements:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-foreground/80 pt-1">
            <li className="flex items-center gap-2.5">
              <ArrowRight size={14} className="text-cyan-400 flex-shrink-0" />
              <span>Node.js v18.0.0 or higher installed</span>
            </li>
            <li className="flex items-center gap-2.5">
              <ArrowRight size={14} className="text-cyan-400 flex-shrink-0" />
              <span>A package manager (npm, yarn, or pnpm)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <ArrowRight size={14} className="text-cyan-400 flex-shrink-0" />
              <span>A Neon Cloud Account (Free tier works perfectly)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <ArrowRight size={14} className="text-cyan-400 flex-shrink-0" />
              <span>Git installed for localized version mapping</span>
            </li>
          </ul>
        </div>

        {/* Installation Path Steps */}
        <div className="space-y-10 border-l border-glass-border/40 pl-4 sm:pl-6 ml-1">
          
          {/* Step 1: Initialize */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Terminal size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">1. Scaffold Codebase</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base">
              Run our initializer to configure your targeted tech stack settings automatically:
            </p>
            <CodeBlock
              code="npx next-drizzle-neon-stack"
              language="bash"
              showLineNumbers={false}
            />
          </div>

          {/* Step 2: Dependencies */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Layers size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">2. Install Project Dependencies</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base">
              Navigate straight into your newly created repository folder and trigger your lockfile sequence:
            </p>
            <CodeBlock
              code={`cd my-app\n\n# Execute based on your preferred runner package setup:\npnpm install\n# or npm install\n# or yarn install`}
              language="bash"
              showLineNumbers={false}
            />
          </div>

          {/* Step 3: Environment */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <FileCode2 size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">3. Link Environment Variable Rules</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base">
              Duplicate the fallback configuration template and insert your serverless Neon PostgreSQL connection parameters:
            </p>
            <CodeBlock
              title="Terminal"
              code="cp .env.example .env.local"
              language="bash"
              showLineNumbers={false}
            />
            <CodeBlock
              title=".env.local"
              code={`# Replace connection values with variables extracted from your Neon Dashboard\nDATABASE_URL="postgresql://user:password@ep-xxxxx.us-east-1.neon.tech/mydb?sslmode=require"`}
              language="bash"
              showLineNumbers={false}
            />
          </div>

          {/* Step 4: Run Dev */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Rocket size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">4. Boot Hot-Reloading Server</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base">
              Activate the fast dev environment to preview UI edits instantly:
            </p>
            <CodeBlock
              code={`pnpm dev\n# or npm run dev\n# or yarn dev`}
              language="bash"
              showLineNumbers={false}
            />
            <p className="text-foreground/70 text-sm sm:text-base">
              Open your browser and navigate to{' '}
              <code className="text-cyan-400 bg-slate-950/40 font-mono px-1.5 py-0.5 rounded border border-glass-border/40 text-xs sm:text-sm">
                http://localhost:3000
              </code>{' '}
              to inspect the active dashboard template.
            </p>
          </div>
        </div>

        {/* Next Steps Direction Box */}
        <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-gradient-to-r from-cyan-500/5 to-teal-500/5 backdrop-blur-sm">
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            <span className="font-bold text-cyan-400">✨ Next Steps:</span> Now that your local dev loop is operational, transition to our sequential{' '}
            <a href="/docs/folder-structure" className="text-cyan-400 hover:underline inline-medium font-semibold decoration-cyan-400/40 transition-colors">
              Folder Structure Documentation
            </a>{' '}
            to learn how database schemas, endpoint directories, and server routing trees partition across your workspace.
          </p>
        </div>
        
      </div>
    </DocPageTemplate>
  )
}
