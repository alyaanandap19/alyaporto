import React from 'react'

const contactLinks = [
  {
    title: 'Email',
    href: 'mailto:alyaa.anandap19@gmail.com',
    ariaLabel: 'Kirim email',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alyaanandaputri',
    ariaLabel: 'Profil LinkedIn',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
      </svg>
    )
  },
  {
    title: 'GitHub',
    href: 'https://github.com/alyaananda19',
    ariaLabel: 'Profil GitHub',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-16">
      <div className="rounded-3xl bg-gradient-to-br from-[var(--bg-peach)] via-[#FFF0E8] to-[var(--bg)] p-6 sm:p-8 md:p-10 lg:p-12 border border-[var(--border)]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Heading */}
          <div className="lg:col-span-5" data-reveal>
            <span className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--accent-dark)] uppercase tracking-wider">
              Kontak & Kolaborasi
            </span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.6rem] leading-[1.1]">
              Mari Bekerja Sama!
            </h2>
            <p className="mt-3.5 text-left text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
              Saya terbuka untuk kesempatan magang, peluang kerja, dan kolaborasi proyek, serta senang berdiskusi dan berkembang bersama.
            </p>
          </div>

          {/* Right: Email + Social Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start lg:items-end gap-5" data-reveal>
            <a
              href="mailto:alyaa.anandap19@gmail.com"
              className="text-lg sm:text-xl font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              alyaa.anandap19@gmail.com
            </a>

            <div className="flex items-center gap-3">
              {contactLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={item.ariaLabel}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-md hover:-translate-y-0.5"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
