import HeroSection from '@/components/HeroSection'
import FeatureCards from '@/components/FeatureCards'
import SetupOutput from '@/components/SetupOutput'
import SetupGuide from '@/components/SetupGuide'
import DeploymentSection from '@/components/DeploymentSection'
import ComparisonSection from '@/components/ComparisonSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import DocsNav from '@/components/DocsNav'

export default function Home() {
  return (
    // 'flex flex-col' pairs with 'flex-grow' to keep the footer pinned to the bottom on empty/short pages
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <DocsNav />
      
      {/* 'space-y-*' creates elegant, responsive vertical gaps between your landing page sections */}
      <main className="flex-grow w-full space-y-16 sm:space-y-24 md:space-y-32 pb-16 md:pb-24">
        <HeroSection />
        <FeatureCards />
        <SetupOutput />
        <SetupGuide />
        <DeploymentSection />
        <ComparisonSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  )
}
