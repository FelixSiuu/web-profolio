'use client'

import { Printer } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { contactService } from '@/services/myInfo.service'

const LINKEDIN_FALLBACK_URL = 'https://www.linkedin.com/in/felix-siu-a1353a375'
const GITHUB_FALLBACK_URL = 'https://github.com/FelixSiuu'

const MyNav = () => {
  const [linkedinUrl, setLinkedinUrl] = useState(LINKEDIN_FALLBACK_URL)
  const [githubUrl, setGithubUrl] = useState(GITHUB_FALLBACK_URL)
  const [showLinkedin, setShowLinkedin] = useState(true)
  const [showGithub, setShowGithub] = useState(true)

  useEffect(() => {
    let mounted = true

    contactService
      .getContact()
      .then((response) => {
        if (!mounted || !response.isSuccess) return

        const contact = response.data
        setLinkedinUrl(contact.socialLinks?.linkedin ?? LINKEDIN_FALLBACK_URL)
        setGithubUrl(contact.socialLinks?.github ?? GITHUB_FALLBACK_URL)
        setShowLinkedin(Boolean(contact.publicMap?.linkedin))
        setShowGithub(Boolean(contact.publicMap?.github))
      })
      .catch(() => {
        // Keep fallback links when API request fails.
      })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur supports-backdrop-filter:bg-white/70 print:hidden">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-end gap-2 px-4">
        <button type="button" aria-label="Print" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15 bg-white text-black transition hover:bg-black/5" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
        </button>
        {/* <button type="button" aria-label="Download pdf" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15 bg-white text-black transition hover:bg-black/5">
          <Download className="h-4 w-4" />
        </button> */}
        {showLinkedin && (
          <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-9 items-center justify-center rounded-md border border-black/15 bg-white px-3 text-sm text-black transition hover:bg-black/5">
            <FaLinkedin className="h-5 w-5" color="#0967c2" />
          </a>
        )}
        {showGithub && (
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-9 items-center justify-center rounded-md border border-black/15 bg-white px-3 text-sm text-black transition hover:bg-black/5">
            <FaGithub className="h-5 w-5" />
          </a>
        )}
      </div>
    </nav>
  )
}

export default MyNav
