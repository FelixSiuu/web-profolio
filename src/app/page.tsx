import AboutMe from '@/components/aboutMe'
import CoreSkills from '@/components/coreSkills'
import Education from '@/components/education'
import Languages from '@/components/languages'
import MyHeader from '@/components/myHeader'
import SectionTitle from '@/components/sectionTitle'
import WorkingExperience from '@/components/workingExperience'

export default function Home() {
  return (
    <main className="px-4 flex-1 py-10 md:py-14">
      <div className="w-full max-w-200 mx-auto h-full flex flex-col gap-y-10">
        <MyHeader />

        <div className="flex flex-col gap-10">
          <section>
            <SectionTitle>About Me</SectionTitle>
            <AboutMe />
          </section>

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
