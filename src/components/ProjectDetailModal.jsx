import React, { useEffect, useState } from 'react'

export default function ProjectDetailModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    // Reset active image when project changes
    setActiveImageIndex(0)

    // Handle ESC key to close modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const currentScreenshot = project.screenshots?.[activeImageIndex] || {
    image: project.thumbnail,
    title: project.title,
    description: project.shortDesc
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/50 p-3 sm:p-4 md:p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative my-auto flex max-h-[88vh] w-full max-w-3xl flex-col rounded-3xl border border-[var(--border)] bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-white/95 px-4 py-3 sm:px-6 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-bold text-[var(--text)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent-dark)]"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Kembali</span>
            </button>
            <span className="text-xs font-semibold text-[var(--text-muted)]">
              Detail Proyek
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Detail Proyek"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent-dark)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 space-y-5">
          {/* Project Title & Badge */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-bold text-[var(--accent-dark)]">
                {project.role}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-dark)]">
                {project.subtitle}
              </span>
              {project.institution && (
                <span className="inline-flex items-center rounded-full bg-[var(--bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--text-muted)] border border-[var(--border)]">
                  🏛️ {project.institution}
                </span>
              )}
              {project.period && (
                <span className="inline-flex items-center rounded-full bg-[var(--bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--text-muted)] border border-[var(--border)]">
                  📅 {project.period}
                </span>
              )}
            </div>

            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)]">
              {project.title}
            </h2>

            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
              {project.shortDesc}
            </p>
          </div>

          {/* Screenshot */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-inner">
            <div className="relative flex min-h-[200px] max-h-[380px] w-full items-center justify-center overflow-hidden bg-[#FAEEE8] p-2">
              <img
                src={currentScreenshot.image}
                alt={currentScreenshot.title}
                className="max-h-[360px] w-full object-contain rounded-xl transition-all duration-300"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>

            <div className="border-t border-[var(--border)] bg-white p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[var(--text)]">
                    {currentScreenshot.title}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {currentScreenshot.description}
                  </p>
                </div>
                {project.screenshots?.length > 1 && (
                  <span className="text-[11px] font-semibold text-[var(--text-muted)] shrink-0">
                    {activeImageIndex + 1} / {project.screenshots.length}
                  </span>
                )}
              </div>

              {project.screenshots?.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/9] w-16 sm:w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[var(--accent)] shadow-sm ring-1 ring-[var(--accent-soft)]'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={s.image} alt={s.title} className="h-full w-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Grid: Details & Sidebar */}
          <div className="grid gap-5 md:grid-cols-12">
            <div className="space-y-5 md:col-span-7">
              {/* Overview */}
              <div>
                <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-[var(--text)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs">📌</span>
                  Gambaran Proyek
                </h3>
                <p className="mt-2 text-left text-xs sm:text-[0.85rem] leading-relaxed text-[var(--text-muted)]">
                  {project.overview}
                </p>
              </div>

              {/* Problem Background */}
              <div>
                <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-[var(--text)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE8D0] text-xs">💡</span>
                  Latar Belakang & Masalah
                </h3>
                <p className="mt-2 text-left text-xs sm:text-[0.85rem] leading-relaxed text-[var(--text-muted)]">
                  {project.problemBackground}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-[var(--text)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs">✨</span>
                  Fitur Utama
                </h3>
                <ul className="mt-2.5 space-y-2">
                  {project.keyFeatures?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-2.5 text-xs font-medium text-[var(--text)] transition-colors hover:bg-[var(--accent-soft)]"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development Process */}
              {project.developmentProcess && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-[var(--text)]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs">⚙️</span>
                    Proses Pengembangan
                  </h3>
                  <ol className="mt-2 space-y-2">
                    {project.developmentProcess.map((step, idx) => (
                      <li key={step} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[10px] font-bold text-[var(--accent-dark)]">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4 md:col-span-5">
              {/* Role & Contribution */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 shadow-xs">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                  <span>👤</span>
                  Peran & Kontribusi
                </h4>
                <ul className="mt-2.5 space-y-2 text-xs text-[var(--text-muted)]">
                  {project.roleContribution?.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 shadow-xs">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--text)]">
                  <span>🛠️</span>
                  Teknologi
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--text)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end border-t border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="btn-primary rounded-full px-5 py-1.5 text-xs font-bold"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
