import React from 'react'

export default function ProfileCard({
  icon,
  period,
  label,
  title,
  points = [],
  alignedSections = false,
  compact = false
}) {
  return (
    <article
      data-reveal
      className={`group flex h-full min-w-0 flex-col rounded-[1.25rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg relative overflow-hidden ${compact ? 'justify-start' : 'justify-between'}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-soft)] text-lg">
            {icon}
          </div>
          {period ? (
            <span className="inline-flex items-center rounded-full bg-[var(--bg)] px-2.5 py-1 text-xs font-semibold text-[var(--text-muted)] border border-[var(--border)]">
              {period}
            </span>
          ) : <span aria-hidden="true" />}
        </div>

        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent-dark)]">
            {label}
          </p>
          <h3 className={`mt-1 text-lg sm:text-[1.15rem] font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug ${alignedSections ? 'min-h-[2.75rem]' : ''}`}>
            {title}
          </h3>
        </div>
      </div>

      <div className={`mt-5 border-t border-[var(--border)] pt-4 ${compact ? 'flex-1' : ''}`}>
        <ul className="space-y-2 text-xs sm:text-[0.86rem] text-[var(--text-muted)]">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
              {typeof point === 'string' ? (
                <span className="leading-relaxed">{point}</span>
              ) : (
                <span className="flex min-w-0 leading-relaxed">
                  <strong className="w-12 shrink-0 font-bold text-[var(--accent)]">{point.year}</strong>
                  <span className="min-w-0 break-words">{point.text}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}