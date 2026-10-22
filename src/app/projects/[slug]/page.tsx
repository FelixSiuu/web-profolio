import { getProjectPath, projectsContent } from '@/features/projects/content/projects.content'
import type { Metadata } from 'next'
import { cache } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>
}

const getProjectBySlug = cache(async (slug: string) => {
  return projectsContent.getDetailBySlug(slug)
})

export async function generateStaticParams() {
  const projects = await projectsContent.getAllList()
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found | Felix Siu'
    }
  }

  return {
    title: `${project.name} | Felix Siu`,
    description: project.summary
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) notFound()

  const challenge = project.challenge ?? 'Challenge details will be added in the next content iteration.'
  const solution = project.solution ?? 'Solution details will be added in the next content iteration.'
  const impact = project.impact ?? project.value

  return (
    <main className="portfolio-page-bg min-h-full px-4 py-12 md:py-16">
      <article className="mx-auto w-full max-w-5xl space-y-8">
        <section className="portfolio-surface p-7 md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--portfolio-ink-soft)]">Case Study</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--portfolio-ink-strong)] md:text-5xl">{project.name}</h1>
          <p className="mt-4 text-base leading-7 text-[var(--portfolio-ink)]">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                {item}
              </span>
            ))}
          </div>

          <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="portfolio-card bg-white p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">Role</dt>
              <dd className="mt-1 text-zinc-900">{project.role ?? 'Frontend Engineer'}</dd>
            </div>
            <div className="portfolio-card bg-white p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-zinc-500">Duration</dt>
              <dd className="mt-1 text-zinc-900">{project.duration ?? 'TBD'}</dd>
            </div>
          </dl>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="portfolio-card bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Challenge</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{challenge}</p>
          </div>
          <div className="portfolio-card bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Solution</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{solution}</p>
          </div>
          <div className="portfolio-card bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Impact</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">{impact}</p>
          </div>
        </section>

        <section className="portfolio-card bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">Project Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700">
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100">
                Source Code
              </a>
            )}
            <Link href="/projects" className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100">
              Back to Projects
            </Link>
          </div>
        </section>

        <section className="pb-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Related Cases</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {(await projectsContent.getFeaturedList())
              .filter((item) => item.slug !== project.slug)
              .slice(0, 2)
              .map((item) => (
                <Link key={item.slug} href={getProjectPath(item.slug)} className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100">
                  {item.name}
                </Link>
              ))}
          </div>
        </section>
      </article>
    </main>
  )
}
