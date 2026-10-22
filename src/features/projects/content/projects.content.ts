import type { ProjectDetail, ProjectDetailResponse, ProjectListItem, ProjectListResponse } from '@/features/projects/domain/project.types'
import { projectsService } from '@/services/myInfo.service'

export const getProjectPath = (slug: string): string => `/projects/${slug}`

const toStackNames = (stacks?: { stackName: string; sortOrder: number }[] | null): string[] => {
  if (!stacks) return []

  return [...stacks].sort((a, b) => a.sortOrder - b.sortOrder).map((item) => item.stackName)
}

const toListItem = (project: ProjectListResponse): ProjectListItem => {
  const { slug, sortOrder, name, value, summary, featured, createTime, updateTime } = project
  return {
    slug,
    sortOrder,
    name,
    value,
    summary,
    stack: toStackNames(project.stacks),
    isFeatured: featured,
    createTime,
    updateTime
  }
}

const toDetail = (project: ProjectDetailResponse): ProjectDetail => {
  const listItem = toListItem(project)

  return {
    ...listItem,
    role: project.role,
    duration: project.duration,
    challenge: project.challenge,
    solution: project.solution,
    impact: project.impact,
    liveUrl: project.liveUrl,
    repoUrl: project.repoUrl
  }
}

export const projectsContent = {
  getAllList: async (): Promise<ProjectListItem[]> => {
    try {
      const response = await projectsService.getProjects(false)
      return response.isSuccess ? response.data.map(toListItem) : []
    } catch {
      return []
    }
  },

  getFeaturedList: async (): Promise<ProjectListItem[]> => {
    try {
      const response = await projectsService.getProjects(true)
      return response.isSuccess ? response.data.map(toListItem) : []
    } catch {
      return []
    }
  },

  getDetailBySlug: async (slug: string): Promise<ProjectDetail | undefined> => {
    try {
      const response = await projectsService.getProjectDetail(slug)
      return response.isSuccess ? toDetail(response.data) : undefined
    } catch {
      return undefined
    }
  }
}
