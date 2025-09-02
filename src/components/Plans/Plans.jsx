import React from 'react'
import './Plans.css'
import CardPlans from './Card/CardPlans'

function Plans() {
    const planes = [
        {
            title : 'Basico',
            name : 'Distancia/Online',
            price : '$200 o 5 USD',
            description: 'Modalidad a distancia, acceso a recetas, rutinas personalizadas etc 💻'
        },
        {
            title : 'PRO',
            name : 'Distancia/Online',
            price : '$1000 o 30 USD',
            description: 'Modalidad a distancia, acceso a Basic + seguimiento semanal + video llamadas etc 👟'
        },
        {
            title : 'PREMIUM',
            class : 'premium',
            name : 'Presencial / Sala',
            price : '$6000 o 150 USD',
            description: 'Modalidad Presencial, contacto online + Entrenamos Juntos 💪'
        },
    ]

  return (
    <div className='plans'>
        {planes.map((card) => (
            <CardPlans
                key={card.title}
                title={card.title}
                name={card.name}
                clase={card.class? card.class : ''}
                price={card.price}
                description={card.description}
            />
        ))}
    </div>
  )
}

export default Plans