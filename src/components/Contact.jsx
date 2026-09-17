import React from 'react'

const contactCards = [
  {
    title: 'Email',
    info: 'alyaa.anandap19@gmail.com',
    href: 'mailto:alyaa.anandap19@gmail.com',
    tone: 'bg-[var(--soft-blue)] border-blue-200/60 hover:border-blue-400',
    iconBg: 'bg-blue-600 text-white',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    action: 'Kirim Email'
  },
  {
    title: 'LinkedIn',
    info: 'alyaanandaputri',
    href: 'https://www.linkedin.com/in/alyaanandaputri',
    tone: 'bg-[var(--primary-soft)] border-indigo-200/60 hover:border-indigo-400',
    iconBg: 'bg-[#0a66c2] text-white',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
      </svg>
    ),
    action: 'Lihat Profil'
  },
  {
    title: 'GitHub',
    info: 'alyaananda19',
    href: 'https://github.com/alyaananda19',
    tone: 'bg-[var(--soft-green)] border-emerald-200/60 hover:border-emerald-400',
    iconBg: 'bg-[#181717] text-white',
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    action: 'Lihat Repositori'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-16">
      <div className="rounded-3xl border border-[rgba(17,26,57,0.08)] bg-gradient-to-br from-white via-[#faf9ff] to-[#f5f3ff] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[var(--shadow-soft)]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5" data-reveal>
            <span className="inline-flex items-center rounded-lg bg-[var(--primary-soft)] px-3 py-1 text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
              Kontak & Kolaborasi
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--navy)] sm:text-4xl lg:text-[2.6rem] leading-[1.1]">
              Mari Bekerja Sama!
            </h2>
            <p className="mt-3.5 text-justify text-sm sm:text-base leading-relaxed text-[var(--navy-soft)] [text-justify:inter-word]">
              Saya terbuka untuk peluang kerja, kolaborasi proyek, dan kesempatan untuk berdiskusi serta berkembang bersama.
            </p>
          </div>

          {/* Right Column: Clean, Fully Clickable Cards */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3" data-reveal>
            {contactCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`group flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md ${item.tone} cursor-pointer`}
              >
                <div>
                  {/* Icon Badge */}
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-110 ${item.iconBg}`}>
                    {item.icon}
                  </div>

                  {/* Title & Info */}
                  <h3 className="text-lg font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[var(--navy-soft)] truncate block" title={item.info}>
                    {item.info}
                  </p>
                </div>

                {/* Bottom CTA & Arrow */}
                <div className="mt-5 flex items-center justify-between border-t border-[rgba(17,26,57,0.08)] pt-3 text-xs font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">
                  <span>{item.action}</span>
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
