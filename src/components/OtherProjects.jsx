import React from 'react'
import { otherProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function OtherProjects(){
  return (
    <section id="other-projects" className="py-16">
      <h2 className="text-2xl font-semibold">Project Lainnya</h2>
      <p className="text-gray-600 mt-2">Project tambahan dan desain akan dimasukkan kemudian.</p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map(p=> (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
