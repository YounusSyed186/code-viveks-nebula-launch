export default function HeroSection() {
  return (
    <section className="mb-16 space-y-4 text-center py-12">
      <h1 className="text-5xl font-bold text-balance">
        <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">CODE VIVEKS</span>
      </h1>
      <p className="text-2xl font-semibold text-slate-700">Create. Build. Innovate.</p>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        A premier tech club dedicated to fostering innovation, collaboration, and excellence in computer science and
        technology. Join us to build the future.
      </p>
      <div className="flex gap-4 justify-center pt-4">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:glow-blue cursor-pointer">
          Join Us
        </button>
        <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold transition-all hover:bg-orange-50 hover:glow-orange cursor-pointer">
          Learn More
        </button>
      </div>
    </section>
  )
}
