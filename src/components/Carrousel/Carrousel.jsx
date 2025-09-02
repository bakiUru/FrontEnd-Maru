import React, { useState } from 'react'
import './Carrousel.css'
import next_icon from 'src/assets/right-arrow_11461261.png'
import prev_icon from 'src/assets/back-arrow_11461251.png'


export default function Carrousel() {
    const images =['mujer1.jpg','mujer2.jpg','mujer3.jpg','personalTrainer.jpg'] //array de imagenes dinamico dentro del use effect
    // eslint-disable-next-line no-unused-vars
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [loaded,setLoaded] = useState(false)



    const selectNewImage = (index, images, next = true) =>{
      setLoaded(false)//antes de cargar la imagen
        const condition =  next ? selectedIndex < images.length - 1 : selectedIndex > 0
        const nextIndex = next ? 
        (condition? selectedIndex +1 : 0)
        : condition? selectedIndex - 1: images.length - 1
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const previous  = () =>{
        selectNewImage(selectedIndex,images,false)
    }
    const next =()=>{
        selectNewImage(selectedIndex,images)
    }
  return (
 
    <div className="conteinerCarrousel">
      <div className="carrouselImg">

        <img src={`/images/${images[selectedIndex]}`} alt="" className={loaded? 'loaded' : 'noloaded'} onLoad={()=>setLoaded(true)} onClick={()=>alert('modal card sobre el cliente')} />
      </div>
        
      <div className="buttonCarrousel">
      <img src={next_icon} alt="flecha derecha icono" className='next-btn' onClick={next}/>
      <img src={prev_icon} alt="flecha izquierda icono" className='prev-btn' onClick={previous}/>
      </div>
    </div>
    
  )
}
