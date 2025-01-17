// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Certifique-se de criar o arquivo CSS
import logo from '../image/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <nav>
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        &#9776; {/* Ícone de hamburguer */}
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li className="link"><a href="/">Início</a></li>
        <li id="link1" className="link"><a href="/">Acomodações</a></li>
        <li id="link2" className="link"><a href="/">Tarifa</a></li>
        <li id="link3" className="link"><a href="/">Contato</a></li>
      </ul>   
    </nav>
  );
};

export default Navbar;
