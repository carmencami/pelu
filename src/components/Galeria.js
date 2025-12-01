import React from 'react';
import './Galeria.css';

const Galeria = () => {
  const imagenes = [
    {
      id: 1,
      titulo: 'Transformación Completa',
      imagen: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
      categoria: 'Antes/Después'
    },
    {
      id: 2,
      titulo: 'Coloración Profesional',
      imagen: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a13737?w=600&q=80',
      categoria: 'Color'
    },
    {
      id: 3,
      titulo: 'Peinado de Gala',
      imagen: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
      categoria: 'Peinados'
    },
    {
      id: 4,
      titulo: 'Tratamiento Facial',
      imagen: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      categoria: 'Estética'
    },
    {
      id: 5,
      titulo: 'Manicura Artística',
      imagen: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
      categoria: 'Uñas'
    },
    {
      id: 6,
      titulo: 'Corte Moderno',
      imagen: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      categoria: 'Cortes'
    }
  ];

  return (
    <section id="galeria" className="galeria section">
      <div className="container">
        <h2 className="section-title">Nuestra Galería</h2>
        <p className="section-subtitle">
          Descubre algunos de nuestros trabajos más destacados
        </p>

        <div className="galeria-grid">
          {imagenes.map((item) => (
            <div key={item.id} className="galeria-item fade-in">
              <div className="galeria-imagen">
                <img src={item.imagen} alt={item.titulo} />
                <div className="galeria-overlay">
                  <div className="galeria-info">
                    <h3>{item.titulo}</h3>
                    <p>{item.categoria}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;

