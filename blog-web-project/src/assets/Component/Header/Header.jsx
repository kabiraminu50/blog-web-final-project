import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from "../imgs/ramsa.jpg"

function Header() {
  return (
    <div className='header-con'>
<div className="logo">
  <img src={logo} alt="web-logo" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
</div>

<div className="home">
<Link to="/">Home</Link>

</div>

<div className="navbar">
<Link to="/login">login</Link>  
</div>

<div className="signup">
<Link to="/signup">signup</Link>

</div>

    </div>
  )
}

export default Header

