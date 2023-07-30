const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoDb = require("./config/mongoDb")
const userRoutes = require("./routes/user.js")
const authRoutes = require("./routes/auth.js")
const postRoutes = require("./routes/post.js")
dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))
app.use(cookieParser())


app.use("/",userRoutes)
app.use("/",authRoutes)
app.use("/",postRoutes)


mongoDb()
const PORT =process.env.PORT  || 5000


app.listen(PORT,()=>{

    console.log("server çalışmaya başladı port =",PORT)
})
