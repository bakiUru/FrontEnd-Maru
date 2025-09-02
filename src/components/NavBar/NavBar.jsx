import React, { useEffect, useState} from 'react'
import './Navbar.css'
import maLogo from '../../assets/logoMA.png'
import menu_icon from '../../assets/lista-menu.png'
import menu_icon2 from '../../assets/menu.png'
import { Link } from 'react-scroll'
import {Link as Links }  from 'react-router-dom'


const NavBar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setmobileMenu] = useState(false);

    useEffect(()=>{
      const handleScroll = () => setSticky(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },[])

    const toogleMenu = () => {
        mobileMenu? setmobileMenu(false) : setmobileMenu(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`} >
        <img src={maLogo} alt="MA Logo" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}

        >


            <li className='text'>
            <Link
            to='hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            >Home</Link> </li>
            <li className='text'>
            <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
            Sobre Mi</Link></li>
            <li className='text'>
            <Link
            to='services'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
            Metodologia</Link></li>
            <li className='text'>
            <Link
            to='testimonials'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
                Testimonios</Link></li>
            <li className='text'>
            <Link
            to='gallery'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
                Planes</Link></li>
            <li className='text'><Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >Contactame</Link></li>
            <li><Links
            to={`/login`}
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            className='btn'>Miembros</Links></li>
        </ul>
        <img 
          src={mobileMenu?menu_icon2:menu_icon} 
          alt="menu icono" 
          className='menu-icon' 
          onClick={toogleMenu}
        />
        {mobileMenu && (
          <div
            className="overlay"
            onClick={() => setmobileMenu(false)}
          />
        )}
        
    </nav>
  )
}

export default NavBar