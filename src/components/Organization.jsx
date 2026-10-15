import React from 'react'
import SectionHeader from './SectionHeader'
import { organizations } from '../data/organizations'

export default function Organization() {
  return (
    <section id="organizations" className="section-shell">
      <SectionHeader
        eyebrow="ORGANISASI"
        subtitle="Pengalaman organisasi dan kepanitiaan yang mengasah kemampuan komunikasi, koordinasi, dan kerja sama tim."
      >
        Pengalaman Organisasi
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => (
          <article
            key={org.id}
            data-reveal
            className="group flex flex-col justify-between rounded-[1.25rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative overflow-hidden"
          >
            <div>
              {/* Card Top: Icon & Period */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-lg">
                  {org.icon}
                </div>
                <span className="inline-flex items-center rounded-full bg-[var(--bg)] px-2.5 py-1 text-xs font-semibold text-[var(--text-muted)] border border-[var(--border)]">
                  {org.period}
                </span>
              </div>

              {/* Organization & Role */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-dark)]">
                    {org.name}
                  </p>
                </div>
                <h3 className="mt-1 text-lg sm:text-[1.15rem] font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {org.role}
                </h3>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <ul className="space-y-2 text-xs sm:text-[0.86rem] text-[var(--text-muted)]">
                {org.points?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
