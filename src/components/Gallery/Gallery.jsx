import React from 'react'
import './Gallery.css'
import galleria1 from '../../assets/abdominales.jpg'
import galleria2 from '../../assets/bulgaras.jpg'
import galleria3 from '../../assets/bicep.jpg'
import galleria4 from '../../assets/triceps.jpg'
import flechaDer from '../../assets/flecha-derecha.png'




function Gallery() {
  return (
    <>
    <div className='gallery-container'>
            <div className="gallery-exer">
              <img src={galleria1} alt="imagen Ejercicio 1" />
                <div className="caption-exer">
                    <p>ABS</p>
                </div>
            </div>

            <div className="gallery-exer">
            <img src={galleria2} alt="imagen Ejercicio 2" />
                <div className="caption-exer">
                    <p>GLUTEOS</p>
                </div>
             </div>

            <div className="gallery-exer">
                <img src={galleria3} alt="imagen Ejercicio 3" />
                <div className="caption-exer">
                    <p>PECHO</p>
                </div>
             </div>

            <div className="gallery-exer">
            <img src={galleria4} alt="imagen Ejercicio 4" />
                <div className="caption-exer">
                    <p>BRAZOS</p>
            </div>
             </div>
            
            
            
    </div>
           <div className='gallery'>

        <button className='btn dark-btn'>Mas Ejercicios <img src={flechaDer} alt="flecha icono" /></button>
           </div>
    </>

  )
}

export default Gallery