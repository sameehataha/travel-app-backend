const jwt = require("jsonwebtoken")

const verifyUser = (req, res, next) => {
    // FIX: was "if(token)if(!token)" which is contradictory and broken
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) return res.status(401).json({ message: "No token provided" })

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" })
        req.user = user
        next()
    })
}

module.exports = verifyUser