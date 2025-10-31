import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from "../imgs/ramsa.jpg"

function Header() {
  return (
    <div className='header-con'>
<div className="logo">
  <img src={logo} alt="web-logo" style={{width:"100%",height:"100%",borderRadius:"10px",objectFit:"cover"}}/>
</div>

<div className="home">
<Link to="/">Blog Posts</Link>

</div>

<div className="navbar">
<Link to="/login">Login</Link>  
</div>

<div className="signup">
<Link to="/signup">Signup</Link>

</div>

    </div>
  )
}

export default Header

