import NewsSection from "@/components/sections/news-section"

export const metadata = {
  title: 'News | CODE VIVEKS',
  description: 'Stay updated with the latest news and announcements from CODE VIVEKS.',
}

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <NewsSection />
    </div>
  )
}
