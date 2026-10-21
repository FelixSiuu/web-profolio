import { projectsContent } from '@/features/projects/content/projects.content'
import ProjectCard from '@/features/projects/ui/project-card'

export default function FeaturedProjectsSection() {
  const featuredProjects = projectsContent.getFeaturedList()

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
