import React, { useEffect } from 'react'

export default function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    // Close modal on ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [certificate, onClose])

  if (!certificate) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-2 sm:p-4 md:p-6 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <div
        className="relative my-auto flex h-[90vh] max-h-[850px] w-full max-w-4xl flex-col rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.08)] bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(17,26,57,0.08)] bg-white/95 px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-md">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg border border-[rgba(17,26,57,0.06)]">
              {certificate.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold border ${certificate.issuerTone}`}>
                  {certificate.issuer}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Terverifikasi</span>
                </span>
              </div>
              <h3
                id="modal-cert-title"
                className="truncate text-sm sm:text-base font-bold text-[var(--navy)]"
                title={certificate.title}
              >
                {certificate.title}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Open in new tab */}
            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[rgba(17,26,57,0.08)] bg-slate-50 px-3 py-1.5 text-xs font-semibold text-[var(--navy)] transition-all hover:bg-slate-100 hover:text-[var(--primary)]"
              title="Buka di tab baru"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span className="hidden sm:inline">Buka di Tab Baru</span>
            </a>

            {/* Download Button */}
            <a
              href={certificate.fileUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--primary)] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-600 hover:shadow"
              title="Unduh file PDF"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="hidden sm:inline">Unduh PDF</span>
            </a>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900"
              aria-label="Tutup modal"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer Body */}
        <div className="relative flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden">
          <object
            data={certificate.fileUrl}
            type="application/pdf"
            className="h-full w-full rounded-xl border border-slate-200 bg-white shadow-inner"
          >
            {/* Fallback for browsers that don't support embedded PDF */}
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-[var(--primary)]">
                📄
              </div>
              <h4 className="text-base font-bold text-[var(--navy)]">
                Pratinjau PDF Tidak Dapat Dimuat Otomatis
              </h4>
              <p className="mt-1.5 max-w-md text-xs text-[var(--navy-soft)]">
                Perangkat atau peramban Anda mungkin tidak mendukung pratinjau PDF langsung. Anda dapat membuka atau mengunduh dokumen secara langsung:
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={certificate.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow hover:bg-indigo-600"
                >
                  Buka Sertifikat di Tab Baru
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Modal Footer Bar */}
        <div className="flex items-center justify-between border-t border-[rgba(17,26,57,0.06)] bg-white px-4 py-2.5 sm:px-6 text-xs text-[var(--navy-soft)]">
          <span className="font-medium">Kategori: <strong className="text-[var(--navy)] font-semibold">{certificate.category}</strong></span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Tekan Esc atau klik di luar untuk menutup</span>
        </div>
      </div>
    </div>
  )
}
