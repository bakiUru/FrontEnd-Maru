import React, {useState, useEffect} from 'react'
import './Login.css'
import LoginNavBar from './LoginNavBar';

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        pass: '',
        name: '',
        tel: ''
    });
    

const handleLogin = event =>{
    event.preventDefault();
    console.log('estas son las credenciales',loginData)
    //logica para request con la api del server y esperar el login 
    if (loginData?.correo)
     alert('hay dato')
    
}

const handleInput = event =>{
    const {target} = event
    const {name, value}  = target
    
    const values ={
        ...loginData,
        [name] : value
    }

    setLoginData(values);

}


///ANIMACION
useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      const handleSignUp = () => container.classList.add('right-panel-active');
      const handleSignIn = () => container.classList.remove('right-panel-active');

      signUpButton.addEventListener('click', handleSignUp);
      signInButton.addEventListener('click', handleSignIn);

      // cleanup para evitar memory leaks
      return () => {
        signUpButton.removeEventListener('click', handleSignUp);
        signInButton.removeEventListener('click', handleSignIn);
      };
    }
  }, []);


  return (
    <>
<LoginNavBar/>
<div className='containerBody'>
<div className="containerLogin" id="container">
	<div className="form-container sign-up-container">
		<form className='form-login'action="#">
			<h1 className='h1-login'>Crea tu Cuenta</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/maru.ayalaa/?igsh=eDAxMTFmb21jaHlz#" className="social">
                <i class="fab fa-brands fa-instagram"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className='span-login'>usa Tu RedSocial para Ingresar</span>
			<input type="text" 
            placeholder="Name"
            name='name' 
            onChange={handleInput}
            />
			<input type="email" 
            placeholder="Email" 
            name='email'
            onChange={handleInput}
            />
			<input type="tel" 
            placeholder="Telefono" 
            name='tel'
            onChange={handleInput}
            />
			<input type="password" 
            placeholder="Password"
            name='pass'
            onChange={handleInput}
            />
			<button
            className='button-login'
            onClick={handleLogin}
            >Ser Miembro</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className='form-login' action="#">
			<h1 className='h1-login'>Ingresar</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/maru.ayalaa/?igsh=eDAxMTFmb21jaHlz#" target='_blank' className="social">
                <i class="fab fa-brands fa-instagram"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className='span-login'>o Usa tu Cuenta</span>
			<input 
            type="email" 
            placeholder="Email" 
            name='email'
            onChange={handleInput}
            />
			<input 
            type="password" 
            placeholder="Password"
            name='pass'
            onChange={handleInput}
             />
			<a href="#" className='a-login'>Olvidaste tu contrasena?</a>
			<button 
            className='button-login'
            onClick={handleLogin}
            >Entrar</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay-login">
			<div className="overlay-panel overlay-left overlay-top">
				<h1 className='h1-login'>Bienvenido!</h1>
				<p className='p-login'>Para Ser Miembro Ingresa Tus Datos</p>
				<button 
                className="button-login ghost" 
                id="signIn"
                >Entrar</button>
			</div>

			<div className="overlay-panel overlay-right overlay-bottom">
				<h1 className='h1-login'>Hola, Amig@!</h1>
				<p className='p-login'>Empeza Conmigo Ingresa tus Datos Personales</p>
				<button 
                className="button-login ghost" 
                id="signUp"
                >Registrarse</button>
			</div>
		</div>
	</div>
</div>
        

    </div>
    </>
  
  )
}

export default Login