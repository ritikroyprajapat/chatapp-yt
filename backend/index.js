import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import messageRoute from "./routes/message.route.js"
import userRoute from "./routes/user.route.js";
import  path  from 'path';
import cors from "cors"
import cookieParser from 'cookie-parser';
import { app,server } from './SocketIo/server.js';

dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT=process.env.PORT||3003;
const URI=process.env.MONGODB_URI

try {
    mongoose.connect(URI)
    console.log("connected mongodb")
} catch (error) {
    console.log(error)
}

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);


//---------code for deployment-----------

if(process.env.NODE_ENV==="production"){

  const dirpath= path.resolve();

  app.use(express.static("frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirpath,"frontend/dist","index.html"))
  })

}






server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

