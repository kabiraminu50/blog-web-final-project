import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './assets/Component/Header/Header'
import Login from './assets/Component/Pages/Login'
import Signup from './assets/Component/Pages/Signup'
import Home from './assets/Component/Pages/BlogPosts'
import Prof from './assets/Component/Pages/Prof'
function App() {

  
  return (
    <div className='container'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      <Route path='/prof' element={<Prof/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
