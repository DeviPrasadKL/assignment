import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/login" element={< Login/>} /> 
        <Route exact path="/logout" element={< Logout/>} /> 
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
