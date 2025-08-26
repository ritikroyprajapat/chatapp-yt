import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typing from './Typesend'
import {useAuth} from "../../Context/Authprovider.jsx"
import useConversation from '../../components/zustand/useConversation'

function Right() {
  const {selectedConversation,setSelectedConversation}=useConversation();
  useEffect(()=>{return setSelectedConversation(null)},[setSelectedConversation]);
  
  return (
    <div className=' w-[70%]  bg-slate-900 text-gray-300' >
    <div>
      {!selectedConversation?(<NoChatSelected/>):( <>
        <Chatuser/>
     <div 
     className='flex-1 overflow-y-auto'
      style={{maxHeight:"84vh"}}
      >
        <Messages/></div>
     <Typing/> 
     </>
    )}
    </div>
    </div>
  )
}

export default Right



const NoChatSelected=()=>{
  const [authUser]=useAuth()
  return(
    <>
    <div  className='flex h-screen items-center justify-center'>
      <h1 className='text-center'>Welcome <span className='font-semibold text-xl'>{authUser.user.fullname}</span><br />
      No chat selected, please start conversation by selecting anyone o your cantacts
     </h1>
    </div>
    </>
  )
}