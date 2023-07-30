const mongoose = require("mongoose")


const tagsSchema = new mongoose.Schema({

    tag:{
        type:String,
        require:true,
    },




},{timestamps:true})

module.exports = mongoose.model("Tags",tagsSchema)