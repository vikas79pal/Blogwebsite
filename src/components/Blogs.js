import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import "./Blogs.css"
const Blogs = () => {
  const {loading,posts}=useContext(AppContext)
  return (
    <div className='cards'>
      {
        loading?
        (<p className='loading'>Loading...</p>)
        :
        
          posts.map(post=>(
            <div className='card'>
              <p className='title'>{post.title}</p>
              <p>By <span className='author'>{post.author}</span> on  <span className='category'>{post.category}</span></p>
              <p className='date'>
              Posted on {post.date}
              </p>
              <p className='content'>Posted on {post.content} </p>
              {
                <p >
{

                post.tags.map((tag,index)=> 
                 <span className='hashtag' key={index}>{`#${tag}`}</span>
                )
              }
                </p>
              }
            </div>
          ))
      
      }
    </div>
  )
}

export default Blogs