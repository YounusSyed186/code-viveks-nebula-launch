"use client"

import { useState } from "react"
import HeroSection from "@/components/sections/hero-section"
import TeamsGrid from "@/components/sections/teams-grid"
import AboutSection from "@/components/sections/about-section"
import NewsSection from "@/components/sections/news-section"
import EventsSection from "@/components/sections/events-section"

interface MainContentProps {
  sidebarExpanded: boolean
}

const TABS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "events", label: "Events" },
]

export default function MainContent({ sidebarExpanded }: MainContentProps) {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <main className="flex-1 flex flex-col rounded-2xl bg-white neumorphic-lg overflow-hidden transition-smooth">
      {/* Top Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="flex px-8 gap-8 max-w-full">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-5 text-sm font-semibold transition-smooth relative group cursor-pointer ${
                activeTab === id ? "text-blue-500" : "text-slate-600 hover:text-orange-500"
              }`}
            >
              {label}
              {activeTab === id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full glow-blue"></div>
              )}
              {activeTab !== id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-orange-500 transition-smooth rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          {activeTab === "home" && (
            <>
              <HeroSection />
              <TeamsGrid />
            </>
          )}
          {activeTab === "about" && <AboutSection />}
          {activeTab === "news" && <NewsSection />}
          {activeTab === "events" && <EventsSection />}
        </div>
      </div>
    </main>
  )
}
