const {updateUser,deleteUser,getSingleUser,getAllUser,getSingleUserbyUsername,getSingleUserbyEmail} = require("../controllers/user.js")


const express = require("express")
const router = express.Router()



router.put("/updateUser/:id",updateUser)
router.delete("/deleteUser/:id",deleteUser)
router.get("/getAllUser/:number",getAllUser)
router.get("/getSingleUser/:id",getSingleUser)
router.get("/getSingleUserbyEmail/:email",getSingleUserbyEmail)
router.get("/getSingleUserbyUsername/:username",getSingleUserbyUsername)

module.exports=router