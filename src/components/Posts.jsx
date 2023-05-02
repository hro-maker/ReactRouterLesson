import React from 'react'
import { useSelector } from 'react-redux';
export default function Posts() {
    const PostState=useSelector((data)=>data.post);
    console.log(PostState);
  return (
    <div>
        asdsad
    </div>
  )
}
