const {register,login} = require("../controllers/auth.js")


const express = require("express")


const router = express.Router()

router.post("/register",register)
router.post('/login',login)

module.exports = router