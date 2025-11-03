export default function AboutSection() {
  return (
    <section className="space-y-12 py-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5 bg-white rounded-2xl neumorphic-md p-8 border border-slate-100 hover:glow-blue transition-smooth group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-2xl">🎯</div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Our Vision</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            To be the premier tech club that cultivates innovation, technical excellence, and collaborative spirit among
            students. We envision a community where creativity meets code, and ideas transform into impactful solutions.
          </p>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
        </div>

        <div className="space-y-5 bg-white rounded-2xl neumorphic-md p-8 border border-slate-100 hover:glow-orange transition-smooth group">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <div className="text-2xl">🚀</div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Our Mission</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            To foster a culture of continuous learning, hands-on problem-solving, and professional development. We
            empower members through workshops, competitions, projects, and mentorship to excel in their technical
            careers.
          </p>
          <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Organizational Hierarchy */}
      <div className="space-y-8 bg-white rounded-2xl neumorphic-md p-10 border border-slate-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Leadership Structure</h2>
          <p className="text-slate-600">Organized for innovation and excellence</p>
        </div>
        
        <div className="flex flex-col items-center gap-6 py-6">
          {/* President */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-10 py-5 font-bold text-lg shadow-xl hover:scale-105 transition-smooth cursor-pointer">
            President
          </div>

          {/* Connector Line */}
          <div className="w-1 h-10 bg-gradient-to-b from-blue-400 to-slate-300 rounded-full"></div>

          {/* Core Committee */}
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Tech Lead", "Operations", "Events"].map((role) => (
              <div key={role} className="text-center">
                <div className="w-1 h-8 bg-slate-300 mx-auto rounded-full"></div>
                <div className="bg-white border-2 border-blue-400 text-slate-900 rounded-xl px-8 py-4 font-semibold min-w-fit neumorphic-sm hover:glow-blue transition-smooth cursor-pointer">
                  {role}
                </div>
              </div>
            ))}
          </div>

          {/* Connector Line */}
          <div className="w-1 h-10 bg-gradient-to-b from-slate-300 to-orange-300 rounded-full"></div>

          {/* Teams */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
            {["Juniors", "CP", "Web Dev", "AI/ML", "DSA", "IoT"].map((team, index) => (
              <div
                key={team}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 text-slate-900 rounded-xl px-5 py-3 text-sm font-bold text-center hover:scale-105 transition-smooth cursor-pointer animate-fade-in"
              >
                {team}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
