/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Welcome.css';
import WelcomeImg from '../../assets/images/welcome-img.png'

function Welcome() {
  return (
    <main>
        <h1>Veteriari</h1>
        <h2>Servicio veterinario a domicilio</h2>
        <div>
            <button className='consulta-btn'>Solicitar consulta</button>
            <button className='whatsapp-btn'>Whatsapp</button>
        </div>
        <div class="wave-container"></div>
        <img src={WelcomeImg} className='welcome-img'></img>
    </main>
  );
}

export default Welcome;
