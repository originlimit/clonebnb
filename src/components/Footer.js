import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <a href="#" className='footer__item'>Policies</a>
            <a href="#" className='footer__item'>Cookies</a>
            <a href="#" className='footer__item'>Events</a>
            <a href="#" className='footer__item'>Contact</a>
        </div>
        <section id='copyright'>AirBNB Clone 2022 - No Copyright.</section>
    </div>
  )
}

export default Footer