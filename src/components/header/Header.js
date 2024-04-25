/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <img src='/'></img>
      <nav>
        <ul>
          <li><a href="/">Servicios</a></li>
          <li><a href="/">Precios</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li className='tel-li'>55 8341 2926</li>
          <li><button className='visit-btn'>Solicitar Visita</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
