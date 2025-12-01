import React, { useState } from 'react';
import './Reservas.css';

const Reservas = ({ reservas, onAgregarReserva }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    servicio: ''
  });
  const [errores, setErrores] = useState({});
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarReservas, setMostrarReservas] = useState(false);

  const servicios = [
    'Corte de Cabello',
    'Coloración',
    'Peinados Especiales',
    'Tratamientos Faciales',
    'Manicura y Pedicura',
    'Tratamientos Capilares'
  ];

  const horas = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: ''
      });
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nuevosErrores.email = 'El email no es válido';
    }

    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    }

    if (!formData.fecha) {
      nuevosErrores.fecha = 'La fecha es obligatoria';
    } else {
      const fechaSeleccionada = new Date(formData.fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      if (fechaSeleccionada < hoy) {
        nuevosErrores.fecha = 'La fecha no puede ser anterior a hoy';
      }
    }

    if (!formData.hora) {
      nuevosErrores.hora = 'La hora es obligatoria';
    }

    if (!formData.servicio) {
      nuevosErrores.servicio = 'Debes seleccionar un servicio';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      const nuevaReserva = {
        id: Date.now(),
        ...formData,
        fechaCreacion: new Date().toLocaleString('es-ES')
      };
      
      onAgregarReserva(nuevaReserva);
      setMostrarConfirmacion(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        hora: '',
        servicio: ''
      });
      
      setTimeout(() => {
        setMostrarConfirmacion(false);
      }, 5000);
    }
  };

  return (
    <section id="reservas" className="reservas section">
      <div className="container">
        <h2 className="section-title">Reserva tu Cita</h2>
        <p className="section-subtitle">
          Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita
        </p>

        {mostrarConfirmacion && (
          <div className="confirmacion-mensaje fade-in">
            <p>✓ ¡Reserva realizada con éxito! Te contactaremos pronto para confirmar tu cita.</p>
          </div>
        )}

        <div className="reservas-content">
          <form className="reserva-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={errores.nombre ? 'error' : ''}
                placeholder="Tu nombre"
              />
              {errores.nombre && <span className="error-mensaje">{errores.nombre}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errores.email ? 'error' : ''}
                placeholder="tu@email.com"
              />
              {errores.email && <span className="error-mensaje">{errores.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={errores.telefono ? 'error' : ''}
                placeholder="600 000 000"
              />
              {errores.telefono && <span className="error-mensaje">{errores.telefono}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fecha">Fecha *</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  className={errores.fecha ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errores.fecha && <span className="error-mensaje">{errores.fecha}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="hora">Hora *</label>
                <select
                  id="hora"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  className={errores.hora ? 'error' : ''}
                >
                  <option value="">Selecciona una hora</option>
                  {horas.map((hora) => (
                    <option key={hora} value={hora}>{hora}</option>
                  ))}
                </select>
                {errores.hora && <span className="error-mensaje">{errores.hora}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="servicio">Servicio *</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                className={errores.servicio ? 'error' : ''}
              >
                <option value="">Selecciona un servicio</option>
                {servicios.map((servicio) => (
                  <option key={servicio} value={servicio}>{servicio}</option>
                ))}
              </select>
              {errores.servicio && <span className="error-mensaje">{errores.servicio}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Confirmar Reserva
            </button>
          </form>

          <div className="reservas-lista">
            <div className="reservas-header">
              <h3>Últimas Reservas</h3>
              <button 
                className="btn btn-outline btn-sm"
                onClick={() => setMostrarReservas(!mostrarReservas)}
              >
                {mostrarReservas ? 'Ocultar' : 'Ver'} ({reservas.length})
              </button>
            </div>

            {mostrarReservas && (
              <div className="reservas-items">
                {reservas.length === 0 ? (
                  <p className="sin-reservas">No hay reservas aún</p>
                ) : (
                  reservas.slice().reverse().map((reserva) => (
                    <div key={reserva.id} className="reserva-item fade-in">
                      <div className="reserva-info">
                        <h4>{reserva.nombre}</h4>
                        <p><strong>Servicio:</strong> {reserva.servicio}</p>
                        <p><strong>Fecha:</strong> {reserva.fecha} a las {reserva.hora}</p>
                        <p><strong>Contacto:</strong> {reserva.email} | {reserva.telefono}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservas;

