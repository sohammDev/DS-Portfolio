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
    const fallbackData = {
      projects: [
        {
          id: 1,
          title: "Women's Security Application",
          description: "AI-powered women's safety app utilizing motion sensors and automated communication for real-time threat detection. Analyzes patterns and predicts risks to send instant alerts.",
          tech_stack: "Python, Java, Kotlin, React Native, Firebase",
          project_type: "Mobile / AI",
          github_url: "#",
          live_url: ""
        },
        {
          id: 2,
          title: "Educational Institution Organizer",
          description: "A robust backend system acting as a digital organizer for educational institutions. Features batch, faculty, and venue management with secure authentication and role-based authorization.",
          tech_stack: "JavaScript, Databases, Git",
          project_type: "Backend System",
          github_url: "#",
          live_url: ""
        }
      ],
      experience: [
        {
          id: 1,
          role: "Social Media & Content Creation Intern",
          company: "SocialDP",
          duration: "Dec 2024 - Present",
          description: "Executing client and brand-led communications, managing social media postings, and creating engaging creatives. Actively strategizing digital marketing efforts and planning content.",
          tech_used: "Digital Marketing, Content Creation, Brand Management"
        },
        {
          id: 2,
          role: "Software Developer Intern",
          company: "Static.Int Educare",
          duration: "2023 - 2024",
          description: "Developed applications utilizing Python, Flutter, and Blockchain technologies. Gained hands-on experience in Android app development and GitHub version control.",
          tech_used: "Python, Flutter, Blockchain, Android, GitHub"
        }
      ],
      skills: [
        { id: 1, name: "JavaScript", category: "Languages", proficiency: 90 },
        { id: 2, name: "C++", category: "Languages", proficiency: 85 },
        { id: 3, name: "Java", category: "Languages", proficiency: 80 },
        { id: 4, name: "React Js", category: "Frontend", proficiency: 85 },
        { id: 5, name: "HTML & CSS", category: "Frontend", proficiency: 90 },
        { id: 6, name: "MongoDB", category: "Databases", proficiency: 80 },
        { id: 7, name: "MySQL", category: "Databases", proficiency: 85 },
        { id: 8, name: "Git / GitHub", category: "Tools", proficiency: 90 },
        { id: 9, name: "Figma", category: "Tools", proficiency: 85 }
      ]
    };

    const fetchData = async () => {
      try {
        const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const [projectsRes, skillsRes, expRes] = await Promise.all([
          axios.get(`${API}/api/projects`),
          axios.get(`${API}/api/skills`),
          axios.get(`${API}/api/experience`)
        ]);
        
        setData({
          projects: projectsRes.data,
          skills: skillsRes.data,
          experience: expRes.data
        });
      } catch (error) {
        console.log("Database not connected yet, using resume data...");
        setData(fallbackData);
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
