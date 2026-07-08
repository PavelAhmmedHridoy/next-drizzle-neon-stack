import DocPageTemplate from '@/components/DocPageTemplate'
import CodeBlock from '@/components/CodeBlock'
import { Database, Globe, Cpu, ShieldCheck, CreditCard, Lock, Library } from 'lucide-react'

export const metadata = {
  title: 'Examples - NDN Stack',
  description: 'Code examples and common patterns for NDN Stack projects',
}

export default function ExamplesPage() {
  return (
    <DocPageTemplate
      title="Code Examples"
      description="Production-tested implementation patterns and boilerplate blueprints for your Next Drizzle Neon Stack application workflows."
    >
      <div className="space-y-12 md:space-y-16">
        
        {/* Header Introduction */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Common Patterns</h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-3xl">
            {"Explore practical, type-safe paradigms engineered to manage mutations, session validations, and fast database updates across your client-server boundaries."}
          </p>
        </div>

        {/* Database Query Example */}
        <div className="space-y-4 pt-6 border-t border-glass-border/30">
          <div className="flex items-center gap-2.5">
            <Database size={18} className="text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Relational Schema Configurations</h3>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base">
            Configure declarative relational table architecture matrices with deep type safety using Drizzle ORM primitives:
          </p>
          <CodeBlock
            title="db/schema.ts"
            code={`import { pgTable, text, timestamp, uuid, boolean } from 'drizzle-orm/pg-core'\n\nexport const users = pgTable('users', {\n  id: uuid('id').primaryKey().defaultRandom(),\n  email: text('email').unique().notNull(),\n  name: text('name'),\n  verified: boolean('verified').default(false),\n  createdAt: timestamp('created_at').defaultNow(),\n})\n\nexport const posts = pgTable('posts', {\n  id: uuid('id').primaryKey().defaultRandom(),\n  title: text('title').notNull(),\n  content: text('content'),\n  published: boolean('published').default(false),\n  authorId: uuid('author_id').references(() => users.id),\n  createdAt: timestamp('created_at').defaultNow(),\n})`}
            language="typescript"
            showLineNumbers={true}
          />
        </div>

        {/* API Route Example */}
        <div className="space-y-4 pt-6 border-t border-glass-border/30">
          <div className="flex items-center gap-2.5">
            <Globe size={18} className="text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Type-Safe Restful API Endpoints</h3>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base">
            Build serverless endpoint operations using Next.js runtime Route Handlers integrated directly with Drizzle clients:
          </p>
          <CodeBlock
            title="app/api/users/route.ts"
            code={`import { db } from '@/lib/db'\nimport { users } from '@/db/schema'\nimport { NextRequest, NextResponse } from 'next/server'\n\nexport async function GET() {\n  try {\n    const allUsers = await db.query.users.findMany()\n    return NextResponse.json(allUsers)\n  } catch (error) {\n    return NextResponse.json(\n      { error: 'Failed to fetch users' },\n      { status: 500 }\n    )\n  }\n}\n\nexport async function POST(request: NextRequest) {\n  try {\n    const body = await request.json()\n    const newUser = await db.insert(users).values({\n      email: body.email,\n      name: body.name,\n    }).returning()\n    \n    return NextResponse.json(newUser[0], { status: 201 })\n  } catch (error) {\n    return NextResponse.json(\n      { error: 'Failed to create user' },\n      { status: 400 }\n    )\n  }\n}`}
            language="typescript"
            showLineNumbers={true}
          />
        </div>

        {/* Server Action Example */}
        <div className="space-y-4 pt-6 border-t border-glass-border/30">
          <div className="flex items-center gap-2.5">
            <Cpu size={18} className="text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Asynchronous Server Actions</h3>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base">
            Execute direct, secure server transformations directly inside form element lifecycles:
          </p>
          <div className="space-y-4">
            <CodeBlock
              title="app/actions/users.ts"
              code={`'use server'\n\nimport { db } from '@/lib/db'\nimport { users } from '@/db/schema'\nimport { revalidatePath } from 'next/cache'\n\nexport async function createUser(formData: FormData) {\n  const email = formData.get('email') as string\n  const name = formData.get('name') as string\n  \n  try {\n    const newUser = await db.insert(users).values({ email, name }).returning()\n    revalidatePath('/users')\n    return { success: true, user: newUser[0] }\n  } catch (error) {\n    return { success: false, error: 'Failed to create user' }\n  }\n}`}
              language="typescript"
              showLineNumbers={true}
            />
            <CodeBlock
              title="components/UserForm.tsx"
              code={`'use client'\n\nimport { createUser } from '@/app/actions/users'\n\nexport default function UserForm() {\n  async function handleSubmit(formData: FormData) {\n    const result = await createUser(formData)\n    if (result.success) alert('User schema instantiated!')\n  }\n  \n  return (\n    <form action={handleSubmit} className="space-y-3">\n      <input name="email" type="email" required className="bg-slate-900 border border-glass-border rounded px-3 py-1.5" />\n      <input name="name" type="text" required className="bg-slate-900 border border-glass-border rounded px-3 py-1.5" />\n      <button type="submit" className="bg-cyan-500 text-slate-950 font-bold px-4 py-1.5 rounded">Create User</button>\n    </form>\n  )\n}`}
              language="typescript"
              showLineNumbers={true}
            />
          </div>
        </div>

        {/* Protected Route Example */}
        <div className="space-y-4 pt-6 border-t border-glass-border/30">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={18} className="text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Secure Route Protection</h3>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base">
            Guard application routes against anonymous requests at the layout or view template boundary layer:
          </p>
          <CodeBlock
            title="app/dashboard/page.tsx"
            code={`import { auth } from '@/lib/auth'\nimport { redirect } from 'next/navigation'\n\nexport default async function DashboardPage() {\n  const session = await auth()\n  \n  if (!session?.user) {\n    redirect('/auth/login')\n  }\n  \n  return (\n    <div className="p-6">\n      <h1 className="text-2xl font-bold">Welcome, {session.user.name}</h1>\n      <p className="text-foreground/60">Email Context: {session.user.email}</p>\n    </div>\n  )\n}`}
            language="typescript"
            showLineNumbers={true}
          />
        </div>

        {/* Form Handling Example */}
        <div className="space-y-4 pt-6 border-t border-glass-border/30">
          <div className="flex items-center gap-2.5">
            <CreditCard size={18} className="text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Client Authentication Submissions</h3>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base">
            Handle complex interactive authentication validation hooks cleanly on the browser client thread:
          </p>
          <CodeBlock
            title="components/forms/LoginForm.tsx"
            code={`'use client'\n\nimport { useState } from 'react'\nimport { signIn } from 'next-auth/react'\n\nexport default function LoginForm() {\n  const [error, setError] = useState('')\n  const [loading, setLoading] = useState(false)\n  \n  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault()\n    setLoading(true)\n    setError('')\n    \n    const formData = new FormData(e.currentTarget)\n    const result = await signIn('credentials', {\n      email: formData.get('email'),\n      password: formData.get('password'),\n      redirect: false,\n    })\n    \n    if (result?.error) {\n      setError(result.error)\n    } else {\n      window.location.href = '/dashboard'\n    }\n    setLoading(false)\n  }\n  \n  return (\n    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">\n      <input name="email" type="email" required placeholder="User Email" />\n      <input name="password" type="password" required placeholder="Password" />\n      {error && <p className="text-red-400 text-sm font-medium">{error}</p>}\n      <button type="submit" disabled={loading} className="disabled:opacity-50">\n        {loading ? 'Authenticating Credentials...' : 'Access Dashboard'}\n      </button>\n    </form>\n  )\n}`}
            language="typescript"
            showLineNumbers={true}
          />
        </div>

        {/* Middleware Example */}
        <div className="space-y-4 pt-6 border-t border-glass-border/30">
          <div className="flex items-center gap-2.5">
            <Lock size={18} className="text-cyan-400 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Global Edge Middleware Filtering</h3>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base">
            Intercept requests at the cloud edge to enforce system authorization rules early:
          </p>
          <CodeBlock
            title="middleware.ts"
            code={`import { NextResponse } from 'next/server'\nimport type { NextRequest } from 'next/server'\n\nexport function middleware(request: NextRequest) {\n  const { pathname } = request.nextUrl\n  \n  if (pathname.startsWith('/dashboard')) {\n    const token = request.cookies.get('auth-token')\n    if (!token) {\n      return NextResponse.redirect(new URL('/auth/login', request.url))\n    }\n  }\n  return NextResponse.next()\n}\n\nexport const config = {\n  matcher: ['/dashboard/:path*', '/admin/:path*'],\n}`}
            language="typescript"
            showLineNumbers={true}
          />
        </div>

        {/* Informational Footer */}
        <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-gradient-to-r from-cyan-500/5 to-teal-500/5 backdrop-blur-sm flex items-start gap-4">
          <Library size={22} className="text-cyan-400 mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <span className="font-bold text-cyan-400 block text-sm sm:text-base">External Documentation Ecosystems</span>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              {"For exhaustive platform breakdowns beyond our stack architecture configurations, explore the primary code manuals for "}
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-medium font-semibold">Next.js Framework</a>,{' '}
              <a href="https://orm.drizzle.team" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-medium font-semibold">Drizzle ORM Engine</a>, and the{' '}
              <a href="https://neon.tech/docs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-medium font-semibold">Neon Serverless PostgreSQL Database</a>.
            </p>
          </div>
        </div>

      </div>
    </DocPageTemplate>
  )
}
