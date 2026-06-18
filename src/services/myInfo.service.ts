import api from './api'

const publicPath = '/myInfo'

export const aboutService = {
  getAboutMe: async (): Promise<BaseVo<About[]>> => {
    const url = `${publicPath}/about`
    return api.get(url)
  }
}

export const workingExpService = {
  getWorkingExp: async (): Promise<BaseVo<WorkingExperience[]>> => {
    const url = `${publicPath}/workingExperiences`
    return api.get(url)
  }
}

export const coreSkillsService = {
  getCoreSkills: async (): Promise<BaseVo<CoreSkill[]>> => {
    const url = `${publicPath}/coreSkills`
    return api.get(url)
  }
}

export const educationService = {
  getEducation: async (): Promise<BaseVo<Education[]>> => {
    const url = `${publicPath}/education`
    return api.get(url)
  }
}
