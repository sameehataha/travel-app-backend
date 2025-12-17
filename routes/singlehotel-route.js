const express = require("express")
const router = express.Router()
const singlehotelHandler = require("../controllers/singleHotelController")
router.route("/:id")      //localhost:3500/api/hotels/3423432434342343243 
    .get(singlehotelHandler)
module.exports = router