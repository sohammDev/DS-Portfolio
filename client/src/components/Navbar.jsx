import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <div className="logo">SOHAM.</div>
      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="open-to-work">
        <div className="pulse-dot"></div>
        <span>AVAILABLE</span>
      </div>
    </nav>
  );
};

export default Navbar;
