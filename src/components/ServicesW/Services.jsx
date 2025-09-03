import React from 'react'
import './Services.css'
import trabajo1 from '../../assets/fotoFuerza.jpg'
import trabajo2 from '../../assets/fotoCardio.jpg'
import trabajo3 from '../../assets/fotoBienestar.pjpeg'
import icon1 from '../../assets/pesa.png'
import icon2 from '../../assets/cardio.png'
import icon3 from '../../assets/bienestar.png'



function Services() {
  return (
    <div className='services'>
        <div className="trabajo">
            <img src={trabajo1} alt="imagen trabajador" />
            <div className="caption">
                <img src={icon1} alt="icono" />
                <p>FUERZA</p>
            </div>
        </div>
        <div className="trabajo">
            <img src={trabajo2} alt="imagen trabajador" />
            <div className="caption">
                <img src={icon2} alt="icono" />
                <p>CARDIO</p>
            </div>
        </div>
        <div className="trabajo">
            <img src={trabajo3} alt="imagen trabajador" />
            <div className="caption">
                <img src={icon3} alt="icono" />
                <p>BIENESTAR</p>
            </div>
        </div>
    </div>
  )
}

export default Services