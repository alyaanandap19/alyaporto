import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
      {/* Ambient background circles */}
      <div
        className="pointer-events-none absolute -left-20 top-6 h-72 w-72 rounded-full bg-[#ede8ff] opacity-70 blur-2xl md:h-96 md:w-96"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-6 left-[50%] h-24 w-24 rounded-full bg-[#e3ecff] opacity-80 blur-xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 right-[28%] h-8 w-8 rounded-full bg-[#e8e0ff] opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-[#f1ecff] opacity-70 blur-2xl md:h-[420px] md:w-[420px]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

          {/* Left Column: Hero Information */}
          <div className="max-w-[580px]">
            <p
              data-reveal
              className="reveal mb-3 text-[0.78rem] font-bold uppercase tracking-[0.24em] text-[#6366f1]"
            >
              HALO, SAYA
            </p>

            <h1
              data-reveal
              className="reveal text-[2.75rem] font-black leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-[3.5rem] lg:text-[4.25rem]"
            >
              Alya Ananda Putri
            </h1>

            <p
              data-reveal
              className="reveal mt-3.5 text-[1.2rem] font-bold sm:text-[1.45rem] text-[#111827]"
            >
              <span className="text-[#6366f1]">Software Engineer</span>
              <span className="mx-2.5 font-normal text-slate-300">|</span>
              <span className="text-[#111827]">Web Developer</span>
            </p>

            <p
              data-reveal
              className="reveal mt-5 max-w-[520px] text-justify [text-justify:inter-word] text-[0.98rem] leading-[1.8] text-[#475569] md:text-[1.05rem]"
            >
              Lulusan Teknik Informatika dengan konsentrasi Rekayasa Perangkat Lunak. Berpengalaman dalam pengembangan aplikasi web, UI/UX design, dan pengelolaan proyek perangkat lunak.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                data-reveal
                href="#projects"
                className="reveal group inline-flex h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#111827] px-6 text-[0.95rem] font-bold text-white shadow-[0_12px_24px_rgba(17,24,39,0.15)] transition-all duration-200 hover:bg-[#1f2937] hover:shadow-[0_16px_32px_rgba(17,24,39,0.22)] hover:-translate-y-0.5"
              >
                Lihat Proyek
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                data-reveal
                href="#contact"
                className="reveal inline-flex h-[48px] items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 text-[0.95rem] font-bold text-[#111827] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5"
              >
                Hubungi Saya
                <svg
                  className="h-4 w-4 text-[#475569]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>

            {/* Social Links with Authentic Icons */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                data-reveal
                href="https://www.linkedin.com/in/alyaanandaputri"
                target="_blank"
                rel="noreferrer"
                className="reveal group inline-flex items-center gap-2 text-sm font-semibold text-[#334155] transition-colors duration-200 hover:text-[#0a66c2]"
              >
                <span className="flex h-6 w-6 items-center justify-center">
                  <svg className="h-5 w-5 fill-[#0a66c2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
              </a>

              <a
                data-reveal
                href="https://github.com/alyaananda19"
                target="_blank"
                rel="noreferrer"
                className="reveal group inline-flex items-center gap-2 text-sm font-semibold text-[#334155] transition-colors duration-200 hover:text-[#111827]"
              >
                <span className="flex h-6 w-6 items-center justify-center">
                  <svg className="h-5 w-5 fill-[#181717] transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </span>
                <span>GitHub</span>
              </a>

              <a
                data-reveal
                href="mailto:alyaa.anandap19@gmail.com"
                className="reveal group inline-flex items-center gap-2 text-sm font-semibold text-[#334155] transition-colors duration-200 hover:text-[#6366f1]"
              >
                <span className="flex h-6 w-6 items-center justify-center">
                  <svg
                    className="h-5 w-5 text-[#334155] transition-colors duration-200 group-hover:text-[#6366f1]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Illustration & Visuals */}
          <div className="relative flex items-center justify-center py-6 lg:justify-end">
            <div data-reveal className="reveal relative flex items-center justify-center">

              {/* Elliptical Orbit Line */}
              <div
                className="pointer-events-none absolute h-[320px] w-[430px] -rotate-12 rounded-[50%] border-[1.5px] border-[#c4b5fd]/60 sm:h-[350px] sm:w-[470px]"
                aria-hidden="true"
              />

              {/* Purple Bead / Planet on Orbit */}
              <div
                className="pointer-events-none absolute -right-3 top-[52%] z-20 h-6 w-6 -translate-y-1/2 rounded-full bg-[#7c3aed] shadow-[0_4px_14px_rgba(124,58,237,0.45)] sm:-right-4 sm:h-7 sm:w-7"
                aria-hidden="true"
              />

              {/* Top-Right Dot Matrix */}
              <div
                className="pointer-events-none absolute -right-7 top-4 h-16 w-16 opacity-80"
                style={{
                  backgroundImage: 'radial-gradient(circle, #8b5cf6 2px, transparent 2px)',
                  backgroundSize: '14px 14px',
                }}
                aria-hidden="true"
              />

              {/* Top-Right Floating Golden Diamond */}
              <div
                className="pointer-events-none absolute -right-2 top-20 z-20 h-6 w-6 rotate-45 rounded-lg bg-[#fbbf24] shadow-[0_6px_14px_rgba(251,191,36,0.4)]"
                aria-hidden="true"
              />

              {/* Bottom-Left Floating Peach Squircle */}
              <div
                className="pointer-events-none absolute -left-5 bottom-8 z-20 h-14 w-14 -rotate-12 rounded-2xl bg-[#fca574] shadow-[0_10px_24px_rgba(252,165,116,0.4)] sm:-left-7 sm:h-16 sm:w-16"
                aria-hidden="true"
              />

              {/* Outer Decorative Violet Frame Outline */}
              <div
                className="pointer-events-none absolute -inset-3.5 rounded-[2.8rem] border-[1.5px] border-[#a78bfa]/50 sm:-inset-4 sm:rounded-[3rem]"
                aria-hidden="true"
              />

              {/* Main Profile Card */}
              <div className="relative z-10 flex h-[390px] w-[300px] items-end justify-center overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-[#ddd6fe] via-[#c4b5fd] to-[#b4a0f8] shadow-[0_20px_50px_-12px_rgba(99,102,241,0.3)] sm:h-[440px] sm:w-[340px] sm:rounded-[2.6rem]">
                <img
                  src="/profile.jpg"
                  alt="Alya Ananda Putri"
                  className="h-full w-full object-cover object-[center_12%] transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
