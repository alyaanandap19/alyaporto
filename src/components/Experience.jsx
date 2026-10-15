import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import CertificateModal from './CertificateModal'
import { experiences } from '../data/experiences'

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="PENGALAMAN"
        subtitle="Pengalaman yang saya peroleh melalui program magang dan kegiatan profesional, dengan fokus pada pengembangan web, frontend, dan pengolahan data."
      >
        Pengalaman Profesional
      </SectionHeader>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            data-reveal
            className="group relative overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-white p-6 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Left accent bar — coral */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5 sm:gap-4">
                {experience.logo ? (
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 border border-[var(--border)] shadow-xs">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-lg sm:text-xl font-bold text-[var(--accent-dark)] border border-[var(--border)] shadow-xs">
                    {experience.company.charAt(0)}
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text)]">
                      {experience.company}
                    </h3>
                    {experience.type && (
                      <span className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-semibold text-[var(--accent-dark)] border border-[var(--border)]">
                        {experience.type}
                      </span>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-[var(--accent)] mt-0.5">
                    {experience.role}
                  </p>
                </div>
              </div>

              {/* Period */}
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--border)] bg-[var(--bg)] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[var(--text-muted)] shadow-2xs sm:self-center shrink-0">
                <svg className="h-4 w-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{experience.period}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <p className="text-left text-sm sm:text-[0.96rem] leading-relaxed text-[var(--text-muted)]">
                {experience.details}
              </p>

              {/* View Certificate Button */}
              {experience.certificateUrl && (
                <div className="mt-4 pt-3 flex items-center justify-end border-t border-[rgba(246,218,205,0.5)]">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCertificate({
                        title: experience.certificateTitle || `Sertifikat ${experience.company}`,
                        issuer: experience.company,
                        category: experience.type || 'Sertifikat',
                        icon: '📜',
                        issuerTone: 'bg-[var(--accent-soft)] text-[var(--accent-dark)] border-[var(--border)]',
                        fileUrl: experience.certificateUrl
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[var(--accent-dark)] shadow-2xs transition-all duration-200 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-xs hover:-translate-y-0.5 cursor-pointer"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    <span>Lihat Sertifikat</span>
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  )
}
