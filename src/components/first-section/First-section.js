/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './First-section.css';
import DogBone from '../../assets/images/dog-bone.svg';
import DogPaw from '../../assets/images/dog-paw.svg'

function FirstSection() {
  return (
    <section id='about'>
        <h3 data-aos="fade-right">Llegaste al Hogar de las patitas felices</h3>
        <p data-aos="fade-up">Bienvenido a mi servicio veterinario a domicilio. Soy Mariana Brand, una veterinaria independiente dedicada a brindar atención excepcional a todo tipo de mascotas, desde pequeños pájaros hasta imponentes perros de raza grande. Mi compromiso es ofrecerte un cuidado de alta calidad con la comodidad de que tus queridos compañeros estén en su propio hogar.</p>

        <img src={DogBone} className='img-bone'></img>
        <img src={DogPaw} className='img-paw' data-aos="fade-in"></img>
        <img src={DogPaw} className='img-paw2' data-aos="fade-in"></img>
        <img src={DogPaw} className='img-paw3' data-aos="fade-in"></img>
        <img src={DogPaw} className='img-paw4' data-aos="fade-in"></img>
    </section>
  );
}

export default FirstSection;
