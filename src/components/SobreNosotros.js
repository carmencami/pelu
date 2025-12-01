import React from 'react';
import './SobreNosotros.css';

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros section">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="section-subtitle">
          Conoce la historia y filosofía de Studio Belleza Cami
        </p>

        <div className="sobre-content">
          <div className="sobre-texto fade-in">
            <div className="sobre-historia">
              <h3>Nuestra Historia</h3>
              <p>
                Studio Belleza Cami nació de la pasión por la belleza y el cuidado personal. 
                Fundado en 2018, nuestro salón se ha convertido en un referente de elegancia 
                y profesionalismo en el sector de la estética femenina.
              </p>
              <p>
                Desde nuestros inicios, nos hemos comprometido a ofrecer servicios de la más 
                alta calidad, utilizando productos premium y técnicas innovadoras que realzan 
                la belleza natural de cada cliente.
              </p>
            </div>

            <div className="sobre-filosofia">
              <h3>Nuestra Filosofía</h3>
              <p>
                Creemos que cada persona es única y merece un trato personalizado. Nuestro 
                enfoque se centra en entender las necesidades individuales de cada cliente, 
                creando experiencias que van más allá de un simple servicio de belleza.
              </p>
              <p>
                La excelencia, la atención al detalle y el compromiso con la satisfacción 
                del cliente son los pilares que guían nuestro trabajo diario.
              </p>
            </div>
          </div>

          <div className="sobre-imagen fade-in">
            <div className="imagen-equipo">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80" 
                alt="Equipo de Studio Belleza Cami" 
              />
            </div>
            <div className="equipo-info">
              <h3>Nuestro Equipo</h3>
              <p>
                Contamos con un equipo de profesionales altamente cualificados, cada uno 
                especializado en diferentes áreas de la belleza y la estética. Su experiencia 
                y dedicación garantizan resultados excepcionales en cada visita.
              </p>
            </div>
          </div>
        </div>

        <div className="valores">
          <div className="valor-item fade-in">
            <div className="valor-icono">✨</div>
            <h4>Excelencia</h4>
            <p>Buscamos la perfección en cada detalle</p>
          </div>
          <div className="valor-item fade-in">
            <div className="valor-icono">💝</div>
            <h4>Compromiso</h4>
            <p>Tu satisfacción es nuestra prioridad</p>
          </div>
          <div className="valor-item fade-in">
            <div className="valor-icono">🎨</div>
            <h4>Creatividad</h4>
            <p>Innovamos para realzar tu belleza</p>
          </div>
          <div className="valor-item fade-in">
            <div className="valor-icono">🌟</div>
            <h4>Profesionalismo</h4>
            <p>Años de experiencia y formación continua</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;

