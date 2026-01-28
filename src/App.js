import React, { useState } from 'react';
import './App.css';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Run: npm install react-icons

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify ${email} when the royal brew is ready.`);
    setEmail('');
  };

  return (
    <div className="container">
      {/* Overlay for better text readability if you use a background image */}
      <div className="overlay"></div>

      <div className="content">
       {/* Logo Section */}
        <div className="logo-container">
          <img src="/logo.png" alt="Chai Culture Logo" className="logo" />
          <h1 className="brand-name">CHAI CULTURE</h1>
        </div>

        {/* Brand Messaging */}
        <h1 className="tagline">Brew the Royal Tradition</h1>
        <p className="description">
          Experience the authentic taste of royal Indian households. 
          Premium instant chai premix, crafted for the modern connoisseur.
        </p>

        {/* Launch Status */}
        <div className="launch-badge">
          <span>LAUNCHING SOON</span>
        </div>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="signup-form">
          <input 
            type="email" 
            placeholder="Enter your email for early access" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
          <button type="submit" className="submit-btn">Notify Me</button>
        </form>

        {/* Social Icons */}
        <div className="socials">
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
        </div>
        
        <footer className="footer">
          &copy; 2026 Chai Culture. New York.
        </footer>
      </div>
    </div>
  );
}

export default App;