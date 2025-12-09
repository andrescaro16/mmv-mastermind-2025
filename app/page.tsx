import { HeroSection } from '@/components/hero-section'
import { IdentifySection } from '@/components/identify-section'
import { TruthSection } from '@/components/truth-section'
import { UniqueSection } from '@/components/unique-section'
import { DayOneSection } from '@/components/day-one-section'
import { IncludesSection } from '@/components/includes-section'
import { VipSection } from '@/components/vip-section'
import { PricingSection } from '@/components/pricing-section'
import { TargetAudienceSection } from '@/components/target-audience-section'
// import { TeamSection } from '@/components/team-section'
import { IntegrationSection } from '@/components/integration-section'
// import { TestimonialsSection } from '@/components/testimonials-section'
// import { FinalCTASection } from '@/components/final-cta-section'
import { FAQSection } from '@/components/faq-section'

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IdentifySection />
      <TruthSection />
      <UniqueSection />
      <DayOneSection />
      <IncludesSection />
      <VipSection />
      <TargetAudienceSection />
      <IntegrationSection />
      <PricingSection />
      {/* <TeamSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <FinalCTASection /> */}
      <FAQSection />
    </main>
  )
}
