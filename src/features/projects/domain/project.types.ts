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

export type ProjectListResponse = {
  slug: string
  sortOrder: number
  name: string
  value: string
  summary: string
  // Backend returns stack names as a pre-sorted string list.
  stacks: string[]
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
