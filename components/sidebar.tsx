"use client"
import { Home, Info, Newspaper, Calendar, Users, Mail } from "lucide-react"

interface SidebarProps {
  expanded: boolean
  setExpanded: (expanded: boolean) => void
}

const SIDEBAR_ITEMS = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Info, label: "About", id: "about" },
  { icon: Newspaper, label: "News", id: "news" },
  { icon: Calendar, label: "Events", id: "events" },
  { icon: Users, label: "Teams", id: "teams" },
  { icon: Mail, label: "Contact", id: "contact" },
]

export default function Sidebar({ expanded, setExpanded }: SidebarProps) {
  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`flex flex-col gap-6 px-4 py-8 h-screen transition-all duration-300 ease-out ${
        expanded ? "w-64" : "w-24"
      } neumorphic-md`}
    >
      {/* Logo/Brand */}
      <div className="flex items-center justify-center h-16 rounded-lg bg-white neumorphic-sm hover:glow-blue transition-all">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          CV
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-3 flex-1">
        {SIDEBAR_ITEMS.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group hover:bg-blue-50 cursor-pointer ${
              expanded ? "justify-start" : "justify-center"
            }`}
          >
            <Icon className="w-5 h-5 text-slate-600 group-hover:text-blue-500 transition-colors" />
            {expanded && <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer Info */}
      {expanded && (
        <div className="text-xs text-slate-500 text-center animate-fade-in">
          <p className="font-semibold text-slate-600">CODE VIVEKS</p>
          <p>Tech Club</p>
        </div>
      )}
    </div>
  )
}
