import React, { useState } from 'react'
import useScrollSpy from '../hooks/useScrollSpy'

const links = [
  { id: 'home', label: 'Beranda' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'projects', label: 'Proyek' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'organizations', label: 'Organisasi' },
  { id: 'certifications', label: 'Sertifikasi' },
  { id: 'contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const ids = ['home', 'about', 'skills', 'projects', 'experience', 'organizations', 'certifications', 'contact']
  const activeId = useScrollSpy(ids)

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(17,26,57,0.08)] bg-[rgba(255,255,255,0.8)] backdrop-blur-md shadow-[0_1px_0_rgba(17,26,57,0.02)] transition-all duration-300">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[64px] items-center justify-between">
          <a href="#home" className="text-[1.05rem] font-bold tracking-[-0.04em] text-[var(--navy)] transition-colors duration-200 hover:text-[var(--primary)]">
            Alya Ananda Putri
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-item relative text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id ? 'text-[var(--primary)]' : 'text-[var(--navy)] hover:text-[var(--primary)]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Buka menu navigasi"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(17,26,57,0.08)] bg-white text-[var(--navy)] shadow-sm transition-colors hover:text-[var(--primary)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-[rgba(17,26,57,0.08)] bg-white/90 md:hidden">
          <div className="container mx-auto max-w-[1200px] space-y-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--navy)] hover:bg-[rgba(91,75,214,0.04)] hover:text-[var(--primary)]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
