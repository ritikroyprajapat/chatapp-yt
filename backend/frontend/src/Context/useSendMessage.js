import {React,useState} from 'react'
import useConversation from '../components/zustand/useConversation.js';
import axios from "axios"
function useSendMessage(){
    const [loading, setLoading]=useState(false);
    const {messages,setMessage,selectedConversation}=useConversation()
    const sendMessages=async(message)=>{
        setLoading(true)
       
       {
        try {
            const res=await axios.post(`/api/message/send/${selectedConversation._id}`,
                {message}
            );
        setMessage([...messages,res.data])
        setLoading(false)                
        } catch (error) {
            console.log("errror in send messages",error);
            setLoading(false);
        }
       }
    }
    
  return{loading,sendMessages}
}

export default useSendMessage
