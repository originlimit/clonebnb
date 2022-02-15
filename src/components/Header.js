import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Avatar } from '@mui/material'

const Header = () => {
  return (
    <div className='header'>
        <img className='header__icon' src='https://dwglogo.com/wp-content/uploads/2017/09/React_logo.png' alt='header logo' />
        <div className='header__center'>
            <input type='text'/>
            <SearchIcon />
        </div>
        <div className='header__right'>
            <p>Be a host!</p>
            <LanguageIcon />
            <ExpandMore />
            <Avatar />
        </div>
    </div>
  )
}

export default Header