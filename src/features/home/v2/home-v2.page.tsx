import AboutMe from '@/components/aboutMe'
import ContactCta from '@/components/contactCta'
import MyHeader from '@/components/myHeader'
import SectionTitle from '@/components/sectionTitle'
import WorkingStyle from '@/components/workingStyle'
import ExperienceSnapshotSection from '@/features/experience/sections/experience-snapshot.section'
import FeaturedProjectsSection from '@/features/projects/sections/featured-projects.section'
import SkillMatrixSection from '@/features/skills/sections/skill-matrix.section'

export default function HomeV2Page() {
  return (
    <main className="portfolio-page-bg relative flex-1 overflow-hidden px-4 py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-y-14">
        <section className="portfolio-surface p-7 backdrop-blur md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--portfolio-ink-soft)]">Frontend Engineer Portfolio</p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-[var(--portfolio-ink-strong)] md:text-5xl">Designing fast, maintainable web experiences for real product teams.</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--portfolio-ink)]">I focus on frontend architecture, performance, and cross-team execution. This site highlights selected project work, collaboration style, and the outcomes I delivered.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#featured-projects" className="rounded-full bg-[var(--portfolio-brand)] px-5 py-2.5 text-sm font-medium text-[var(--portfolio-brand-contrast)] transition hover:bg-[var(--portfolio-brand-strong)]">
                  View Projects
                </a>
                <a href="#contact" className="rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-5 py-2.5 text-sm font-medium text-[var(--portfolio-ink-strong)] transition hover:bg-[var(--portfolio-surface-muted)]">
                  Contact
                </a>
              </div>
            </div>

            <MyHeader />
          </div>
        </section>

        <section id="featured-projects" className="space-y-4">
          <SectionTitle>Featured Projects</SectionTitle>
          <FeaturedProjectsSection />
        </section>

        <section className="space-y-4">
          <SectionTitle>Experience Snapshot</SectionTitle>
          <ExperienceSnapshotSection />
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <SectionTitle>Skill Matrix</SectionTitle>
            <SkillMatrixSection />
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <SectionTitle>About</SectionTitle>
              <div className="portfolio-card p-5 text-sm leading-7 text-[var(--portfolio-ink)]">
                <AboutMe />
              </div>
            </section>

            <section className="space-y-4">
              <SectionTitle>Working Style</SectionTitle>
              <WorkingStyle />
            </section>
          </div>
        </section>

        <section id="contact">
          <ContactCta />
        </section>
      </div>
    </main>
  )
}
