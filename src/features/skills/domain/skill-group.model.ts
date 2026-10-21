export type SkillGroupItem = {
  id: number
  summary: string
  skills: string[]
}

const normalizeSkills = (details: string): string[] => {
  return details
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

export const mapToSkillGroups = (items: CoreSkill[]): SkillGroupItem[] => {
  return items.map((group) => ({
    id: group.id,
    summary: group.summary,
    skills: normalizeSkills(group.details)
  }))
}
