import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-7">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="text-sm font-medium text-[var(--text-muted)]">
          © 2026 Alya Ananda Putri. All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[var(--text-muted)]">
          <a
            href="https://www.linkedin.com/in/alyaanandaputri"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alyaananda19"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            GitHub
          </a>
          <a
            href="mailto:alyaa.anandap19@gmail.com"
            className="transition-colors hover:text-[var(--accent)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
