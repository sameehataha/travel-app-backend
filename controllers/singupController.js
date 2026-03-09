const CryptoJS = require('crypto-js')
const User = require("../model/user-model")
const existing = await User.findOne({ $or: [{ email: req.body.email }, { number: req.body.number }] })
if (existing) return res.status(409).json({ message: "User already exists" })
const singupHandler = async(req,res) => {    
          try{
            const userObject = {
                username: req.body.username,
                number: req.body.number,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
            }
            const newUser = new User(userObject)
            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
          }catch(err) {
        console.error("Signup error:", err); 
        res.status(500).json({ 
            message: "error creating new user",
            error: err.message 
        })
    }
        }
module.exports = singupHandler