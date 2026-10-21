import type { ProjectListItem } from '@/features/projects/domain/project.types'
import { getProjectPath } from '@/features/projects/content/projects.content'
import Link from 'next/link'

type ProjectCardProps = {
  project: ProjectListItem
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="portfolio-card bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-lg">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Case Study</p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-900">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-700">{project.value}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700">
            {tech}
          </li>
        ))}
      </ul>
      <Link href={getProjectPath(project.slug)} className="mt-5 inline-block text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4">
        View details
      </Link>
    </article>
  )
}
