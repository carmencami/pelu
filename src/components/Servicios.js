import React from 'react';
import './Servicios.css';

const Servicios = ({ onReservarClick }) => {
  const servicios = [
    {
      id: 1,
      nombre: 'Corte de Cabello',
      descripcion: 'Cortes modernos y personalizados que realzan tu estilo único. Nuestros estilistas crean looks adaptados a tu tipo de cabello y personalidad.',
      precio: '35€',
      imagen: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80'
    },
    {
      id: 2,
      nombre: 'Coloración',
      descripcion: 'Técnicas de coloración profesionales: mechas, balayage, coloración completa. Productos de alta calidad que cuidan tu cabello.',
      precio: 'Desde 60€',
      imagen: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a13737?w=600&q=80'
    },
    {
      id: 3,
      nombre: 'Peinados Especiales',
      descripcion: 'Peinados para ocasiones especiales: bodas, eventos, fiestas. Transformamos tu look con elegancia y sofisticación.',
      precio: 'Desde 45€',
      imagen: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80'
    },
    {
      id: 4,
      nombre: 'Tratamientos Faciales',
      descripcion: 'Tratamientos faciales personalizados para rejuvenecer y nutrir tu piel. Técnicas avanzadas de limpieza y hidratación profunda.',
      precio: 'Desde 55€',
      imagen: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80'
    },
    {
      id: 5,
      nombre: 'Manicura y Pedicura',
      descripcion: 'Cuidado completo de uñas con esmaltado semipermanente. Diseños personalizados y tratamientos de belleza para manos y pies.',
      precio: 'Desde 30€',
      imagen: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80'
    },
    {
      id: 6,
      nombre: 'Tratamientos Capilares',
      descripcion: 'Tratamientos reparadores y nutritivos para cabellos dañados. Mascarillas, keratina y tratamientos de hidratación profunda.',
      precio: 'Desde 40€',
      imagen: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80'
    }
  ];

  return (
    <section id="servicios" className="servicios section">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Ofrecemos una amplia gama de servicios de belleza para cuidar y realzar tu imagen
        </p>
        
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="servicio-card fade-in">
              <div className="servicio-imagen">
                <img src={servicio.imagen} alt={servicio.nombre} />
                <div className="servicio-overlay"></div>
              </div>
              <div className="servicio-content">
                <h3 className="servicio-nombre">{servicio.nombre}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
                <div className="servicio-footer">
                  <span className="servicio-precio">{servicio.precio}</span>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={onReservarClick}
                  >
                    Reservar este servicio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;

