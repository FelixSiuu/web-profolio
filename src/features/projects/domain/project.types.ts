export type ProjectListItem = {
  slug: string
  sortOrder: number
  name: string
  value: string
  summary: string
  stack: string[]
  isFeatured: boolean
  createTime?: string
  updateTime?: string
}

export type ProjectDetail = ProjectListItem & {
  role?: string | null
  duration?: string | null
  challenge?: string | null
  solution?: string | null
  impact?: string | null
  liveUrl?: string | null
  repoUrl?: string | null
}

export type ProjectStackResponse = {
  stackName: string
  sortOrder: number
}

export type ProjectListResponse = {
  slug: string
  sortOrder: number
  name: string
  value: string
  summary: string
  stacks: ProjectStackResponse[]
  featured: boolean
  createTime?: string
  updateTime?: string
}

export type ProjectDetailResponse = ProjectListResponse & {
  role?: string | null
  duration?: string | null
  challenge?: string | null
  solution?: string | null
  impact?: string | null
  liveUrl?: string | null
  repoUrl?: string | null
}
