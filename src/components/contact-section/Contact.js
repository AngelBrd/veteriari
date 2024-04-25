/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Contact.css';
import DogBone from '../../assets/images/dog-bone.svg';

function Contact() {
  return (
    <section className='contact-section'>
        <h3>Agenda tu consulta ahora y cuida de tu mascota</h3>
        <p>Programar una cita es fácil: simplemente haz clic en el botón a continuación para comenzar. ¿No estás listo para reservar todavía? No hay problema. Estoy aquí para ti, ya sea que necesites mis servicios ahora o más adelante. Tu comodidad y la salud de tu mascota son mi prioridad.</p>
        <button className='contact-btn'>Agendar cita</button>
        <img src={DogBone}></img>
    </section>
  );
}

export default Contact;
