import React from 'react'
import useConversation from "../../components/zustand/useConversation.js"
import { useSocketContext } from '../../Context/SocketContext.jsx';
function Chatuser() {
  const { selectedConversation}=useConversation();
  const {onlineUsers}=useSocketContext()

  const getOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId)?"online":"offline"
  }

  console.log(selectedConversation);
  return (
    <div className='flex justify-center bg-gray-800 h-[8] hover:bg-gray-700 duration-300'>
     

     <div>
      <div className='flex items-center space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>

<div className="avatar online">
<div className="w-12 rounded-full">
  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
</div>
</div>

<div>
<h1 className='text-xl'>{selectedConversation.fullname}</h1>
<span>{getOnlineUsersStatus(selectedConversation._id)}</span>
</div>


</div>
    </div>

    </div>
  )
}

export default Chatuser
