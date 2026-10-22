export type ExperienceSnapshotItem = {
  id: number
  dateRange: string
  jobTitle: string
  company: string
  location: string
  highlight: string | null
}

export const mapToExperienceSnapshot = (items: WorkingExperience[]): ExperienceSnapshotItem[] => {
  return items.slice(0, 3).map((item) => ({
    id: item.id,
    dateRange: `${item.startDate} - ${item.endDate ?? 'Now'}`,
    jobTitle: item.jobTitle,
    company: item.company,
    location: item.location,
    highlight: item.keyResponsibilities[0]?.responsibility ?? null
  }))
}
