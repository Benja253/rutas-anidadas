import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Error404 from './components/Error404'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import NameUser from './components/NameUser'
import RouteFather from './components/RouteFather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link className='home' to="/">Home</Link></li>
          <li><Link to="/user/about">About me</Link></li>
          <li><Link to="/user/contact">Contact me</Link></li>
          <li><Link to="/user/country/republic">Ir a usuario Argentina</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path='/' element={<Home saludar="Hola" />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/country/:name' element={<NameUser />} />
        <Route path='*' element={<Error404 />} /> */}

        <Route path="/" element={<Home saludar="Soy Home" />} />

        <Route path="/user/*" element={<RouteFather />}>  // Layout diferente
          <Route path="about" element={<AboutUs />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="country">
            <Route path=":name" element={<NameUser />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
      <footer>Copyright, todos los derechos reservados</footer>
    </div>
  )
}

export default App
