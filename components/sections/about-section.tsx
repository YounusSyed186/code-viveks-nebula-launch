export default function AboutSection() {
  return (
    <section className="space-y-12 py-8">
      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 bg-white rounded-xl neumorphic-md p-8">
          <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed">
            To be the premier tech club that cultivates innovation, technical excellence, and collaborative spirit among
            students. We envision a community where creativity meets code, and ideas transform into impactful solutions.
          </p>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
        </div>

        <div className="space-y-4 bg-white rounded-xl neumorphic-md p-8">
          <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed">
            To foster a culture of continuous learning, hands-on problem-solving, and professional development. We
            empower members through workshops, competitions, projects, and mentorship to excel in their technical
            careers.
          </p>
          <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Organizational Hierarchy */}
      <div className="space-y-8 bg-white rounded-xl neumorphic-md p-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Leadership Structure</h2>
        <div className="flex flex-col items-center gap-8">
          {/* President */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-8 py-4 font-semibold shadow-lg">
            President
          </div>

          {/* Connector Line */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-slate-300"></div>

          {/* Core Committee */}
          <div className="flex gap-12 items-center">
            {["Tech Lead", "Operations", "Events"].map((role) => (
              <div key={role} className="text-center">
                <div className="w-0.5 h-6 bg-slate-300 mx-auto"></div>
                <div className="bg-slate-100 border-2 border-blue-400 text-slate-900 rounded-lg px-6 py-3 font-medium min-w-fit">
                  {role}
                </div>
              </div>
            ))}
          </div>

          {/* Connector Line */}
          <div className="w-0.5 h-8 bg-gradient-to-b from-slate-300 to-orange-300"></div>

          {/* Teams */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Juniors", "CP", "Web Dev", "AI/ML", "DSA", "IoT"].map((team) => (
              <div
                key={team}
                className="bg-orange-50 border-2 border-orange-400 text-slate-900 rounded-lg px-4 py-2 text-sm font-medium text-center"
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
