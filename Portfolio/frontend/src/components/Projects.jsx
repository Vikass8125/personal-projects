import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null

  return (
    <section className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img 
                src={project.image_url || '/project-placeholder.jpg'} 
                alt={project.name} 
              />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
              {project.technologies && (
                <div className="project-tech">
                  <strong>Technologies:</strong> {project.technologies}
                </div>
              )}
              
              <div className="project-links">
                {project.github_url && (
                  <a 
                    href={project.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.live_url && (
                  <a 
                    href={project.live_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 