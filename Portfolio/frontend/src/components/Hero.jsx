import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = ({ profile }) => {
  if (!profile) return null

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Discover my Amazing <span className="highlight">Art Space!</span>
          </h1>
          <p className="hero-subtitle">
            <code className="code-highlight">Hello, I'm {profile.name}</code>
          </p>
          <p className="hero-description">
            {profile.about || `I'm a passionate ${profile.title} with expertise in modern web technologies and AI solutions. I love creating innovative applications that solve real-world problems.`}
          </p>
          <button className="explore-btn">
            Explore Now
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="hero-image">
          <img src="/hero-image.jpg" alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero 