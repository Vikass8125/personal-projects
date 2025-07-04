import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import AIAssistant from './components/AIAssistant'
import './App.css'

function App() {
  const [profile, setProfile] = useState(null)
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])
  const [projects, setProjects] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const baseURL = 'http://localhost:8000/api'
      
      const [profileRes, skillsRes, experiencesRes, projectsRes, testimonialsRes] = await Promise.all([
        fetch(`${baseURL}/profile`),
        fetch(`${baseURL}/skills`),
        fetch(`${baseURL}/experiences`),
        fetch(`${baseURL}/projects`),
        fetch(`${baseURL}/testimonials`)
      ])

      if (profileRes.ok) setProfile(await profileRes.json())
      if (skillsRes.ok) setSkills(await skillsRes.json())
      if (experiencesRes.ok) setExperiences(await experiencesRes.json())
      if (projectsRes.ok) setProjects(await projectsRes.json())
      if (testimonialsRes.ok) setTestimonials(await testimonialsRes.json())
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    )
  }

  return (
    <Router>
      <div className="app">
        <Sidebar profile={profile} skills={skills} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero profile={profile} />
                <Stats />
                <Services />
                <Experience experiences={experiences} />
                <Projects projects={projects} />
                <Testimonials testimonials={testimonials} />
              </>
            } />
          </Routes>
        </main>
        <AIAssistant />
      </div>
    </Router>
  )
}

export default App
