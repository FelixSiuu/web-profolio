import { coreSkillsService } from '@/services/myInfo.service'

const normalizeSkills = (details: string): string[] => {
  return details
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

export default async function SkillMatrix() {
  const response = await coreSkillsService.getCoreSkills()

  if (!response.isSuccess) return <p className="text-sm text-zinc-600">Skill data is temporarily unavailable.</p>

  return (
    <div className="space-y-5">
      {response.data.map((group) => (
        <article key={group.id} className="rounded-2xl border border-zinc-200/80 bg-white p-5">
          <h3 className="text-base font-semibold text-zinc-900">{group.summary}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {normalizeSkills(group.details).map((skill) => (
              <li key={skill} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
