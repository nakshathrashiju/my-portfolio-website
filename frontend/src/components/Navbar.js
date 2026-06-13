import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><Link to="hero" smooth={true} duration={500} offset={-80}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-80}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-80}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-80}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-80}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;