import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [data, setData] = useState({
    projects: [],
    skills: [],
    experience: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, skillsRes, expRes] = await Promise.all([
          axios.get('http://localhost:5000/api/projects'),
          axios.get('http://localhost:5000/api/skills'),
          axios.get('http://localhost:5000/api/experience')
        ]);
        
        setData({
          projects: projectsRes.data,
          skills: skillsRes.data,
          experience: expRes.data
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact />
      </main>
      <footer>
        <p className="mono">{'// built with react, node, & caffeine'}</p>
      </footer>
    </div>
  );
}

export default App;
