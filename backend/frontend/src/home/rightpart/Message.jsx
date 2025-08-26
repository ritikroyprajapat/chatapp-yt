import React from 'react'

function Message({message}) {
  const authUser=JSON.parse(localStorage.getItem("chatApp"));
  const itsMe=message.senderId===authUser.user._id;
  const chatName=itsMe?"chat-start":"chat-end";
  const chatColor=itsMe?"bg-blue-500":"";
  return (
    <div>
       <div className='p-2'>
      <div className={`chat ${chatName}`}>
  <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
</div>


    </div>
    </div>
  )
}

export default Message
