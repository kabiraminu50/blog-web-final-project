
import React, { useState,useEffect } from 'react'

import axios from 'axios'
import "./BlogPosts.css"

const AllPost = () => {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

// feching  data using useEffect

useEffect( () => {

  const fetchPosts = async () => {
try{
    const res = await axios.get('http://localhost:8000/api/post/getallpost')
    setPosts(res.data.data)
}catch(err){ setError(err.message)

 } finally{

  setLoading(false)
 }

  }
fetchPosts()
},[])

if(loading) return<p>loading... </p>;
if(error) return <p style={{color:'red'}}>Error:{error}</p>


  return (
     <div className='BlogPost-con'>
    <section className='blog-card'>
      <h2>All Blog Posts</h2>
      {
posts.length === 0 ?(<p>No Blog Post Available</p>

) : (

  posts.map((post) => (
 <div key={post._id} className='blog-item'>
  {post.image &&  (
<img src={`http://localhost:8000/api/post/createblogpost${post.image}`} alt={post.title} 

style={{width:"300px",borderRadius:"10px"}}
/>

  )}
  <h3>{post.title}</h3>
  <p>{post.subtitle}</p>
  <p>{post.content}</p>
  
  
  <small>{new Date(post.createdAt).toDateString()}</small>

</div>

  ))
)


      }
    </section>
    
  
    </div>
  )
}

export default AllPost