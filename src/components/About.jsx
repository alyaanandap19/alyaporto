import React from 'react'
import SectionHeader from './SectionHeader'

const infoCards = [
  {
    id: 'pendidikan',
    title: 'Pendidikan',
    tone: 'bg-[var(--primary-soft)]',
    icon: '🎓',
    content: ['Teknik Informatika', 'Universitas Lampung', '2022 – 2026']
  },
  {
    id: 'pengalaman',
    title: 'Pengalaman',
    tone: 'bg-[var(--soft-green)]',
    icon: '💼',
    content: ['Frontend Developer Intern', 'MSIB Data Engineer', 'Proyek Pengembangan Web']
  },
  {
    id: 'minat',
    title: 'Minat',
    tone: 'bg-[var(--soft-orange)]',
    icon: '✦',
    content: ['Software Engineering', 'Web Development', 'UI/UX Design']
  }
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader subtitle="Saya adalah lulusan Teknik Informatika yang memiliki minat pada pengembangan web, produk digital, dan perancangan antarmuka yang berorientasi pada pengguna.">
        Tentang Saya
      </SectionHeader>

      <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Kolom Kiri: Paragraf Rata Kanan-Kiri */}
        <div className="lg:col-span-7 flex flex-col justify-center" data-reveal>
          <div className="card-surface h-full rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.07)] p-6 sm:p-8 lg:p-9 shadow-[var(--shadow-card)] flex flex-col justify-center">
            <div className="space-y-4 text-justify leading-relaxed sm:leading-8 text-[var(--navy-soft)] text-base sm:text-[1.05rem] [text-justify:inter-word]">
              <p>
                Saya memiliki pengalaman dalam mengembangkan aplikasi web, merancang UI/UX, dan mengelola basis data melalui proyek akademik, tugas akhir, serta pengalaman magang. Saya terbiasa menerjemahkan kebutuhan pengguna menjadi antarmuka yang fungsional, responsif, dan mudah digunakan.
              </p>
              <p>
                Dalam mengerjakan proyek, saya terbiasa bekerja secara kolaboratif, menganalisis kebutuhan, menyelesaikan masalah, serta mempelajari teknologi baru untuk menghasilkan solusi yang terstruktur dan sesuai dengan kebutuhan pengguna.
              </p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Info Cards Rapih & Mudah Dibaca */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-4.5">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className={`info-card ${card.tone} rounded-2xl border border-[rgba(17,26,57,0.06)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              data-reveal
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(17,26,57,0.08)] bg-white/80 text-xl shadow-xs">
                  {card.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--navy)] tracking-tight">
                    {card.title}
                  </h3>

                  {card.id === 'pendidikan' ? (
                    <div className="mt-2 space-y-1">
                      <p className="text-sm sm:text-[0.95rem] font-semibold text-[var(--navy)]">
                        {card.content[0]}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[var(--navy-soft)]">
                        <span>{card.content[1]}</span>
                        <span className="text-[rgba(17,26,57,0.25)]">•</span>
                        <span className="inline-flex items-center rounded-md bg-white/90 px-2 py-0.5 text-xs font-semibold text-[var(--navy)] border border-[rgba(17,26,57,0.08)]">
                          {card.content[2]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
                      {card.content.map((text) => (
                        <span
                          key={text}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-white/85 px-2.5 py-1 text-xs sm:text-[0.82rem] font-medium text-[var(--navy)] border border-[rgba(17,26,57,0.06)]"
                        >
                          {card.id === 'pengalaman' ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          ) : (
                            <span className="text-amber-500 text-[0.65rem] shrink-0">✦</span>
                          )}
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
