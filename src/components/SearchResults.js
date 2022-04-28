import React from 'react'
import './SearchResults.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const SearchResults = ({ img, title, location, desc, star, price, total }) => {
  return (
    <div className='searchResults'>
        <img src={ img } alt='property view' />
        <div className='searchResults__info'>
            <div className='searchResults__infoTop'>
                { title } { location } <FavoriteBorderRoundedIcon />
            </div>
            <hr></hr>
                { desc }
            <div className='searchResults__infoBtm'>
                { price } <StarRoundedIcon />{ star } { total }
            </div>
        </div>
    </div>
  )
}

export default SearchResults