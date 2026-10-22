import { workingExpService } from '@/services/myInfo.service'
import { mapToExperienceSnapshot } from '@/features/experience/domain/experience-snapshot.model'
import ExperienceSnapshotCard from '@/features/experience/ui/experience-snapshot-card'

export default async function ExperienceSnapshotSection() {
  const response = await workingExpService.getWorkingExp()

  if (!response.isSuccess) return <p className="text-sm text-zinc-600">Experience data is temporarily unavailable.</p>

  const snapshots = mapToExperienceSnapshot(response.data)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {snapshots.map((item) => (
        <ExperienceSnapshotCard key={item.id} item={item} />
      ))}
    </div>
  )
}
