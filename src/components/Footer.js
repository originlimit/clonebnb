import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <a className='footer__item'>Policies</a>
            <a className='footer__item'>Cookies</a>
            <a className='footer__item'>Events</a>
            <a className='footer__item'>Contact</a>
        </div>
        <section id='copyright'>AirBNB Clone 2022 - No Copyright.</section>
    </div>
  )
}

export default Footer