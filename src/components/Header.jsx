import React, { useState } from "react";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h1>MyApp</h1>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        {/* Search Bar */}
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-register">Register</button>
        </div>

        {/* Hamburger Menu */}
        <div 
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
