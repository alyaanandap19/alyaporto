import { useEffect, useState } from 'react'

export default function useScrollSpy(ids, options = {root: null, threshold: 0.3}){
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(()=>{
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting) setActiveId(entry.target.id)
      })
    }, options)

    elements.forEach(el=> observer.observe(el))
    return ()=> observer.disconnect()
  }, [ids.join(',')])

  return activeId
}
