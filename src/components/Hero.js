import { Button } from '@mui/material'
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__info'>
            <h1>Get out and experience life!</h1>
            <h4>Plan a stay at a nice place and witness beauty while staying comfortable</h4>
            <Button variant='outlined'>Explore Nearby</Button>
        </div>
    </div>
  )
}

export default Hero