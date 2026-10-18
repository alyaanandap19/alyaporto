import React from 'react'
import SectionHeader from './SectionHeader'
import ProfileCard from './ProfileCard'

const infoCards = [
  {
    id: 'pendidikan',
    title: 'Pendidikan',
    icon: '🎓',
    period: '2022 – 2026',
    label: 'Universitas Lampung',
    heading: 'S1 Teknik Informatika',
    points: [
      'IPK 3,91/4,00 dengan predikat Pujian',
      'Lulus dalam 3,72 tahun'
    ]
  },
  {
    id: 'pengalaman',
    title: 'Pengalaman',
    icon: '💼',
    period: '2024 – 2026',
    label: 'Pengalaman',
    heading: 'Magang dan Proyek',
    points: [
      { year: '2024', text: 'MSIB Data Engineer, Metrodata Academy' },
      { year: '2025', text: 'Frontend Developer Intern, BPS Kota Bandar Lampung' },
      { year: '2026', text: 'Proyek E-Commerce U-Market (skripsi)' }
    ]
  },
  {
    id: 'minat',
    title: 'Minat',
    icon: '✦',
    label: 'Minat',
    heading: 'Fokus Pengembangan',
    points: ['Frontend Development', 'Web Development', 'UI/UX Design']
  }
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        subtitle="Membangun tampilan web yang rapi, responsif, dan nyaman dipakai."
      >
        Tentang Saya
      </SectionHeader>

      <p className="about-copy" data-reveal>
        Saya lulusan Teknik Informatika yang bersemangat dalam bidang pengembangan web dan antarmuka pengguna. Dengan pengalaman magang sebagai Data Engineer dan Frontend Developer, saya memiliki kemampuan untuk merancang, membangun, dan mengoptimalkan aplikasi yang efisien dan user-friendly. Fokus utama saya adalah menciptakan pengalaman digital yang inovatif dan berkesan bagi pengguna.
      </p>

      <div className="about-info-grid mt-8 sm:mt-9">
        {infoCards.map((card) => (
          <ProfileCard
            key={card.title}
            icon={card.icon}
            period={card.period}
            label={card.label}
            title={card.heading}
            points={card.points}
            alignedSections
            compact
          />
        ))}
      </div>
    </section>
  )
}
