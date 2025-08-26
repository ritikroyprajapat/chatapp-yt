import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/generatetoken.js";

export const signup= async(req,res)=>{
    const{fullname,email,password,confirmpassword}=req.body;
    try {
        
        if(password!=confirmpassword)
            {
                return res.status(400).json({error:"password do not match"});
            }
            const user=await User.findOne({email})
            if(user)
            {
                return res.status(400).json({error:"user already regidterd"})
            }

            const hashpassword=await bcrypt.hash(password,10)
            
            const newUser= await new User({
                fullname,
                email,
                password: hashpassword
            })
           await newUser.save();
           if(newUser)
           {
            createTokenAndSaveCookie(newUser._id,res)
            res.status(201).json({message:"user created successfully",user:{
                _id:newUser.id,
                fullname:newUser.fullname,
                email:newUser.email,
            }})

           }
          

    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal server error in signup"})
    }
    }
    



  
    export const login = async (req, res) => {
        const { email, password } = req.body;
    
        try {
            // Find the user by email
            const user = await User.findOne({ email });
    
            // Check if user is found
            if (!user) {
                return res.status(400).json({ error: "Invalid email or password" });
            }
    
            // Compare the provided password with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);
    
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid email or password" });
            }
    
            // Create token and set it in the cookie
            createTokenAndSaveCookie(user.id, res);
    
            // Respond with user details on successful login
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    _id: user.id,
                    fullname: user.fullname,
                    email: user.email,
                }
            });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: "Internal server error in login" });
        }
    };
    



export const logout=async(req,res)=>{
    try {
        res.clearCookie("jwt")
        res.status(201).json({message:"user logout successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internam server error in logout"});
    }
}


export const allUsers=async (req,res)=>{
    try {
        const loggedInUser=req.user._id;
    const filteredUsers = await User.find({_id:{$ne:loggedInUser},}).select("-password")
    res.status(201).json(filteredUsers);
   
    // const allUsers=await User.find().select("-password");
    //  res.status(201).json(allUsers);
    } catch (error) {
        console.log("error in allUsers Controller:"+error)
    }
};