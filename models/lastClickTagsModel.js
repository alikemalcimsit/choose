const mongoose = require("mongoose")

const lastClickTagsSchema = new mongoose.Schema({

    tag: {
        type:String,
        required : true,
        default:[]
    },
    user_id:{
        type:String,
        required:true,
    },
    count:{
        type:Number,
    
    }



})

module.exports = mongoose.model("lastClickTags", lastClickTagsSchema)