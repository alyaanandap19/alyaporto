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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-3 sm:p-5 md:p-8 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative my-auto flex max-h-[92vh] w-full max-w-5xl flex-col rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.08)] bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[rgba(17,26,57,0.08)] bg-white/95 px-5 py-4 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[rgba(17,26,57,0.08)] bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-[var(--navy)] transition-colors hover:bg-slate-100 hover:text-[var(--primary)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Kembali ke Proyek</span>
            </button>
            <span className="hidden sm:inline-block text-xs font-semibold text-[var(--navy-soft)]">
              Detail Proyek
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Detail Proyek"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(17,26,57,0.08)] bg-slate-50 text-[var(--navy-soft)] transition-colors hover:bg-slate-200 hover:text-[var(--navy)]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          {/* Project Title & Badge Row */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
              <span className="inline-flex items-center rounded-lg bg-[var(--primary-soft)] px-3 py-1 text-xs font-bold text-[var(--primary)]">
                {project.role}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--navy-soft)]">
                {project.subtitle}
              </span>
            </div>

            <h2 id="modal-project-title" className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[var(--navy)]">
              {project.title}
            </h2>

            <p className="mt-2.5 text-base sm:text-lg leading-relaxed text-[var(--navy-soft)]">
              {project.shortDesc}
            </p>
          </div>

          {/* Screenshot Showcase */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-[rgba(17,26,57,0.08)] bg-slate-950/5 shadow-inner">
            <div className="relative flex min-h-[280px] max-h-[560px] w-full items-center justify-center overflow-hidden bg-slate-100/80 p-2 sm:p-3">
              <img
                src={currentScreenshot.image}
                alt={currentScreenshot.title}
                className="max-h-[520px] w-full object-contain rounded-lg transition-all duration-300"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>

            <div className="border-t border-[rgba(17,26,57,0.08)] bg-white p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[var(--navy)]">
                    {currentScreenshot.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--navy-soft)] mt-0.5">
                    {currentScreenshot.description}
                  </p>
                </div>

                {project.screenshots?.length > 1 && (
                  <span className="text-xs font-semibold text-[var(--navy-soft)] shrink-0">
                    Halaman {activeImageIndex + 1} dari {project.screenshots.length}
                  </span>
                )}
              </div>

              {/* Multiple Screenshots Thumbnails Selector */}
              {project.screenshots?.length > 1 && (
                <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/9] w-24 sm:w-28 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[var(--primary)] shadow-md ring-2 ring-[var(--primary-soft)]'
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

          {/* Grid Information: Details & Specs */}
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Main Content Column (7 Cols on desktop) */}
            <div className="space-y-8 lg:col-span-7">
              {/* Gambaran Proyek */}
              <div>
                <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[var(--navy)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-sm">📌</span>
                  Gambaran Proyek
                </h3>
                <p className="mt-3 text-justify text-sm sm:text-[0.96rem] leading-relaxed text-[var(--navy-soft)] [text-justify:inter-word]">
                  {project.overview}
                </p>
              </div>

              {/* Problem / Background */}
              <div>
                <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[var(--navy)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-sm text-amber-700">💡</span>
                  Latar Belakang & Masalah
                </h3>
                <p className="mt-3 text-justify text-sm sm:text-[0.96rem] leading-relaxed text-[var(--navy-soft)] [text-justify:inter-word]">
                  {project.problemBackground}
                </p>
              </div>

              {/* Key Features (Points Only) */}
              <div>
                <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[var(--navy)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-sm text-emerald-700">✨</span>
                  Fitur Utama
                </h3>
                <ul className="mt-3.5 space-y-2.5">
                  {project.keyFeatures?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-[rgba(17,26,57,0.06)] bg-slate-50/80 p-3 text-sm font-medium text-[var(--navy)] transition-colors hover:bg-slate-50"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--primary)] shrink-0"></span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development Process */}
              {project.developmentProcess && (
                <div>
                  <h3 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-[var(--navy)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-sm text-indigo-700">⚙️</span>
                    Proses Pengembangan
                  </h3>
                  <ol className="mt-3 space-y-2.5">
                    {project.developmentProcess.map((step, idx) => (
                      <li key={step} className="flex items-start gap-3 text-sm text-[var(--navy-soft)]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-xs font-bold text-[var(--primary)]">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Sidebar Column (5 Cols on desktop) */}
            <div className="space-y-6 lg:col-span-5">
              {/* Role & Contribution Card */}
              <div className="rounded-2xl border border-[rgba(17,26,57,0.06)] bg-slate-50/90 p-5 sm:p-6 shadow-xs">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--navy)]">
                  <span>👤</span>
                  Peran & Kontribusi
                </h4>
                <ul className="mt-3.5 space-y-2.5 text-xs sm:text-[0.86rem] text-[var(--navy-soft)]">
                  {project.roleContribution?.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[var(--primary)] font-bold shrink-0">✓</span>
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Card */}
              <div className="rounded-2xl border border-[rgba(17,26,57,0.06)] bg-slate-50/90 p-5 sm:p-6 shadow-xs">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--navy)]">
                  <span>🛠️</span>
                  Teknologi yang Digunakan
                </h4>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-xl bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[var(--navy)] border border-[rgba(17,26,57,0.08)] shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-end border-t border-[rgba(17,26,57,0.08)] bg-slate-50 px-5 py-3.5 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="btn-primary rounded-xl px-6 py-2.5 text-sm font-bold"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
