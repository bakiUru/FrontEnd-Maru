import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll';
function Footer() {
  return (
    <div className='footer'>
        <p>2025 Maru Ayala - Entrenadora Personal - . Todos los derechos reservados.</p>
        <div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="https://www.instagram.com/maru.ayalaa/?igsh=eDAxMTFmb21jaHlz#" target='_blank' className="social"><i className="fab fa-brands fa-instagram"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
		</div>
        <div className="footer-content">
            <div className="footer-links">
            <a>
            <Link
            to='hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            >
            HOME
            </Link></a>
            <a>
            <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            >
                Sobre Mi</Link></a>
            <a>
            <Link
            to='services'
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
            >
                Planes</Link></a>
            <a>
                        <Link
            to='gallery'
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
            >    
                Galería</Link></a>

            </div>
            
        </div>


    </div>
  )
}

export default Footer;
