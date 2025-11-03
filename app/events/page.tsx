import EventsSection from "@/components/sections/events-section"

export const metadata = {
  title: 'Events | CODE VIVEKS',
  description: 'Discover upcoming events, workshops, and activities at CODE VIVEKS.',
}

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <EventsSection />
    </div>
  )
}
