"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"

export default function Home() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <Sidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded} />

      {/* Main Content */}
      <MainContent sidebarExpanded={sidebarExpanded} />
    </div>
  )
}
