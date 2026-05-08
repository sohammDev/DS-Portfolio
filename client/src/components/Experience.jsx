import React from 'react';
import AnimatedSection from './AnimatedSection';

const Experience = ({ experience }) => {
  return (
    <AnimatedSection delay={0.2}>
      <section id="experience">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="timeline">
          {experience.map(exp => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-duration">{exp.duration}</span>
              </div>
              <div className="timeline-company">{exp.company}</div>
              <p>{exp.description}</p>
              <div className="timeline-tech">
                {exp.tech_used.split(',').map((tech, index) => (
                  <span key={index} className="tech-tag">{tech.trim()}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Experience;
