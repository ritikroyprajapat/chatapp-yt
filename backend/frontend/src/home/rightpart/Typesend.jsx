import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../Context/useSendMessage.js';
import axios from "axios"

function Typesend() {
  const [message,setMessage]=useState("")
  const {loading,sendMessages}=useSendMessage()
  const handleSubmit=async(e)=>{
    console.log(e)
    e.preventDefault()
    await sendMessages(message)
    setMessage("")
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
   <div className='flex items-center space-x-3 h-[8] mx-3 rounded-full bg-gray-800'>

   <div className='w-[70%]'>
    <input
     type="text"
     placeholder="Type here"
     value={message}
     onChange={(e)=>setMessage(e.target.value)}
     className="border border-gray-700 outline-none px-4 py-3 mt-1 rounded-full w-full" />
    </div>
   
      <button className='flex items-center'>
      <IoSend className='text-4xl' />
      </button>
  

   </div>
   </form>
    </>
  )
}

export default Typesend
