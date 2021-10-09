const express = require("express")
const router = express.Router()

const home = require("./modules/home")
const success = require("./modules/success")

router.use("/success", success) // must before "/"
router.use("/", home)

module.exports = router
