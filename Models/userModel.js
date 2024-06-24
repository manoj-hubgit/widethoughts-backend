import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
    },
    isAdmin:{
        type:Boolean,
        default:false   
    },
},{timestamps:true}  //helps to get time when the user created
);

const User=mongoose.model("User",userSchema)

export default User