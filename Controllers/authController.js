import User from "../Models/userModel.js";
import { errorHandler } from "../Utils/Error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export const registerUser=async(req,res,next)=>{  //next is used for error handling
    const {username,email,password}=req.body;
    if(!username || !email || !password || username==="" || email==="" || password=== ""){
        return next(errorHandler(400,'All The Fields Are Requred'))
    }
    const hashpassword=bcryptjs.hashSync(password,10)
    const newUser = new User({username,email,password:hashpassword})
    try {
        await newUser.save()
        res.status(200).json({message:"User Registered Successfully",result:newUser})
    } catch (error) {
        next(error);
    }
}

export const loginUser=async(req,res,next)=>{
     try {
        const {email,password}=req.body;
        const userDetail=await User.findOne({email})
        const passwordMatch=await bcryptjs.compareSync(password,userDetail.password)
        
            if (!passwordMatch || !userDetail) {
                return res.status(400).json({ message: "Invalid Credentials" });
              }
    const token=jwt.sign({_id:userDetail._id,isAdmin:userDetail.isAdmin},process.env.JWT_SECRET_KEY,{expiresIn:"1h"})
    const {password: passkey, ...rest}=userDetail._doc;
    userDetail.token=token;
    res.status(200).json({
        message: "Logged in successfully",
        token: token,rest,
        username: userDetail.username,
        email:userDetail.email,
        profilePicture: userDetail.profilePicture
       });
    await userDetail.save()
     } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error in login" });
     }
}

export const google = async (req, res, next) => {
    const { name, email, profilePic } = req.body;
    try {
        let user = await User.findOne({ email });
        
        if (user) { // login logic for existing user
            const token = jwt.sign({ _id: user._id,isAdmin:user.isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
            user.token = token;
            await user.save();
            const { password: passkey, ...rest } = user._doc;
            return res.status(200).json({ message: "Logged in successfully",rest,token: token,
                email:user.email,
                password:user.password,
                username: user.username,
                profilePicture: user.profilePicture });
        }

        // create a new user
        const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        const hashPassword = bcryptjs.hashSync(generatePassword, 10);
        const newUser = new User({
            username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
            email,
            password: hashPassword,
            profilePicture: profilePic
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id,isAdmin:newUser.isAdmin}, process.env.JWT_SECRET_KEY);
        newUser.token = token;
        await newUser.save();
        const {password:passkey, ...rest}= newUser._doc;
        res.status(200).json({ message: "Logged in successfully", token: token,rest,
            username: newUser.username,
            profilePicture: newUser.profilePicture 
        });
    } catch (error) {
        next(error);
    }
}; 