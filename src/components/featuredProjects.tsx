type Project = {
  name: string
  value: string
  summary: string
  stack: string[]
  href: string
}

const projects: Project[] = [
  {
    name: 'Resume Builder Platform',
    value: 'Reduced resume customization time by turning repeated edits into reusable templates.',
    summary: 'A print-first resume website with API-driven content sections and controlled A4 export behavior.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: '#'
  },
  {
    name: 'Admin Workflow Dashboard',
    value: 'Improved operator visibility by consolidating task queues and status into one timeline view.',
    summary: 'Dashboard experience with role-based workflows, reusable widgets, and clearer task lifecycle tracking.',
    stack: ['React', 'TypeScript', 'REST API'],
    href: '#'
  },
  {
    name: 'Brand Website Revamp',
    value: 'Boosted loading performance with static generation and smarter content rendering.',
    summary: 'Marketing site architecture focused on SEO structure, content maintainability, and delivery speed.',
    stack: ['Next.js', 'SEO', 'Performance'],
    href: '#'
  }
]

export default function FeaturedProjects() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {projects.map((project) => (
        <article key={project.name} className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-lg">
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
          <a href={project.href} className="mt-5 inline-block text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4">
            View details
          </a>
        </article>
      ))}
    </div>
  )
}
