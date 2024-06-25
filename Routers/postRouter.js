import express from "express"
import { verifyToken } from "../Middleware/verifyToken.js"
import { commentPost, createPost, deletePost, getAllPost, getPostById, getUserPosts, likePost, sharePost, updatePost } from "../Controllers/postController.js"

const router= express.Router()

router.post('/createpost',verifyToken,createPost)
router.get('/getposts',getAllPost)
router.put('/updatepost/:id',verifyToken,updatePost)
router.delete('/deletepost/:id',verifyToken,deletePost)
router.get('/userposts',verifyToken,getUserPosts)
router.get('/getpost/:id',verifyToken,getPostById);
router.post("/sharepost/:id",verifyToken,sharePost);
router.post("/comment/:id",verifyToken,commentPost);
router.post("/likepost/:id",verifyToken,likePost)
export default router