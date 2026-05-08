import React, { useState } from 'react';
import axios from 'axios';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  return (
    <AnimatedSection delay={0.2}>
      <section id="contact">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact">
          <div className="contact-info">
            <h3>Let's build something.</h3>
            <p>
              Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <div className="contact-links" style={{marginTop: '2rem'}}>
              <p className="mono">github.com/yourusername</p>
              <p className="mono">linkedin.com/in/yourusername</p>
              <p className="mono">hello@yourdomain.com</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={status.submitting}>
              {status.submitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
            
            {status.success && (
              <p className="form-status status-success">Message sent successfully!</p>
            )}
            {status.error && (
              <p className="form-status status-error">{status.error}</p>
            )}
          </form>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
