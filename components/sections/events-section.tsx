import EventTimeline from "@/components/event-timeline"

const EVENTS = {
  weekly: [
    { id: 1, name: "Monday Dev Meetup", time: "5:00 PM" },
    { id: 2, name: "Wednesday Coding Session", time: "6:30 PM" },
    { id: 3, name: "Friday Workshop", time: "4:00 PM" },
  ],
  monthly: [
    { id: 4, name: "Monthly Hackathon", time: "First Saturday" },
    { id: 5, name: "Tech Talk Series", time: "Third Wednesday" },
    { id: 6, name: "Competitive Programming Contest", time: "Fourth Friday" },
  ],
  annual: [
    { id: 7, name: "Annual Tech Conference", time: "April" },
    { id: 8, name: "CODE VIVEKS Summit", time: "August" },
    { id: 9, name: "Year-End Celebration", time: "December" },
  ],
}

export default function EventsSection() {
  return (
    <section className="space-y-12 py-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Events</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            Weekly
          </h3>
          <EventTimeline events={EVENTS.weekly} color="blue" />
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            Monthly
          </h3>
          <EventTimeline events={EVENTS.monthly} color="orange" />
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-400"></span>
            Annual
          </h3>
          <EventTimeline events={EVENTS.annual} color="slate" />
        </div>
      </div>
    </section>
  )
}
