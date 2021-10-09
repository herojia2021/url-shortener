const express = require("express")
const router = express.Router()
const env = require("../../config/env.js")
const genShortCode = require("../../utility/genShortCode.js")

router.get("/:code", (req, res) => {
  const code = req.params.code
  res.render("success", { env, code })
})
module.exports = router
