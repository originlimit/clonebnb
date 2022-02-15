import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img className='header__icon' src='https://dwglogo.com/wp-content/uploads/2017/09/React_logo.png' alt='header logo' />
        <div className='header__center'>
            <div>center</div>
        </div>
        <div>right</div>
    </div>
  )
}

export default Header