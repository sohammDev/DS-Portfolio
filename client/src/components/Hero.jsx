import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const subtitle = "Full Stack & Data Science";
  
  return (
    <section className="hero" id="about">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="glitch-title"
          data-text="MAKING DATA HIT DIFFERENT."
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          MAKING DATA<br/>HIT DIFFERENT.
        </motion.h1>
        
        <p className="hero-subtitle">
          {subtitle.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.1 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="cursor-blink"
            style={{ display: "inline-block", width: "12px", background: "var(--accent-primary)", marginLeft: "8px" }}
          >
            &nbsp;
          </motion.span>
        </p>
        
        <motion.a 
          href="#projects" 
          className="hero-cta"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 92, 57, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Work
        </motion.a>
        
        <div className="stat-cards">
          {[
            { val: "92%", label: "Accuracy" },
            { val: "15+", label: "Shipped" },
            { val: "2M+", label: "Analyzed" }
          ].map((stat, i) => (
            <motion.div 
              className="stat-card" 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.2) }}
            >
              <div className="stat-value">{stat.val}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="tooltip t1">// SYSTEM_READY</div>
        <div className="tooltip t2">UPTIME: 99.9%</div>
        
        <div className="avatar-composition">
          <svg className="hero-avatar" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))' }}>
            <defs>
              <linearGradient id="skin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#D9E6D9" />
              </linearGradient>
              <linearGradient id="shirt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A2A2A" />
                <stop offset="100%" stopColor="#1F1F1F" />
              </linearGradient>
            </defs>
            
            {/* Torso */}
            <path d="M 50 200 C 50 140 150 140 150 200 Z" fill="url(#shirt-grad)" stroke="#FF5C39" strokeWidth="2" />
            
            {/* Neck */}
            <rect x="90" y="110" width="20" height="20" fill="url(#skin-grad)" />
            
            {/* Head */}
            <rect x="70" y="50" width="60" height="70" rx="25" fill="url(#skin-grad)" />
            
            {/* Hair */}
            <path d="M 65 70 C 65 30 135 30 135 70 C 135 75 65 75 65 70 Z" fill="#111111" />
            
            {/* Headphones */}
            <path d="M 65 70 A 35 35 0 0 1 135 70" fill="none" stroke="#FF5C39" strokeWidth="5" />
            <rect x="55" y="55" width="12" height="35" rx="6" fill="#FF5C39" />
            <rect x="133" y="55" width="12" height="35" rx="6" fill="#FF5C39" />
            
            {/* Glasses */}
            <circle cx="85" cy="85" r="14" fill="none" stroke="#1F1F1F" strokeWidth="3" />
            <circle cx="115" cy="85" r="14" fill="none" stroke="#1F1F1F" strokeWidth="3" />
            <line x1="99" y1="85" x2="101" y2="85" stroke="#1F1F1F" strokeWidth="3" />
            <line x1="71" y1="85" x2="75" y2="85" stroke="#1F1F1F" strokeWidth="3" />
            <line x1="125" y1="85" x2="129" y2="85" stroke="#1F1F1F" strokeWidth="3" />
            
            {/* Eyes & Smile */}
            <circle cx="85" cy="85" r="3" fill="#FF5C39" />
            <circle cx="115" cy="85" r="3" fill="#FF5C39" />
            <path d="M 90 105 Q 100 115 110 105" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" />
            
            {/* Crossed Arms */}
            <path d="M 40 165 L 110 180 C 125 180 125 155 110 155 L 40 140 Z" fill="url(#shirt-grad)" stroke="#FF5C39" strokeWidth="2" />
            <path d="M 160 165 L 90 180 C 75 180 75 155 90 155 L 160 140 Z" fill="url(#shirt-grad)" stroke="#FF5C39" strokeWidth="2" />
          </svg>
          <svg className="laptop-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            {/* desk edge */}
            <rect x="20" y="75" width="160" height="4" fill="#1F1F1F" stroke="#FF5C39" strokeWidth="1" rx="2" /> 
            {/* back of laptop screen */}
            <rect x="50" y="30" width="100" height="60" rx="6" fill="#1F1F1F" stroke="#FF5C39" strokeWidth="2" /> 
            {/* glowing logo */}
            <circle cx="100" cy="55" r="8" fill="none" stroke="#FF5C39" strokeWidth="2" />
            {/* laptop base */}
            <polygon points="40,90 160,90 150,85 50,85" fill="#FF5C39" />
          </svg>
        </div>
        
        <div className="scanline"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
