import React, { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import ProjectDetailModal from './ProjectDetailModal'

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="PROYEK"
        subtitle="Proyek aplikasi web yang saya kembangkan, berfokus pada frontend yang responsif, interaktif, dan berorientasi pada pengalaman pengguna."
      >
        Proyek Pilihan
      </SectionHeader>

      <div className="grid gap-7 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} data-reveal className="h-full">
            <ProjectCard project={project} onViewDetail={setSelectedProject} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
