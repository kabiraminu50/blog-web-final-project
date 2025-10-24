import React from 'react'
import "./Login.css"
function Signup() {
  return (
    <div className='signup-con'>
<form className='form-con'>
  <input type="text" placeholder='username' required />
  <input type="text" placeholder='email' required/>
  <input type="text" placeholder='password' required />
  <button className='login-btn'>summit</button>

</form>

    </div>
  )
}

export default Signup