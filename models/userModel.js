const mongoose = require("mongoose")
const { required } = require("nodemon/lib/config")

const userSchema =new mongoose.Schema({
firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true,
    unique:true
},
email:{
    type: String,
    required:true,
    unique:true
},
password:{
    type : String ,
    required:true
},
phone:{
    type:String,
},
rating:{
    type:Number,
    default:0
},
profile_photo:{
    type:String,

},
content:{
type:String,

},
is_private:{
    type:Boolean,
    default:false
},
is_verified:{
    type:Boolean,
    default:false
},





},{timestamps:true})

module.exports= mongoose.model("User",userSchema)