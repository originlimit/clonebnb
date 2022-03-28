import React from 'react'
import './Card.css'

const Card = ({src, title, desc, price}) => {
    return (
        <div className='card'>
            <img className='card__img' src={src} alt='image' />
            <div className='card__info'>
                <h2>{title}</h2>
                <h3>{desc}</h3>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Card