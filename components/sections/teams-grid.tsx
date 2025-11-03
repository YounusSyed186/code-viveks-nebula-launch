import TeamCard from "@/components/team-card"

const TEAMS = [
  {
    id: 1,
    name: "Juniors Team",
    description: "Entry-level workshops and mentorship for beginners",
    icon: "🚀",
  },
  {
    id: 2,
    name: "Competitive Programming",
    description: "Master algorithms and data structures through contests",
    icon: "⚡",
  },
  {
    id: 3,
    name: "Web Development",
    description: "Build modern web applications with cutting-edge tech",
    icon: "🌐",
  },
  {
    id: 4,
    name: "AI/ML",
    description: "Explore artificial intelligence and machine learning",
    icon: "🤖",
  },
  {
    id: 5,
    name: "DSA",
    description: "Deep dive into data structures and algorithms",
    icon: "📊",
  },
  {
    id: 6,
    name: "IoT",
    description: "Connect the physical world through smart devices",
    icon: "📡",
  },
]

export default function TeamsGrid() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAMS.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </section>
  )
}
