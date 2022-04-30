import { Button } from '@mui/material'
import React from 'react'
import SearchResults from '../components/SearchResults'
import Separator from '../components/Separator'
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
            <div className='searchPage__results'>
                <Separator />
                <SearchResults img='https://sobarnes.com/wp-content/uploads/2018/04/4e4d7f4f-6a4d-46f0-9cbb-33c93f7d48a7-750x500.jpg' title='Modern Apartment' location='29572 60th St. Los Angeles' desc='Small apartment in LA with a nice city view. Has 2 bedrooms, 1 living, 2 bath, 1 kitchen, 2 closet, and a balcony that overlooks downtown.' price='$30 per night' star='4.5' />
                <SearchResults img='http://www.freeimageslive.co.uk/files/images009/bedroom_studio.preview.jpg' title='Modest Space' location='28753 Rhine Dr. Los Angeles' desc='This is a studio apartment with full furnishings and a cool view. The space is only 1 bedroom that doubles as a living area. Features include a closet with a safe, extra covers, and a deadbolt for security.' price='$25 per night' star='5.0' />
                <SearchResults img='https://lh6.googleusercontent.com/proxy/2MJuxOIVVcbAfjn-JYp-bSPiJzeEB79MNDoDcR3n24tbC90Bq23tMOz9vBl530BInZQ44h7AYMY9N5Xv94BRF7sWkOZ8qGMegdptmCjtrJ2iwis12WTfSbDYcbhXiqq-LEBHGUMjn5h8OZlI_4AlqvsEub2WMUpgmt5iX1e9MNQ4GF92Q27Tk9nHAiHzsBE2nw44bkq-QkkezMI=w1200-h630-p-k-no-nu' title='Spacious and modern place' location='87689 Califax Ct. Los Angeles' desc='Looking for a modern place to stay at for a few nights? Well, we have got you covered! Ultra clean, sleek, and best of all... cheap! 2 beds, 2 baths, and a pool.' price='$50 per night' star='4.3' />
                <SearchResults img='https://cdn.pixabay.com/photo/2015/04/24/10/18/studio-737569_640.jpg' title='Japanese Style Studio Stay' location='27658 Sherwood Dg St. Los Angeles' desc='A themed interior based on my experiences in Japan. Heated floors, compact spaces, vast storage, and theme appropriate furnishings included! 1 bad, 2 baths, 1 living/cooking space.' price='$39 per night' star='5.0' />
            </div>
        </div>
    </div>
  )
}

export default SearchPage