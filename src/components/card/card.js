import React from 'react'
import './card.css'

export default function Card({ card, handleEleccion , flipped, disabled}) {

    const handleClick = () => {
        if(!disabled) {
        handleEleccion(card)
    }
}

    return (
    
        <div className='card'>
        <div className= {flipped ? "flipped": ""}  >
           <img className='front' src={card.src} alt='card-front' />
           <img className='back' src='https://images.fineartamerica.com/images/artworkimages/medium/3/berserk-logo-anime-art-anime-art-transparent.png'
            onClick={handleClick} alt='card-back' ></img>
        </div>
     </div>
    )
}