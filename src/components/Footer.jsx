import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(17,26,57,0.06)] bg-white/80 py-7 backdrop-blur-xs">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-sm font-medium text-[var(--navy-soft)]">
          © 2026 Alya Ananda Putri. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[var(--navy-soft)]">
          <a
            href="https://www.linkedin.com/in/alyaanandaputri"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#0a66c2]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alyaananda19"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--navy)]"
          >
            GitHub
          </a>
          <a
            href="mailto:alyaa.anandap19@gmail.com"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
