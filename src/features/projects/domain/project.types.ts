export type ProjectListItem = {
  slug: string
  name: string
  value: string
  summary: string
  stack: string[]
  isFeatured: boolean
}

export type ProjectDetail = ProjectListItem & {
  role?: string
  duration?: string
  challenge?: string
  solution?: string
  impact?: string
  liveUrl?: string
  repoUrl?: string
}
