import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ setIsMenuOpen }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    setIsMenuOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="lg:hidden menu-icon" onClick={toggleMenu}>
        <Hamburger rounded toggled={isOpen} size={40} color="#fff" />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="a-container">
          <a className="menu-item" href="#servicios" onClick={closeMenu}>
            Servicios
          </a>
          <a className="menu-item" href="#precios" onClick={closeMenu}>
            Precios
          </a>
          <a className="menu-item" href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
          <a className="menu-item" href="/" onClick={closeMenu}>
            Blog
          </a>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;