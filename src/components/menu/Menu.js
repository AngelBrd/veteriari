import React, { useState } from "react";
import "./Menu.css";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden menu-icon" onClick={toggleMenu}>
        <Hamburger rounded toggled={isOpen} size={40} color="#fff" />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="a-container">
          <a className="menu-item" href="#servicios">
            Servicios
          </a>
          <a className="menu-item" href="#precios">
            Precios
          </a>
          <a className="menu-item" href="#contacto">
            Contacto
          </a>
          <a className="menu-item" href="/">
            Blog
          </a>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;