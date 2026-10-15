import React from 'react'
import SectionHeader from './SectionHeader'
import ProfileCard from './ProfileCard'
import { organizations } from '../data/organizations'

export default function Organization() {
  return (
    <section id="organizations" className="section-shell">
      <SectionHeader
        subtitle="Pengalaman organisasi dan kepanitiaan yang mengasah kemampuan komunikasi, koordinasi, dan kerja sama tim."
      >
        Pengalaman Organisasi
      </SectionHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => (
          <ProfileCard
            key={org.id}
            icon={org.icon}
            period={org.period}
            label={org.name}
            title={org.role}
            points={org.points}
          />
        ))}
      </div>
    </section>
  )
}
