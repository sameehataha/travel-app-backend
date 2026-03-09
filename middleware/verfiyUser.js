const jwt = require("jsonwebtoken")
const verifyUser = (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1] 
    if(token)if(!token) return res.status(401).json({ message: "No token provided" })
    else{
       jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if(err) return res.status(403).json({ message: "invalid token" })
    req.user = user
    next()
})
    }
}
module.exports = verifyUser
