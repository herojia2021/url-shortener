const express = require("express")
const router = express.Router()
const env = require("../../config/env.js")

// 成功頁面
router.get("/:code", (req, res) => {
  const code = req.params.code
  res.render("success", { env, code })
})
module.exports = router
