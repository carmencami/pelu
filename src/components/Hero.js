import React from 'react';
import './Hero.css';

const Hero = ({ onReservarClick }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text fade-in">
          <h1 className="hero-title">Belleza que Transforma</h1>
          <p className="hero-subtitle">
            En Studio Belleza Cami, cada visita es una experiencia única. 
            Combinamos técnicas profesionales con un ambiente acogedor para 
            realzar tu belleza natural.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => {
              document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
            }}>
              Ver servicios
            </button>
            <button className="btn btn-outline" onClick={onReservarClick}>
              Reservar cita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

