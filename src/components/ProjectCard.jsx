import React from 'react'

export default function ProjectCard({ project, onViewDetail }) {
  return (
    <article className="project-card group flex h-full flex-col justify-between overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-white p-4 sm:p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div>
        {/* Project Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[#FDF3F4]">
          <img
            src={project.thumbnail}
            alt={project.title}
            className={`h-full w-full object-cover ${project.slug === 'u-market' ? '' : 'object-top transition-transform duration-500 group-hover:scale-105'}`}
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="lazy"
          />
          {/* Tag pill — top right */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold text-[var(--accent-dark)] shadow-sm backdrop-blur-sm border border-[var(--border)]">
              {project.role}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-dark)]">
            <span>{project.subtitle}</span>
            {project.institution && (
              <>
                <span className="text-[var(--border)]">•</span>
                <span className="text-[var(--text-muted)] normal-case font-medium">{project.institution}</span>
              </>
            )}
          </div>

          <h3 className="mt-1.5 text-lg sm:text-xl font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-left text-[0.85rem] sm:text-[0.9rem] leading-relaxed text-[var(--text-muted)] line-clamp-4">
            {project.cardDesc || project.shortDesc}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border)]">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-[0.72rem] font-medium text-[var(--text)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Detail — with circle arrow button */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className="inline-flex items-center gap-2 text-[0.82rem] font-bold text-[var(--accent-dark)] transition-colors hover:text-[var(--accent)]"
          >
            <span>Lihat Detail Proyek</span>
          </button>

          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-muted)] transition-all hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] hover:shadow-md"
            aria-label="Lihat detail proyek"
          >
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
