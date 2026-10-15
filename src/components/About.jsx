import React from 'react'
import SectionHeader from './SectionHeader'

const infoCards = [
  {
    id: 'pendidikan',
    title: 'Pendidikan',
    icon: '🎓',
    degree: 'S1 Teknik Informatika',
    detail: 'Universitas Lampung • 2022 – 2026'
  },
  {
    id: 'pengalaman',
    title: 'Pengalaman',
    icon: '💼',
    content: [
      'Frontend Developer Intern · BPS Kota Bandar Lampung',
      'Proyek E-Commerce U-Market',
      'MSIB Data Engineer · Metrodata Academy'
    ]
  },
  {
    id: 'minat',
    title: 'Minat',
    icon: '✦',
    content: ['Frontend Development', 'Web Development', 'UI/UX Design']
  }
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="TENTANG SAYA"
        subtitle="Lulusan Teknik Informatika yang berfokus pada pengembangan frontend dan web, dengan perhatian pada antarmuka yang nyaman dipakai."
      >
        Tentang Saya
      </SectionHeader>

      <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left: About paragraph in peach gradient panel */}
        <div className="lg:col-span-7 flex flex-col justify-center" data-reveal>
          <div className="h-full rounded-3xl bg-gradient-to-br from-[var(--bg-peach)] via-[#FFF0E8] to-[var(--bg)] p-6 sm:p-8 lg:p-9 flex flex-col justify-center border border-[var(--border)]">
            <div className="text-[2.2rem] leading-none text-[var(--accent)] font-serif mb-4" aria-hidden="true">"</div>
            <p className="text-left leading-[1.75] text-[var(--text-muted)] text-base sm:text-[1.02rem]">
              Saya suka mengerjakan bagian web yang langsung dilihat dan dipakai orang. Dalam proyek tim dengan metode Scrum, saya mengerjakan frontend dari desain Figma sampai terhubung dengan backend, dan menguji setiap fitur sebelum diserahkan. Pengalaman saya mencakup sistem informasi magang di BPS Kota Bandar Lampung dan platform e-commerce U-Market.
            </p>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="info-card bg-white rounded-2xl border border-[var(--border)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              data-reveal
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xl">
                  {card.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text)] tracking-tight">
                    {card.title}
                  </h3>

                  {card.id === 'pendidikan' ? (
                    <div className="mt-1.5 space-y-0.5">
                      <p className="text-sm sm:text-[0.95rem] font-semibold text-[var(--text)]">
                        {card.degree}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                        {card.detail}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {card.content.map((text) => (
                        <span
                          key={text}
                          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs sm:text-[0.8rem] font-medium text-[var(--text)] leading-relaxed"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0"></span>
                          {text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
