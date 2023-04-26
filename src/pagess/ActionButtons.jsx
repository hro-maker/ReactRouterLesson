import React,{useEffect, useState} from 'react'
import { useDispatch} from 'react-redux'
import {Getdata} from '../redux/dispatchs/postsActions'
import {CHanegWithValue, COUNTER_INCREMENT, Decrement, Increment} from '../redux/dispatchs/CounterActions'
export default function ActionButtons() {
  const [num, setNum] = useState('');
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(Getdata())
    },[])
  return (
    <div>
            <button onClick={()=>{
                dispatch(Increment())
            }}>
              increment
              </button>
            <button onClick={()=>{
                dispatch(Decrement())
            }}>
              decrement
              </button>

            <input value={num} onChange={(e)=>setNum(e.target.value)} type="text" />
            <button onClick={()=>{
                dispatch(CHanegWithValue(+num))
            }}>
             add input data
            </button>

    </div>
  )
}
