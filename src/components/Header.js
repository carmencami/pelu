import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onReservarClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuAbierto(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <h1>Studio Belleza Cami</h1>
          </div>
          
          <nav className={`nav ${menuAbierto ? 'open' : ''}`}>
            <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }}>Servicios</a>
            <a href="#reservas" onClick={(e) => { e.preventDefault(); scrollToSection('reservas'); }}>Reservas</a>
            <a href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }}>Galería</a>
            <a href="#sobre-nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('sobre-nosotros'); }}>Sobre Nosotros</a>
          </nav>

          <button className="btn btn-primary btn-reservar" onClick={onReservarClick}>
            Reservar cita
          </button>

          <button 
            className="menu-toggle"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

