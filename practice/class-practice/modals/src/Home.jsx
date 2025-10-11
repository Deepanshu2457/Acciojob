import React, { useState } from 'react'

const Home = () => {
const [showModal,setShowmodal]=useState(false)
const [curr,setCurr]=useState(-1)
const images = [
  "https://images.unsplash.com/photo-1756244866467-f4682840070c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1756205073620-02f2fd841881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1759433199754-c849699524fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1759812224434-079528454f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1757104519823-72f73faed2c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1759747509229-d0ca933d6c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1759400762542-8468e42b792f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1759197458094-23fec548da4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D"
  ]

  return (

    <div  className='relative'>
        {showModal && <Modal setter={setShowmodal} imgsrc={images[curr]}/>}
        <div className="grid grid-cols-4">
           {
            images.map((item,index)=>{
                return <img onClick={()=>{
                    setShowmodal(true)
                    setCurr(index)
                }} src={item}/>

            })
           }
        </div>
    </div>
  )
}

export default Home