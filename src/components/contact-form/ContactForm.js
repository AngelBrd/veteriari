import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [cel, setCel] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario si lo deseas
    // Por ejemplo, enviar los datos a través de una API
    // Luego puedes cerrar la modal llamando a la función onClose
    onClose();
  };

  return (
    <div className="contact-form">
      <div className='close-div'>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
      <h2>Agenda tu cita</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="cel">Número de celular:</label>
        <input type="tel" id="cel" name="cel" value={cel} onChange={(e) => setCel(e.target.value)} />

        <label htmlFor="date">Fecha:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="date">Hora:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <div className='send-div'>
          <button type="submit" className='send-button'>Enviar</button>
        </div>
      </form>
      {/* Botón para cerrar la modal */}
    </div>
  );
}

export default ContactForm;