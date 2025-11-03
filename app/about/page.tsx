import AboutSection from "@/components/sections/about-section"

export const metadata = {
  title: 'About | CODE VIVEKS',
  description: 'Learn more about CODE VIVEKS, our mission, and what we stand for.',
}

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <AboutSection />
    </div>
  )
}
