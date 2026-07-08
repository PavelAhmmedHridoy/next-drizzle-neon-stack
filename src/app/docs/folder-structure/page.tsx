import DocPageTemplate from '@/components/DocPageTemplate'
import CodeBlock from '@/components/CodeBlock'

export const metadata = {
  title: 'Folder Structure - NDN Stack',
  description: 'Understanding the project folder structure and organization',
}

export default function FolderStructurePage() {
  return (
    <DocPageTemplate
      title="Project Folder Structure"
      description="A detailed breakdown of how your NDN Stack project is organized and what each directory contains."
    >
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Project Layout</h2>
          <p className="text-foreground/80 leading-relaxed">
            The NDN Stack follows a modern, scalable folder structure that separates concerns and promotes clean architecture.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Directory Overview</h3>
          <CodeBlock
            code={`my-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── api/                # API routes
│   │   └── auth/           # Authentication endpoints
│   └── dashboard/          # Protected pages example
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   └── forms/              # Form components
├── db/                     # Database
│   ├── schema.ts           # Drizzle schema definitions
│   └── migrations/         # SQL migrations
├── lib/                    # Utilities and helpers
│   ├── auth.ts             # Authentication setup
│   ├── db.ts               # Database client
│   └── utils.ts            # General utilities
├── public/                 # Static assets
├── styles/                 # Global styles
├── .env.local              # Environment variables (gitignored)
├── .env.example            # Example environment file
├── drizzle.config.ts       # Drizzle ORM configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies`}
            language="text"
            showLineNumbers={false}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">app/ Directory</h3>
          <p className="text-foreground/80">
            Contains your application routes using Next.js App Router. Each folder represents a route segment.
          </p>
          <div className="pl-4 border-l-2 border-cyan-500/30 py-4 space-y-2">
            <p className="text-foreground/80"><strong className="text-accent">layout.tsx:</strong> Root layout wrapping all pages</p>
            <p className="text-foreground/80"><strong className="text-accent">page.tsx:</strong> Route page component</p>
            <p className="text-foreground/80"><strong className="text-accent">api/:</strong> API route handlers</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">components/ Directory</h3>
          <p className="text-foreground/80">
            Reusable React components organized by functionality. Keep components small and focused.
          </p>
          <CodeBlock
            code={`components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── Modal.tsx
├── forms/
│   ├── LoginForm.tsx
│   └── SignupForm.tsx
├── Navigation.tsx
└── Footer.tsx`}
            language="text"
            showLineNumbers={false}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">db/ Directory</h3>
          <p className="text-foreground/80">
            Contains all database-related code using Drizzle ORM for type-safe database operations.
          </p>
          <div className="pl-4 border-l-2 border-cyan-500/30 py-4 space-y-2">
            <p className="text-foreground/80"><strong className="text-accent">schema.ts:</strong> Define your database tables using Drizzle</p>
            <p className="text-foreground/80"><strong className="text-accent">migrations/:</strong> SQL migration files</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">lib/ Directory</h3>
          <p className="text-foreground/80">
            Utility functions and configuration files shared across your application.
          </p>
          <div className="pl-4 border-l-2 border-cyan-500/30 py-4 space-y-3">
            <p className="text-foreground/80"><strong className="text-accent">auth.ts:</strong> Authentication configuration and helpers</p>
            <p className="text-foreground/80"><strong className="text-accent">db.ts:</strong> Database client initialization</p>
            <p className="text-foreground/80"><strong className="text-accent">utils.ts:</strong> General utility functions</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Example Schema File</h3>
          <p className="text-foreground/80">Here&apos;s what a typical Drizzle schema looks like:</p>
          <CodeBlock
            code={`// db/schema.ts
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').unique().notNull(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow(),
})

export const posts = pgTable('posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  content: text('content'),
  userId: uuid('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
})`}
            language="typescript"
            showLineNumbers={true}
          />
        </div>

        <div className="p-6 rounded-lg border border-glass-border glass-effect bg-gradient-to-r from-cyan-500/5 to-teal-500/5">
          <p className="text-foreground/80">
            <span className="font-semibold text-accent">💡 Best Practices:</span> Keep your folder structure consistent and scalable. As your project grows, you can add new directories for features like <code className="bg-glass-light px-2 py-1 rounded text-accent text-xs">hooks/</code>, <code className="bg-glass-light px-2 py-1 rounded text-accent text-xs">contexts/</code>, or <code className="bg-glass-light px-2 py-1 rounded text-accent text-xs">types/</code>.
          </p>
        </div>
      </section>
    </DocPageTemplate>
  )
}
