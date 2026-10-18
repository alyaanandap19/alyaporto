import React from 'react'

const techStrip = ['React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'SQL', 'PHP', 'Laravel', 'C++', 'Python']

export default function Hero() {
  return (
    <>
      <section id="home" className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24">
        {/* Coral blur blob — top right */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-50 md:h-[650px] md:w-[650px]"
          style={{
            background: 'radial-gradient(circle, rgba(238,106,76,0.22) 0%, rgba(253,227,214,0.15) 50%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          aria-hidden="true"
        />

        {/* Subtle peach blob — bottom left */}
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(253,211,196,0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />

        <div className="container relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

            {/* Left Column */}
            <div className="max-w-[560px]">
              <p
                data-reveal
                className="reveal mb-1 text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-[3rem] lg:text-[3.5rem]"
              >
                HALO, SAYA
              </p>

              <h1
                data-reveal
                className="reveal text-[2.75rem] font-medium leading-[1.05] tracking-[-0.02em] text-[var(--accent)] sm:text-[3.25rem] lg:text-[4rem]"
              >
                Alya Ananda Putri<span className="text-[var(--accent)]">.</span>
              </h1>

              <p
                data-reveal
                className="reveal mt-4 text-[1.1rem] font-semibold sm:text-[1.25rem] text-[var(--text)]"
              >
                <span className="text-[var(--text)]">Frontend Developer</span>
                <span className="mx-2.5 font-normal text-[var(--border)]">|</span>
                <span className="text-[var(--text)]">Web Developer</span>
              </p>

              <p
                data-reveal
                className="reveal mt-4 max-w-[520px] text-left text-[1rem] leading-[1.7] text-[var(--text-muted)] md:text-[1.05rem]"
              >
                Saya mengembangkan aplikasi web dan membangun antarmuka yang responsif dan nyaman dipakai, dari desain Figma sampai terhubung dengan backend dan teruji di setiap fitur.
              </p>

              {/* Tech Chips */}
              <div data-reveal className="reveal mt-5 flex flex-wrap gap-2">
                {['React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Figma', 'SQL'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-[0.78rem] font-semibold text-[var(--text)] transition-colors hover:bg-[#f8c4b0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  data-reveal
                  href="/CV_Alya_Ananda_Putri.pdf"
                  download="CV_Alya_Ananda_Putri.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Unduh CV Alya Ananda Putri dalam format PDF"
                  className="reveal btn-primary"
                >
                  <span>Unduh CV</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                  </svg>
                </a>

                <a
                  data-reveal
                  href="#projects"
                  aria-label="Lihat bagian proyek unggulan"
                  className="reveal btn-secondary"
                >
                  <span>Lihat Proyek</span>
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Circular Photo + Glass Card */}
            <div className="relative flex items-center justify-center py-6 lg:justify-end">
              <div data-reveal className="reveal relative">
                {/* Coral blur behind photo */}
                <div
                  className="pointer-events-none absolute -inset-8 rounded-full opacity-50"
                  style={{
                    background: 'radial-gradient(circle, rgba(238,106,76,0.25) 0%, rgba(253,211,196,0.15) 50%, transparent 70%)',
                    filter: 'blur(30px)',
                  }}
                  aria-hidden="true"
                />

                {/* Circular Profile Photo */}
                <div className="profile-frame">
                  <div className="profile-photo">
                    <img
                      src="/profile.JPG"
                      alt="Alya Ananda Putri"
                    />
                  </div>
                </div>

                {/* Glassmorphism Card — bottom right of photo */}
                <div className="glass-card absolute -bottom-6 -right-4 z-20 w-[260px] p-4 sm:-bottom-4 sm:-right-8 sm:w-[280px] sm:p-5">
                  <p className="text-[0.78rem] font-semibold leading-relaxed text-[var(--text-muted)]">
                    Lulusan Teknik Informatika Universitas Lampung · IPK 3,91 · Pujian
                  </p>

                  <div className="my-3 h-px bg-[var(--border)]" />

                  {/* Social Icons */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/alyaanandaputri"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
                      </svg>
                    </a>

                    <a
                      href="https://github.com/alyaananda19"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>

                    <a
                      href="mailto:alyaa.anandap19@gmail.com"
                      aria-label="Email"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-sm"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Strip */}
      <div className="tech-strip relative border-t border-b border-[var(--border)] bg-[rgba(255,246,241,0.6)] py-3">
        <div className="tech-strip-inner container mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <span className="tech-strip-label text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--accent-dark)]">
              Teknologi
          </span>
          <div className="tech-marquee" tabIndex={0} aria-label="Daftar teknologi">
            <div className="tech-marquee-track">
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? 'duplicate' : 'original'}
                  className="tech-marquee-group"
                  aria-hidden={isDuplicate ? 'true' : undefined}
                >
                  {techStrip.map((tech) => (
                    <span key={tech} className="tech-marquee-item">
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
