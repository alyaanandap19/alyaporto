import React from 'react'

export default function ProjectCard({ project, onViewDetail }) {
  return (
    <article className="project-card group flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-[rgba(17,26,57,0.07)] bg-white p-5 sm:p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div>
        {/* Project Thumbnail with Hover Zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[rgba(17,26,57,0.06)] bg-slate-100">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-[var(--primary)] shadow-sm backdrop-blur-xs border border-[rgba(17,26,57,0.06)]">
              {project.role}
            </span>
          </div>
        </div>

        {/* Project Info Header */}
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--navy-soft)]">
            {project.subtitle}
          </p>

          <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-[var(--navy)] group-hover:text-[var(--primary)] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-justify text-sm sm:text-[0.93rem] leading-relaxed text-[var(--navy-soft)] [text-justify:inter-word]">
            {project.shortDesc}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-2">
        {/* Technologies List */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-lg bg-slate-100/80 px-2.5 py-1 text-xs font-medium text-[var(--navy)] border border-[rgba(17,26,57,0.04)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <button
          type="button"
          onClick={() => onViewDetail(project)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--navy)] py-3 px-5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[var(--primary)] hover:shadow-md"
        >
          <span>Lihat Detail Proyek</span>
          <span className="text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </article>
  )
}
