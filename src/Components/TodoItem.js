import React from 'react'

const TodoItem = (props) => {
  return (
    <div style={{width:"20%"}}>
        <h4>{props.todo.title}</h4>
        <p>{props.todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>props.onDelete(props.todo)}>Delete</button>
    </div>
  )
}
export default TodoItem;
