import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import AppSidebar from '@/components/app-sidebar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CODE VIVEKS | College Tech Club',
  description: 'A premier tech club dedicated to fostering innovation, collaboration, and excellence in computer science and technology. Join us to build the future.',
  keywords: 'tech club, coding, programming, innovation, college, student organization, CODE VIVEKS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-6">
          <div className="flex gap-6 min-h-[calc(100vh-3rem)] max-w-[1800px] mx-auto">
            <AppSidebar />
            <main className="flex-1 rounded-2xl bg-white neumorphic-lg overflow-y-auto p-8 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30">
              {children}
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
