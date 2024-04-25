/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <main>
        <h1>Veteriari</h1>
        <h2>Servicio veterinario a domicilio</h2>
        <div>
            <button className='consulta-btn'>Pedir consulta a domicilio</button>
            <button className='whatsapp-btn'>Whatsapp</button>
        </div>
        <div class="wave-container"></div>
    </main>
  );
}

export default Welcome;
