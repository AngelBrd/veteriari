import React, { useState } from 'react';
import './ContactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [cel, setCel] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const validateInputs = (event) => {
    if (name.trim() === '' || cel.trim() === '' || date.trim() === '' || time.trim() === '') {
      toast.error('Por favor, llene todos los campos antes de enviar el formulario.');
      event.preventDefault();
      return false;
    }

    if (cel.length !== 10) {
      toast.error('El número de celular debe tener 10 dígitos.');
      event.preventDefault();
      return false;
    }

    return true;
  };

  return (
    <div className="contact-form">
      <div className='close-div'>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
      <h2>Agenda tu cita</h2>
      <form 
        action='https://formsubmit.co/angel.brand069@gmail.com' 
        method='POST'
        onSubmit={validateInputs}
      >
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="cel">Número de celular:</label>
        <input type="tel" id="cel" name="cel" value={cel} onChange={(e) => setCel(e.target.value)} />

        <div className='date-time-div'>
          <div className='column-input-div'>
            <label htmlFor="date">Fecha:</label>
            <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div className='column-input-div'>
            <label htmlFor="time">Hora:</label>
            <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>

        <div className='send-div'>
          <button type="submit" className='send-button'>Enviar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;