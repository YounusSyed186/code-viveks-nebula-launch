export default function NewsCard({ article }: { article: any }) {
  const date = new Date(article.date)
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="bg-white rounded-xl neumorphic-md hover:neumorphic-lg transition-all duration-300 p-6 hover:border-l-4 hover:border-blue-500 group cursor-pointer">
      <div className="flex items-start gap-4">
        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold whitespace-nowrap">
          {formattedDate}
        </span>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-500 transition-colors">
            {article.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">{article.content}</p>
        </div>
      </div>
    </div>
  )
}
