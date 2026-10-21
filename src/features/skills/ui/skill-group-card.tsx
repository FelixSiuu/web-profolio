import type { SkillGroupItem } from '@/features/skills/domain/skill-group.model'

type SkillGroupCardProps = {
  group: SkillGroupItem
}

export default function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <article className="portfolio-card bg-white p-5">
      <h3 className="text-base font-semibold text-zinc-900">{group.summary}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li key={skill} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
