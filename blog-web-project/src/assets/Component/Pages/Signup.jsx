import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'

function Signup() {

const [username,setUsername] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loading,setLoading] = useState(false)



const handlesignup = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
  const res =  axios.post('http://localhost:8000/api/auth/signup',
    {username,email,password,}
  );


}catch(err){}

}







  return (
    <div className='signup-con'>
<form className='form-con' onSubmit={handlesignup}>
  <input type="username" placeholder='username' required value={username} onChange={(e)=> setUsername(e.target.value)}/>
  <input type="email" placeholder='email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
  <input type="text" placeholder='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <button className='login-btn' type='summit'>summit</button>

</form>

    </div>
  )
}

export default Signup