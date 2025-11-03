export default function EventTimeline({ events, color }: { events: any[]; color: string }) {
  const colorMap = {
    blue: "bg-blue-500 border-blue-200",
    orange: "bg-orange-500 border-orange-200",
    slate: "bg-slate-400 border-slate-200",
  }

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.id} className="flex gap-4">
          {/* Timeline Line & Dot */}
          <div className="flex flex-col items-center">
            <div className={`w-3 h-3 rounded-full ${colorMap[color as keyof typeof colorMap]} shadow-md`}></div>
            {index < events.length - 1 && (
              <div
                className={`w-0.5 h-12 mt-2 border-l-2 ${colorMap[color as keyof typeof colorMap].split(" ")[1]}`}
              ></div>
            )}
          </div>

          {/* Event Content */}
          <div className="bg-white rounded-lg neumorphic-sm p-4 flex-1 hover:neumorphic-md transition-all cursor-pointer">
            <h4 className="font-semibold text-slate-900">{event.name}</h4>
            <p className="text-sm text-slate-500">{event.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
