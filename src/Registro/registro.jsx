import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registro.css';

export const Registro = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="registro-container">
      <nav className="navbar2">
        <div className="navbar-logo">
          <span>
            SLEEP 
            <img src="logo.png" alt="Logo" className="logo-image" />  
            TRACK
          </span>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`navbar-links3 ${isOpen ? 'open' : ''}`}>
          <li><a href="#" className="active" onClick={handleHomeClick}>INICIO</a></li>
          <li><a href="#" className="reg" style={{ textDecoration: 'underline' }} onClick={handleRegistroClick}>REGISTRARSE</a></li>
          <li><a href="#" onClick={handleContactosClick}>CONTACTANOS</a></li>
        </ul>
      </nav>
      <div className="registro-box">
        <h2 className="reg">Registrarse</h2>
        <form>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" placeholder="" />

          <label htmlFor="email">Correo Electronico</label>
          <input type="email" id="email" name="email" placeholder="" />

          <label htmlFor="phone">Numero de Telefono</label>
          <input type="tel" id="phone" name="phone" placeholder="" />
          
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="" />

          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="" />

          <label htmlFor="age">Edad</label>
          <input type="number" id="age" name="age" placeholder="" />
          
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;