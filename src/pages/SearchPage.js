import { Button } from '@mui/material'
import React from 'react'
import SearchResults from '../components/SearchResults'
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
            <SearchResults img='https://sobarnes.com/wp-content/uploads/2018/04/4e4d7f4f-6a4d-46f0-9cbb-33c93f7d48a7-750x500.jpg' title='Modern Apartment' location='29572 60th St. Los Angeles' desc='Small apartment in LA with a nice city view. Has 2 bedrooms, 1 living, 2 bath, 1 kitchen, 2 closet, and a balcony that overlooks downtown.' price='$30 per night' star='4.5' />
        </div>
    </div>
  )
}

export default SearchPage