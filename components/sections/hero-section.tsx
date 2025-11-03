export default function HeroSection() {
  return (
    <section className="mb-16 space-y-6 text-center py-16 animate-fade-in">
      <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 mb-4">
        <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
          Welcome to the Future of Innovation
        </span>
      </div>
      
      <h1 className="text-6xl font-bold text-balance leading-tight">
        <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-orange-500 bg-clip-text text-transparent">
          CODE VIVEKS
        </span>
      </h1>
      
      <p className="text-3xl font-bold text-slate-700 tracking-wide">
        Create. Build. Innovate.
      </p>
      
      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        A premier tech club dedicated to fostering innovation, collaboration, and excellence in computer science and
        technology. Join us to build the future together.
      </p>
      
      <div className="flex gap-4 justify-center pt-6">
        <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold transition-smooth hover:scale-105 hover:glow-blue cursor-pointer shadow-lg">
          Join Us
        </button>
        <button className="px-10 py-4 bg-white border-2 border-orange-500 text-orange-600 rounded-xl font-semibold transition-smooth hover:bg-orange-50 hover:scale-105 cursor-pointer neumorphic-sm">
          Learn More
        </button>
      </div>
    </section>
  )
}
