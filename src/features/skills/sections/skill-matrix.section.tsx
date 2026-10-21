import { coreSkillsService } from '@/services/myInfo.service'
import { mapToSkillGroups } from '@/features/skills/domain/skill-group.model'
import SkillGroupCard from '@/features/skills/ui/skill-group-card'

export default async function SkillMatrixSection() {
  const response = await coreSkillsService.getCoreSkills()

  if (!response.isSuccess) return <p className="text-sm text-zinc-600">Skill data is temporarily unavailable.</p>

  const groups = mapToSkillGroups(response.data)

  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <SkillGroupCard key={group.id} group={group} />
      ))}
    </div>
  )
}
