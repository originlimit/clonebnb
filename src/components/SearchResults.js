import React from 'react'
import './SearchResults.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const SearchResults = ({ img, title, location, desc, star, price }) => {
  return (
    <div className='searchResults'>
        <img src={ img } alt='property view' />
        <div className='searchResults__info'>
            <div className='searchResults__infoTop'>
                <div className='searchResults__infoTitle'><h3>{ title }</h3><span>{ location }</span><hr></hr></div>
                <FavoriteBorderRoundedIcon />
            </div>
            <div className='searchResults__infoMid'>{ desc }</div>
            <div className='searchResults__infoBtm'>
                <div className='searchResults__stars'><StarRoundedIcon /><h3>{ star }</h3></div>
                <div className='searchResults__prices'><h3>{ price }</h3></div>
            </div>
        </div>
    </div>
  )
}

export default SearchResults