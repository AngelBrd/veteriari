/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import Logo from '../../assets/images/logo-no-background.png';
import HamburgerMenu from '../menu/Menu';

function Header() {
  return (
    <header data-aos="fade-zoom-in">
        <img src={Logo}></img>
        <HamburgerMenu></HamburgerMenu>
      <nav>
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#about">Acerca de</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="/">Blog</a></li>
          <li className='tel-li'>55 8341 2926</li>
          <li><button className='visit-btn'>Solicitar Visita</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
