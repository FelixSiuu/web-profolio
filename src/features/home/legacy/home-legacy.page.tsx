import CoreSkills from '@/components/coreSkills'
import Education from '@/components/education'
import Languages from '@/components/languages'
import MyHeader from '@/components/myHeader'
import SectionTitle from '@/components/sectionTitle'
import WorkingExperience from '@/components/workingExperience'

export default function HomeLegacyPage() {
  return (
    <main className="px-4 py-10 md:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-y-10">
        <MyHeader />

        <div className="flex flex-col gap-10">
          <section>
            <SectionTitle>Core Skills</SectionTitle>
            <CoreSkills />
          </section>

          <section>
            <SectionTitle>Working Experience</SectionTitle>
            <WorkingExperience />
          </section>

          <section>
            <SectionTitle>Education</SectionTitle>
            <Education />
          </section>

          <section>
            <SectionTitle>Languages</SectionTitle>
            <Languages />
          </section>
        </div>
      </div>
    </main>
  )
}
