import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className='header'>
        <Link className='header__iconContainer' to='/'>
            <img className='header__icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png?20140813142239' alt='header logo' />
        </Link>
        <div className='header__center'>
            <input type='text'/>
            <SearchIcon />
        </div>
        <div className='header__right'>
            <LanguageIcon />
            <ExpandMore />
            <AccountCircleIcon className='header__rightSvg' fontSize='large' />
        </div>
    </div>
  )
}

export default Header