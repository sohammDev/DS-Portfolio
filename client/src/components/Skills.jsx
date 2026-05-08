import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <AnimatedSection className="skills-section" delay={0.2}>
      <section id="skills">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-grid">
          {Object.keys(groupedSkills).map((category, i) => (
            <motion.div 
              key={category} 
              className="skill-category"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{category}</h3>
              {groupedSkills[category].map((skill, j) => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (j * 0.1), ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;
