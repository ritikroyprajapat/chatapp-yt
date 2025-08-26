import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../Context/useGetMessage.js'
import Loading from '../../components/Loading.jsx';
import useGetSocketMessage from '../../Context/useGetSocketMessage.jsx';
function Messages() {

  const {loading,messages}=useGetMessage();
  useGetSocketMessage()
  console.log(messages)

  const lastMsgRef=useRef()
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior: "smooth"});
      }
      },100)
  },[messages])
  return (
   <>
    <div className='flex-1 overflow-y-auto' style={{minHeight:"84vh"}}>
      {loading?(<Loading/>):(messages.length > 0 && messages.map((messages, index)=>(

        <div  key = {index} ref={lastMsgRef}>
          <Message message={messages}/>
        </div>
       
      )))}
   {
    !loading && messages.length===0 &&(
      <div>
        <p className='text-center mt-[20%]'>Say! hi to start the conversation</p>
      </div>
    )
   } 
    </div>
   
    </>
  )
}

export default Messages
