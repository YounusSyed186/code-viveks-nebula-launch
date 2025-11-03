export default function NewsCard({ article }: { article: any }) {
  const date = new Date(article.date)
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="bg-white rounded-2xl neumorphic-md hover:border-blue-300 hover:glow-blue transition-smooth group cursor-pointer p-8 border border-slate-100">
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex-1 leading-snug">
          {article.title}
        </h3>
        <span className="px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full whitespace-nowrap">
          {formattedDate}
        </span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{article.content}</p>
      
      <div className="mt-4 flex items-center gap-2 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth">
        <span>Read more</span>
        <span>→</span>
      </div>
    </div>
  )
}
