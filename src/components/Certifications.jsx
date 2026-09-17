import React from 'react'
import SectionHeader from './SectionHeader'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeader subtitle="Sertifikasi kompetensi dan pelatihan profesional yang telah saya selesaikan untuk memperdalam pemahaman teknis di bidang database, pemrograman web, dan jaringan.">
        Sertifikasi
      </SectionHeader>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            data-reveal
            className="card-surface group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.08)] bg-white/95 p-5 sm:p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative overflow-hidden"
          >
            {/* Left accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              {/* Top: Icon & Issuer Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100/90 text-xl border border-[rgba(17,26,57,0.06)] shadow-2xs">
                  {cert.icon}
                </div>
                <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold border ${cert.issuerTone}`}>
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <div className="mt-4">
                <h3 className="text-base sm:text-[1.05rem] font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>
            </div>

            {/* Bottom Info: Category & Verified Tag */}
            <div className="mt-5 flex items-center justify-between border-t border-[rgba(17,26,57,0.06)] pt-3.5 text-xs text-[var(--navy-soft)]">
              <span className="inline-flex items-center rounded-md bg-slate-100/80 px-2 py-0.5 font-medium text-[var(--navy)]">
                {cert.category}
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Terverifikasi</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
