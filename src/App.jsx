import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Landing from './components/Landing/Landing.jsx'

const App = () => {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
   
      
     
    </div>
  )
}

export default App