import React from 'react';
import './ContactForm.css';
import { Link } from 'react-router-dom';

function ContactForm() {
  return (
    <><div className="contact-form">
      <h2>Formulario de Contacto</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div><Link to="/"><button>Regresar a Inicio</button></Link></>
  );
}

export default ContactForm;