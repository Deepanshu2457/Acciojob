import React, { useState } from 'react'

const Practice2 = () => {

const [task,setTask]=useState("");
const [todos,setTodos]=useState([])


    const addTodo=()=>{
        if(task.trim()=== "")
            return 

        const newTodo={
            id:Date.now(),
            text:task,
            status: "incomplete"
        }
        setTodos([...todos, newTodo])
        setTask("")
    }

    const toggleTodo=()=>{
        const updated= todos.map((e)=>{
          return   e.id===id? {...e , completed : !e.completed}:e 

        })
        setTodos(updated)
    }

    const removeTodo=(id)=>{
        const filtered= todos.filter( (e)=> id==!id)
        setTodos(filtered)
     
    }
  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <h2>📝 Todo List</h2>
      <input type="text"
      placeholder='add new task '
      value={task}
      onChange={(e)=> setTask(e.target.value)}
       />
       <button onClick={addTodo}>add</button>

<ul style={{ listStyle: "none", padding: 0 }}>
    {
        todos.map((e)=>{
            return <li
            key={e.id}
                        style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              textDecoration: e.completed ? "line-through" : "none",
            }}

            >
                <span onClick={()=> toggleTodo(e.id)}>{e.text}</span>
                <button onClick={()=> removeTodo(e.id)}>delete</button>



            </li>
        })
    }
</ul>



    </div>
  )
}

export default Practice2