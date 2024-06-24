import Post from "../Models/postModel.js";
import { errorHandler } from "../Utils/Error.js";


export const createPost = async(req,res,next)=>{
//    if(!req.user.isAdmin){
//     return next(errorHandler(403,"You are not allowed to create a post"))
//    } 
   if(!req.body.title || !req.body.content){
    return next(errorHandler(400,'All the fileds are required'));
   }
   const {title,content,image,category}=req.body
   const newPost= new Post({title,content,image,category,userId:req.user._id});
   try {
    const savedPost=await newPost.save();
    res.status(200).json({message:'post created successfully',result:savedPost})
   } catch (error) {
    next(error)
   }
}

export const getAllPost = async(req,res,next)=>{
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        next(error)      //search need to b written here
    }
}


//New
export const updatePost = async(req,res,next)=>{
    const {id}=req.params;
    const{title,content,image,category}=req.body;
    try {
        
    } catch (error) {
        
    }
}