import DocPageTemplate from '@/components/DocPageTemplate'
import CodeBlock from '@/components/CodeBlock'

export const metadata = {
  title: 'Features - NDN Stack',
  description: 'Comprehensive overview of NDN Stack features and capabilities',
}

export default function FeaturesPage() {
  return (
    <DocPageTemplate
      title="Key Features"
      description="Explore the powerful features and capabilities included in the Next Drizzle Neon Stack."
    >
      {/* Scaled vertical spacing for small vs large viewports */}
      <section className="space-y-12 md:space-y-16">
        
        {/* Intro Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            What&apos;s Included
          </h2>
          <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl">
            The NDN Stack comes fully configured with modern technologies, best practices, and production-ready patterns.
          </p>
        </div>

        {/* Feature Grid Container */}
        <div className="space-y-10 md:space-y-12">
          
          {/* Next.js App Router */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Next.js 16 with App Router</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Build modern, fast, and SEO-friendly applications with the latest Next.js App Router. Server components and edge functions are pre-configured.
            </p>
            <div className="w-full overflow-hidden rounded-lg border border-glass-border/40">
              <CodeBlock
                code={`// app/page.tsx - Server Component\nexport default async function Page() {\n  const data = await fetch('...')\n  \n  return (\n    <div>\n      <h1>Welcome</h1>\n      {/* Content here */}\n    </div>\n  )\n}`}
                language="typescript"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* TypeScript */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Full TypeScript Support</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Complete type safety throughout your entire application. Catch errors at compile time, not runtime.
            </p>
            <div className="w-full overflow-hidden rounded-lg border border-glass-border/40">
              <CodeBlock
                code={`// lib/utils.ts\ninterface User {\n  id: string\n  email: string\n  name: string\n}\n\nexport async function getUser(id: string): Promise<User | null> {\n  // Type-safe implementation\n}\n\n// Usage - TypeScript checks this at compile time\nconst user = await getUser('123')\nconsole.log(user?.name) // ✓ Safe`}
                language="typescript"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Drizzle ORM */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Drizzle ORM</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Type-safe SQL queries with intuitive TypeScript API. Write database code that the compiler understands.
            </p>
            <div className="w-full overflow-hidden rounded-lg border border-glass-border/40">
              <CodeBlock
                code={`// db/schema.ts\nimport { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'\nimport { db } from '@/lib/db'\nimport { eq } from 'drizzle-orm'\n\nexport const users = pgTable('users', { \n  id: uuid('id').primaryKey(),\n  email: text('email').unique(),\n  name: text('name'),\n})\n\n// Query with full type safety\nconst user = await db.query.users.findFirst({\n  where: eq(users.email, 'user@example.com'),\n})\n// user is properly typed as User | undefined`}
                language="typescript"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Neon PostgreSQL */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Neon PostgreSQL</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Serverless PostgreSQL database that auto-scales and charges only for what you use. Perfect for rapid development and production workloads.
            </p>
            {/* Handled item alignment fixes for multi-line text wrapping on mobile viewports */}
            <ul className="space-y-3 text-foreground/80 pl-1 md:pl-4">
              {[
                'Serverless architecture - no database cluster to manage manually',
                'Auto-scaling compute instances based on real-time traffic demand',
                'Pay-as-you-go pricing models scale down to zero when idle',
                'Connection pooling pre-configured natively out of the box',
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="text-cyan-400 font-bold select-none mt-0.5">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tailwind CSS */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Tailwind CSS</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Utility-first CSS framework for rapid UI development. Create beautiful, responsive interfaces without writing traditional CSS files.
            </p>
            <div className="w-full overflow-hidden rounded-lg border border-glass-border/40">
              <CodeBlock
                code={`export function Button({ children }: { children: React.ReactNode }) {\n  return (\n    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\n      {children}\n    </button>\n  )\n}`}
                language="typescript"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Authentication */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Built-in Authentication</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Pre-configured authentication system ready to use. Secure session management and user handling out of the box.
            </p>
            <div className="w-full overflow-hidden rounded-lg border border-glass-border/40">
              <CodeBlock
                code={`// app/api/auth/[...auth]/route.ts\nimport { auth } from '@/lib/auth'\nexport const { GET, POST } = auth\n\n// Usage in components\nimport { auth } from '@/lib/auth'\n\nexport async function Dashboard() {\n  const session = await auth()\n  if (!session) return <div>Not authenticated</div>\n  \n  return <div>Welcome, {session.user.name}</div>\n}`}
                language="typescript"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Environment Variables Validation */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Environment Validation</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Automatic validation of required environment variables at build time using strict schemas to catch configuration bugs early.
            </p>
            <div className="w-full overflow-hidden rounded-lg border border-glass-border/40">
              <CodeBlock
                code={`// lib/env.ts\nimport { z } from 'zod'\n\nconst envSchema = z.object({\n  DATABASE_URL: z.string().url(),\n  NEXTAUTH_SECRET: z.string().min(32),\n  NODE_ENV: z.enum(['development', 'production']),\n})\n\nexport const env = envSchema.parse(process.env)`}
                language="typescript"
                showLineNumbers={true}
              />
            </div>
          </div>

          {/* Production Ready */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Production-Ready Structure</h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              Pre-configured with industry best practices including system error handling routing, logging, and build-step compression.
            </p>
            <ul className="space-y-3 text-foreground/80 pl-1 md:pl-4">
              {[
                'Global runtime error handling middleware filters',
                'Structured application execution logging mechanisms',
                'Security headers preset inside Next.js config setups',
                'Edge performance caching optimizations applied out of the box',
                'Automated Git lifecycle hooks paired with strict lint rules',
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="text-cyan-400 font-bold select-none mt-0.5">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Dynamic Highlight Tip Box */}
        <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-gradient-to-r from-cyan-500/5 to-teal-500/5 backdrop-blur-sm">
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            <span className="font-semibold text-cyan-400">🎯 All features work together seamlessly:</span> The architecture gives you a highly productive engineering loop, minimizing configuration debt so you can focus entirely on your core logic.
          </p>
        </div>
      </section>
    </DocPageTemplate>
  )
}
