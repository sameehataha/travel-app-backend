const express = require('express')
const mongoose = require('mongoose')
const connectDB = require("./config/dbconfig")
const app = express()
const hotelRouter = require("./routes/hotel-route")
const categoryRouter = require("./routes/category-route")
const authRouter = require("./routes/auth-router")
const wishlistRouter = require("./routes/wishlist-router")
const hotelDataAddedToDBRouter = require("./routes/dataimport-router")
const categoryDataAddedToDBRouter = require("./routes/categoryimport-route")
const singleHotelRouter = require("./routes/singlehotel-route")
const PORT = 3500
app.use(express.json())
connectDB()
app.get("/",(req,res) => {
    res.send("hello")
})
//its starts checking from here
app.use("/api/hoteldata",hotelDataAddedToDBRouter)
app.use("/api/categorydata",categoryDataAddedToDBRouter)
app.use("/api/hotels", hotelRouter)
app.use("/api/category",categoryRouter)
app.use("/api/hotels",singleHotelRouter)
app.use("/api/auth",authRouter)
app.use("/api/wishlist", wishlistRouter)


mongoose.connection.once("open",() => {
    console.log("connected to db")
    app.listen(process.env.PORT || PORT, () => {
    console.log("server is running")
})
})
