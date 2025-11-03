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
      className={`flex flex-col gap-4 px-4 py-8 h-full rounded-2xl bg-white transition-all duration-300 ease-out ${
        expanded ? "w-64" : "w-20"
      } neumorphic-lg`}
    >
      {/* Logo/Brand */}
      <div className="flex items-center justify-center h-16 mb-4 rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 neumorphic-sm hover:glow-blue transition-smooth cursor-pointer">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
          CV
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-2 flex-1">
        {SIDEBAR_ITEMS.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-smooth group hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 cursor-pointer relative ${
              expanded ? "justify-start" : "justify-center"
            }`}
          >
            <Icon className="w-5 h-5 text-slate-600 group-hover:text-blue-500 transition-colors flex-shrink-0" strokeWidth={1.5} />
            {expanded && (
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 whitespace-nowrap animate-fade-in">
                {label}
              </span>
            )}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity neumorphic-sm" />
          </button>
        ))}
      </nav>

      {/* Footer Info */}
      {expanded && (
        <div className="text-xs text-slate-500 text-center pt-4 border-t border-slate-200 animate-fade-in">
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 text-sm">CODE VIVEKS</p>
          <p className="mt-1">Tech Club</p>
        </div>
      )}
    </div>
  )
}
