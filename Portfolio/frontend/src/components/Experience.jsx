import React from 'react'
import { Calendar, MapPin } from 'lucide-react'

const Experience = ({ experiences }) => {
  if (!experiences || experiences.length === 0) return null

  return (
    <section className="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-title">{exp.position}</h3>
              <div className="experience-company">{exp.company}</div>
            </div>
            
            <div className="experience-details">
              <div className="experience-date">
                <Calendar size={16} />
                <span>{exp.start_date} - {exp.end_date || 'Present'}</span>
              </div>
              <div className="experience-location">
                <MapPin size={16} />
                <span>Remote/Hybrid</span>
              </div>
            </div>
            
            <p className="experience-description">{exp.description}</p>
            
            {exp.technologies && (
              <div className="experience-tech">
                <strong>Technologies:</strong> {exp.technologies}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience 