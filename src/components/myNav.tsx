'use client'

import { Download, Printer } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const LinkedInUrl = 'https://www.linkedin.com/in/felix-siu-a1353a375'
const GitHubUrl = 'https://github.com/FelixSiuu'

const MyNav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur supports-backdrop-filter:bg-white/70 print:hidden">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-end gap-2 px-4">
        <button type="button" aria-label="Print" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15 bg-white text-black transition hover:bg-black/5" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Download pdf" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15 bg-white text-black transition hover:bg-black/5">
          <Download className="h-4 w-4" />
        </button>
        <a href={LinkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-9 items-center justify-center rounded-md border border-black/15 bg-white px-3 text-sm text-black transition hover:bg-black/5">
          <FaLinkedin className="h-5 w-5" color="#0967c2" />
        </a>
        <a href={GitHubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-9 items-center justify-center rounded-md border border-black/15 bg-white px-3 text-sm text-black transition hover:bg-black/5">
          <FaGithub className="h-5 w-5" />
        </a>
      </div>
    </nav>
  )
}

export default MyNav
