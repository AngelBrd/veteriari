import React from 'react';
import './Prices-section.css';
import CheckImg from '../../assets/images/check.svg';

function PricesSection() {
  return (
    <section className='prices-section'>
      <h3>Precios veterinario a domicilio</h3>
      <div className='cards-container'>
        <div className='card'>
          <div className='card-content'>
            <div className='card-header'>
              <h4>Visita Veterinaria a Domicilio</h4>
              <div className='card-price'>
                <h5>$500</h5>
              </div>
            </div>
            <div className='card-body'>
              <p className='principal-p'>La visita incluye:</p>
              <div>
                <div className='service-includes'>
                  <p>Traslado del veterinario a domicilio</p>
                  <img src={CheckImg} alt="Check" />
                </div>
                <div className='service-includes'>
                  <p>Revisión completa</p>
                  <img src={CheckImg} alt="Check" />
                </div>
                <div className='service-includes'>
                  <p>Receta</p>
                  <img src={CheckImg} alt="Check" />
                </div>
              </div>
              <p className='principal-p'>Suplementos</p>
              <div>
                <div className='service-includes'>
                  <p>Mascotas adicionales</p>
                  <p className='price-p'>+300$</p>
                </div>
                <div className='service-includes'>
                  <p>Urgencias</p>
                  <p className='price-p'>+400$</p>
                </div>
                <div className='service-includes'>
                  <p>Sabados por la mañana</p>
                  <p className='price-p'>+100$</p>
                </div>
                <div className='service-includes'>
                  <p>Corte de uñas</p>
                  <p className='price-p'>+50$</p>
                </div>
              </div>
            </div>
            <button className='card-btn'>Visita Veterinaria</button>
          </div>
        </div>
        
        <div className='card'>
          <div className='card-content'>
            <div className='card-header'>
              <h4>Vacuna a domicilio</h4>
              <div className='card-price'>
                <h5>$500</h5>
              </div>
            </div>
            <div className='card-body'>
              <p className='principal-p'>Precio vacunas perro:</p>
              <div>
                <div className='service-includes'>
                  <p>Vacuna Rabia</p>
                  <p className='price-p'>$500</p>
                </div>
                <div className='service-includes'>
                  <p>Tetravalente Perro</p>
                  <p className='price-p'>$700</p>
                </div>
                <div className='service-includes'>
                  <p>Vacuna Hexavalente Perro</p>
                  <p className='price-p'>$700</p>
                </div>
                <div className='service-includes'>
                  <p>Vacuna Leishmania Perro</p>
                  <p className='price-p'>$700</p>
                </div>
              </div>
              <p className='principal-p'>Precio vacunas gato:</p>
              <div>
                <div className='service-includes'>
                  <p>Trivalente Gato</p>
                  <p className='price-p'>$700</p>
                </div>
                <div className='service-includes'>
                  <p>Trivalente + Leucemia Gato</p>
                  <p className='price-p'>$900</p>
                </div>
              </div>
              <p className='principal-p'>Incluye:</p>
              <div>
                <div className='service-includes'>
                  <p>Revisión mascota, coste vacuna y administración a domicilio</p>
                </div>
              </div>
            </div>
            <button className='card-btn'>Solicitar Vacuna</button>
          </div>
        </div>

        <div className='card'>
          <div className='card-content'>
            <div className='card-header'>
              <h4>Análisis a domicilio</h4>
              <div className='card-price'>
                <h5>$250</h5>
              </div>
            </div>
            <div className='card-body'>
              <p className='principal-p'>Análisis de Orina para perros y gatos</p>
              <div>
                <div className='service-includes'>
                  <p>Análisis de orina (recogida de muestras a domicilio*)</p>
                </div>
              </div>
              <p className='principal-p'>Análisis de Heces para perros y gatos</p>
              <div>
                <div className='service-includes'>
                  <p>Análisis croprológico (recogida de muestras a domicilio*)</p>
                </div>
              </div>
              <p className='principal-p'>Análisis de Sangre</p>
              <div>
                <div className='service-includes'>
                  <p>Hemograma</p>
                  <p className='price-p'>$250</p>
                </div>
                <div className='service-includes'>
                  <p>General</p>
                  <p className='price-p'>$600</p>
                </div>
                <div className='service-includes'>
                  <p>Geriatrico</p>
                  <p className='price-p'>$980</p>
                </div>
                <div className='service-includes'>
                  <p>*Te explicare como dejar preparadas las muestras</p>
                </div>
                <div className='service-includes'>
                  <p>*No incluye desplazamiento o visita</p>
                </div>
              </div>
            </div>
            <button className='card-btn'>Solicitar Anáisis</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricesSection;