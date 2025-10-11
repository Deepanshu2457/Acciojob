import React, { useState } from 'react'

const Practice1= () => {
    const [name,setName]=useState("")
  return (
    <div>
        <h1>Question 1</h1>
        <input type="text"
        style={{border:"3px solid black", height:"10px"}}
        onChange={(e)=>{
         setName(e.target.value)
        }}

        
        />
        <h1>{name}</h1>

    </div>
  )
}

export default Practice1