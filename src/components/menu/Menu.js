import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css'

const HamburgerMenu = () => {
  return (
    <div className='menu'>
        <Menu right>
        <a id="home" className="menu-item" href="/">Servicios</a>
        <a id="precios" className="menu-item" href="/">Precios</a>
        <a id="contacto" className="menu-item" href="/">Contacto</a>
        <a id="blog" className="menu-item" href="/">Blog</a>
        </Menu>
    </div>
  );
};

export default HamburgerMenu;