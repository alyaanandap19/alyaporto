import React from 'react'

export default function SectionHeader({ children, subtitle }) {
  return (
    <div className="section-header">
      <div>
        <h2 data-reveal className="section-title reveal">{children}</h2>
        {subtitle && <p className="section-subtitle" data-reveal>{subtitle}</p>}
      </div>
    </div>
  )
}
