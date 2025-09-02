import React from 'react'
import './CardPlans.css'

function CardPlans({title, name,price, description, clase}) {
  return (
    <div className={'card-plans '+clase}>
    <h1 className='title-cards'>{title}</h1>
        <h3 className='name-cards'>{name}</h3>
        <h5 className='price-cards'>{price}</h5>
    <p className='description-cards'>{description}</p>
    <button>Obtener YA!</button>
    </div>
  )
}

export default CardPlans