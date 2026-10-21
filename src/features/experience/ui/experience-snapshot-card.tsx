import type { ExperienceSnapshotItem } from '@/features/experience/domain/experience-snapshot.model'

type ExperienceSnapshotCardProps = {
  item: ExperienceSnapshotItem
}

export default function ExperienceSnapshotCard({ item }: ExperienceSnapshotCardProps) {
  return (
    <article className="portfolio-card bg-white p-5">
      <p className="text-xs font-medium text-zinc-500">{item.dateRange}</p>
      <h3 className="mt-2 text-base font-semibold text-zinc-900">{item.jobTitle}</h3>
      <p className="text-sm text-zinc-700">{item.company}</p>
      <p className="text-sm text-zinc-500">{item.location}</p>
      {item.highlight && <p className="mt-3 text-sm leading-6 text-zinc-600">{item.highlight}</p>}
    </article>
  )
}
