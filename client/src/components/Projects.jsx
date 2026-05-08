import React from 'react';
import Tilt from 'react-parallax-tilt';
import AnimatedSection from './AnimatedSection';

const Projects = ({ projects }) => {
  return (
    <AnimatedSection delay={0.2}>
      <section id="projects">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <Tilt 
              key={project.id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1500}
              scale={1.02}
              transitionSpeed={2000}
              glareEnable={true}
              glareMaxOpacity={0.05}
              glareColor="#ffffff"
              glarePosition="all"
              className="project-tilt-wrapper"
            >
              <div className="project-card">
                <span className="project-type">{project.project_type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="timeline-tech" style={{marginBottom: '1rem'}}>
                  {project.tech_stack.split(',').map((tech, i) => (
                    <span key={i} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noreferrer" className="project-link">
                      VIEW GITHUB
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noreferrer" className="project-link">
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
