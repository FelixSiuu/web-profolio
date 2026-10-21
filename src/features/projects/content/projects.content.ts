import type { ProjectDetail, ProjectListItem } from '@/features/projects/domain/project.types'
import projectsData from '@/features/projects/content/projects.content.json'

const projectDetails: ProjectDetail[] = projectsData as ProjectDetail[]

export const getProjectPath = (slug: string): string => `/projects/${slug}`

const toListItem = (project: ProjectDetail): ProjectListItem => {
  const { slug, name, value, summary, stack, isFeatured } = project
  return { slug, name, value, summary, stack, isFeatured }
}

export const projectsContent = {
  getAllList: (): ProjectListItem[] => projectDetails.map(toListItem),
  getFeaturedList: (): ProjectListItem[] => projectDetails.filter((project) => project.isFeatured).map(toListItem),
  getDetailBySlug: (slug: string): ProjectDetail | undefined => projectDetails.find((project) => project.slug === slug)
}
