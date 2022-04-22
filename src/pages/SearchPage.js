import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>60 stays | august 10 to august 23 | 2 guest</p>
            <h2>Stays Nearby</h2>
            <Button variant='outlined'>Cancellation Flexibility</Button>
            <Button variant='outlined'>Type of Place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and Beds</Button>
            <Button variant='outlined'>More Filters</Button>
        </div>
    </div>
  )
}

export default SearchPage