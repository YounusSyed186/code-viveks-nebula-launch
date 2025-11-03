export default function EventTimeline({ events, color }: { events: any[]; color: string }) {
  const colorClasses = {
    blue: {
      dot: "bg-blue-500",
      line: "bg-blue-200",
      hover: "group-hover:text-blue-600"
    },
    orange: {
      dot: "bg-orange-500",
      line: "bg-orange-200",
      hover: "group-hover:text-orange-600"
    },
    slate: {
      dot: "bg-slate-400",
      line: "bg-slate-200",
      hover: "group-hover:text-slate-600"
    }
  }

  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.id} className="flex gap-4 group">
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${colors.dot} group-hover:scale-125 transition-smooth shadow-md`}></div>
            {index < events.length - 1 && (
              <div className={`w-0.5 flex-1 ${colors.line} mt-2`}></div>
            )}
          </div>
          <div className="flex-1 pb-6">
            <h4 className={`font-bold text-slate-800 ${colors.hover} transition-colors text-base`}>
              {event.name}
            </h4>
            <p className="text-sm text-slate-500 mt-1 font-medium">{event.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
