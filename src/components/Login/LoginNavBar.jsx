import React from 'react'
import './LoginNavBar.css'
import maLogo from '../../assets/logoMA.png'

function LoginNavBar() {
  return (
    <div>    
      <nav className='container nav-login' >
          <a href="/"><img src={maLogo} alt="MA Logo" className='logo-login' /></a>

      </nav></div>
    
  )
}

export default LoginNavBar