import { errorHandler } from "../Utils/Error.js"
import User from '../Models/userModel.js'
import bcryptjs from "bcryptjs"
import Posts from "../Models/postModel.js"
export const updateUser = async(req,res,next)=>{
    const {id}=req.params;
if(req.user._id != id){
    return next(errorHandler(400,"Unauthorized access to update the user"))
}
if(req.body.password){
    if(req.body.password.length < 6){
        return next(errorHandler(400,"Password must be alteast 6 characters"))
    }
    req.body.password = bcryptjs.hashSync(req.body.password,10)
}

if(req.body.username){
    if(req.body.username.length < 7 || req.body.username.length > 30){
        return next(errorHandler(400,"Username must be between 7 and 30 characters"))
    }

if(req.body.username.includes(' ')){
    return next(errorHandler(400,"Username must not contain spaces"))
}
if(req.body.username !== req.body.username.toLowerCase()){
    return next(errorHandler(400,"Username must be in lowercases"))
}
if(!req.body.username.match(/^[A-Za-z0-9 ]+$/)){
    return next(errorHandler(400,"Username can only contain letters and numbers"))
}
}
try {
    const updateUser = await User.findByIdAndUpdate(req.params.id,{
     $set:{
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        profilePicture:req.body.profilePicture
     } ,  
    },{
      new:true     //to know it is updated or not
    })
    const {password,...rest}=updateUser._doc
    res.status(200).json(rest);
} catch (error) {
    next(error)
}
}

const deleteUserData = async (userId) =>{
    await Posts.deleteMany({userId : userId}); //for deleting post
    await Posts.updateMany(
        {'comments.postedBy' : userId },{$pull : { comments:{ postedBy : userId}}}
    );
await Posts.updateMany({ likes: userId }, { $pull: {likes:userId}}
);
};

export const deleteUser=async (req,res,next)=>{
    if(req.user._id !== req.params.id){
        return next(errorHandler(400,"You are not allowed to delete this account"))
    }
    try {
        await deleteUserData(req.params.id);  //when deleting the user account the data will also get deleted
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted Successfully")
    } catch (error) {
        next(error)
    }
}