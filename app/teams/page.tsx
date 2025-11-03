import TeamsGrid from "@/components/sections/teams-grid"

export const metadata = {
  title: 'Teams | CODE VIVEKS',
  description: 'Explore the various teams and specializations at CODE VIVEKS.',
}

export default function TeamsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <TeamsGrid />
    </div>
  )
}
