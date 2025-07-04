import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        fill={i < rating ? "#FFD700" : "none"}
        color={i < rating ? "#FFD700" : "#ccc"}
      />
    ))
  }

  return (
    <section className="testimonials">
      <h2 className="section-title">Client Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar">
                <img 
                  src={testimonial.image_url || '/avatar-placeholder.jpg'} 
                  alt={testimonial.name} 
                />
              </div>
              <div className="testimonial-info">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-position">
                  {testimonial.position} {testimonial.company && `at ${testimonial.company}`}
                </p>
                {testimonial.rating && (
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="testimonial-content">
              <p>"{testimonial.content}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials 