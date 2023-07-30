const Posts = require("../models/postsModel.js");

const createPost = async (req, res, next) => {
  try {
    const post = await Posts.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Post Oluşturulamadı" });
  }
};

//update fonksiyonunu yazmadım

const deletePost = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Posts.findByIdAndDelete(id);
    res.status(200).json({ message: "Post Silindi" });
  } catch (error) {
    res.status(500).json({ message: "Post Silinmedi" });
  }
};

const getAllPosts = async (req, res, next) => {
  const{number}=req.params // -1 olursa en yeniden eskiye 1 olursa eskiden yeniye
  
  try {
    const posts = await Posts.find().sort({ createdAt:number|| -1  }); // +1 de olabilir
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Postlar Bulunamadı" });
  }
};

const getSinglePost = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Posts.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Post Bulunamadı" });
  }
};

const getPostbyUserId = async (req, res, next) => {
  const { user_id } = req.params;
  const{number}=req.params // -1 olursa en yeniden eskiye 1 olursa eskiden yeniye

  try {
    const posts = await Posts.find({ user_id }).sort({ createdAt:number|| -1  }); // +1 de olabilir;
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Post Bulunamadı" });
  }
};

const getPostByUserIdWhereStatus = async (req, res, next) => {
  const { user_id } = req.params;
  const { status } = req.query;
  const{number}=req.params // -1 olursa en yeniden eskiye 1 olursa eskiden yeniye

  try {
    const posts = await Posts.find({ user_id: user_id, status: status }).sort({ createdAt:number|| -1  }); // +1 de olabilir;

    if (posts.length === 0) {
      return res
        .status(404)
        .json({ message: "Belirtilen durumda gönderi bulunamadı" });
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Bir hata oluştu" });
  }
};

module.exports = { createPost,deletePost,getAllPosts,getPostByUserIdWhereStatus,getPostbyUserId,getSinglePost,}