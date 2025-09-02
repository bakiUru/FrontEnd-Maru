import React from 'react'
import './Services.css'
import trabajo1 from 'src/assets/fotoFuerza.jpg'
import trabajo2 from 'src/assets/fotoCardio.jpg'
import trabajo3 from 'src/assets/fotoBienestar.pjpeg'
import icon1 from 'src/assets/pesa.svg'
import icon2 from 'src/assets/cardio.svg'
import icon3 from 'src/assets/bienestar.SVG'



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