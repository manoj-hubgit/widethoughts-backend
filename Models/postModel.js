import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1718236800&semt=sph",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    share: {
      type: Number,
      default: 0,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);
export default Posts;
