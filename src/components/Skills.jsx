import React from 'react'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    title: 'Keahlian Teknis',
    icon: '💻',
    tone: 'bg-[var(--primary-soft)]',
    items: ['Pengembangan Web', 'Pengembangan Frontend', 'Perancangan UI/UX', 'Pengelolaan Basis Data']
  },
  {
    title: 'Bahasa & Framework',
    icon: '🧩',
    tone: 'bg-[var(--soft-blue)]',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'C++', 'SQL', 'React.js', 'Vue.js', 'Next.js', 'Laravel', 'Tailwind CSS']
  },
  {
    title: 'Tools',
    icon: '🛠️',
    tone: 'bg-[var(--soft-green)]',
    items: ['Visual Studio Code', 'Cursor', 'Git & GitHub', 'Figma', 'SQL Server Management Studio', 'XAMPP', 'Draw.io', 'Trello']
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    tone: 'bg-[var(--soft-orange)]',
    items: ['Kemampuan Analitis', 'Pemecahan Masalah', 'Komunikasi Efektif', 'Kerja Sama Tim']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader subtitle="Teknologi dan kemampuan yang saya gunakan dalam berbagai proyek.">
        Keahlian
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            data-reveal
            className={`skill-card ${group.tone} flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.06)] p-6 sm:p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-[rgba(17,26,57,0.08)] bg-white/80 text-xl shadow-xs">
                    {group.icon}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--navy)] tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <span className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-[var(--navy-soft)] border border-[rgba(17,26,57,0.06)]">
                  {group.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-xl bg-white/85 px-3 py-1.5 text-xs sm:text-[0.84rem] font-medium text-[var(--navy)] border border-[rgba(17,26,57,0.06)] shadow-2xs transition-all duration-200 hover:bg-white hover:shadow-xs hover:-translate-y-0.5"
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
