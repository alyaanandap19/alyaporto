import React from 'react'
import Navbar from './components/Navbar'
import useReveal from './hooks/useReveal'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import Experience from './components/Experience'
import Organization from './components/Organization'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <div className="app-shell">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="container relative">
          <div className="page-decor-left" aria-hidden="true"></div>
          <div className="page-decor-right" aria-hidden="true"></div>
          <About />
          <Skills />
          <FeaturedProjects />
          <Experience />
          <Organization />
          <Certifications />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
