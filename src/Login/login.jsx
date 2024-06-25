import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export const Login = () => {
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

  const handleGraficasClick = () => {
    navigate('/graficas');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-container">
      <nav className="navbar1">
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
        <ul className={`navbar-links2 ${isOpen ? 'open' : ''}`}>
          <li><a href="#" className="active" onClick={handleHomeClick}>INICIO</a></li>
          <li><a href="#" onClick={handleRegistroClick}>REGISTRARSE</a></li>
          <li><a href="#" onClick={handleContactosClick}>CONTACTANOS</a></li>
        </ul>
      </nav>
      <div className="login-box">
        <h2 className="iniciar">Iniciar Sesión</h2>
        <form>
          <label htmlFor="email">Correo Electronico</label>
          <input type="email" id="email" name="email" placeholder="" />
          
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="" />
          
          <button type="submit" onClick={handleGraficasClick}>Login</button>
        </form>
      </div>
    </div> 
  );
};

export default Login;
