import React, { useEffect,useState ,useContext} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './pages.css'
import { LoadingContext } from '../LoadingContext'
export default function Post() {
    const  {changeLoading,isLoading} = useContext(LoadingContext)
    const navigate = useNavigate();
    console.log(useParams)
    const [post, setPost] = useState()
    const {ids}=useParams()
    useEffect(()=>{
        changeLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts/'+ids).then(data=>{
            if(data.status >299 ){
                setPost(null)
                return null
            }
      return   data.json()
    }).then(
        (data)=>{
           setPost(data)
        }
        ).finally(()=>{
            changeLoading(false)
        })
  },[])
  if(isLoading){
    return <div>loading...</div>
  }
  if(!post){
    return <div>
        post dont found
        you can try again
        <button onClick={()=>{
           navigate(-1)
        }}>go back</button>
    </div>
  }
  return (
    <div style={{marginLeft:"10px"}}>
        {post?.title}
    </div>
  )
}
