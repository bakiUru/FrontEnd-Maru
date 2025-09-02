import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import { Hero } from '../Hero/Hero.jsx'
import Services from '../ServicesW/Services.jsx'
import Title from '../Title/Title.jsx'
import About from '../About/About.jsx'
import Gallery from '../Gallery/Gallery.jsx'
import Testimonials from '../Testimonials/Testimonials.jsx'
import Contact from '../Contact/Contact.jsx'
import Footer from '../Footer/Footer.jsx'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'
import Carrousel from '../Carrousel/Carrousel.jsx'
import Plans from '../Plans/Plans.jsx'


function Landing() {
    const [playState, setPlayState] = useState(false);
  return (
    <div>     
            <NavBar/>
        <Hero/>
    <div className="container">
      <Title subTitle='Areas Especializadas' title='Metodologia Aplicada'/>
      <Services/>
      <Title subTitle='Galeria' title='Tipos de Ejercicios'/>
      <Gallery/>
      <Title subTitle='Testimonios' title='Casos Reales, Personas Reales'/>
      <Carrousel/>
      <Testimonials/>
      <About setPlayState={setPlayState}/>
      <Title title='Planes Disponibles' subTitle='A tu alcance'  />
      <Plans/>
      <Title subTitle='Contactame' title='Estamos en Contacto'/>
      <Contact/>
      <Footer/>
      
    </div>
    
  <VideoPlayer playState={playState} setPlayState={setPlayState}/></div>
  )
}

export default Landing