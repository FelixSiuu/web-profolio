import SectionTitle from '@/components/sectionTitle'
import { projectsContent } from '@/features/projects/content/projects.content'
import ProjectCard from '@/features/projects/ui/project-card'

export const metadata = {
  title: 'Projects | Felix Siu',
  description: 'Selected frontend project case studies and implementation outcomes.'
}

export default function ProjectsPage() {
  const projects = projectsContent.getAllList()

  return (
    <main className="portfolio-page-bg min-h-full px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <section className="portfolio-surface p-7 md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--portfolio-ink-soft)]">Project Index</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--portfolio-ink-strong)] md:text-4xl">Case Studies and Product Work</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--portfolio-ink)]">A collection of frontend projects with context, implementation choices, and measurable outcomes.</p>
        </section>

        <section className="space-y-4">
          <SectionTitle>All Projects</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
