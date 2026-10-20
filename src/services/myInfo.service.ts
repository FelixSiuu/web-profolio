import api from './api'

const username = 'felix'

export const aboutService = {
  getAboutMe: async (): Promise<BaseVo<About[]>> => {
    const url = `${username}/about`
    return api.get(url)
  }
}

export const workingExpService = {
  getWorkingExp: async (): Promise<BaseVo<WorkingExperience[]>> => {
    const url = `${username}/workingExperiences`
    return api.get(url)
  }
}

export const coreSkillsService = {
  getCoreSkills: async (): Promise<BaseVo<CoreSkill[]>> => {
    const url = `${username}/coreSkills`
    return api.get(url)
  }
}

export const educationService = {
  getEducation: async (): Promise<BaseVo<Education[]>> => {
    const url = `${username}/education`
    return api.get(url)
  }
}

// export const contactService = {
//   getContact: async (): Promise<BaseVo<Contact>> => {
//     const url = `${username}/contact`
//     return api.get(url)
//   }
// }

// export const avatarService = {
//   getAvatar: async (): Promise<Blob> => {
//     const url = `${username}/avatar`
//     return api.get(url, { responseType: 'blob' })
//   }
// }
