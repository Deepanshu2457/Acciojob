
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {addFeedback} from "./features/feature"
function App() {
  const dispatch=useDispatch
  const {ratings,average,count}= useSelector((state)=>state.feedback);

const [rating , setRating]=useState('')
const [comment ,setComment]=useState("")

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!rating) return alert("select a rating");
  if(!comment) return alert("write comment");

  dispatch( 
    addFeedback({
      rating:Number(rating),
      comment
    })
  )
  setRating("")
  setComment("")
}
  return (
    <>
      <h1>feedback rating</h1>

      <form action="" onSubmit={handleSubmit}
      >
    <label style={{fontSize:"25px"}}> Rating</label>

    <select name="" id="" value={rating} onChange={(e)=>{setRating(e.target.value)}}>
  <option value="">select</option>
  {
    [1,2,3,4,5].map((num)=>{
      return <option key={num} value={num}> {num}</option>
    })
  }
    </select>
    


<input type="text" value={comment} onChange={(e)=>{setComment(e.target.value)}} /> <br/>
<button type='submit' style={{color:"yellow" , backgroundColor:"black"}}> submit feedback  </button>
      </form>

      <h2>Average Rating : {average}</h2>
      <h4>All Feedback : </h4>
      
    </>
  )
}

export default App
