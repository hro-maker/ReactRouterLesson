import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
export default function Home() {
  const CounterState=useSelector((data)=>data.counter);
  const PostState=useSelector((data)=>data.post);
  return (
    <div>
      {CounterState.count}
      {/* {PostState.loading && <div>loading...</div>}
      {PostState.data.map(el=>{
        return( <div key={el.id}>
              {el.title}
        </div>)
      }) } */}
    </div>
  )
}
