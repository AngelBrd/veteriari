/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Footer.css';
import DogImg from '../../assets/images/dog-img.png'
import XIcon from '../../assets/images/x-icon.svg';
import InstaIcon from '../../assets/images/insta-icon.svg';
import FacebookIcon from '../../assets/images/facebook-icon.svg';

function Footer() {
  return (
    <section className='section-footer'>
        <footer>
            <div data-aos="fade-up">
                <a src='/'><img src={XIcon} className='x-icon'></img></a>
                <a src='/'><img src={InstaIcon} className='insta-icon'></img></a>
                <a src='/'><img src={FacebookIcon} className='facebook-icon'></img></a>
            </div>
            <p data-aos="fade-up">Copyright © 2024 Veteriari</p>
            <img src={DogImg} className='dog-img' data-aos="fade-in"></img>
        </footer>
    </section>
  );
}

export default Footer;
