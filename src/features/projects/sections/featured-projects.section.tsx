import { projectsContent } from '@/features/projects/content/projects.content'
import ProjectCard from '@/features/projects/ui/project-card'

export default function FeaturedProjectsSection() {
  const featuredProjects = projectsContent.getFeatured()

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
