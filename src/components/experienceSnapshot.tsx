import { workingExpService } from '@/services/myInfo.service'

export default async function ExperienceSnapshot() {
  const response = await workingExpService.getWorkingExp()

  if (!response.isSuccess) return <p className="text-sm text-zinc-600">Experience data is temporarily unavailable.</p>

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {response.data.slice(0, 3).map((item) => (
        <article key={item.id} className="rounded-2xl border border-zinc-200/80 bg-white p-5">
          <p className="text-xs font-medium text-zinc-500">
            {item.startDate} - {item.endDate ?? 'Now'}
          </p>
          <h3 className="mt-2 text-base font-semibold text-zinc-900">{item.jobTitle}</h3>
          <p className="text-sm text-zinc-700">{item.company}</p>
          <p className="text-sm text-zinc-500">{item.location}</p>
          {item.keyResponsibilities[0] && <p className="mt-3 text-sm leading-6 text-zinc-600">{item.keyResponsibilities[0].responsibility}</p>}
        </article>
      ))}
    </div>
  )
}
