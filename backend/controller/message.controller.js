import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId,io } from "../SocketIo/server.js";


export const sendMessage=async(req,res)=>{
    // console.log("message sent", req.params.id,req.body.message);
    try {

        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;
        let conversation=await Conversation.findOne({
            members:{$all:[senderId,receiverId]},
        })
        if(!conversation)
        {
            conversation=await Conversation.create({
                members:[senderId,receiverId],
            });
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            message
        })
        if(newMessage)
        {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId= getReceiverSocketId(receiverId)
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }
        res.status(201).json({
            messsage:"message sent succesfully",
            newMessage
        })       

    } catch (error) {
        console.log("error in sendMessage",error)
        res.status()
    }
};


export const getMessage=async(req,res)=>{
    try {
        
     const {id: chatUser}=req.params;
     const senderId=req.user._id;
     let conversation=await Conversation.findOne({members:{$all: [senderId,chatUser]},
     }).populate("messages");
     if(!conversation){
      return res.status(201).json([]);
     }
     const messages=conversation.messages;
     return res.status(201).json(messages);

    } catch (error) {
        console.log("error in getMessage",error);
        res.status(500).json({error:"internal server error"});
    }
}