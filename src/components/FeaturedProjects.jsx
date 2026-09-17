import React, { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'
import ProjectDetailModal from './ProjectDetailModal'

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-shell">
      <SectionHeader subtitle="Beberapa proyek yang saya kerjakan selama perkuliahan dan pengembangan tugas akhir, dengan fokus pada pengembangan aplikasi web, frontend, UI/UX, serta pengelolaan data.">
        Proyek
      </SectionHeader>

      <div className="grid gap-6 sm:gap-7 md:grid-cols-2">
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
