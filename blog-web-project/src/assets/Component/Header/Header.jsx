import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from "../imgs/ramsa.jpg"

function Header() {
  return (
    <div className='header-con'>
<div className="logo">
  <img src={logo} alt="" width = "100%" height = "100%" />
</div>
<div className="navbar">nabar</div>
<div className="contactUs">contactUs</div>

    </div>
  )
}

export default Header

