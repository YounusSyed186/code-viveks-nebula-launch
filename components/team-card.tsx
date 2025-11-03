export default function TeamCard({ team }: { team: any }) {
  return (
    <div className="bg-white rounded-2xl neumorphic-md hover:glow-blue transition-smooth hover:-translate-y-2 group cursor-pointer overflow-hidden border border-slate-100">
      <div className="p-8 space-y-5">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center text-4xl group-hover:scale-110 transition-smooth">
          {team.icon}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {team.name}
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed min-h-[3rem]">
          {team.description}
        </p>
        
        <div className="pt-3 flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-smooth"></div>
          <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-smooth"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:scale-125 transition-smooth"></div>
          <div className="ml-auto text-xs font-medium text-blue-500 opacity-0 group-hover:opacity-100 transition-smooth">
            Explore →
          </div>
        </div>
      </div>
    </div>
  )
}
