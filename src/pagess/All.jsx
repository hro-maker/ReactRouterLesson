import React, { useEffect,useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import './pages.css'
import { LoadingContext } from '../LoadingContext'
export default function All() {
  const [posts, setPosts] = useState([])
  const  {changeLoading,isLoading} = useContext(LoadingContext)
    useEffect(()=>{
      changeLoading(true)
          fetch('https://jsonplaceholder.typicode.com/posts').then(data=>data.json()).then(
          (data)=>{
             setPosts(data)
             changeLoading(false)
          }
          )
    },[])
    if(isLoading){
      return <div>loading...</div>
    }
  return (
    <div className='post'>
        {posts.map(post=>{
          return (
            <div key={post.id} className="post__item">
              <div
                className='post__item-header'
              >
              <div className="post__item-id">{post.id})</div>
                <div className="post__item-title">{post.title}</div>
              </div>
              <div className="post__item-body">{post.body}</div>
              <Link to={`/post/${post.id}`}>
                edit item {post.id}
              </Link>
            </div>
          )
        })}
    </div>
  )
}
