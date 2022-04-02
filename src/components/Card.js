import React from 'react'
import './Card.css'

const Card = ({src, title, desc, price}) => {
    return (
        <div className='card'>
            <img className='card__img' src={src} alt='card visual' />
            <div className='card__info'>
                <h2 className='card__content'>{title}</h2>
                <h3 className='card__content'>{desc}</h3>
                <h4 className='card__content card__price'>{price}</h4>
            </div>
        </div>
    )
}

export default Card