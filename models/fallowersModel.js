const mongoose = require("mongoose")


const fallowersSchema = new mongoose.Schema({

user_id:{
    type:String,
    required:true,
}

})


module.exports=mongoose.model("Fallowers", fallowersSchema)