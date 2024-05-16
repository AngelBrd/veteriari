import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';

function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [cel, setCel] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Verificar si los campos están llenos
    if (name.trim() === '' || cel.trim() === '' || date.trim() === '' || time.trim() === '') {
      setError('Por favor, llene todos los campos antes de enviar el formulario.');
      return; // Evita enviar el formulario si algún campo está vacío
    }

    // Validar el número de celular
    if (cel.length !== 10) {
      setError('El número de celular debe tener 10 dígitos.');
      return;
    }
    
    try {
      const response = await axios.post('https://formsubmit.co/angel.brand069@gmail.com', {
        name,
        cel,
        date,
        time
      });
      console.log(response.data); // Puedes manejar la respuesta aquí si lo deseas
      onClose(); // Cierra la modal después de que se haya enviado el formulario
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Aquí puedes manejar cualquier error que ocurra durante el envío del formulario
    }
  };  

  return (
    <div className="contact-form">
      <div className='close-div'>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
      <h2>Agenda tu cita</h2>
      {error && <div className="error-toast">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>

        <label htmlFor="cel">Número de celular:</label>
        <input type="tel" id="cel" name="cel" value={cel} onChange={(e) => setCel(e.target.value)} required/>

        <div className='date-time-div'>
          <div className='column-input-div'>
            <label htmlFor="date">Fecha:</label>
            <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
          </div>

          <div className='column-input-div'>
            <label htmlFor="date">Hora:</label>
            <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required/>
          </div>
        </div>

        <div className='send-div'>
          <button type="submit" className='send-button'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;