// import React, { useEffect } from 'react'
// import { useSocketContext } from './SocketContext'
// import useConversation from '../components/zustand/useConversation'
// import { Socket } from 'socket.io-client'

// function useGetSocketMessage() {

//     const {socket}=useSocketContext()
//     const {messages,setMessage}=useConversation()

//     useEffect(()=>{
//         socket.on("newMessage",(newMessage)=>{
//             setMessage([...messages,newMessage]);
//         })
//         return()=>{
//             socket.off("newMessage")
//         }
//     },[socket,messages,setMessage])

 
// }

// export default useGetSocketMessage



import { useEffect } from 'react'
import { useSocketContext } from './SocketContext'
import useConversation from '../components/zustand/useConversation'
import sound from "../assets/sound.mp3"
function useGetSocketMessage() {
  const { socket } = useSocketContext();
  const { setMessage } = useConversation();

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {


       const notification = new Audio(sound);
      notification.play();

      console.log("Socket message received:", newMessage);
      setMessage((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket, setMessage]);
}

export default useGetSocketMessage;
