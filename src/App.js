import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Reservas from './components/Reservas';
import Galeria from './components/Galeria';
import SobreNosotros from './components/SobreNosotros';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  const [reservas, setReservas] = useState([]);
  const [mensajesChat, setMensajesChat] = useState([]);
  const [chatAbierto, setChatAbierto] = useState(false);

  // Cargar datos guardados al iniciar
  useEffect(() => {
    const reservasGuardadas = localStorage.getItem('reservas');
    const mensajesGuardados = localStorage.getItem('mensajesChat');
    
    if (reservasGuardadas) {
      setReservas(JSON.parse(reservasGuardadas));
    }
    
    if (mensajesGuardados) {
      setMensajesChat(JSON.parse(mensajesGuardados));
    }
  }, []);

  // Guardar reservas en localStorage
  const agregarReserva = (nuevaReserva) => {
    const reservasActualizadas = [...reservas, nuevaReserva];
    setReservas(reservasActualizadas);
    localStorage.setItem('reservas', JSON.stringify(reservasActualizadas));
  };

  // Guardar mensajes en localStorage
  const agregarMensaje = (nuevoMensaje) => {
    const mensajesActualizados = [...mensajesChat, nuevoMensaje];
    setMensajesChat(mensajesActualizados);
    localStorage.setItem('mensajesChat', JSON.stringify(mensajesActualizados));
  };

  return (
    <div className="App">
      <Header onReservarClick={() => {
        document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
      }} />
      <Hero onReservarClick={() => {
        document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
      }} />
      <Servicios onReservarClick={() => {
        document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' });
      }} />
      <Reservas 
        reservas={reservas}
        onAgregarReserva={agregarReserva}
      />
      <Galeria />
      <SobreNosotros />
      <Chat 
        mensajes={mensajesChat}
        onAgregarMensaje={agregarMensaje}
        abierto={chatAbierto}
        onToggle={() => setChatAbierto(!chatAbierto)}
      />
      <Footer />
    </div>
  );
}

export default App;

