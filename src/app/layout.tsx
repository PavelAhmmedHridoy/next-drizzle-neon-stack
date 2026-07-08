import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Next Drizzle Neon Stack',
  description: 'Premium animation project scaffolding CLI for modern full-stack development with Next.js, Drizzle ORM, Neon PostgreSQL, and TypeScript.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e27',
  // Next.js automatically includes width=device-width and initial-scale=1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Added 'scroll-smooth' for elegant navigation across your landing page sections
    <html lang="en" className={`${geist.variable} ${geistMono.variable} scroll-smooth`}>
      {/* Added 'min-h-screen' to prevent background cutoff issues on mobile heights */}
      <body className="antialiased font-sans bg-background text-foreground min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
