import express from "express"
import { verifyToken } from "../Middleware/verifyToken.js"
import { createPost, getAllPost } from "../Controllers/postController.js"

const router= express.Router()

router.post('/createpost',verifyToken,createPost)
router.get('/getposts',getAllPost)

export default router