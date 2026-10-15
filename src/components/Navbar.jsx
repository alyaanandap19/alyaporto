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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(255,246,241,0.82)] backdrop-blur-lg shadow-[0_1px_0_rgba(31,27,25,0.03)] transition-all duration-300">
      <div className="container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[64px] items-center justify-between">
          {/* Logo: AP. with coral dot */}
          <a href="#home" className="text-[1.2rem] font-bold tracking-[-0.03em] text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]">
            AP<span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            <nav className="flex items-center gap-5 xl:gap-6">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-item relative text-[0.82rem] font-medium transition-colors duration-200 ${
                    activeId === link.id ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] hover:text-[var(--accent)]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Navbar CV Button — white pill with shadow */}
            <a
              href="/CV_Alya_Ananda_Putri.pdf"
              download="CV_Alya_Ananda_Putri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[0.8rem] font-bold text-[var(--text)] shadow-[0_2px_12px_rgba(31,27,25,0.08)] transition-all hover:shadow-[0_4px_16px_rgba(238,106,76,0.15)] hover:text-[var(--accent)]"
            >
              <span>Unduh CV</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Buka menu navigasi"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text)] shadow-sm transition-colors hover:text-[var(--accent)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[rgba(255,246,241,0.95)] lg:hidden">
          <div className="container mx-auto max-w-[1100px] space-y-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeId === link.id ? 'bg-[var(--accent-soft)] text-[var(--accent-dark)]' : 'text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-dark)]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="/CV_Alya_Ananda_Putri.pdf"
                download="CV_Alya_Ananda_Putri.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-bold text-white shadow-sm"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Unduh CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
