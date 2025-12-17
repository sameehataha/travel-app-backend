const express = require('express')

const singupHandler = require("../controllers/singupController")
const loginHandler = require("../controllers/loginController")
const router = express.Router()

router.route("/register")    //localhost:3500/api/auth/register   -  //localhost:3500/api/auth/login
        .post(singupHandler) 
router.route("/login") 
    .post(loginHandler)          
module.exports = router