"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"

export default function Home() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-6">
      <div className="flex gap-6 h-[calc(100vh-3rem)] max-w-[1800px] mx-auto">
        {/* Sidebar */}
        <Sidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded} />

        {/* Main Content */}
        <MainContent sidebarExpanded={sidebarExpanded} />
      </div>
    </div>
  )
}
