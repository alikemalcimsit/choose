const mongoose = require("mongoose")

const mongoDb = ()=>{
mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser : true,
useUnifiedTopology:true,

}).then(()=>{
    console.log("mongo db bağlantsı tamamlandı ")

}).catch((err)=>{

    console.log(err , "database bağlantısı sağlanamadı ")
})


}

module.exports= mongoDb