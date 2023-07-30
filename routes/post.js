const { createPost,deletePost,getAllPosts,getPostByUserIdWhereStatus,getPostbyUserId,getSinglePost,} = require("../controllers/post.js")
const express = require("express")

const router = express.Router()


router.post("/createPost",createPost)
router.delete("/deletePost/:id",deletePost)
router.get("/getAllPosts/:number",getAllPosts)
router.get("/getPostByUserIdWhereStatus/:user_id/:number",getPostByUserIdWhereStatus)
router.get("/getPostbyUserId/:user_id/:number",getPostbyUserId)
router.get("/getSinglePost/:id",getSinglePost)


module.exports=router