import HeroSection from "@/components/sections/hero-section"
import TeamsGrid from "@/components/sections/teams-grid"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroSection />
      <TeamsGrid />
    </div>
  )
}
