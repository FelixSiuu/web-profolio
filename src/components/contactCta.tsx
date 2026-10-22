import { contactService } from '@/services/myInfo.service'

export default async function ContactCta() {
  const response = await contactService.getContact().catch(() => null)

  if (!response) return null

  if (!response.isSuccess) return null

  const contact = response.data
  const publicMap = contact.publicMap
  const showEmail = Boolean(publicMap?.email && contact.email)
  const showLinkedin = Boolean(publicMap?.linkedin && contact.socialLinks?.linkedin)
  const showGithub = Boolean(publicMap?.github && contact.socialLinks?.github)

  return (
    <div className="rounded-3xl border border-zinc-900/10 bg-gradient-to-r from-zinc-900 to-zinc-700 px-6 py-8 text-white sm:px-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-300">Let&apos;s Build</p>
      <h3 className="mt-2 text-2xl font-semibold">Open to Frontend and Product-Focused Collaboration</h3>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-100/90">If you are building user-facing products and need a frontend engineer who cares about both code quality and experience details, feel free to reach out.</p>

      <div className="mt-5 flex flex-wrap gap-3">
        {showEmail && (
          <a href={`mailto:${contact.email}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200">
            Email Me
          </a>
        )}
        {showLinkedin && (
          <a href={contact.socialLinks?.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/60 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
            LinkedIn
          </a>
        )}
        {showGithub && (
          <a href={contact.socialLinks?.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/60 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}
