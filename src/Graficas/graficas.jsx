import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './graficas.css';

export const Graficas = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleRegistroClick = () => {
    navigate('/registro');
  };

  const handleContactosClick = () => {
    navigate('/contactos');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="graficas-container">
      <nav className="navbar5">
        <div className="navbar-logo">
          <span>
            SLEEP
            <img src="logo.png" alt="Logo" className="logo-image" />
            TRACK
          </span>
        </div>
        {/* Botón de hamburguesa */}
        <button className="hamburguesa" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </button>
        {/* Fin botón hamburguesa */}
        <ul className={`navbar-links5 ${isOpen ? 'open' : ''}`}>
          <li><a href="#" className="active" onClick={handleHomeClick}>INICIO</a></li>
          <li><a href="#" onClick={handleRegistroClick}>REGISTRARSE</a></li>
          <li><a href="#" onClick={handleContactosClick}>CONTACTANOS</a></li>
        </ul>
      </nav>
      <div className="contenido">
        <div className="seccion-grafica">
          <h2>Tiempo de sueño</h2>
          <img src="graf1.png" alt="Graficaaa" className="grafica-imagen" />
        </div>
        <div className="leyenda">
          <div className="column">
            <div className="item">
              <img src="graf2.png" alt="Gráfica de sueño" />
              <span>Grafica de sueño</span>
            </div>
            <div className="item">
              <img src="graf2.png" alt="Gráfica de movimiento" />
              <span>Grafica de movimiento</span>
            </div>
            <div className="item">
              <img src="graf2.png" alt="Gráfica de temperatura ambiente" />
              <span>Grafica de temperatura ambiente</span>
            </div>
          </div>
          <div className="column borde-contenedor">
            <div className="item">
              <img src="graf2.png" alt="Tiempo ideal de sueño" />
              <span>Tiempo ideal de sueño</span>
            </div>
            <div className="item">
              <img src="graf2.png" alt="Movimiento ideal" />
              <span>Movimiento ideal</span>
            </div>
            <div className="item">
              <img src="graf2.png" alt="Temperatura ideal" />
              <span>Temperatura ideal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graficas;
