import React from 'react'
import SectionHeader from './SectionHeader'
import { organizations } from '../data/organizations'

export default function Organization() {
  return (
    <section id="organizations" className="section-shell">
      <SectionHeader subtitle="Pengalaman organisasi dan kepanitiaan yang mengasah kemampuan kepemimpinan, komunikasi, manajemen waktu, dan kerja sama tim.">
        Pengalaman Organisasi
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => (
          <article
            key={org.id}
            data-reveal
            className="card-surface group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.08)] bg-white/95 p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative overflow-hidden"
          >
            <div>
              {/* Card Top: Icon & Period */}
              <div className="flex items-center justify-between gap-2">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${org.tone.split(' ')[0]} text-lg border border-[rgba(17,26,57,0.06)] shadow-xs`}>
                  {org.icon}
                </div>
                <span className="inline-flex items-center rounded-lg bg-slate-100/90 px-2.5 py-1 text-xs font-semibold text-[var(--navy-soft)] border border-[rgba(17,26,57,0.05)]">
                  {org.period}
                </span>
              </div>

              {/* Organization & Role */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--navy-soft)]">
                    {org.name}
                  </p>
                </div>
                <h3 className="mt-1 text-lg sm:text-[1.15rem] font-bold text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors leading-snug">
                  {org.role}
                </h3>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="mt-5 border-t border-[rgba(17,26,57,0.06)] pt-4">
              <ul className="space-y-2 text-xs sm:text-[0.86rem] text-[var(--navy-soft)]">
                {org.points?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--primary)] shrink-0"></span>
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
