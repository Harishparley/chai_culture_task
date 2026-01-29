import React, { useState } from 'react';
import './App.css';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Data for the 5 cards
const flavorData = [
  { id: 1, name: "Cardamom (Elaichi) Chai", img: "/elaichi.png" },
  { id: 2, name: "Ginger (Adrak) Chai",     img: "/adarak.png" },
  { id: 3, name: "Masala Chai",              img: "/masala.png" },
  { id: 4, name: "Holy Basil (Tulsi) Chai", img: "/tulsi.png" },
  { id: 5, name: "Rose (Gulab) Chai",       img: "/rose.png" },
];

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify ${email} when the royal brew is ready.`);
    setEmail('');
  };

  return (
    <div className="container">
      {/* Background Overlay */}
      <div className="overlay"></div>

      <div className="scroll-wrapper">
        
        {/* --- HERO SECTION --- */}
        <div className="hero-content">
          <div className="logo-container">
            <img src="/logo.png" alt="Chai Culture Logo" className="logo" />
            <h2 className="brand-name">CHAI CULTURE</h2>
          </div>

          <h1 className="tagline">Brew the Royal Tradition</h1>
          <p className="description">
            Experience the authentic taste of royal Indian households. 
            Premium instant chai premix, crafted for the modern connoisseur.
          </p>

          <div className="launch-badge">
            <span>LAUNCHING SOON</span>
          </div>

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

          <div className="socials">
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
          </div>
        </div>

        {/* --- FLAVORS SECTION (New) --- */}
        <div className="flavors-section">
          <h3 className="section-title">OUR ROYAL FLAVORS</h3>
          
          <div className="flavors-row">
            {flavorData.map((flavor) => (
              <div key={flavor.id} className="flavor-card">
                <div className="card-image-box">
                  {/* Images will load here */}
                  <img src={flavor.img} alt={flavor.name} className="card-img" />
                </div>
                <div className="card-text">
                  {flavor.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="footer">
          &copy; 2026 Chai Culture. New York.
        </footer>

      </div>
    </div>
  );
}

export default App;