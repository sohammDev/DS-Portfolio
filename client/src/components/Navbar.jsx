import React from 'react';

const Navbar = () => {
  return (
    <nav>
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
