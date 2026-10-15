import React from 'react'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    title: 'Keahlian Teknis',
    icon: '💻',
    items: [
      'Pengembangan Web',
      'Pengembangan Frontend',
      'Perancangan UI/UX',
      'Pengelolaan Basis Data',
      'Pengujian Perangkat Lunak'
    ]
  },
  {
    title: 'Bahasa & Framework',
    icon: '🧩',
    items: [
      'React.js',
      'Vue.js',
      'Next.js',
      'Tailwind CSS',
      'JavaScript',
      'HTML',
      'CSS',
      'SQL',
      'PHP',
      'Laravel',
      'C++',
      'Python'
    ]
  },
  {
    title: 'Tools',
    icon: '🛠️',
    items: [
      'Visual Studio Code',
      'Git & GitHub',
      'Figma',
      'SQL Server Management Studio',
      'XAMPP',
      'Draw.io',
      'Trello'
    ]
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    items: [
      'Kemampuan Analitis',
      'Pemecahan Masalah',
      'Komunikasi Efektif',
      'Kerja Sama Tim'
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="KEAHLIAN"
        subtitle="Teknologi dan kemampuan yang saya gunakan dalam berbagai proyek."
      >
        Keahlian
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            data-reveal
            className="skill-card bg-white flex flex-col justify-between rounded-[1.25rem] border border-[var(--border)] p-6 sm:p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xl">
                    {group.icon}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-bold text-[var(--accent-dark)]">
                  {group.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-xs sm:text-[0.82rem] font-medium text-[var(--text)] transition-all duration-200 hover:bg-[#f8c4b0] hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
