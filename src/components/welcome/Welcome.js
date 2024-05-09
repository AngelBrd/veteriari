/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Welcome.css';
import WelcomeImg from '../../assets/images/welcome-img.png'

function Welcome() {
  return (
    <main>
        <h1 data-aos="fade-up">Veteriari</h1>
        <h2 data-aos="fade-up">Servicio veterinario a domicilio</h2>
        <div data-aos="fade-up">
            <button className='consulta-btn'>Solicitar consulta</button>
            <button className='whatsapp-btn'><a href="whatsapp://send?phone=+525549625833">WhatsApp</a></button>
        </div>
        <div class="wave-container"></div>
        <img data-aos="fade-in" src={WelcomeImg} className='welcome-img'></img>
    </main>
  );
}

export default Welcome;
