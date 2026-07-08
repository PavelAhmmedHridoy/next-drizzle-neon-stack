import DocPageTemplate from '@/components/DocPageTemplate'
import { ArrowRight, ShieldCheck, Zap, Cpu, Flame } from 'lucide-react'

export const metadata = {
  title: 'Why NDN Stack - NDN Stack',
  description: 'Why the Next Drizzle Neon Stack is the best choice for modern web development',
}

export default function WhyStackPage() {
  return (
    <DocPageTemplate
      title="Why Next Drizzle Neon Stack?"
      description="Understand the reasoning behind each technology choice and why the NDN Stack acts as the ultimate production foundation for your engineering workflow."
    >
      <div className="space-y-12 md:space-y-16">
        
        {/* Intro Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">The Right Stack for Today</h2>
          <p className="text-foreground/70 leading-relaxed text-sm sm:text-base max-w-3xl">
            The NDN Stack is meticulously curated to deliver maximum developer velocity, robust type safety, and top-tier cloud performance out of the box, without requiring hours of manual boilerplate configuration.
          </p>
        </div>

        {/* Technology Deep Dive Sections */}
        <div className="space-y-10 md:space-y-12 border-l border-glass-border/40 pl-4 sm:pl-6 ml-1">
          
          {/* Next.js */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Why Next.js?</h3>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Next.js is the production standard for React architectures, shifting heavy heavy lift computing back to efficient server paradigms:
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">React Server Components:</strong> Zero client-side JavaScript overhead by default for rapid page loads.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Unified Route Handlers:</strong> Securely manage your frontend views and backend API processing in a unified code hub.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Automatic Edge Optimization:</strong> Dynamic page chunking, smart asset prefetching, and advanced responsive image compression natively compiled.</span>
              </li>
            </ul>
          </div>

          {/* TypeScript */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Why TypeScript?</h3>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              TypeScript catches structural coding bugs inside your local IDE container before they ever have a chance to hit a production pipeline stage.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Uncompromised Type Safety:</strong> Compile-time contract checking prevents unexpected null or undefined operations.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Intelligent Autocomplete:</strong> Rich intellisense profiles self-document internal APIs, speeding up refactoring cycles.</span>
              </li>
            </ul>
          </div>

          {/* Drizzle ORM */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Why Drizzle ORM?</h3>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Drizzle provides a lightweight, blazingly fast type-safe ORM experience that acts as standard TypeScript syntax, without heavy engine layers.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">SQL-Like Expressiveness:</strong> Write natural database queries with precise performance control while maintaining total schema inference.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Automated Migration Engine:</strong> Rapidly map declarative TypeScript schema states directly into deterministic SQL migration scripts.</span>
              </li>
            </ul>
          </div>

          {/* Neon */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Why Neon PostgreSQL?</h3>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Neon strips away cloud infrastructure scaling burdens while delivering elite relational storage mechanics.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Serverless Instant Scaling:</strong> Computing instances dynamically scale to zero when idle to minimize active overhead cost.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Database Branching:</strong> Spin up isolated database environments instantly off git branches for secure integration testing.</span>
              </li>
            </ul>
          </div>

          {/* Tailwind CSS */}
          <div className="space-y-4 relative">
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Why Tailwind CSS?</h3>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Tailwind drives layout speed using utility-first parameters that keep your compiled styling bundles down to a minimum footprint.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Zero Context Switching:</strong> Assemble polished responsive custom designs directly inside your functional markup modules.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-foreground">Strict Token Constraints:</strong> Keep global layout parameters uniform with native responsive modifiers and dark mode tokens built-in.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Integration Synthesis Benefits */}
        <div className="space-y-6 pt-6 border-t border-glass-border/30">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">The Integration Benefits</h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2">
              These systems don't just sit next to one another—they form a cohesive, highly optimized development engine:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-card/10 backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck size={18} className="text-cyan-400" />
                <h4 className="font-bold text-base md:text-lg text-foreground tracking-tight">Full-Stack Type Flow</h4>
              </div>
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                Type definitions stream securely from your core relational Neon database tables via Drizzle schemas directly up through backend route controllers into client view markup.
              </p>
            </div>

            <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-card/10 backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Zap size={18} className="text-cyan-400" />
                <h4 className="font-bold text-base md:text-lg text-foreground tracking-tight">Zero Configuration Drift</h4>
              </div>
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                Skip the complex toolchain orchestration phase. Database seed hooks, validation structures, and deployment variables arrive tuned for immediate application building.
              </p>
            </div>

            <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-card/10 backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Cpu size={18} className="text-cyan-400" />
                <h4 className="font-bold text-base md:text-lg text-foreground tracking-tight">Built to Scale Outwards</h4>
              </div>
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                Leverage serverless connection pooling and edge routing nodes to ensure that sudden usage spikes scale your stack dynamically without crashing servers.
              </p>
            </div>

            <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-card/10 backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Flame size={18} className="text-cyan-400" />
                <h4 className="font-bold text-base md:text-lg text-foreground tracking-tight">Maximum Velocity Loop</h4>
              </div>
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                Go from a fresh initialization script to a live, production-grade cloud URL in minutes. Develop features with near-instant local hot reloading.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion Callout Card */}
        <div className="p-5 md:p-6 rounded-xl border border-glass-border bg-gradient-to-r from-cyan-500/5 to-teal-500/5 backdrop-blur-sm">
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            <span className="font-bold text-cyan-400">The NDN Stack represents a maturation of web development</span>—combining industry-standard tools with next-generation cloud architectures to establish an unshakeable foundation for high-scale applications.
          </p>
        </div>
        
      </div>
    </DocPageTemplate>
  )
}
