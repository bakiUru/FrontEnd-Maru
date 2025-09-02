import React from 'react'
import './Hero.css'
import flechaLogo from '../../assets/circulo-de-flecha.png'

export const Hero = () => {
  const whatsappSend ={
    number: '+59891512299',
    message: 'Hola Maru 👋, quisiera contactarme para que me ayudes Maru! 😊'
  }
  const encodedMessage = encodeURIComponent(whatsappSend.message);

  const wSendMessage = ()=>{
    // O para compartir un mensaje general a través de la app móvil:
    if (screen.width <1200)
      window.open(`whatsapp://send?text=${encodedMessage}`);
    
       // Abre el enlace de WhatsApp para chatear con un número específico
    window.open(`https://wa.me/${whatsappSend.number}?text=${encodedMessage}`);
    
  }
  return (
    <div className='hero conteiner'>
        <div className="hero-text">
            <h1>Activa tu cuerpo </h1>
            <h2>Potencia tu vida.</h2>
            <p>
              Comienza <strong>HOY</strong> para que te acompane a alcanzar tu mejor version.
            </p>
            <button className='btn' onClick={wSendMessage}>AHORA <img src={flechaLogo} alt="flecha-icono" /></button>
        </div>
    </div>
  )
}
