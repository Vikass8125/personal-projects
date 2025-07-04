import React from 'react'

const Stats = () => {
  const stats = [
    { number: "2+", label: "Years of Experience" },
    { number: "15+", label: "Completed Projects" },
    { number: "10+", label: "Happy Customers" },
    { number: "3", label: "Honors & Awards" }
  ]

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats 