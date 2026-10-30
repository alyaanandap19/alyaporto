import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import CertificateModal from './CertificateModal'
import { certifications } from '../data/certifications'

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <section id="certifications" className="section-shell">
      <SectionHeader
        subtitle="Sertifikasi kompetensi dan pelatihan profesional yang telah saya selesaikan untuk memperdalam pemahaman teknis di bidang database, pemrograman web, dan jaringan."
      >
        Sertifikasi
      </SectionHeader>

      <div
        id="hidden-certificates-grid"
        className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {certifications.map((cert) => {
          const isVisible = !cert.hidden || isExpanded

          return (
            <article
              key={cert.id}
              data-reveal
              aria-hidden={!isVisible}
              tabIndex={isVisible ? 0 : -1}
              role="button"
              onClick={() => setSelectedCertificate(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedCertificate(cert)
                }
              }}
              className={`cert-card group relative flex flex-col justify-between overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
                cert.hidden
                  ? isExpanded
                    ? 'min-h-[220px] max-h-[360px] p-5 opacity-100 sm:p-6'
                    : 'pointer-events-none max-h-0 border-0 p-0 opacity-0'
                  : 'min-h-[220px] p-5 sm:p-6'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xl transition-transform group-hover:scale-105">
                    {cert.icon}
                  </div>
                  <span className="inline-flex max-w-[55%] shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-2.5 py-1 text-center text-[10px] font-bold leading-tight text-[var(--accent-dark)] sm:text-[11px]">
                    {cert.issuer}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-base font-bold leading-snug text-[var(--text)] transition-colors group-hover:text-[var(--accent)] sm:text-[1.02rem]">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="mt-5 border-t border-[var(--border)] pt-3.5">
                <div className="flex items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                  <span className="inline-flex max-w-[45%] items-center rounded-full bg-[var(--bg)] px-2 py-0.5 font-medium text-[var(--text)]">
                    {cert.category}
                  </span>

                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    tabIndex={isVisible ? 0 : -1}
                    className="inline-flex shrink-0 items-center gap-1 font-bold text-[var(--accent-dark)] group-hover:text-[var(--accent)]"
                    aria-label={`Lihat PDF: ${cert.title}`}
                  >
                    <span>Lihat PDF</span>
                    <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={toggleExpanded}
          aria-expanded={isExpanded}
          aria-controls="hidden-certificates-grid"
          className="btn-primary inline-flex items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(238,106,76,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e05a3c]"
        >
          {isExpanded ? 'Perkecil daftar' : 'Lihat sertifikat lainnya'}
        </button>
      </div>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  )
}
