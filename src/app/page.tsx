import { siteConfig } from '@/config/site'
import HomeLegacyPage from '@/features/home/legacy/home-legacy.page'
import HomeV2Page from '@/features/home/v2/home-v2.page'

export default function Home() {
  if (siteConfig.homeMode === 'legacy') return <HomeLegacyPage />

  return <HomeV2Page />
}
