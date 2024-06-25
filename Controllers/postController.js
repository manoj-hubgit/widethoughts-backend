import Posts from "../Models/postModel.js";
import { errorHandler } from "../Utils/Error.js";

export const createPost = async (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "All the fileds are required"));
  }
  const { title, content, image, category } = req.body;
  const newPost = new Posts({
    title,
    content,
    image,
    category,
    userId: req.user._id,
    likes: [],
  });
  try {
    const savedPost = await newPost.save();
    res
      .status(200)
      .json({ message: "post created successfully", result: savedPost });
  } catch (error) {
    next(error);
  }
};

export const getAllPost = async (req, res, next) => {
  try {
    const posts = await Posts.find()
      .populate("userId", "username profilePicture")
      .populate("comments.postedBy", "username profilePicture");
    res.status(200).json(posts);
  } catch (error) {
    next(error); //search need to b written here
  }
};

//New
export const getUserPosts = async (req, res, next) => {
  try {
    const posts = await Posts.find({ userId: req.user._id }); //("userId","username profilePicture");
    res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, image, category } = req.body;
  try {
    const post = await Posts.findById(id);
    if (post.userId.toString() !== req.user._id.toString()) {
      return next(errorHandler(400, "You are not allowed to update this Post"));
    }
    post.title = title;
    post.content = content;
    post.image = image;
    post.category = category;
    const updatePost = await post.save();
    res.status(200).json(updatePost);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    if (!post) {
      return next(errorHandler(400, "Post not found"));
    }
    if (post.userId.toString() !== req.user._id.toString()) {
      return next(errorHandler(400, "You are not allowed to Delete this Post"));
    }
    await post.deleteOne();
    res.status(200).json("post Deleted Successfully");
  } catch (error) {
    console.log("Error deleting Post");
    next(error);
  }
};
export const getPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id)
      .populate("userId", "username profilePicture")
      .populate("comments.postedBy", "username profilePicture");
    if (!post) {
      return next(errorHandler(400, "post not Found"));
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const likePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const userId = req.user._id;
    const post = await Posts.findById(postId);
    if (!post) {
      return next(errorHandler(400, "Post not found"));
    }
    const userIndex = post.likes.findIndex(
      (id) => id.toString() === userId.toString()
    );
    if (userIndex === -1) {
      post.likes.push(userId);
    } else {
      post.likes.splice(userIndex, 1);
    }
    await post.save();
    res.status(200).json(post);
    //   post.likes +=1;
  } catch (error) {
    next(error);
  }
};

export const commentPost = async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return next(errorHandler(400, "Post not found"));
    }
    const comment = {
      text: req.body.comment,
      postedBy: req.user._id,
      createdAt: new Date(),
    };
    post.comments.push(comment);
    await post.save();
    await post.populate("comments.postedBy", "username profilePicture");
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const sharePost = async (req, res, next) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post) {
      return next(errorHandler(400, "Post not found"));
    }
    post.share += 1;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
