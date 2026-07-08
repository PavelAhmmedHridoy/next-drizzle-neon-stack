import DocsNav from '@/components/DocsNav'
import Footer from '@/components/Footer'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 'flex flex-col min-h-screen' sets up the foundation for a sticky footer
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <DocsNav />
      
      {/* 
        - lg:pl-64 shifts the entire layout right on desktop to clear the fixed sidebar
        - pt-16 shifts everything down on mobile to clear the fixed mobile top bar
      */}
      <div className="flex flex-col flex-grow lg:pl-64 pt-16 lg:pt-0">
        
        {/* 
          - flex-grow ensures the main content area expands to push the footer down
          - max-w-5xl keeps long paragraphs/code blocks at a readable line length on wide monitors
          - px-* provides standard responsive gutter guards so text doesn't touch the screen edge
        */}
        <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
          {children}
        </main>
        
        {/* The footer now safely adapts to the desktop sidebar offset */}
        <Footer />
      </div>
    </div>
  )
}
