/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Services-section.css';
import PerakeetImg from '../../assets/images/perakeet-img.png'
import VisitasImg from '../../assets/images/visitas.svg';
import InjectionImg from '../../assets/images/injection.svg';
import EutanasiaImg from '../../assets/images/eutanasia.svg';
import VideoChatImg from '../../assets/images/videochat.svg';
 
function ServicesSection() {
  return (
    <><section className='services-section' id='servicios'>
        <div className='flex-container'>
            <div>
            <h3 className='subtitle' data-aos="fade-right">Cuidado Especializado para tus mascotas</h3>
            <p data-aos="fade-up">Me dedico a proporcionar una experiencia excepcional tanto para ti como para tu querida mascota. Mi compromiso es ofrecer cuidados expertos y compasivos, asegurando que cada paciente reciba la atención individualizada que merece.</p>
            <p data-aos="fade-up">Me esfuerzo por crear un ambiente donde tanto tú como tu mascota se sientan bienvenidos y cómodos en cada visita. Tu satisfacción y el bienestar de tu compañero son mi principal prioridad.</p>
            </div>
            <div>
                <img data-aos="fade-in" src={PerakeetImg} className='perakeet-img'></img>
            </div>
        </div>
      </section><section className='services-icons'>
            <div className='service-icon' data-aos="fade-down">
                <img src={VisitasImg}></img>
                <h4>Visitas a domicilio</h4>
                <p>Medicina General en casa sin estrés</p>
            </div>
            <div className='service-icon' data-aos="fade-down">
                <img src={InjectionImg}></img>
                <h4>Vacunas a domicilio</h4>
                <p>Vacunas anuales para adultos y chachorros</p>
            </div>
            <div className='service-icon' data-aos="fade-down">
                <img src={EutanasiaImg}></img>
                <h4>Eutanasia a domicilio</h4>
                <p>Despedimos a tu mascota en la tranquilidad de su hogar</p>
            </div>
            <div className='service-icon' data-aos="fade-down">
                <img src={VideoChatImg}></img>
                <h4>Veterinario Online</h4>
                <p>Seguimientos, consultas por videollamada o chat</p>
            </div>
        </section></>
  );
}

export default ServicesSection;
