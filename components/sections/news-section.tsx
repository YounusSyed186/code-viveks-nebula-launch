import NewsCard from "@/components/news-card"

const NEWS = [
  {
    id: 1,
    title: "Announcing CODE VIVEKS 2025 Kickoff",
    date: "2025-03-01",
    content: "Join us for an exciting semester of learning, building, and competing together.",
  },
  {
    id: 2,
    title: "Workshop: Web Dev with React & Next.js",
    date: "2025-02-25",
    content: "Learn modern frontend development techniques from industry experts.",
  },
  {
    id: 3,
    title: "Competitive Programming Contest Results",
    date: "2025-02-20",
    content: "Congratulations to all participants in our latest monthly programming contest!",
  },
  {
    id: 4,
    title: "AI/ML Project Showcase Success",
    date: "2025-02-15",
    content: "Amazing projects showcased by our AI/ML team. Check out the innovations!",
  },
]

export default function NewsSection() {
  return (
    <section className="space-y-6 py-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-900">Latest Updates</h2>
      </div>
      
      <div className="space-y-5">
        {NEWS.map((article, index) => (
          <div key={article.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </section>
  )
}
