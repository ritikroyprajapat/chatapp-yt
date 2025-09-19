// import React, { useEffect, useState } from 'react'
// import useConversation from '../components/zustand/useConversation';
// import axios from "axios";
// const useGetMessage=()=> {
//     const [loading, setLoading]=useState(false);
//     const {messages,setMessage,selectedConversation}=useConversation()
//     useEffect(()=>{
//         const getMessages=async()=>{
//             setLoading(true)
//            if(selectedConversation && selectedConversation._id)
//            {
//             try {
//                 const res=await axios.get(`/api/message/get/${selectedConversation._id}`)
//             setMessage(res.data)
//             setLoading(false)                
//             } catch (error) {
//                 console.log("errror in getting message",error);
//                 setLoading(false);
//             }
//            }
//         }
//         getMessages();
//     },[selectedConversation,setMessage])
//   return{loading,messages}
// }
//  export default useGetMessage;



import { useEffect, useState } from 'react'
import useConversation from '../components/zustand/useConversation';
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(`/api/message/get/${selectedConversation._id}`);
          setMessage(res.data); // ✅ initial overwrite only once
          setLoading(false);
        } catch (error) {
          console.log("error in getting message", error);
          setLoading(false);
        }
      }
    };
    getMessages();
  }, [selectedConversation]); // ❌ messages or setMessage ko depend me mat lo

  return { loading, messages };
};

export default useGetMessage;
