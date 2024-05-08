import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleBodyScroll = (event) => {
      if (isOpen) {
        event.preventDefault(); // Evitar el desplazamiento cuando el menú está abierto
      }
    };

    if (isOpen) {
      document.body.addEventListener("wheel", handleBodyScroll, {
        passive: false, // Necesario para que el preventDefault funcione en el evento wheel
      });
    } else {
      document.body.removeEventListener("wheel", handleBodyScroll);
    }

    return () => {
      document.body.removeEventListener("wheel", handleBodyScroll);
    };
  }, [isOpen]);

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
          <a id="home" className="menu-item" href="/">
            Servicios
          </a>
          <a id="precios" className="menu-item" href="/">
            Precios
          </a>
          <a id="contacto" className="menu-item" href="/">
            Contacto
          </a>
          <a id="blog" className="menu-item" href="/">
            Blog
          </a>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;