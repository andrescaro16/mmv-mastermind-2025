import { HeroSection } from '@/components/hero-section'
import { VideoSection } from '@/components/video-section'
import { DayOneSection } from '@/components/day-one-section'
import { IdentifySection } from '@/components/identify-section'
import { TruthSection } from '@/components/truth-section'
import { TeamSection } from '@/components/team-section'
import { ResultsSection } from '@/components/results-section'
import { IncludesSection } from '@/components/includes-section'
import { FinalCTASection } from '@/components/final-cta-section'

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <DayOneSection />
      <IdentifySection />
      <TruthSection />
      <TeamSection />
      <ResultsSection />
      <IncludesSection />
      <FinalCTASection />
    </main>
  )
}
