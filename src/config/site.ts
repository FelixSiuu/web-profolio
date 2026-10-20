type HomeMode = 'v2' | 'legacy'

const parseHomeMode = (): HomeMode => {
  const rawMode = process.env.NEXT_PUBLIC_HOME_MODE?.toLowerCase()
  if (rawMode === 'legacy') return 'legacy'
  return 'v2'
}

export const siteConfig = {
  homeMode: parseHomeMode()
}
