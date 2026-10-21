import type { ProjectCase } from '@/features/projects/domain/project.types'

const projectCases: ProjectCase[] = [
  {
    id: 'resume-builder-platform',
    name: 'Resume Builder Platform',
    value: 'Reduced resume customization time by turning repeated edits into reusable templates.',
    summary: 'A print-first resume website with API-driven content sections and controlled A4 export behavior.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    href: '#',
    isFeatured: true
  },
  {
    id: 'admin-workflow-dashboard',
    name: 'Admin Workflow Dashboard',
    value: 'Improved operator visibility by consolidating task queues and status into one timeline view.',
    summary: 'Dashboard experience with role-based workflows, reusable widgets, and clearer task lifecycle tracking.',
    stack: ['React', 'TypeScript', 'REST API'],
    href: '#',
    isFeatured: true
  },
  {
    id: 'brand-website-revamp',
    name: 'Brand Website Revamp',
    value: 'Boosted loading performance with static generation and smarter content rendering.',
    summary: 'Marketing site architecture focused on SEO structure, content maintainability, and delivery speed.',
    stack: ['Next.js', 'SEO', 'Performance'],
    href: '#',
    isFeatured: true
  }
]

export const projectsContent = {
  getFeatured: (): ProjectCase[] => projectCases.filter((project) => project.isFeatured)
}
