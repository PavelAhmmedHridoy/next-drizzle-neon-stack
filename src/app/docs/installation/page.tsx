import DocPageTemplate from '@/components/DocPageTemplate'
import CodeBlock from '@/components/CodeBlock'
import { Terminal, Settings, Database, Key, Play, Layers } from 'lucide-react'

export const metadata = {
  title: 'Installation - NDN Stack',
  description: 'Detailed installation guide for the Next Drizzle Neon Stack',
}

export default function InstallationPage() {
  return (
    <DocPageTemplate
      title="Detailed Installation Guide"
      description="Complete step-by-step instructions for installing and configuring your Next Drizzle Neon Stack application environment."
    >
      <div className="space-y-12 md:space-y-16">
        
        {/* Core CLI Header */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Using the CLI Wizard</h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-3xl">
            The recommended method to initiate a new NDN Stack project is through our interactive CLI tool. It automates code scaffolding, configures your type system, and binds downstream environmental rules seamlessly.
          </p>
        </div>

        {/* Installation Timeline Workflow */}
        <div className="space-y-10 border-l border-glass-border/40 pl-4 sm:pl-6 ml-1">
          
          {/* Step 1 */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Terminal size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Step 1: Run the Bootstrap Script</h3>
            </div>
            <CodeBlock
              code="npx next-drizzle-neon-stack"
              language="bash"
              showLineNumbers={false}
            />
            <p className="text-foreground/70 text-sm sm:text-base">
              Execute this command in your local terminal workspace directory to launch our interactive setup engineer.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Settings size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Step 2: Configuration Prompts</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base">
              The configuration routine will prompt your entry input for the following environment parameters:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-foreground/80 font-medium">
              <li className="p-3 rounded-lg border border-glass-border/40 bg-card/10 backdrop-blur-sm">
                <span className="text-cyan-400 block mb-0.5 font-bold">Project Name</span>
                <span className="text-foreground/60 font-normal">Defines your local directory and root package identifier.</span>
              </li>
              <li className="p-3 rounded-lg border border-glass-border/40 bg-card/10 backdrop-blur-sm">
                <span className="text-cyan-400 block mb-0.5 font-bold">Package Manager</span>
                <span className="text-foreground/60 font-normal">Choose between optimized lockfiles for npm, yarn, or pnpm.</span>
              </li>
              <li className="p-3 rounded-lg border border-glass-border/40 bg-card/10 backdrop-blur-sm">
                <span className="text-cyan-400 block mb-0.5 font-bold">TypeScript Core</span>
                <span className="text-foreground/60 font-normal">Strict static validation configs come structured by default.</span>
              </li>
              <li className="p-3 rounded-lg border border-glass-border/40 bg-card/10 backdrop-blur-sm">
                <span className="text-cyan-400 block mb-0.5 font-bold">Git Initialization</span>
                <span className="text-foreground/60 font-normal">Pre-seeds your primary branch with a secure .gitignore matrix.</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Database size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Step 3: Database Infrastructure Allocation</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              {"You'll need to link a cloud-native Neon PostgreSQL instance. Provision your target schema by using the following workflow:"}
            </p>
            <ol className="space-y-2.5 text-xs sm:text-sm text-foreground/80 list-decimal pl-4 marker:text-cyan-400 marker:font-bold">
              <li>
                Navigate to the <a href="https://console.neon.tech" className="text-cyan-400 hover:underline inline-flex items-center gap-0.5" target="_blank" rel="noopener noreferrer">Neon Cloud Management Console</a> and create a free account layer.
              </li>
              <li>Instantiate a new project cluster targeted nearest to your runtime edge location.</li>
              <li>Extract the generated connection driver URI string from your administrative panel dashboard.</li>
              <li>Inject the targeted database uniform resource string values into your project configuration.</li>
            </ol>
          </div>

          {/* Step 4 */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Key size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Step 4: Environment Variables Setup</h3>
            </div>
            <CodeBlock
              title=".env.local"
              code={`DATABASE_URL="postgresql://username:password@ep-xxxxx.us-east-1.neon.tech/dbname?sslmode=require"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-cryptographic-hash-secret"`}
              language="bash"
              showLineNumbers={false}
            />
            <div className="p-3 bg-card/30 rounded-lg border border-glass-border/40 text-xs text-foreground/60">
              <span className="font-bold text-cyan-400 block mb-1">Security Recommendation</span>
              Assemble a robust cryptographically random hashing key for production by executing this shell directive: <code className="text-cyan-300 bg-slate-950/60 font-mono px-1.5 py-0.5 rounded border border-glass-border/30 ml-1">openssl rand -base64 32</code>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <div className="flex items-center gap-2.5">
              <Play size={18} className="text-cyan-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Step 5: Synchronize Database State</h3>
            </div>
            <p className="text-foreground/70 text-sm sm:text-base">
              Sync your localized structural Drizzle declarative objects into your remote Neon database engine:
            </p>
            <CodeBlock
              code={`pnpm db:push\n# Maps schemas to tables dynamically inside your Neon cluster instance`}
              language="bash"
              showLineNumbers={false}
            />
          </div>
        </div>

        {/* Manual Configuration Alternative */}
        <div className="space-y-4 pt-6 border-t border-glass-border/30">
          <div className="flex items-center gap-2.5">
            <Layers size={18} className="text-cyan-400 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Manual Alternative Setup</h2>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base max-w-3xl">
            If you prefer building out architectural parameters by hand, initialize a raw framework boilerplate and mount core dependencies manually:
          </p>
          <CodeBlock
            code={`npx create-next-app@latest my-app --typescript --tailwind --app\ncd my-app\npnpm add drizzle-orm @neon-serverless/neon better-auth`}
            language="bash"
            showLineNumbers={false}
          />
        </div>

        {/* Success Splash Card */}
        <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-gradient-to-r from-cyan-500/5 to-teal-500/5 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm md:text-base text-foreground/80">
            <span className="font-bold text-cyan-400">🚀 Environment verification successful!</span> Your codebase workspace parameters are bound. Run <code className="text-cyan-400 bg-slate-950/40 font-mono px-1.5 py-0.5 rounded border border-glass-border/40 text-xs sm:text-sm ml-1">pnpm dev</code> to activate your hot reloading dev server.
          </p>
        </div>
        
      </div>
    </DocPageTemplate>
  )
}
