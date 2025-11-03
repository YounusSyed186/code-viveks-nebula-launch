export default function TeamCard({ team }: { team: any }) {
  return (
    <div className="bg-white rounded-xl neumorphic-md hover:neumorphic-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="text-4xl">{team.icon}</div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-500 transition-colors">{team.name}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{team.description}</p>
        <div className="pt-2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </div>
  )
}
