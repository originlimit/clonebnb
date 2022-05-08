import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__info'>
            <h1 className='hero__infoTitle'>Get out and experience life!</h1>
            <h4 className='hero__infoDesc'>Plan a stay at a nice place and witness beauty while staying comfortable.</h4>
            <Link className='hero__infoLink' to='/search'>
                <Button>Explore Nearby</Button>
            </Link>
        </div>
    </div>
  )
}

export default Hero