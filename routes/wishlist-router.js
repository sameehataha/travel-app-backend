const express  = require('express')
const verifyUser  = require("../middleware/verfiyUser")
const wishlistController = require("../controllers/wishlistController")
const  { createWishListHandler, deleteWishlistHandler, getWishListHandler} = wishlistController
const router = express.Router()
router.route("/")
    .post(verifyUser,createWishListHandler) 
router.route("/:id")
   .delete(verifyUser,deleteWishlistHandler)
router.route("/")
    .get(verifyUser,getWishListHandler)
module.exports = router