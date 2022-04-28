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
                <div className='searchResults__infoTitle'>{ location } { title }</div>
                <FavoriteBorderRoundedIcon />
            </div>
            <hr></hr>
                { desc }
            <div className='searchResults__infoBtm'>
                <div className='searchResults__stars'><StarRoundedIcon />{ star }</div>
                <div className='searchResults__prices'>{ price } { total }</div>
            </div>
        </div>
    </div>
  )
}

export default SearchResults