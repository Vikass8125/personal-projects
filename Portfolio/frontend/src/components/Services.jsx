import React from 'react'
import { Code, Palette, Music } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Creating modern, responsive web applications using React, FastAPI, and other cutting-edge technologies.",
      color: "#FF6B6B"
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces with focus on user experience and accessibility.",
      color: "#4ECDC4"
    },
    {
      icon: <Music size={40} />,
      title: "AI Solutions",
      description: "Building intelligent applications with AI/ML integration, chatbots, and automation solutions.",
      color: "#45B7D1"
    }
  ]

  return (
    <section className="services">
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services 