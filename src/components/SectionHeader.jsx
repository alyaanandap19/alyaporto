import React from 'react'

export default function SectionHeader({ children, subtitle, eyebrow }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <span data-reveal className="section-eyebrow reveal">{eyebrow}</span>}
        <h2 data-reveal className="section-title reveal">{children}</h2>
        {subtitle && <p className="section-subtitle" data-reveal>{subtitle}</p>}
      </div>
    </div>
  )
}
