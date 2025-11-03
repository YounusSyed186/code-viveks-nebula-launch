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
    <section className="space-y-12 py-8 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-900">Events</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-6 neumorphic-md border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-6">
            <span className="w-4 h-4 rounded-full bg-blue-500 shadow-md"></span>
            Weekly
          </h3>
          <EventTimeline events={EVENTS.weekly} color="blue" />
        </div>

        <div className="bg-white rounded-2xl p-6 neumorphic-md border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-6">
            <span className="w-4 h-4 rounded-full bg-orange-500 shadow-md"></span>
            Monthly
          </h3>
          <EventTimeline events={EVENTS.monthly} color="orange" />
        </div>

        <div className="bg-white rounded-2xl p-6 neumorphic-md border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 mb-6">
            <span className="w-4 h-4 rounded-full bg-slate-400 shadow-md"></span>
            Annual
          </h3>
          <EventTimeline events={EVENTS.annual} color="slate" />
        </div>
      </div>
    </section>
  )
}
