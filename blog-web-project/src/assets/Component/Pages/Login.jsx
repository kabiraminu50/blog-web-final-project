import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import logo from '../imgs/ramsa.jpg'

function Login() {
  return (
    <div className='login-page'>
<div className="login-con"> 
    <div className="login-logo-title">
        <section className='logo2'><img src={logo} alt="" style={{width:"100%", height:"100%", borderRadius:"8px",objectFit:"cover"}}/></section>
        <section></section>
    </div>

<div className="login-con">
    <form className='login-data'>
        <input type="text" placeholder='email' required />
        <input type="text" placeholder='password' required />
<button className='login-btn'>login</button>
    </form>
    

</div>


</div>

    </div>
  )
}

export default Login