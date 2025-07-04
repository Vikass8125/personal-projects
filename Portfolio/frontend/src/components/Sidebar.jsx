import React from 'react'
import { Download, Github, Linkedin, Mail, MapPin, User } from 'lucide-react'

const Sidebar = ({ profile, skills }) => {
  if (!profile) return null

  const programmingSkills = skills.filter(skill => skill.category === 'Programming')
  const frameworkSkills = skills.filter(skill => skill.category === 'Framework')
  const databaseSkills = skills.filter(skill => skill.category === 'Database')

  return (
    <div className="sidebar">
      <div className="profile-card">
        <div className="profile-image">
          <img src="/profile-placeholder.jpg" alt={profile.name} />
        </div>
        
        <div className="profile-info">
          <h2>{profile.name}</h2>
          <p className="title">{profile.title}</p>
          
          <div className="profile-details">
            <div className="detail-item">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
            <div className="detail-item">
              <User size={16} />
              <span>{profile.age} years old</span>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={20} />
          </a>
        </div>

        <button className="download-cv">
          <Download size={16} />
          Download CV
        </button>
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        
        {programmingSkills.length > 0 && (
          <div className="skill-category">
            <h4>Programming Languages</h4>
            {programmingSkills.map(skill => (
              <div key={skill.id} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.proficiency}%</span>
              </div>
            ))}
          </div>
        )}

        {frameworkSkills.length > 0 && (
          <div className="skill-category">
            <h4>Frameworks & Tools</h4>
            {frameworkSkills.map(skill => (
              <div key={skill.id} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.proficiency}%</span>
              </div>
            ))}
          </div>
        )}

        {databaseSkills.length > 0 && (
          <div className="skill-category">
            <h4>Databases</h4>
            {databaseSkills.map(skill => (
              <div key={skill.id} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.proficiency}%</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar 