import React from 'react'
import './SearchResults.css'

const SearchResults = ({ img, title, location, desc, star, price, total }) => {
  return (
    <div className='searchResults'>
        <div className='searchResults__img'>image</div>
        <div className='searchResults__info'>
            <div className='searchResults__info__top'>
                title, loc, heart
            </div>
            <div className='searchResults__info__mid'>
                desc
            </div>
        </div>
    </div>
  )
}

export default SearchResults