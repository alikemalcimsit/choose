const User = require("../models/userModel.js")


const updateUser=async(req,res,next)=>{

    const {id}=req.params
    try {
        const user =await User.findByIdAndUpdate(id,{$set:req.body}, {new:true})
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:"Kullanıcı Güncellenemedi"})
    }
}


const deleteUser=async(req,res,next)=>{
const {id} = req.params
try {
    await User.findByIdAndDelete(id)
    res.status(200).json({message:"Kullanıcı Silindi"})

} catch (error) {
    res.status(500).json({message:"Kullanıcı Silinemedi"})

}

}



const getAllUser = async(req,res,next)=>{
    const{number}=req.params // -1 olursa en yeniden eskiye 1 olursa eskiden yeniye

try {
    
    const users = await User.find().sort({ createdAt:number|| -1  }); // +1 de olabilir
    res.status(200).json(users)
} catch (error) {
    res.status(500).json({message:"Kullanıcılar Bulunamadı"})

}

}


const getSingleUser=async(req,res,next)=>{
const {id}=req.params


    try {
    const user = await User.findById(id)
    res.status(200).json(user)

} catch (error) {
    res.status(500).json({message:"Kullanıcı Bulunamadı"})

}

}

const getSingleUserbyEmail=async(req,res,next)=>{
    const {email}=req.params
    
    
        try {
        const user = await User.findOne({email:email})
        res.status(200).json(user)
    
    } catch (error) {
        res.status(500).json({message:"Kullanıcı Bulunamadı"})
    
    }
    
    }


    const getSingleUserbyUsername=async(req,res,next)=>{
        const {username}=req.params
        
        
            try {
            const user = await User.findOne({username:username})
            res.status(200).json(user)
        
        } catch (error) {
            res.status(500).json({message:"Kullanıcı Bulunamadı"})
        
        }
        
        }
        
    
    
    





module.exports={updateUser,deleteUser,getAllUser,getSingleUser,getSingleUserbyEmail,getSingleUserbyUsername}