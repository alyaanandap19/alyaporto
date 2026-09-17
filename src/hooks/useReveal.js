import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const nodes = Array.from(document.querySelectorAll('[data-reveal], .reveal'))
    if (!nodes.length) return

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          entry.target.querySelectorAll('.reveal').forEach(child => child.classList.add('visible'))
          obs.unobserve(entry.target)
        }
      })
    }, { root: null, threshold: 0.05 })

    nodes.forEach(n => obs.observe(n))
    return () => obs.disconnect()
  }, [])
}
