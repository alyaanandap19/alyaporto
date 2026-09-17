import React from 'react'
import SectionHeader from './SectionHeader'
import { experiences } from '../data/experiences'

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader subtitle="Pengalaman yang saya peroleh melalui program magang dan kegiatan profesional, dengan fokus pada pengembangan web, frontend, dan pengolahan data.">
        Pengalaman Kerja
      </SectionHeader>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            data-reveal
            className="card-surface group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.08)] bg-white/95 p-6 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Left accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Header: Company & Period */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5 sm:gap-4">
                {experience.logo ? (
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 border border-[rgba(17,26,57,0.08)] shadow-xs">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-lg sm:text-xl font-bold text-[var(--primary)] border border-[rgba(99,102,241,0.15)] shadow-xs">
                    {experience.company.charAt(0)}
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                      {experience.company}
                    </h3>
                    {experience.type && (
                      <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-[var(--navy-soft)] border border-[rgba(17,26,57,0.06)]">
                        {experience.type}
                      </span>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl font-extrabold text-[var(--primary)] mt-0.5">
                    {experience.role}
                  </p>
                </div>
              </div>

              {/* Period Badge */}
              <div className="inline-flex items-center gap-2 self-start rounded-xl border border-[rgba(17,26,57,0.06)] bg-slate-50/90 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[var(--navy-soft)] shadow-2xs sm:self-center shrink-0">
                <svg className="h-4 w-4 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{experience.period}</span>
              </div>
            </div>

            {/* Description / Responsibilities */}
            <div className="mt-5 border-t border-[rgba(17,26,57,0.06)] pt-4">
              <p className="text-justify text-sm sm:text-[0.96rem] leading-relaxed text-[var(--navy-soft)] [text-justify:inter-word]">
                {experience.details}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
