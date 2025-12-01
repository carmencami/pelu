import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';

const Chat = ({ mensajes, onAgregarMensaje, abierto, onToggle }) => {
  const [mensajeActual, setMensajeActual] = useState('');
  const [mostrandoRespuesta, setMostrandoRespuesta] = useState(false);
  const mensajesEndRef = useRef(null);

  const scrollToBottom = () => {
    mensajesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mensajes, mostrandoRespuesta]);

  const handleEnviar = (e) => {
    e.preventDefault();
    
    if (mensajeActual.trim()) {
      const nuevoMensaje = {
        id: Date.now(),
        texto: mensajeActual,
        esUsuario: true,
        fecha: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
      
      onAgregarMensaje(nuevoMensaje);
      setMensajeActual('');
      setMostrandoRespuesta(true);
      
      // Simular respuesta automática después de 2 segundos
      setTimeout(() => {
        const respuesta = {
          id: Date.now() + 1,
          texto: 'Gracias por tu mensaje, responderemos pronto. ¿En qué podemos ayudarte?',
          esUsuario: false,
          fecha: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
        };
        onAgregarMensaje(respuesta);
        setMostrandoRespuesta(false);
      }, 2000);
    }
  };

  return (
    <>
      <button 
        className={`chat-toggle ${abierto ? 'abierto' : ''}`}
        onClick={onToggle}
        aria-label="Abrir chat"
      >
        💬
      </button>

      {abierto && (
        <div className="chat-window fade-in">
          <div className="chat-header">
            <div className="chat-header-info">
              <h3>Studio Belleza Cami</h3>
              <p>Estamos aquí para ayudarte</p>
            </div>
            <button 
              className="chat-cerrar"
              onClick={onToggle}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          <div className="chat-mensajes">
            {mensajes.length === 0 ? (
              <div className="chat-bienvenida">
                <p>¡Hola! 👋</p>
                <p>¿En qué podemos ayudarte hoy?</p>
              </div>
            ) : (
              mensajes.map((mensaje) => (
                <div 
                  key={mensaje.id} 
                  className={`mensaje ${mensaje.esUsuario ? 'mensaje-usuario' : 'mensaje-sistema'}`}
                >
                  <div className="mensaje-contenido">
                    <p>{mensaje.texto}</p>
                    <span className="mensaje-hora">{mensaje.fecha}</span>
                  </div>
                </div>
              ))
            )}
            
            {mostrandoRespuesta && (
              <div className="mensaje mensaje-sistema">
                <div className="mensaje-contenido">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={mensajesEndRef} />
          </div>

          <form className="chat-form" onSubmit={handleEnviar}>
            <input
              type="text"
              value={mensajeActual}
              onChange={(e) => setMensajeActual(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="chat-input"
            />
            <button type="submit" className="chat-enviar" disabled={!mensajeActual.trim()}>
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chat;

