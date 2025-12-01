import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Studio Belleza Cami</h3>
            <p>
              Tu centro de belleza y estética donde la elegancia y el cuidado 
              personal se encuentran.
            </p>
            <div className="footer-redes">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="footer-contacto">
              <p>📍 Calle Principal, 123</p>
              <p>28001 Madrid, España</p>
              <p>📞 +34 600 000 000</p>
              <p>✉️ info@studiobellezacami.com</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Horario</h4>
            <div className="footer-horario">
              <p><strong>Lunes - Viernes:</strong></p>
              <p>09:00 - 20:00</p>
              <p><strong>Sábados:</strong></p>
              <p>09:00 - 19:00</p>
              <p><strong>Domingos:</strong></p>
              <p>Cerrado</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <div className="footer-links">
              <a href="#servicios">Servicios</a>
              <a href="#reservas">Reservas</a>
              <a href="#galeria">Galería</a>
              <a href="#sobre-nosotros">Sobre Nosotros</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Studio Belleza Cami. Todos los derechos reservados.</p>
          <p className="footer-demo">Demo profesional - Sin backend real</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

