import DocPageTemplate from '@/components/DocPageTemplate'
import CodeBlock from '@/components/CodeBlock'
import { CheckCircle2, AlertCircle, Server, ShieldCheck, HelpCircle, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Deployment | Next Drizzle Neon Stack',
  description: 'Deploy your Next Drizzle Neon Stack application to production on multiple platforms.',
}

export default function DeploymentPage() {
  return (
    <DocPageTemplate
      title="Deployment Guide"
      description="Learn how to deploy your Next Drizzle Neon Stack application to production on various optimized hosting platforms."
    >
      <div className="space-y-12 md:space-y-16">
        
        {/* Deployment Platforms Overview */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Deployment Platforms</h2>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-3xl">
              Your Next Drizzle Neon Stack application compiles down to a highly optimized node or edge production target. Choose from the following industry-standard deployment ecosystems:
            </p>
          </div>

          <div className="space-y-8">
            {/* Vercel */}
            <div className="glass-effect border border-glass-border rounded-xl p-5 md:p-6 bg-card/5 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                    Vercel Platform
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    The native cloud architecture for Next.js applications, offering multi-region edge capabilities with zero boilerplate configuration.
                  </p>
                </div>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 transition-all sm:w-auto w-full group"
                >
                  <span>Visit Vercel</span>
                  <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-foreground/50 tracking-wider uppercase">Platform Advantages</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                      <span>Instant continuous Git-integrated webhooks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                      <span>Automatic edge SSL handshake provisioning</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                      <span>Native support for Next.js Edge Middlewares</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                      <span>Granular real-user web vitals telemetry monitoring</span>
                    </li>
                  </ul>
                </div>
                <CodeBlock
                  code={`# Push branch directly to your git remote repository\ngit add .\ngit commit -m "build: production target setup"\ngit push origin main\n\n# Alternative execution: Deploy via local Vercel CLI core\nnpx vercel --prod`}
                  language="bash"
                  title="Vercel Terminal Deployment Loop"
                />
              </div>
            </div>

            {/* Railway */}
            <div className="glass-effect border border-glass-border rounded-xl p-5 md:p-6 bg-card/5 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                    Railway Cloud
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    A modern, containerized cloud infrastructure tool optimized for persistent node runners and fast database instances.
                  </p>
                </div>
                <a
                  href="https://railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold hover:bg-teal-500/20 transition-all sm:w-auto w-full group"
                >
                  <span>Visit Railway</span>
                  <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-foreground/50 tracking-wider uppercase">Platform Advantages</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-teal-400 flex-shrink-0" />
                      <span>Native, reliable background daemon processing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-teal-400 flex-shrink-0" />
                      <span>Automated monorepo deployment mapping overrides</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-teal-400 flex-shrink-0" />
                      <span>Shared environment orchestration panel dashboard</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-teal-400 flex-shrink-0" />
                      <span>Affordable variable usage-based volume pricing scales</span>
                    </li>
                  </ul>
                </div>
                <CodeBlock
                  code={`# Install internal tooling binaries\nnpm install -g @railway/cli\n\n# Configure link to workspace and push snapshot\nrailway login\nrailway link\nrailway up`}
                  language="bash"
                  title="Railway CLI Routine"
                />
              </div>
            </div>

            {/* Fly.io */}
            <div className="glass-effect border border-glass-border rounded-xl p-5 md:p-6 bg-card/5 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]" />
                    Fly.io Engine
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Transforms localized server files directly into edge-proximate micro-VM containers running close to end users.
                  </p>
                </div>
                <a
                  href="https://fly.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold hover:bg-orange-500/20 transition-all sm:w-auto w-full group"
                >
                  <span>Visit Fly.io</span>
                  <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-foreground/50 tracking-wider uppercase">Platform Advantages</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0" />
                      <span>Distributed global hardware compute nodes</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0" />
                      <span>Automated container building via remote builders</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0" />
                      <span>Advanced private internal wireguard network meshes</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0" />
                      <span>High performance physical machine isolation models</span>
                    </li>
                  </ul>
                </div>
                <CodeBlock
                  code={`# Connect system terminal credentials and generate fly.toml\ncurl -L https://fly.io/install.sh | sh\nflyctl auth login\nflyctl launch\n\n# Push runtime machine configuration updates\nflyctl deploy`}
                  language="bash"
                  title="Fly.io Virtual Machine Launch Sequence"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="pt-8 border-t border-glass-border/30 space-y-4">
          <div className="flex items-center gap-2">
            <Server size={18} className="text-cyan-400" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Production Environment Configuration</h2>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base max-w-3xl">
            Ensure the following encrypted environment variable matrix is fully updated within your targeted hosting platform dashboard to enable type-safe application execution:
          </p>

          <CodeBlock
            code={`# Relational Database Connection String Vector\nDATABASE_URL="postgresql://user:password@ep-shard-name.us-east-1.neon.tech/dbname?sslmode=require"\n\n# Advanced Core Authentication Secret Credentials Key\nBETTER_AUTH_SECRET="super-secured-long-cryptographic-hash-string-value-here"\n\n# Identity Token Routing Keys (OAuth Context Profiles)\nGITHUB_ID="hg83gf874ghf8d83hf"\nGITHUB_SECRET="ghs_secret_string_token_value_goes_here"\nGOOGLE_ID="83748274-google-client-id-mesh"\nGOOGLE_SECRET="gocsp_secret_hash_key_value"\n\n# Unified Dynamic Endpoint Variable Matrix\nNEXT_PUBLIC_API_URL="https://app.yourdomain.com"`}
            language="bash"
            title=".env.production Blueprint"
          />
        </div>

        {/* Pre-deployment Checklist */}
        <div className="pt-8 border-t border-glass-border/30 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-cyan-400" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Pre-Deployment Verification Checklist</h2>
          </div>
          
          <div className="glass-effect border border-glass-border rounded-xl p-5 md:p-6 bg-slate-950/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-lg border border-glass-border/30 bg-card/5">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Variable Matrix Populated</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">All backend system connection parameter variables are bound inside the active container dashboard.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-glass-border/30 bg-card/5">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Drizzle SQL Migrations Sync</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">All generated schema files have been safely verified and migrated to your production Neon cloud cluster.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-glass-border/30 bg-card/5">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Localized Production Compilation Passes</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {"Run "}
                  <code className="bg-slate-950 px-1 py-0.5 rounded text-cyan-400 font-mono text-[10px]">pnpm build</code>
                  {" on your local development machine to guarantee absolute zero-error Type inference compilation checks."}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-glass-border/30 bg-card/5">
              <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-foreground">Strict SSL Edge Layer Configuration</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{"Verify your platform provider guarantees an active proxy layer delivering safe HTTPS requests via Let's Encrypt."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="pt-8 border-t border-glass-border/30 space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle size={18} className="text-cyan-400" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Troubleshooting Pipeline Failures</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-effect border border-glass-border rounded-xl p-5 bg-card/5 space-y-3">
              <div className="flex gap-2.5 items-center">
                <AlertCircle size={16} className="text-amber-400 flex-shrink-0" />
                <h4 className="text-sm font-bold text-foreground">Build Failures: Module Not Found References</h4>
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Ensure your explicit dependency lockfile layers match cleanly and no gitignored module elements are referenced outside systemic path setups.
              </p>
              <CodeBlock code={`# Clear dependencies and recreate localized lockfile maps\nrm -rf node_modules .next\npnpm install\npnpm build`} language="bash" />
            </div>

            <div className="glass-effect border border-glass-border rounded-xl p-5 bg-card/5 space-y-3">
              <div className="flex gap-2.5 items-center">
                <AlertCircle size={16} className="text-amber-400 flex-shrink-0" />
                <h4 className="text-sm font-bold text-foreground">Cloud Node Database Connection Timeouts</h4>
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Confirm your production variable settings correctly include necessary connection pool scaling arguments and hold standard trailing character structures.
              </p>
              <CodeBlock code={`# Execute interactive localized database validation checks\npsql "postgresql://user:password@ep-name.neon.tech/db?sslmode=require"`} language="bash" />
            </div>
          </div>
        </div>
        
      </div>
    </DocPageTemplate>
  )
}
