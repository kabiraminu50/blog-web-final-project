import React, { useState } from 'react'
import './CreateNewpost.css'
import axios from 'axios'
function CreateNewPost() {
const [image,setImage] = useState('')
const [title,setTitle] = useState('')
const [subtitle,setSubTitle] = useState('')
const [content,setContent] = useState('')
const [error,setError] = useState(false)
const [loading,setLoading] = useState(false)

const handleCreateNewPost = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError(false)

try{

const res = await axios.post('http://localhost:8000/api/post/createblogpost',{image,title,subtitle,content})

}catch(err){
    console.error(err);
    setError(err.response?.data?.message);
}finally{setLoading(false);};


}



  return (
    <div className='form-con'>

<form onSubmit={handleCreateNewPost}>
    <input type="file" name='image'accept='image/*' value={image} onChange={(e) =>setImage(e.target.value)}/>
    <input type="text"required placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
    <input type="text" required placeholder='Subtitle' value={subtitle} onChange={(e) => setSubTitle(e.target.value)}/>
     <textarea type="text" required placeholder='write your content' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    <button className='submit-btn' type='submit' disabled={loading}>submit</button>
{error && (
    <p style={{color:'red', marginTop:'10px',textAlign:'center'}}>{error}</p>
 )}
 

</form>

    </div>
  )
}

export default CreateNewPost