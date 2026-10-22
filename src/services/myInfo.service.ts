import api from './api'
import type { ProjectDetailResponse, ProjectListResponse } from '@/features/projects/domain/project.types'

const username = 'felix'

const toFailVo = (message: string): FailVo => ({
  isSuccess: false,
  code: 'UPSTREAM_UNAVAILABLE',
  message,
  data: null
})

const safeGet = async <T>(url: string): Promise<BaseVo<T>> => {
  try {
    return await api.get<T>(url)
  } catch {
    return toFailVo(`Failed to fetch ${url}`)
  }
}

export const aboutService = {
  getAboutMe: async (): Promise<BaseVo<About[]>> => {
    const url = `${username}/about`
    return safeGet<About[]>(url)
  }
}

export const workingExpService = {
  getWorkingExp: async (): Promise<BaseVo<WorkingExperience[]>> => {
    const url = `${username}/workingExperiences`
    return safeGet<WorkingExperience[]>(url)
  }
}

export const coreSkillsService = {
  getCoreSkills: async (): Promise<BaseVo<CoreSkill[]>> => {
    const url = `${username}/coreSkills`
    return safeGet<CoreSkill[]>(url)
  }
}

export const educationService = {
  getEducation: async (): Promise<BaseVo<Education[]>> => {
    const url = `${username}/education`
    return safeGet<Education[]>(url)
  }
}

export const contactService = {
  getContact: async (): Promise<BaseVo<Contact>> => {
    const url = `${username}/contact`
    return safeGet<Contact>(url)
  }
}

export const avatarService = {
  getAvatar: async (): Promise<Blob> => {
    const url = `${username}/avatar`
    return api.get(url, { responseType: 'blob' })
  }
}

export const projectsService = {
  getProjects: async (featured = false): Promise<BaseVo<ProjectListResponse[]>> => {
    const url = `${username}/projects`
    return api.get(url, { params: { featured } })
  },

  getProjectDetail: async (slug: string): Promise<BaseVo<ProjectDetailResponse>> => {
    const url = `${username}/projects/${slug}`
    return api.get(url)
  }
}
