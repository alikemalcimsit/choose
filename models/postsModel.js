const mongoose = require("mongoose")



const postSchema= new mongoose.Schema({

user_id:{
    type:String,
    required : true
},
content:{
    type: String,
    required :true
},
rating:{
    type: Number,
    default: 0,
    required:true,
},
status:{
    type: Boolean,
    default: false,
},
is_private:{
    type:Boolean,
    default:false,

},




},{timestamps:true})


module.exports = mongoose.model("Posts", postSchema)