import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CreateTodoActionCreator } from '../redux/dispatchs/todosActions'

export default function Todos() {
    const Todos=useSelector(store=>store.todo)
    const dispatch=useDispatch()
   const [title, setTitle] = useState('')
   const onSubmit=(e)=>{
    e.preventDefault()
    const newTodo={
        title,
        id:Math.floor(Math.random() *1000),
        isChecked:true
    }
    dispatch(CreateTodoActionCreator(newTodo))
   }
  return (
    <div>

        <form onSubmit={onSubmit}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <button type='submit'>add</button>
        </form>
            {
                Todos.todos.map(el=>{
                    return (
                            <div key={el.id}>
                                {
                                    el.title
                                }
                                <input type="checkbox" checked={el.isChecked} />
                            </div>
                    )
                })
            }
    </div>
  )
}

