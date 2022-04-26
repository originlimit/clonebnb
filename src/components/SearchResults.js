import React from 'react'
import './SearchResults.css'
import StarIcon from '@mui/icons-material/Star'

const SearchResults = ({ img, title, location, desc, star, price, total }) => {
  return (
    <div className='searchResults'>
        <div className='searchResults__img'>image</div>
        <div className='searchResults__info'>
            <div className='searchResults__info__top'>
                {title} {location}
            </div>
            <div className='searchResults__info__mid'>
                <hr></hr>
                {desc}
            </div>
            <div className='searchResults__info__btm'>
                {price} <StarIcon /> {star} {total}
            </div>
        </div>
    </div>
  )
}

export default SearchResults