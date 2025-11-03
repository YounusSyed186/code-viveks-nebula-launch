"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info, Newspaper, Calendar, Users, Mail } from "lucide-react"

const SIDEBAR_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Info, label: "About", href: "/about" },
  { icon: Newspaper, label: "News", href: "/news" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: Users, label: "Teams", href: "/teams" },
  { icon: Mail, label: "Contact", href: "/contact" },
]

export default function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-4 px-4 py-8 h-full rounded-2xl bg-white w-20 hover:w-64 transition-all duration-300 ease-out neumorphic-lg group">
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center justify-center h-16 mb-4 rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 neumorphic-sm hover:glow-blue transition-smooth cursor-pointer">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
          CV
        </div>
      </Link>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-2 flex-1">
        {SIDEBAR_ITEMS.map(({ icon: Icon, label, href }) => {
          const isActive = pathname === href
          
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-smooth relative justify-center group-hover:justify-start ${
                isActive 
                  ? "bg-gradient-to-r from-blue-50 to-blue-100" 
                  : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
              }`}
            >
              <Icon 
                className={`w-5 h-5 flex-shrink-0 transition-colors ${
                  isActive ? "text-blue-500" : "text-slate-600 group-hover:text-blue-500"
                }`} 
                strokeWidth={1.5} 
              />
              <span className={`text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                isActive ? "text-blue-600" : "text-slate-700 group-hover:text-blue-600"
              }`}>
                {label}
              </span>
              {isActive && <div className="absolute inset-0 rounded-xl neumorphic-sm" />}
            </Link>
          )
        })}
      </nav>

      {/* Footer Info */}
      <div className="text-xs text-slate-500 text-center pt-4 border-t border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 text-sm">CODE VIVEKS</p>
        <p className="mt-1">Tech Club</p>
      </div>
    </div>
  )
}
