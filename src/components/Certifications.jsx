import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import CertificateModal from './CertificateModal'
import { certifications } from '../data/certifications'

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <section id="certifications" className="section-shell">
      <SectionHeader
        subtitle="Sertifikasi kompetensi dan pelatihan profesional yang telah saya selesaikan untuk memperdalam pemahaman teknis di bidang database, pemrograman web, dan jaringan."
      >
        Sertifikasi
      </SectionHeader>

      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            data-reveal
            tabIndex={0}
            role="button"
            onClick={() => setSelectedCertificate(cert)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedCertificate(cert)
              }
            }}
            className="cert-card group flex flex-col justify-between rounded-[1.25rem] border border-[var(--border)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            <div>
              {/* Top: Icon & Issuer Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xl group-hover:scale-105 transition-transform">
                  {cert.icon}
                </div>
                <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold border border-[var(--border)] bg-[var(--accent-soft)] text-[var(--accent-dark)]">
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <div className="mt-4">
                <h3 className="text-base sm:text-[1.02rem] font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>
            </div>

            {/* Bottom Info: Category & Action */}
            <div className="mt-5 border-t border-[var(--border)] pt-3.5">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="inline-flex items-center rounded-full bg-[var(--bg)] px-2 py-0.5 font-medium text-[var(--text)]">
                  {cert.category}
                </span>
                
                {/* View Certificate Prompt */}
                <span className="inline-flex items-center gap-1 font-bold text-[var(--accent-dark)] group-hover:text-[var(--accent)]">
                  <span>Lihat PDF</span>
                  <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Certificate PDF Preview Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  )
}
