import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/right-arrow_11461261.png'
import prev_icon from '../../assets/back-arrow_11461251.png'
import avatar from '../../assets/avatar1.jpg'


function Testimonials() {
    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    console.log('right')
}



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="flecha derecha icono" className='next-btn' onClick={slideForward}/>
        <img src={prev_icon} alt="flecha izquierda icono" className='prev-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={avatar} alt="avatar" />
                            <div>
                                <h3>Luis Carballo</h3>
                                <span>Montevideo, Uruguay</span>
                            </div>
                        </div>
                        <p>
                            "Excelente Maru, tremenda Pofe 👌!! Recomiendo" 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={avatar} alt="avatar" />
                            <div>
                                <h3>Rubi Melocontoncito</h3>
                                <span>Montevideo, Uruguay</span>
                            </div>
                        </div>
                        <p>
                            "Muy satisfecha! Con el entrenamiento estoy hecha un fuego... me cambio el molocoton 🍑🍑"
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={avatar} alt="avatar" />
                            <div>
                                <h3>Marta Zapallito</h3>
                                <span>San Jose, Uruguay</span>
                            </div>
                        </div>
                        <p>
                            "Excelente Seguimiento, estoy contenta con los cambios... hasta me dieron descuentos en suplementosss 🤑!" 
                        </p>
                    </div>
                </li>
            </ul>
           
        </div>
    </div>
  )
}

export default Testimonials