import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './assets/Component/Header/Header'

function App() {
  
  return (
    <div className='container'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<h1>hello this home</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
