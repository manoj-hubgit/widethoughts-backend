import mongoose from "mongoose";
const postSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    title:{
        type:String,
        require:true,
        unique:true
    },
    image:{
        type:String,
        default:"https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1718236800&semt=sph"
    },
    category:{
        type:String,
        default:"uncategorized"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

const Post =mongoose.model("Post",postSchema);
export default Post;