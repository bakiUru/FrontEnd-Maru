import React from 'react'
import './About.css'
import aboutImgVideo from 'src/assets/maru_foto.jpg' 
import playIcon from 'src/assets/boton-de-play.png'

function About({setPlayState}) {

  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImgVideo} alt="imagen Video" className='about-img' />
            <img src={playIcon} alt="icono play" className='about-icon' onClick={()=>{
                {setPlayState(true)}
            }} />
        </div>
        <div className="about-right">
          <div className="titleAbout">
            <h2>Sobre MI💚</h2>
            <h3>Mujer apasionada y dedicada al mundo del fitness</h3>
          </div>
            <div className='textAbout'>
                  <p>
                    Estoy comprometida en transformar la vida de las personas a través de un enfoque integral de cuidado personal, entrenamiento físico y nutrición.
                  </p>
                  <p>
                    Con una formación continua y experiencia en el campo, ofrezco un servicio personalizado que se adapta a las necesidades únicas de cada cliente. Mi objetivo es empoderarte para que alcances tus metas de salud y bienestar, brindándote el apoyo y la motivación necesarios para lograr un cambio duradero. 
                  </p>
                  <p>
                    Únete a mí y descubre cómo podemos trabajar juntos para mejorar tu calidad de vida y potenciar tu mejor versión.
                   </p>
              </div>
        </div>
    </div>
  )
}

export default About