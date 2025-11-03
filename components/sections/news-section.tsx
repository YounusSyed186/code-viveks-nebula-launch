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
    <section className="space-y-6 py-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Updates</h2>
      <div className="space-y-4">
        {NEWS.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
